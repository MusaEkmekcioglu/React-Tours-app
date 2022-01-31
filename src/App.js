import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(false)

  const deleteItem = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    try {
      setLoading(true)
      const response = await fetch(url)
      const data = response.json()

      data.then((datas) => setTours(datas))
      console.log(tours)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  console.log(tours)
  useEffect(() => {
    fetchTours()
  }, [])

  if (loading) {
    return <Loading />
  } else if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  } else {
    return <Tours tours={tours} deleteItem={deleteItem} />
  }
}

export default App
