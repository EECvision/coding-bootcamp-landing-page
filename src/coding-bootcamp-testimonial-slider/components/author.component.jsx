import React,{useState, useContext} from 'react';

import AuthorPanel from './author-panel.compoenent';
import {AUTHOR_DATA} from './author-data';
import Curve from '../images/pattern-curve.svg';
import {buttonContext} from './context';

const Author =()=>{
    const [authors] = useState(AUTHOR_DATA);
    const {toggleAuthor} = useContext(buttonContext);


    return (
        <div className="relative px-12 lg:px-24">
            {
                toggleAuthor 
                ?
                <AuthorPanel {...authors[0]}/>
                : 
                <AuthorPanel {...authors[1]}/>
            }
                <img className="w-2/6 absolute inset-x-0 transform translate-y-24" src={Curve} alt="curve"/>
        </div>
    )
}

export default Author;