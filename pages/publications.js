import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSEO } from '@/components/SEO'
import publicationsData from '@/data/publicationsData'

export const PUBS_PER_PAGE = 10

export async function getStaticProps() {
  const pubs = publicationsData
  const initialDisplayPubs = pubs.slice(0, PUBS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(pubs.length / PUBS_PER_PAGE),
  }

  return { props: { initialDisplayPubs, pubs, pagination } }
}

export default function Blog({ pubs, initialDisplayPubs, pagination }) {
  return (
    <>
      <PageSEO
        title={`Publications - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <ListLayout
        pubs={pubs}
        initialDisplayPubs={initialDisplayPubs}
        pagination={pagination}
        title="Publications"
      />
    </>
  )
}
