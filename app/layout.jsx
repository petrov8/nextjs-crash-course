import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
    title: "Promtopia",
    description: "Discover & Share AI prompts"
}

export default function rootLayout({children }) {
  return (
    <html lang='en'>
        <body>
            
            <div className='main'>
                <div className='gradient'/>
            </div>

            <main className='app'>
                <Nav />
                {children}
            </main>

        </body>
    </html>
  )
}
