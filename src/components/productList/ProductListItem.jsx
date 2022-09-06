import React from "react";
import iphone from "../../assets/iphone.png";

const ProductListItem = () => {
  return (
    <>
      <div className="d-flex mb-5">
        <div className="col-md-3 model text-start d-flex align-items-center">
          <div className="image__div">
            <img src={iphone} alt="" />
          </div>
          <div className="brand">
            <span className="title">iPhone 13 pro max</span>
            <h6>Apple</h6>
          </div>
        </div>
        <div className="col-md-3 ram text-start d-flex align-items-center">
          <span>6/128</span>
        </div>
        <div className="col-md-3 badge-td text-start d-flex align-items-center flex-wrap">
          <span className="badge text-bg-warning badge-value">Best Value</span>
          <span className="badge text-bg-danger badge-camera">Best Camera</span>
          <span className="badge text-bg-primary badge-performance">
            Best Performance
          </span>
          <span className="badge text-bg-primary badge-performance">
            Best Performance
          </span>
          <span className="badge text-bg-primary badge-performance">
            Best Performance
          </span>
        </div>
        <div className="col-md-3 price d-flex align-items-center justify-content-end text-end">
          <span> 130000</span>
        </div>
      </div>
    </>
  );
};

export default ProductListItem;
