import { PreviewSuspense } from '@sanity/preview-kit'
import { PreviewWrapper } from 'components/preview/PreviewWrapper'
import {
  getHomePageTitle,
  getPageBySlug,
  getPagePaths,
} from '../sanity/lib/sanity.client'
import { GetStaticProps } from 'next'
import { lazy } from 'react'
import { PagePayload, SettingsPayload } from 'types'
import { pagesBySlugQuery } from '../sanity/lib/sanity.queries'
import { buildComponent } from 'utils/buildComponent'

const PagePreview = lazy(() => import('layout/Preview'))

interface PageProps {
  page?: PagePayload
  settings?: SettingsPayload
  homePageTitle?: string
  preview: boolean
  token: string | null
}

interface Query {
  [key: string]: string[]
}

interface PreviewData {
  token?: string
}

export default function ProjectSlugRoute(props: PageProps) {
  const { page, preview, token } = props
  const Page = ({ page }) => (
    <>{page?.sections?.map((section) => buildComponent(section))}</>
  )

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <PreviewWrapper>
            <Page page={page} />
          </PreviewWrapper>
        }
      >
        <PagePreview
          token={token}
          PageComponent={Page}
          pageQuery={pagesBySlugQuery}
          slug={page?.slug}
        />
      </PreviewSuspense>
    )
  }

  return <Page page={page} />
}

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {}, params = {} } = ctx

  const token = previewData.token

  const [page, homePageTitle] = await Promise.all([
    getPageBySlug({ token, slug: params.slug ? params.slug.join('/') : '/' }),
    getHomePageTitle({ token }),
  ])

  if (!page) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      page,
      homePageTitle,
      preview,
      token: previewData.token ?? null,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = await getPagePaths()

  return {
    paths:
      paths?.map((slug) => ({ params: { slug: `${slug}`.split('/') } })) || [],
    fallback: false,
  }
}
