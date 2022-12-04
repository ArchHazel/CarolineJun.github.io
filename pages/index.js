import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getFileBySlug } from '@/lib/mdx'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import NewsletterForm from '@/components/NewsletterForm'
import AuthorLayout from '@/layouts/AuthorLayout'
import Link from '@/components/Link'
import { RoughNotation } from 'react-rough-notation'
const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  return { props: { authorDetails } }
}

export default function Home({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails
  const source = (
    <div>
      <p>
        I am a Research Assistant at the{' '}
        <Link
          className="whitespace-nowrap text-inherit no-underline"
          href="https://facdent.hku.hk"
          target="_blank"
        >
          <RoughNotation
            type="underline"
            show={true}
            color="#13b57b"
            animationDelay={300}
            animationDuration={1500}
          >
            Faculty of Dentistry
          </RoughNotation>
        </Link>{' '}
        in the{' '}
        <Link
          className="whitespace-nowrap text-inherit no-underline"
          href="https://www.hku.hk"
          target="_blank"
        >
          <RoughNotation
            type="underline"
            show={true}
            color="#13b57b"
            animationDelay={1300}
            animationDuration={1500}
          >
            University of Hong Kong
          </RoughNotation>
        </Link>
        . Before joining HKU, I received my B. Eng. degree from the{' '}
        <Link
          className="whitespace-nowrap text-inherit no-underline"
          href="https://ins.seu.edu.cn/yk_english/main.htm"
          target="_blank"
        >
          <RoughNotation
            type="underline"
            show={true}
            color="#13b57b"
            animationDelay={3300}
            animationDuration={1500}
          >
            School of Instrument Science and Engineering
          </RoughNotation>
        </Link>
        ,{' '}
        <Link
          className="whitespace-nowrap text-inherit no-underline"
          href="https://www.seu.edu.cn/english/main.htm"
          target="_blank"
        >
          <RoughNotation
            type="underline"
            show={true}
            color="#13b57b"
            animationDelay={4300}
            animationDuration={1500}
          >
            Southeast University
          </RoughNotation>
        </Link>
        .
      </p>
      <p>
        I believe{' '}
        <RoughNotation
          className="whitespace-nowrap"
          type="underline"
          show={true}
          color="#13b57b"
          animationDelay={6000}
          animationDuration={1500}
        >
          enthusiasm and responsibility
        </RoughNotation>{' '}
        are the cure for fear and inertia.
      </p>
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
