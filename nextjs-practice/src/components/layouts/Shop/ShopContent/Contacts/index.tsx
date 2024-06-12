import { memo } from 'react'

//mui
import Grid from '@mui/material/Grid'

//components
// import ProductCard from '@/components/ProductCard'
import ContactItem from '@/components/ContactItem'

//helper
import useScreenWidth from '@/hooks/useScreenWidth'
import { useContactsQuery } from '@/hooks/useContactsQuery'
import InfiniteScroll from '@/components/InfiniteScroll'
import PageNotFound from '@/components/PageNotFound'

export type ContactQuery = 'following' | 'followers'

export interface Props {
  tabSelectedText: string
}

const Contacts = ({ tabSelectedText }: Props) => {
  const { matchedBreakpoint } = useScreenWidth({ down: 'sm' })

  const contactsQueryParams = {
    contactStatus: tabSelectedText
  }

  const {
    data: response,
    isLoading,
    isError
  } = useContactsQuery({ keys: ['contacts', tabSelectedText], params: contactsQueryParams })

  const contacts = response?.data

  if (!contacts) return <PageNotFound isBrowserError headerContent='Opp!' body='No item found' />

  return (
    <InfiniteScroll isLoading={isLoading} isError={isError} isEmptyItem={contacts.length === 0} isHiddenLoadMore>
      <Grid container={!matchedBreakpoint}>
        {contacts.map((contactItem) => {
          return (
            <Grid key={contactItem.id} xs={12} item>
              <ContactItem user={contactItem} />
            </Grid>
          )
        })}
      </Grid>
    </InfiniteScroll>
  )
}

export default memo(Contacts)
