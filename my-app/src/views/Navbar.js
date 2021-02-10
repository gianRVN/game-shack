import React  from 'react'
import { Link, useHistory } from 'react-router-dom'

function Navbar() {

  const history = useHistory()

  function goToHomePage() {
    history.push(`/`)
  }

  return (
    <>
      <nav>
      <div className='row p-2 d-flex justify-content-between'>
          <div style={{marginLeft: '10vh'}}>
            <h3 style={{color: 'white', fontWeight: 600, textAlign: 'center', margin: 0, padding: 0}} type="button" onClick={() => goToHomePage()}>GAMESHACK</h3>
          </div>
          <div style={{marginRight: '10vh'}}>
            <Link to='/favorites' className="btn btn-danger" style={{marginLeft: '10px'}}>
              <i className="fa fa-heart"> Favorites</i>
            </Link>
          </div>
        </div>
      </nav>
    </>
    )
}

export default Navbar;
