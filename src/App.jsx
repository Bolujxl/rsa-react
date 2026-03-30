import './App.css'
import Header from './Header'
import Hero from './Hero'
import Features from './Features'
import Testimonial from './Testimonial'
import Blog from './Blog'
import Cta from './Cta'
import Footer from './Footer'

function App() {

  return (
    <>
    <Header />
    <Hero h1Text="Real-Time Risk Intelligence for Your Entire Partner Ecosystem."
          pText="We provide deep, real-time risk intelligence and actionable insights, delivering the confidence you need for profitable and compliant partner relationships." />
    <Features />
    <Testimonial />
    <Blog />
    <Cta ctaHeading="Ready to Act on Real-Time Risk?"
        ctaDesc="Unlock your business’s full potential . RSA delivers real-time monitoring of your partners ensuring complete risk visibility across your ecosystem."/>
    <Footer />
    </>
  )
}

export default App
