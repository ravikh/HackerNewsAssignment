import React from 'react';
import Header from '../../organisms/Header';

const NewsLanding = ({children}) => {
    return (
        <>
            <Header></Header>
            {children}
        </>
    );
}

export default NewsLanding;