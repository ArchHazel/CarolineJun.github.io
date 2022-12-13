import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getFileBySlug } from '@/lib/mdx'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import NewsletterForm from '@/components/NewsletterForm'
import AuthorLayout from '@/layouts/AuthorLayout'
import Link from '@/components/Link'
import { RoughNotation } from 'react-rough-notation'
import publicationsData from '@/data/publicationsData'
import formatDate from '@/lib/utils/formatDate'
import Tag from '@/components/Tag'
const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  const pubs = publicationsData.filter((x) => x.show == true)
  return { props: { authorDetails, pubs } }
}

export default function Home({ authorDetails, pubs }) {
  const { mdxSource, frontMatter } = authorDetails
  const source = (
    <div>
      <p>
        I am a Research Assistant at the{' '}
        <Link className=" text-inherit no-underline" href="https://facdent.hku.hk" target="_blank">
          Faculty of Dentistry
        </Link>{' '}
        in the{' '}
        <Link className=" text-inherit no-underline" href="https://www.hku.hk" target="_blank">
          University of Hong Kong
        </Link>{' '}
        supervised by postdoctoral fellow{' '}
        <Link
          target="_blank"
          className="whitespace-nowrap text-inherit no-underline"
          href="https://cong-yi.github.io/"
        >
          Congyi Zhang
        </Link>{' '}
        and Prof.{' '}
        <Link
          target="_blank"
          className="whitespace-nowrap text-inherit no-underline"
          href="https://ins.seu.edu.cn/yk_english/2020/0219/c27542a317780/page.htm"
        >
          Lifeng Zhu
        </Link>
        . Before joining HKU, I received my B. Eng. degree from the{' '}
        <Link
          className=" text-inherit no-underline"
          href="https://ins.seu.edu.cn/yk_english/main.htm"
          target="_blank"
        >
          School of Instrument Science and Engineering
        </Link>
        ,{' '}
        <Link
          className="text-inherit no-underline"
          href="https://www.seu.edu.cn/english/main.htm"
          target="_blank"
        >
          Southeast University
        </Link>
        .
      </p>
      <p>
        Research interests: <span className="font-medium">Computer Graphics (CG)</span> and{' '}
        <span className="font-medium">Human Computer Interaction (HCI)</span>.
      </p>
      <div>
        <p className="mb-2 mt-10 text-2xl font-bold">Selected publications</p>
        {pubs.map((pub, idx) => {
          const { date, title, abstract, tags, links, imgSrc } = pub
          return (
            <div
              key={idx}
              className="space-y-2 xl:grid xl:grid-cols-3 xl:items-baseline xl:space-y-0"
            >
              <div className="xl:col-span-3">
                <div>
                  <h3 className="my-0 text-xl font-medium leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                    {title}
                  </h3>
                  <div className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date)}</time>
                  </div>
                </div>
                {/* <div className="prose max-w-none text-gray-500 dark:text-gray-400">{abstract}</div> */}
                <div className="text-gray-500 underline dark:text-gray-400">
                  {links.map(({ name, link }, idx) => (
                    <Link key={idx} href={link} className="pr-6 text-gray-900 dark:text-gray-100">
                      {name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="mono-type divide-y divide-gray-200 dark:divide-gray-700">
        {/* <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
        /> */}
        <AuthorLayout frontMatter={frontMatter}>{source}</AuthorLayout>
      </div>
      {/*siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )*/}
    </>
  )
}
