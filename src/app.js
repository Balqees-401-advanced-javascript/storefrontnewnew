import React from 'react';
import Header from './componants/header';
import Footer from './componants/footer';
import Products from './componants/products';
import Categories from './componants/categories';
import ActiveCategory from './componants/activecategory';
import CartItem from './componants/cartitem';
import './style.scss';
export default props => {
    return (
        <>
    
            <Header />
            <Categories />
            <ActiveCategory />
            <Products />
            <CartItem />
            <Footer />
        </>
    )
}

