import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import React, { Fragment } from 'react';
import WishTable from '../../elements/widgets/wishtable/WishTable';

export default function Wishlist() {

    return (
        <Fragment>
            <Header />
                <WishTable />
            <div className="cart-main-area pt-90 pb-100">
                <div className="container">
                    <h3 className="cart-page-title">Your wishlist items</h3>
                    <div className="row">
                        <div className="col-12">
                            <div className="table-content table-responsive cart-table-content">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product Name</th>
                                            <th>Unit Price</th>
                                            <th>Add To Cart</th>
                                            <th>action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {WishTable}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cart-shiping-update-wrapper">
                                <div className="cart-shiping-update">
                                    <a href="/shop-grid-standard">Continue Shopping</a>
                                </div>
                                <div className="cart-clear"><button>Clear Wishlist</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

