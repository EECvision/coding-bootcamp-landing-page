import React from 'react';

import imageJohn from '../images/image-john.jpg';
import imageTanya from '../images/image-tanya.jpg';
import SlideButton from './slider.component';
import Quote from '../images/pattern-quotes.svg';
import imageBackground from '../images/pattern-bg.svg';

const AuthorPanel =({id, name, title, quote})=>{
    
    const images=[ imageTanya, imageJohn];

    return (
        <div className="flex flex-col-reverse  lg:flex-row lg:justify-center items-center mt-24">
            <div className=" w-full max-w-lg lg:w-2/5 text-center lg:text-left text-2xl text-indigo-900 opacity-75 transform lg:translate-x-32 z-10">
                <div className="relative flex flex-col lg:flex-row items-center">
                    <div className="mb-12 font-medium">{quote}</div>
                    <img className="absolute inset-y-0 w-24 transform -translate-y-12 lg:translate-x-16" src={Quote} alt="quote"/>
                </div>
                <div className="flex flex-col items-center lg:flex-row justify-center lg:justify-start text-lg">
                    <div className="font-bold lg:mr-4">{name}</div>
                    <div className="">{title}</div>
                </div>
            </div>
            <div className="w-full max-w-lg lg:w-3/6 relative flex justify-center items-center mb-32 lg:mb-0">
                <img className="w-full absolute" src={imageBackground} alt="background"/>
                <div className="w-9/12 relative flex justify-center items-end lg:block">
                    <img className="w-full rounded-lg shadow-2xl" src={images[id-1]} alt=""/>
                    <div className="w-24 absolute transform translate-y-1/2 lg:-translate-y-1/2 lg:translate-x-1/2"><SlideButton/></div>
                </div>
            </div>
        </div>
    )
}

export default AuthorPanel;