import React, { useEffect } from 'react'
import HeroList from '../components/HeroList'
import { useSelector, useDispatch } from 'react-redux'
import { fetchHeroes } from '../store/actions/heroAction'
import '../App.css';

function Welcome() {
  
  const dispatch = useDispatch();

  const { heroes, loading, error } = useSelector(state => state.hero) 

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
      <div className="container">
        <div className="row" style={{marginTop: '50px'}}>
            {
              heroes.map(el => {
                  return (
                    <HeroList key={el.id} hero={el}/>      
                  )            
                })
            }  
        </div>
      </div>
    </>
    )
}

export default Welcome;
