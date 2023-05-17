export function resolveHref(
  documentType?: string,
  slug?: string
): string | undefined {
  if (slug === '/') {
    return '/'
  }

  switch (documentType) {
    case 'page':
      return slug ? `/${slug}` : undefined
    default:
      console.warn('Invalid document type:', documentType)
      return undefined
  }
}
