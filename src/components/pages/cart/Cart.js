import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Bread from '../../elements/ui/Bread';
import CartContents from '../../elements/ui/CartContents'
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function Cart() {

    return (
        <Fragment>
            <Header />
            <Bread productName="Cart" />
            <CartContents/>
            <Footer />
        </Fragment>
    )
}