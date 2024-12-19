/* eslint-env node */
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import { Logo } from './logo'

export const { viewport } = Head

export const metadata = {
  metadataBase: new URL('https://primitives.org.ai'),
  title: {
    template: '%s - AI Primitives',
  },
  description: 'AI Primitives: Actions, Chat, Database,Functions, Workflows, and Agents',
  applicationName: 'AI Primitives',
  generator: 'Next.js',
  appleWebApp: {
    title: 'AI Primitives',
  },
  other: {
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'msapplication-TileColor': '#fff',
  },
  twitter: {
    site: 'https://nextra.site',
  },
}

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <div>
          <b>MDXLD</b><span style={{ opacity: '60%' }}>.org</span>
        </div>
      }
      // Next.js discord server
      chatLink="https://discord.gg/BHZCzx83"
      projectLink="https://github.com/ai-primitives/docs-template"
    />
  )
  return (
    <html lang='en' dir='ltr' suppressHydrationWarning>
      <Head faviconGlyph='✦' />
      <body>
        <Layout
          banner={<Banner storageKey='MDXLD'>MDXLD v1.0 Released</Banner>}
          navbar={navbar}
          footer={<Footer><a href='https://driv.ly'><Logo/></a></Footer>}
          editLink='Edit this page on GitHub'
          docsRepositoryBase='https://github.com/ai-primitives/docs-template/blob/main'
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={await getPageMap()}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
