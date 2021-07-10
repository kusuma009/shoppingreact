import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './product.css';

class Product extends Component {
    handleClick = () => {
        const { id, addToCart, removeFromCart, isInCart } = this.props;

        if (isInCart) {
            removeFromCart(id);
        } else {
            addToCart(id);
        }
    }

    render() {
        const { name, price,quantity,  isInCart } = this.props;

        return (
            <div className="productsName">
        
                <div className="caption">
                    <h3>{name}</h3>
                    <div className="productprice">{price}</div>
                    <div className="poductQuantity">{quantity}</div>

                    <div className="product">
                        <button
                            className={isInCart ? 'btn btn-danger' : 'btn btn-primary'}
                            onClick={this.handleClick}
                        >
                            {isInCart ? 'Remove' : 'Add to cart'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    quantity:PropTypes.number.isRequired,
    quantity:PropTypes.quantity,
    isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired
}
export default Product;
