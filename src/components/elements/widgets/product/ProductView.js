import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Rating from '../../ui/Rating';

export default function ProductView({ categoryName, sliceNumber, columnNumber }) {

    let process = require('../../../../db/myProcess.json');

    const [newData, setnewData] = useState([]);

    useEffect(() => {
        fetch(`http://${process.IP}:${process.PORT}/product/`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setnewData(data);
                console.log(data);
            })
            .catch(error => console.log(error));
    }, [process.IP, process.PORT]);

    const searchData = categoryName
        ? newData.filter(
            item => item.category.filter(single => single === categoryName)[0]
        )
        : newData;

    const handleDelete = (id) => {
        fetch(`http://${process.IP}:${process.PORT}/wish/${id}`, {
            method : "DELETE"
        }).then(
            alert("삭제되었습니다.")
        )
    }

    const handlePutCompareList = (id) => {

        fetch(`http://${process.IP}:${process.PORT}/${id}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            fetch(`http://${process.IP}:${process.PORT}/compare`,{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    id : data.id,
                    name : data.name,
                    image : data.image,
                    price : data.price,
                    discount : data.discount,
                    shortDescription : data.shortDescription,
                    rating : data.rating
                })
            })
        }).then(
            alert('success')
        )

    }

    const handlePutWishList = (id) => {

        fetch(`http://${process.IP}:${process.PORT}/product/${id}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            fetch(`http://${process.IP}:${process.PORT}/wish/`,{
                method : "POST",
                headers : {
                    "Content-type" : "application/json",
                },
                body : JSON.stringify({
                    id : data.id,
                    name : data.name,
                    image : data.image,
                    price : data.price,
                    discount : data.discount
                }),
            })
        }).then(
            alert("success")
        )
    }

    const productList = searchData.map(item => (

        <div class={`col-xl-${columnNumber} col-md-6 col-lg-${columnNumber} col-sm-6`} key={item.id}>
            <div class="product-wrap mb-25">
                <div class="product-img">
                    <Link to={`/productdetail/${item.id}`}>
                        <img class="default-img" src="/assets/img/product/fashion/8.jpg" alt="" />
                        <img class="hover-img" src="/assets/img/product/fashion/6.jpg" alt="" />
                    </Link>

                    <div class="product-img-badges">
                        {
                            item.discount > 0 ? <span class="pink">{item.discount}%</span> : ""
                        }
                        {
                            item.new ? <span className="purple">new</span> : ""
                        }
                    </div>
                    <div class="product-action">
                        <div class="pro-same-action pro-wishlist">
                            <button value={item.id} onClick = {() => handlePutWishList(item.id)}>
                            {/*<button class="" title="Add to wishlist">*/}
                            <i class="las la-bookmark"></i></button>
                        </div>
                        <div class="pro-same-action pro-cart">
                            <button disabled="" class="active">Out of Stock</button>
                        </div>
                        <div class="pro-same-action pro-quickview">
                            <button className="" title={item.id} onClick={() => handlePutCompareList(item.id)} value={item.id}>
                                <i className="las la-eye"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="product-content text-center">
                    <h3><Link to={`/productdetail/${item.id}`}>{item.name}</Link></h3>
                    <div class="product-rating">
                        {item.rating && item.rating > 0 ? (
                            <Rating ratingValue={item.rating} />
                        ) : ("")}
                    </div>
                    <div class="product-price">
                        <span>{item.price}</span>
                        <span className="old">{(item.price * ((100 + item.discount) / 100)).toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>

    )).slice(0, 8);

    return (
        <div className="row mt-5">
            {productList}
        </div>

    );
}