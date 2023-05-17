import { apiVersion, dataset, projectId, useCdn } from './sanity.api'
import {
  homePageTitleQuery,
  pagePaths,
  pagesBySlugQuery,
} from './sanity.queries'
import { createClient } from 'next-sanity'
import type {
  HomePagePayload,
  PagePayload,
  ProjectPayload,
  SettingsPayload,
} from 'types'

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const sanityClient = (token?: string) => {
  return projectId
    ? createClient({ projectId, dataset, apiVersion, useCdn, token })
    : null
}

export async function getHomePageTitle({
  token,
}: {
  token?: string
}): Promise<string | undefined> {
  return await sanityClient(token)?.fetch(homePageTitleQuery)
}

export async function getPageBySlug({
  slug,
  token,
}: {
  slug: string
  token?: string
}): Promise<PagePayload | undefined> {
  return await sanityClient(token)?.fetch(pagesBySlugQuery, { slug })
}

export async function getPagePaths(): Promise<string[]> {
  return await sanityClient()?.fetch(pagePaths)
}
