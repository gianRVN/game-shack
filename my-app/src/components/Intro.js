import React from 'react'
import forest from '../img/forest.jpeg'
import coffee from '../img/coffee.jpeg'
import museum from '../img/museum.jpeg'

function Intro() {
  return (
    <>
      <div className='col-md-6 col-sm-12 col-lg-4'>
        <div className="card" style={{width: '100%', margin: '1vh'}}>
          <img src={forest} className="card-img-top" alt="..." style={{ height: '200px', width: '100%', objectFit: 'cover'}} />
          <div className="card-body">
            <h5 className="card-title" style={{textAlign: 'left', fontWeight: 800}}>Get Closer with Nature</h5>
            <p className="card-text" style={{textAlign: 'left'}}>Find top hidden gems nature spot in your area!</p>
          </div>
        </div>
      </div>
      <div className='col-md-6 col-sm-12 col-lg-4'>
        <div className="card" style={{width: '100%', margin: '1vh'}}>
          <img src={coffee} className="card-img-top" alt="..." style={{ height: '200px', width: '100%', objectFit: 'cover'}} />
          <div className="card-body">
            <h5 className="card-title" style={{textAlign: 'left', fontWeight: 800}}>Taste the Bittersweet Nearby</h5>
            <p className="card-text" style={{textAlign: 'left'}}>A bad day with coffee is better than a good day without it!</p>
          </div>
        </div>
      </div>
      <div className='col-md-6 col-sm-12 col-lg-4'>
        <div className="card" style={{width: '100%', margin: '1vh'}}>
          <img src={museum} className="card-img-top" alt="..." style={{ height: '200px', width: '100%', objectFit: 'cover'}} />
          <div className="card-body">
            <h5 className="card-title" style={{textAlign: 'left', fontWeight: 800}}>Time Travel, Go to the Museum</h5>
            <p className="card-text" style={{textAlign: 'left'}}>The more you know about the past, the better prepared you are for the future!</p>
          </div>
        </div>
      </div>
    </>
    )
}

export default Intro;
