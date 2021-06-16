import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Bread from '../../elements/ui/Bread';
import CartTable from '../../elements/widgets/carttable/CartTable';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function Cart() {

    return (
        <Fragment>
            <Header />
            <Bread productName = "Cart"/>
            <div class="cart-main-area pt-90 pb-100">
                <div class="container">
                    <h3 class="cart-page-title">Your cart items</h3>
                    <div class="row">
                        <div class="col-12">
                            <div class="table-content table-responsive cart-table-content">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product Name</th>
                                            <th>Unit Price</th>
                                            <th>Qty</th>
                                            <th>Subtotal</th>
                                            <th>action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="product-thumbnail">
                                                <Link to="/product/2"><img class="img-fluid" src="assets/img/product/fashion/2.jpg" alt=""/></Link>
                                            </td>
                                            <td class="product-name">
                                                <Link to="/product/2">Loream ipsum coat</Link>
                                                <div class="cart-item-variation">
                                                    <span>Color: blue</span>
                                                    <span>Size: x</span>
                                                </div>
                                            </td>
                                            <td class="product-price-cart">
                                                <span class="amount old">$18.50</span>
                                                <span class="amount">$15.72</span>
                                            </td>
                                            <td class="product-quantity">
                                                <div class="cart-plus-minus">
                                                    <button class="dec qtybutton">-</button>
                                                    <input class="cart-plus-minus-box" type="text" readonly="" value="1"/>
                                                    <button class="inc qtybutton">+</button>
                                                </div>
                                            </td>
                                            <td class="product-subtotal">$15.72</td>
                                            <td class="product-remove"><button><i class="fa fa-times"></i></button></td>
                                        </tr>
                                    </tbody>
                        </table>
                    </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
        </Fragment>
            )
}