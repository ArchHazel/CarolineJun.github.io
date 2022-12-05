import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <p className="mr-3 text-sm font-medium uppercase text-primary-500 ">
      {text.split(' ').join('-')}
    </p>
  )
}

export default Tag
