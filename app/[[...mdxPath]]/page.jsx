/* eslint-disable react-hooks/rules-of-hooks -- false positive, useMDXComponents are not react hooks */

import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents } from '../../mdx-components'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props) {
  const params = await props.params
  const { metadata } = await importPage(params.mdxPath)
  // Every page canonicalises to itself. mdx.org.ai is MDXLD's documentation home, but
  // https://mdx.org.ai currently 307s to /docs, which serves a component reference and
  // not "what MDXLD is" — a canonical must resolve to a page that contains the referent.
  // Flip the front page to mdx.org.ai/<mdxld-path> once that page actually serves it.
  const path = (params.mdxPath ?? []).join('/')
  const canonical = `https://mdxld.org${path ? `/${path}` : ''}`
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
