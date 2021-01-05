import React from 'react';

import Author from '../components/author.component';
import ButtonContextProvider from '../components/context'


const CodingBootcampPage =()=>{
    return (
        <ButtonContextProvider>
            <Author/>
        </ButtonContextProvider>
    )
}

export default CodingBootcampPage;