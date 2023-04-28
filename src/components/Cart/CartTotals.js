import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTotal, clearCart } = value;
  let { cartTax } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <h5>
              <span className="text-title">₹ :</span>
              <strong>{cartSubTotal}</strong>
            </h5>

            <h5>
              <span className="text-title">Delivery Charge :</span>
              <strong>
                {cartSubTotal > 200 ? (cartTax = 0) : (cartTax = 20)}
              </strong>
            </h5>
            <h5>
              <span className="text-title">Total :</span>
              <strong>{cartTotal}</strong>
            </h5>
            <div className="pt-5 d-flex justify-content-around">
              <Link to="/">
                <button
                  className="btn btn-outline-danger text-uppercase mb-3 px-5"
                  type="button"
                  onClick={() => {
                    clearCart();
                  }}
                >
                  clear cart
                </button>
              </Link>
              <Link to="/Address">
                <button
                  className="btn btn-outline-danger text-uppercase mb-3 px-5 btn1"
                  type="button"
                  //   onClick={() => {
                  //     clearCart();
                  //   }}
                >
                  BuyNow
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
