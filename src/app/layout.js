import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Amusan Toluwanimi - Software Engineer Portfolio',
  description: 'Explore Toluwanimi\'s portfolio showcasing innovative software solutions and expertise in web development, and more.',
  keywords: ['software engineer', 'web development', 'mobile applications', 'portfolio', 'programming', 'coding', 'Amusan Toluwanmi', 'EmmanuelToluwanimi', 'Emmanuel Toluwanimi'],
  robots: "index, follow",
  icons: [
    { rel: "icon", url: "/favicon.ico", href: "/favicon.ico", sizes: "16x16", type: "image/x-icon" },
    { rel: "shortcut icon", url: "/icon.png", href: "/icon.png", sizes: "192x192", type: "image/png" },
    { rel: "icon", url: "/icon.png", href: "/icon.png", sizes: "192x192", type: "image/png" },
    // { rel: "icon", url: "/icon2x.png", href: "/icon2x.png", sizes: "256x256", type: "image/png" },
    // { rel: "icon", url: "/icon3x.png", href: "/icon3x.png", sizes: "384x384", type: "image/png" },
    { rel: "icon", url: "/icon4x.png", href: "/icon4x.png", sizes: "512x512", type: "image/png" },
    { rel: "apple-touch-icon", url: "/icon.png", href: "/icon.png", sizes: "192x192", type: "image/png" },
    // { rel: "apple-touch-icon", url: "/icon2x.png", href: "/icon2x.png", sizes: "256x256", type: "image/png" },
    // { rel: "apple-touch-icon", url: "/icon3x.png", href: "/icon3x.png", sizes: "384x384", type: "image/png" },
    { rel: "apple-touch-icon", url: "/icon4x.png", href: "/icon4x.png", sizes: "512x512", type: "image/png" }
  ],

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
