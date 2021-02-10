import React from 'react'
import { Link, useLocation} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addFavorite } from '../store/actions/favoriteAction'

function HeroList(props) {
  const dispatch = useDispatch()

  const addToFavorite = () => {
    let hero = props.hero
    dispatch(addFavorite(hero))
  }

  return (
    <>
    <div style={{padding: '10px'}}>
      <div className="card" style={{width: '16rem', marginBottom: '10px'}}>
        <span style={{textAlign: 'center', fontWeight: 800}}>{props.hero.localized_name}</span>
        <Link type='button' to={`/heroes/${props.hero.id}`}><img className="card-img-top" src={`https://api.opendota.com${props.hero.img}`} alt=""></img></Link>
        {useLocation().pathname === '/' && 
        <button className="btn btn-sm" style={{fontWeight: 400, textAlign: 'center'}} onClick={() => addToFavorite()}>+ Favorite</button> }
      </div>
    </div>
    </>
    )
}

export default HeroList;
