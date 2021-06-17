import React, { useEffect, useState } from 'react';
import CartListView from '../../ui/CartListView';
import CartTableFooter from './CartTableFooter';

export default function CartTable() {

    const [cartDatas, setCartDatas] = useState([]);

    let process = require("../../../../db/myProcess.json");

    useEffect(() => {
        fetch(`http://${process.IP}:${process.PORT}/cart`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setCartDatas(data);
            });
    }, [process.IP, process.PORT]);

    return (

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
                                    {
                                        cartDatas.map(item => (
                                            <CartListView
                                                data={item}
                                                setCartDatas = {setCartDatas}
                                            />
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cart-shipping-update-wrapper">
                            <div className="cart-shipping-update">
                                <a href="/shop-grid-standard">Continue Shopping</a>
                            </div>
                            <div className="cart-clear">
                                <button>Clear Shopping Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <CartTableFooter />
            </div>
        </div>
    );
}