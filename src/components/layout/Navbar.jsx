import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import search from '../../assets/search.png';
import InputModal from './InputModal';

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header>
      <nav className='navbar menu-bar'>
        <div className='container'>
          <a href='/' className='navbar-brand logo'>
            Logo
          </a>
          <div className='d-flex'>
            <form className='search-form' role='search'>
              <input
                className='form-control me-2 search-input'
                type='search'
                placeholder='Search By Title or Brand'
                aria-label='Search'
              />
              <img className='search-icon' src={search} alt='search' />
            </form>
            <Button variant='primary' onClick={handleShow}>
              Add Product
            </Button>
            <InputModal show={show} handleClose={handleClose} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
