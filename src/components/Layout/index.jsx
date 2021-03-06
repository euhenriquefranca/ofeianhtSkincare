import React from 'react'
import Footer from '../common/footer/Footer'
import Header from '../common/header/Header'
import Parallax from '../common/parallax/Parallax'
import MainSlider from '../Layout/mainSlider/MainSlider'
import Banner from './banner/Banner'
import Blog from './blog/Blog'
import BrandSlider from './brandSlider/BrandSlider'
import CountDown from './countDown/CountDown'
import ItemSlider from './itemSlider/ItemSlider'
function index() {
    return (
        <div>
            <Header/>
            <MainSlider/>
            <Banner/>
            {/* <ItemSlider /> */}
            <BrandSlider/>
            <CountDown/>
            <Blog/>
            <Parallax/>
            <Footer/>
        </div>
    )
}

export default index
