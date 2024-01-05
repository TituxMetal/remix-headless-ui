import { cssBundleHref } from '@remix-run/css-bundle'
import { type LinksFunction } from '@remix-run/node'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'

import tailwindStylesheetLink from '~/styles/tailwind.css'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindStylesheetLink },
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : [])
]

const Document = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en' className='dark'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        {/* Header Navigation */}
        <nav className='flex bg-primary p-4 text-primary-content'>
          <ul className='flex items-center justify-center space-x-4'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        {/* Page Wrapper */}
        <main className='m-auto flex h-full w-full max-w-screen-md flex-1 bg-base-100'>
          {children}
        </main>
        {/* Footer Navigation */}
        <footer className='flex bg-primary p-4 text-primary-content'>
          <ul className='flex items-center justify-center space-x-4'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </footer>
        <ScrollRestoration />
        <LiveReload />
        <Scripts />
      </body>
    </html>
  )
}

const App = () => {
  return (
    <Document>
      <Outlet />
    </Document>
  )
}

const AppWithProviders = () => {
  return <App />
}

export default AppWithProviders
