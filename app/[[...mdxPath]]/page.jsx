/* eslint-disable react-hooks/rules-of-hooks -- false positive, useMDXComponents are not react hooks */

import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents } from '../../mdx-components'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props) {
  const params = await props.params
  const { metadata } = await importPage(params.mdxPath)
  // MDXLD's documentation home is mdx.org.ai. mdxld.org is a serving surface for it,
  // so the front page — which serves the same referent, "what MDXLD is" — points there.
  // Deeper pages have no counterpart at that home yet and canonicalise to themselves;
  // pointing them all at one URL would be a false claim about what that URL contains.
  const path = (params.mdxPath ?? []).join('/')
  const canonical = path === '' ? 'https://mdx.org.ai' : `https://mdxld.org/${path}`
  return { ...metadata, alternates: { ...metadata?.alternates, canonical } }
}

const Wrapper = useMDXComponents().wrapper

export default async function Page(props) {
  const params = await props.params
  const result = await importPage(params.mdxPath)
  const { default: MDXContent, toc, metadata } = result
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}
