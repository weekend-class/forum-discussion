import { AuthLayout } from '@discussion-app/components/Layouts'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US">
      <body>
        <AuthLayout>{children}</AuthLayout>
      </body>
    </html>
  )
}
