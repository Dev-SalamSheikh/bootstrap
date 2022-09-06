import React from 'react';
import Chart from './components/Chart';
import Navbar from './components/layout/Navbar';
import ProductListItems from './components/productList/ProductListItems';

function App() {
  return (
    <>
      <Navbar />
      <main className='container'>
        <Chart />
        <ProductListItems />
      </main>
    </>
  );
}

export default App;
