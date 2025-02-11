import { QuizProvider } from './context/QuizContext'
import './globals.css'

export const metadata = {
  title: 'Rick and Morty Quiz',
  description: 'A quiz app using Rick and Morty API',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <QuizProvider>{children}</QuizProvider>
      </body>
    </html>
  )
}
