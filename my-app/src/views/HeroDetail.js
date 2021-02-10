import React, { useEffect} from 'react'
import { fetchHeroes } from '../store/actions/heroAction'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

function PlaceDetail() {
  const { heroId } = useParams() 
  const { heroes, loading, error } = useSelector(state => state.hero) 
  const heroDetail = heroes.filter(el => +el.id === +heroId)

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchHeroes());
    // eslint-disable-next-line
  }, []);

  if(loading) {
    return (
      <>
        <div style={{textAlign: 'center', marginTop: '100px'}}>  
          <img src={'https://media.giphy.com/media/eHKM1zH4JBMk/giphy.gif'}alt='' style={{borderRadius: '50%', textAlign: 'center'}} ></img>
          <h1 style={{textAlign: 'center', color: 'white'}}>- - - LOADING - - -</h1>
        </div>
      </>
    )
  }

  if(error) {
    return (
      <>
        <div style={{textAlign: 'center', marginTop: '100px'}}>  
          <img src={'https://giphy.com/gifs/double-axe-handle-dev-anticipation-tdQlpY2mYIoHm'}alt='' style={{borderRadius: '50%', textAlign: 'center'}} ></img>
          <h1 style={{textAlign: 'center', color: 'white'}}>- - - Not Found - - -</h1>
        </div>
      </>
    )
  }

  return (
    <>
    <div className="container" style={{marginTop: '70px'}}>
    <table className="table table-striped table-bordered border-primary table-hover">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Detail</th>
          <th scope="col">Description</th>
        </tr>
      </thead >
      <tbody >
        <tr className="table-light table-bordered">
          <td>Name</td>
          <td>{heroDetail[0].localized_name}</td>
        </tr>
        <tr className="table-light">
          <td>Image</td>
          <td><img src={`https://api.opendota.com${heroDetail[0].img}`} alt=''></img></td>
        </tr>
        <tr className="table-light">
          <td>Attack Type</td>
          <td>{heroDetail[0].attack_type}</td>
        </tr>
        <tr className="table-light">
          <td>Roles</td>
          <td>{heroDetail[0].roles.join(', ')}</td>
        </tr>
        <tr className="table-light">
          <td>Base Attack</td>
          <td>{`${heroDetail[0].base_attack_min} - ${heroDetail[0].base_attack_max}`}</td>
        </tr>
        <tr className="table-light">
          <td>Base Health</td>
          <td>{`${heroDetail[0].base_health} (+${heroDetail[0].base_health_regen})`}</td>
        </tr>
        <tr className="table-light">
          <td>Base Mana</td>
          <td>{`${heroDetail[0].base_mana} (+${heroDetail[0].base_mana_regen})`}</td>
        </tr>
        <tr className="table-light">
          <td>Strength</td>
          <td>{`${heroDetail[0].base_str} (+${heroDetail[0].str_gain})`}</td>
        </tr>
        <tr className="table-light">
          <td>Agility</td>
          <td>{`${heroDetail[0].base_agi} (+${heroDetail[0].agi_gain})`}</td>
        </tr>
        <tr className="table-light">
          <td>Intelligence</td>
          <td>{`${heroDetail[0].base_int} (+${heroDetail[0].int_gain})`}</td>
        </tr>
        <tr className="table-light">
          <td>Attack Range</td>
          <td>{`${heroDetail[0].attack_range}`}</td>
        </tr>
        <tr className="table-light">
          <td>Attack Rate</td>
          <td>{`${heroDetail[0].attack_rate}`}</td>
        </tr>
        <tr className="table-light">
          <td>Move Speed</td>
          <td>{`${heroDetail[0].move_speed}`}</td>
        </tr>
      </tbody>
    </table>
    </div>
    </>
    )
}

export default PlaceDetail;
