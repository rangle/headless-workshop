export function resolveHref(
  documentType?: string,
  slug?: string
): string | undefined {
  switch (documentType) {
    case 'page':
      return slug
    default:
      console.warn('Invalid document type:', documentType)
      return undefined
  }
}
