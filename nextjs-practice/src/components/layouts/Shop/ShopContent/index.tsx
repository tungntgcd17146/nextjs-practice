// import { Suspense, lazy, useCallback, useEffect, useMemo, useState } from 'react'
// import { useProductsQuery } from '@/hooks/useProductsQuery'
// import { Product, ShopSelect, ShopTabs } from '@/types'
// import { selectOption, tabItems } from '@/constants/data'

// //mui
// import { SelectChangeEvent } from '@mui/material/Select'
// import Grid from '@mui/material/Grid'
// import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'

// //components
// import ProductFilter, { FilterValue } from '@/components/ProductFilter'
// import Select from '@/components/Select'
// import Tabs from '@/components/Tabs'
// import Products from '@/pages/Shop/ShopContent/Products'
// import InfiniteScroll from '@/components/InfiniteScroll'
// import Loading from '@/components/Loading'
// import IconButton from '@/components/IconButton'
// import { useTheme } from '@mui/material'

// const Contacts = lazy(() => import('@/pages/Shop/ShopContent/Contacts'))

// const ShopContent = () => {
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
//   //Tab state for init selected default is first item
//   const [tabSelected, setTabSelected] = useState(0)

//   const [products, setProducts] = useState<Product[]>([])
//   const [page, setPage] = useState(1)

//   const [popularitySelect, setPopularitySelect] = useState<string>(ShopSelect.ALL)

//   const [isHiddenLoadMore, setIsHiddenLoadMore] = useState(false)
//   const [productsQueryParam, setProductsQueryParam] = useState<object>({})

//   const theme = useTheme()

//   //query
//   const {
//     data: response,
//     isLoading: isProductsLoading,
//     isError: isProductsError
//   } = useProductsQuery({
//     keys: productsQueryParam,
//     params: productsQueryParam
//   })

//   const totalProducts = useMemo(() => response?.headers['x-total-count'], [response]) as number
//   const productsResponse = useMemo(() => response?.data, [response])
//   const showingProducts = useMemo(() => products.length, [products])

//   //pagination
//   useEffect(() => {
//     setProductsQueryParam({
//       ...productsQueryParam,
//       _page: page,
//       _limit: 6
//     })
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [page])

//   //if showing product is less than total product should show load more
//   useEffect(() => {
//     if (showingProducts === Number(totalProducts)) {
//       setIsHiddenLoadMore(true)
//     } else {
//       setIsHiddenLoadMore(false)
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [products])

//   //set products state when get more data from server
//   useEffect(() => {
//     if (productsResponse) {
//       if (page === 1) {
//         setProducts(productsResponse)
//       } else {
//         setProducts([...products, ...productsResponse])
//       }
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [productsResponse])

//   const tabSelectedText = tabItems[tabSelected].text

//   //update tabItems selected
//   const tabsSelected = useMemo(() => {
//     return tabItems.map((item) => {
//       // eslint-disable-next-line react-hooks/rules-of-hooks
//       return { ...item, isSelected: item.text === tabSelectedText }
//     })
//   }, [tabSelectedText])

//   const handleChangeTab = useCallback((_event: React.SyntheticEvent, newValue: number) => {
//     setTabSelected(newValue)
//   }, [])

//   const handleSelectFilterByPopularity = useCallback(
//     (event: SelectChangeEvent) => {
//       const selectValue = event.target.value
//       setPopularitySelect(selectValue)
//       setPage(1)

//       //not set popularity query param when select all option
//       if (selectValue === ShopSelect.ALL) {
//         setProductsQueryParam({ ...productsQueryParam, popularity: undefined, _page: 1, _limit: 6 })
//       } else {
//         setProductsQueryParam({
//           ...productsQueryParam,
//           popularity: selectValue,
//           _page: 1,
//           _limit: 6
//         })
//       }
//     },
//     [productsQueryParam]
//   )

//   const handleResetFilterModal = useCallback(() => {
//     setPage(1)
//     setProductsQueryParam({
//       popularity: popularitySelect === ShopSelect.ALL ? undefined : popularitySelect,
//       _page: 1,
//       _limit: 6
//     })
//   }, [popularitySelect])

//   const handleSubmitFilterModal = useCallback(
//     (filterData: FilterValue) => {
//       const { minPriceRange, maxPriceRange, rating, sortBy, searchInput, categories } = filterData
//       setPage(1)
//       setProductsQueryParam({
//         ...productsQueryParam,
//         productPrice_gte: minPriceRange,

//         ...(minPriceRange !== maxPriceRange ? { productPrice_lte: maxPriceRange } : {}), //set max price range only if min price range is not equal to max price range

//         productRating_gte: rating,
//         productCategory: categories,
//         q: searchInput, //searching product name
//         _sort: 'createdAt', // Sorting by createdAt property from API
//         _order: sortBy === 'New' ? 'desc' : 'asc',
//         _page: 1,
//         _limit: 6
//       })
//     },
//     [productsQueryParam]
//   )

//   const handleClickLoadMore = useCallback(() => {
//     setPage(page + 1)
//   }, [page])

//   const isProductsTabs = tabSelectedText === ShopTabs.PRODUCTS

//   const filterButtonStyles = useMemo(
//     () => ({
//       marginLeft: '16px',
//       boxShadow: `0 0 0 2px ${theme.palette.text.primary} inset`,
//       borderRadius: '8px',
//       ':hover': {
//         backgroundColor: theme.palette.info.main,
//         color: theme.palette.primary.main,
//         borderColor: theme.palette.text.primary
//       }
//     }),
//     [theme.palette.text.primary, theme.palette.info.main, theme.palette.primary.main]
//   )
//   const filterIcon = useMemo(() => <FilterAltOutlinedIcon />, [])

//   const handleClickFilterButton = useCallback((event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl((prevAnchorEl) => (prevAnchorEl ? null : event.currentTarget))
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])

//   const handleCloseFilterModal = useCallback(() => {
//     setAnchorEl(null)
//   }, [])

//   return (
//     <>
//       <Grid container display='flex' sx={{ marginBottom: '32px' }} justifyContent='space-between'>
//         <Grid sx={{ marginBottom: '16px' }} item xs={12} md={8}>
//           <Tabs tabItems={tabsSelected} onTabsChange={handleChangeTab} />
//         </Grid>

//         {isProductsTabs && (
//           <Grid item display='flex' justifyContent='space-between' alignItems='center' xs={12} md={4}>
//             <Grid item xs={10}>
//               <Select options={selectOption} onChange={handleSelectFilterByPopularity} />
//             </Grid>

//             <Grid display='flex' justifyContent='center' alignItems='center' item xs={2}>
//               <IconButton
//                 aria-label='filter-product-icon-button'
//                 data-testid='ProductFilter_IconButton'
//                 onClick={handleClickFilterButton}
//                 sx={filterButtonStyles}
//                 children={filterIcon}
//               />
//               <ProductFilter
//                 anchorEl={anchorEl}
//                 totalProducts={totalProducts}
//                 showingProducts={showingProducts}
//                 onReset={handleResetFilterModal}
//                 onSubmit={handleSubmitFilterModal}
//                 onCloseModal={handleCloseFilterModal}
//               />
//             </Grid>
//           </Grid>
//         )}
//       </Grid>

//       <Grid item xs={12}>
//         {isProductsTabs ? (
//           <InfiniteScroll
//             isEmptyItem={showingProducts === 0}
//             isError={isProductsError}
//             isLoading={isProductsLoading}
//             onClickLoadMore={handleClickLoadMore}
//             isHiddenLoadMore={isHiddenLoadMore}
//           >
//             <Products products={products} />
//           </InfiniteScroll>
//         ) : (
//           <Suspense fallback={<Loading />}>
//             <Contacts tabSelectedText={tabSelectedText.toLowerCase()} />
//           </Suspense>
//         )}
//       </Grid>
//     </>
//   )
// }

// export default ShopContent
