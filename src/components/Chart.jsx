import React from 'react';
import circle from '../assets/circle.png';
import column from '../assets/column.png';

const Chart = () => {
  return (
    <>
      <div className='frame'>
        <div className='mt-5'>
          <div className='row'>
            <div className='col-md-6 col-sm-12'>
              <div className='text-start title'>Sources</div>
              <div className='thumbnail'>
                <img
                  className='mt-5 circle-img img-fluid img-thumbnail'
                  src={circle}
                  alt='circle'
                />
              </div>
            </div>
            <div className='col-md-6 col-sm-12'>
              <div className='text-start title'>Conditions</div>
              <div className='thumbnail'>
                <img
                  className='mt-5 column-img img-fluid img-thumbnail'
                  src={column}
                  alt='column'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart;
