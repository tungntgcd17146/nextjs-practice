import { memo, useCallback } from 'react'

//mui
import ProductCard from '@/components/ProductCard'
import Grid from '@mui/material/Grid'

//helper
import useScreenWidth from '@/hooks/useScreenWidth'
import { useNavigate } from 'react-router-dom'
import { Product } from '@/types'

export interface Props {
  products: Product[]
}

const Products = ({ products }: Props) => {
  const { matchedBreakpoint } = useScreenWidth({ down: 'sm' })
  const navigate = useNavigate()

  const handleClickViewCard = useCallback(
    (_e: React.SyntheticEvent, id: number) => {
      navigate(`/product/${id}`)
    },
    [navigate]
  )

  return (
    <Grid container={!matchedBreakpoint}>
      {products.map((product) => {
        const { productName, productCategory, productPrice, productRating, productRatingCount, id, popularity } =
          product

        return (
          <Grid key={id} sm={6} lg={4} item>
            <ProductCard
              id={id}
              productName={productName}
              productCategory={productCategory}
              productPrice={productPrice}
              productRating={productRating}
              productRatingCount={productRatingCount}
              popularity={popularity}
              onViewCard={handleClickViewCard}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default memo(Products)
