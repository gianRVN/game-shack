import React from 'react'
import HeroList from '../components/HeroList'
import { useSelector} from 'react-redux'

function FavoritePage() {
  const { favorites, loading, error } = useSelector(state => state.favorite) 
  

  if(loading) {
    return (
      <>
        <div style={{textAlign: 'center', marginTop: '100px'}}>  
          <img src={'https://media.giphy.com/media/eHKM1zH4JBMk/giphy.gif'}alt='' style={{borderRadius: '50%', textAlign: 'center'}} ></img>
          <h1 style={{textAlign: 'center', color: 'white'}}>- - - You Have No Favorite Hero Yet - - -</h1>
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
              favorites.map(el => {
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

export default FavoritePage;
