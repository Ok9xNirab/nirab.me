import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children, path }) {
    return <>
        <Header path={path} />
        {children}
        <Footer />
    </>;
}
