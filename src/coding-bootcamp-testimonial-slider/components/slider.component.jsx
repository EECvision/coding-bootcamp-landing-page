import React,{useContext} from 'react';
import {buttonContext} from './context';

const SlideButton =()=>{
    const {toggleAuthor, setToggleAuthor} = useContext(buttonContext);

    return (
        <div className="w-full flex justify-around items-center bg-white rounded-full border text-indigo-900 shadow-lg p-2 text-lg hover:bg-indigo-900 hover:text-white">
            <button onClick={()=>setToggleAuthor(!toggleAuthor)} className="appearance-none focus:outline-none cursor-pointer">&#10094;</button>
            <button onClick={()=>setToggleAuthor(!toggleAuthor)} className="appearance-none focus:outline-none cursor-pointer">&#10095;</button>
        </div>
    )
}

export default SlideButton