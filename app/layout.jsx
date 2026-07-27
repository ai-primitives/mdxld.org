/* eslint-env node */
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const { viewport } = Head

export const metadata = {
  metadataBase: new URL('https://mdxld.org'),
  title: {
    default: 'MDXLD',
    template: '%s — MDXLD',
  },
  description:
    'MDXLD is an extension of MDX: $id / $type / $context linked-data keys in the frontmatter, over the open MDX format authored by the MDX community.',
  applicationName: 'MDXLD',
  generator: 'Next.js',
  appleWebApp: {
    title: 'MDXLD',
  },
  other: {
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'msapplication-TileColor': '#fff',
  },
}

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <div>
          <b>MDXLD</b>
          <span style={{ opacity: '60%' }}>.org</span>
        </div>
      }
      projectLink='https://github.com/ai-primitives/mdxld.org'
    />
  )
  const footer = (
    <Footer>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div>
          MDXLD is an extension of <a href='https://mdxjs.com'>MDX</a>, an open standard
          authored by the MDX community. MDXLD itself is maintained by{' '}
          <a href='https://foundation.org.ai'>The Org.AI Foundation</a>.
        </div>
        <div style={{ opacity: '60%' }}>
          Documented at <a href='https://mdx.org.ai'>mdx.org.ai</a> · vocabulary at{' '}
          <a href='https://schema.org.ai'>schema.org.ai</a>
        </div>
      </div>
    </Footer>
  )
  return (
    <html lang='en' dir='ltr' suppressHydrationWarning>
      <Head faviconGlyph='✦' />
      <body>
        <Layout
          banner={
            <Banner storageKey='mdxld-pre-1.0'>
              MDXLD is pre-1.0 and deliberately unfixed — nothing freezes until real
              external implementations prove the shape.
            </Banner>
          }
          navbar={navbar}
          footer={footer}
          editLink='Edit this page on GitHub'
          docsRepositoryBase='https://github.com/ai-primitives/mdxld.org/blob/main'
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={await getPageMap()}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
