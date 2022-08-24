import { ContactProvider } from 'lib/providers/ContactProvider'
import 'styles/styles.css'

// eslint-disable-next-line
function MyApp({ Component, pageProps }) {
    return (
        <ContactProvider>
            <Component {...pageProps} />
        </ContactProvider>
    )
}

export default MyApp
