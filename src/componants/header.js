import React from 'react';
import { connect } from 'react-redux';
import '../../src/header.scss';

function Header(props) {
  return (
    <header className='mainHeader'>
      <div>
        <h1>
        Every thing Store
        </h1>
        <h2>CART ({props.cart.cartItem.length})</h2>
      </div>
    </header>

  )
}
const mapStateToProps = state => ({
  cart: state.categories
});

export default connect(mapStateToProps)(Header);