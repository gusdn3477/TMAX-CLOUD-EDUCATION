import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Bread from '../../elements/ui/Bread';
import SideBar from '../../elements/widgets/productlist/SideBar';
import Shop from '../../elements/widgets/productlist/Shop';

export default function ProductList() {
    return (
        <>
            <Header />
            <Bread productName="SHOP" />
            <div className="shop-area pt-95 pb-100">
                <div className="container">
                    <div className="row">
                        <SideBar />
                        <Shop />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}