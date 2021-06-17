import React, { useState } from "react";

export default function ColorAndSize({ vData, setColor, setSize }) {

    const [isCheck, setIsCheck] = useState(false);

    function toggleCheck(e) {
        setIsCheck(!isCheck);
        alert(e.target.value);
    }

    return (
        <div className="pro-details-size-color">
            <div className="pro-details-color-wrap">
                <span>Color</span>
                <div className="pro-details-color-content">
                    {
                        vData ? vData.map((item, index) => (
                            <label className={`pro-details-color-content--single ${item.color}`}>
                                <input type="radio" name="product-color" value="blue" checked="" />
                                <span className="checkmark"></span>
                            </label>
                        )) : <p style={{ fontSize: "0.7em" }}>no color</p>
                    }
                </div>
            </div>
            <div className="pro-details-size">
                <span>Size</span>
                <div className="pro-details-size-content">
                    <label className="pro-details-size-content--single">
                        <input type="radio" value="x" checked="" />
                        <span className="size-name">x</span>
                    </label>
                </div>
            </div>
        </div>
    );
}