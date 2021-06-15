export default function ColorAndSize() {
    return(
        <div className="pro-details-size-color">
            <div className="pro-details-color-wrap">
                <span>Color</span>
                <div className="pro-details-color-content">
                    <label className="pro-details-color-content--single blue">
                        <input type="radio" name="product-color" value= "blue" checked="" />
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>
            <div className="pro-details-size">
                <span>Size</span>
                <div className="pro-details-size-content">
                    <label className="pro-details-size-content--single">
                        <input type="radio" value="x" checked=""/>
                        <span className="size-name">x</span>
                    </label>
                </div>
            </div>
        </div>
    );
}