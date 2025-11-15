import { Footer, Navbar } from "@/Components";
import "@/styles/globals.css";
import {CrowdFundingProvider} from '../Context/CrowdFunding'

export default function App({ Component, pageProps }) {
  return(
     <>
     <CrowdFundingProvider>

    <Navbar/>
    <Component {...pageProps} />
  <Footer/>
     </CrowdFundingProvider>
  </>
  )

}
