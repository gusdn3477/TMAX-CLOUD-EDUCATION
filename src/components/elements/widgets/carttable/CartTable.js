import React, { useEffect, useState } from 'react';
import CartListView from '../../ui/CartListView';

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
            }
            )
    })

    return (
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
                                data={item} />
                        ))
                    }
                </tbody>
            </table>
        </div>);
}