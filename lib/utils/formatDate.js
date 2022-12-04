import siteMetadata from '@/data/siteMetadata'

const formatDate = (date) => {
  const options = {
    year: 'numeric',
    month: 'long',
  }
  const now = new Date(date).toLocaleDateString(siteMetadata.locale, options)

  return now
}

export default formatDate
