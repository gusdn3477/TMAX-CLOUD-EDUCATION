import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function CartListView({ data, setCartDatas }) {

    let process = require('../../../db/myProcess.json');

    const [count, setCount] = useState(1);
    
    const handleCountAdd = () => {
        setCount(count+1);
    }

    const handleCountDec = () => {
        count > 1 ? setCount(count-1) : alert("최수 수량은 1개 이상입니다.");
    }

    const handleDelete = (id) => {

        fetch(`http://${process.IP}:${process.PORT}`, {
            method : "DELETE"
        }).then(
            alert("삭제 되었습니다."),
            fetch(`http://${process.IP}:${process.PORT}/cart`)
            .then(res => {
                return res.json();
            })
            .then(data =>{
                setCartDatas(data);
            })
        )
    }

    return (
        <tr>
            <td class="product-thumbnail">
                <Link to={`/productdetail/${data.id}`}><img class="img-fluid" src={data.image[0]} alt="" /></Link>
            </td>
            <td class="product-name">
                <Link to="/product/2">{data.name}</Link>
                <div class="cart-item-variation">
                    <span>Color: {data.color}</span>
                    <span>Size: {data.size}</span>
                </div>
            </td>
            <td class="product-price-cart">
                <span class="amount old">{(data.price * ((100+data.discount/100)).toFixed(2))}</span>
                <span class="amount">{data.price}</span>
            </td>
            <td class="product-quantity">
                <div class="cart-plus-minus">
                    <button class="dec qtybutton" onClick={()=>handleCountDec()}>-</button>
                    <input class="cart-plus-minus-box" type="text" readonly="" value="1" />
                    <button class="inc qtybutton" onClick={()=>handleCountAdd()}>+</button>
                </div>
            </td>
            <td class="product-subtotal">{data.price * count}</td>
            <td class="product-remove"><button onClick={()=>handleDelete(data.id)}><i class="fa fa-times"></i></button></td>
        </tr>);
}