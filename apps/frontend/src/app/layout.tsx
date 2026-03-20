import './globals.css'
import { Inter, Space_Grotesk, Fira_Code } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira-code' })

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: 'DevOps Portfolio',
  description: 'DevOps Architect Portfolio',
  openGraph: {
    title: 'DevOps Portfolio',
    description: 'DevOps Architect Portfolio - Nguyễn Đức Tuấn - Cloud & DevOps Engineer',
    url: 'https://github.com/l3gitok',
    siteName: 'DevOps Portfolio',
    images: [
      {
        url: '/avatar.png',
        width: 800,
        height: 800,
        alt: 'Nguyễn Đức Tuấn Avatar',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARCHITECT_CONSOLE | DevOps Portfolio',
    description: 'DevOps Architect Portfolio - Nguyễn Đức Tuấn',
    images: ['/avatar.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${firaCode.variable} font-body antialiased selection:bg-primary-container selection:text-on-primary-container`}>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
        {children}
      </body>
    </html>
  )
}
