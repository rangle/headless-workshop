import { createClient } from 'next-sanity'
import type { PagePayload } from 'types'

import { apiVersion, dataset, projectId, useCdn } from './sanity.api'
import { footerQuery, navigationQuery } from './sanity.queries'

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const sanityClient = (token?: string) => {
  return projectId
    ? createClient({ projectId, dataset, apiVersion, useCdn, token })
    : null
}

export async function getFooter({
  token,
}: {
  token?: string
}): Promise<string | undefined> {
  return await sanityClient(token)?.fetch(footerQuery)
}

export async function getNavigation({
  token,
}: {
  token?: string
}): Promise<string | undefined> {
  return await sanityClient(token)?.fetch(navigationQuery)
}

export async function getPageBySlug({
  token,
  query,
  params,
}: {
  query: string
  token?: string
  params?: any
}): Promise<PagePayload | undefined> {
  return await sanityClient(token)?.fetch(query, params)
}

export async function getPagePaths(pagePaths): Promise<string[]> {
  return await sanityClient()?.fetch(pagePaths)
}
