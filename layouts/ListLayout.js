import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'
import Image from '@/components/Image'

export default function ListLayout({ pubs, title, initialDisplayPubs = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredPubs = pubs.filter((pub) => {
    const searchContent = pub.title + pub.abstract + pub.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPubs exist, display it if no searchValue is specified
  const displayPubs =
    initialDisplayPubs.length > 0 && !searchValue ? initialDisplayPubs : filteredPubs

  return (
    <>
      <div className="mono-type divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          <div className="relative max-w-lg">
            <input
              aria-label="Search publications"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search publications"
              className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <ul>
          {!filteredPubs.length && 'No publication found.'}
          {displayPubs.map((pub, idx) => {
            const { date, title, abstract, tags, href, imgSrc } = pub
            return (
              <li key={idx} className="py-4">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date)}</time>
                      {/* <Image
                        className="object-cover object-center md:h-36 lg:h-48"
                        alt={title}
                        src={imgSrc}
                        width={544}
                        height={306}
                      /> */}
                    </dd>
                  </dl>
                  <div className="space-y-3 xl:col-span-3">
                    <div>
                      <h3 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link href={href} className="text-gray-900 dark:text-gray-100">
                          {title}
                        </Link>
                      </h3>
                      <div className="flex flex-wrap">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      {abstract}
                    </div>
                    <div className="text-gray-500 underline dark:text-gray-400">
                      <Link href={href} className="pr-6 text-gray-900 dark:text-gray-100">
                        IEEE
                      </Link>
                      {/* <Link href={href} className="pr-6 text-gray-900 dark:text-gray-100">
                        IEEE
                      </Link> */}
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
