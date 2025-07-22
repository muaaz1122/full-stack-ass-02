import React from 'react'
import CardSection from '../views/CardSection'
import RandomContent from '../views/RandomContent'
import ContactUs from '../views/ContactUs'
import Footer from '../views/Footer'
import HeroSection from '../views/HeroSection'

const HomePage = () => {
    return (
        <>
            <HeroSection/>
            <CardSection/>
            <RandomContent/>
            <ContactUs/>
            <Footer/>

        </>

    )
}

export default HomePage