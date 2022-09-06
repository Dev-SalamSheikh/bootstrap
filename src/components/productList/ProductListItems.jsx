import React from "react";
import iphone from "../../assets/iphone.png";
import SelectAndTitleLayout from "../layout/SelectAndTitleLayout";
import ProductListItem from "./ProductListItem";

const ProductListItems = () => {
  return (
    <div className="container product-list mt-5">
      {/* <div className='d-flex product-list'>
        <h1 className='product-title me-auto'>ALL Products</h1>
        <div className='d-flex'>
          <p className='ms-auto'>Sort By:</p>
          <SelectBox />
        </div>
      </div> */}
      <SelectAndTitleLayout />
      <div className="row product-table mt-5">
        <div className="row">
          <div className="col-md-3 text-start">Model</div>
          <div className="col-md-3 text-start">Ram/Rom</div>
          <div className="col-md-3 text-start">Tag</div>
          <div className="col-md-3 text-end">Price</div>
        </div>
        <div className="row mt-5 mb-5">
          {/* <div className='col-md-3 model'>
            <img src={iphone} alt='' />
            <span className='title'>iPhone 13 pro max</span>
          </div>
          <div className='col-md-3 ram'>6/128</div>
          <div className='col-md-3 badge-td'>
            <span className='badge text-bg-warning badge-value'>
              Best Value
            </span>
            <span className='badge text-bg-danger badge-camera'>
              Best Camera
            </span>
            <span className='badge text-bg-primary badge-performance'>
              Best Performance
            </span>
          </div>
          <div className='col-md-3 price'>130000</div> */}

          <ProductListItem />
          <ProductListItem />
          <ProductListItem />
        </div>
      </div>
      {/* Another Components */}
    </div>
  );
};

export default ProductListItems;
