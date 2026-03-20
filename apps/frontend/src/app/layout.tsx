import './globals.css'
import { Inter, Space_Grotesk, Fira_Code } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira-code' })

export const metadata = {
  title: 'ARCHITECT_CONSOLE | DevOps Portfolio',
  description: 'DevOps Architect Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${firaCode.variable} font-body antialiased selection:bg-primary-container selection:text-on-primary-container`}>
        {children}
      </body>
    </html>
  )
}
