import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Bread from '../../elements/ui/Bread';
import CartTable from '../../elements/widgets/carttable/CartTable';
import CartContents from '../../elements/ui/CartContents'
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function Cart() {

    return (
        <Fragment>
            <Header />
            <Bread productName="Cart" />
            <CartTable/>
            <Footer />
        </Fragment>
    )
}