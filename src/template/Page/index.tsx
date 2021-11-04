import Navbar from 'components/Navbar'
import Hero from 'components/Hero'
import FloatButton from 'components/FloatButton'
import Works from 'components/Works'
import About from 'components/About'

const PageTemplate = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Works />
            <About />
            <FloatButton />
        </>
    )
}

export default PageTemplate
