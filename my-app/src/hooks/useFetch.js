import { useEffect } from "react"
import { useDispatch } from 'react-redux'
import { fetchHeroes } from '../store/actions/heroAction'

function useFetch() {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('berjalan useEffect')
    fetch(`https://api.opendota.com/api/heroStats`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data, 'ini dataku ya')
      // dispatch(deleteHeroes())
      dispatch(fetchHeroes(data))
    })
    .catch(err => {
      console.log(err, 'ini err')
    })
    // eslint-disable-next-line
  }, [])
}

export default useFetch