import { usePreview } from '../sanity/lib/sanity.preview'

export default function Preview({
  token,
  PageComponent,
  pageQuery,
  slug,
}: {
  token: null | string
  PageComponent: any
  pageQuery: string
  slug?: string
}) {
  const page: any = usePreview(token, pageQuery, { slug })

  if (!page) {
    return (
      <div className="text-center">
        Please start editing your document to see the preview!
      </div>
    )
  }

  return <PageComponent page={page} preview={true} />
}
