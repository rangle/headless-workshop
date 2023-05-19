import { PreviewSuspense } from '@sanity/preview-kit'
import { PreviewWrapper } from 'components/preview/PreviewWrapper'
import { GetStaticProps } from 'next'
import { lazy } from 'react'
import { PagePayload, SettingsPayload } from 'types'
import { buildComponent } from 'utils/buildComponent'

import {
  getFooter,
  getHomePageTitle,
  getNavigation,
  getPageBySlug,
  getPagePaths,
} from '../sanity/lib/sanity.client'
import { pagesBySlugQuery } from '../sanity/lib/sanity.queries'

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

  const [page, homePageTitle, navigation, footer] = await Promise.all([
    getPageBySlug({ token, slug: params.slug ? params.slug.join('/') : '/' }),
    getHomePageTitle({ token }),
    getNavigation({ token }),
    getFooter({ token }),
  ])

  if (!page) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      global: {
        navigation,
        footer,
      },
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
