import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import LocalContext from './components/LocalContext.jsx'
import UseCases from './components/UseCases.jsx'
import Framework from './components/Framework.jsx'
import Modes from './components/Modes.jsx'
import Roadmap from './components/Roadmap.jsx'
import SampleOutput from './components/SampleOutput.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-cosn-navy focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <LocalContext />
        <UseCases />
        <Framework />
        <Modes />
        <Roadmap />
        <SampleOutput />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
