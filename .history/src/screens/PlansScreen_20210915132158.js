import React, { useEffect } from 'react'
import db from '../firebase'
import './ProfileScreen.css'

const PlansScreen = () => {
  const [product, setProduct] = React.useState([])
  useEffect(() => {
    db.collection('products')
      .where('active', '==', true)
      .get()
      .then((querySnapshot) => {
        const products = {}
        querySnapshot.forEach((productDoc) => {
          products[productDoc.id]
        })
      })
  }, [])

  return <div className='plans'></div>
}

export default PlansScreen
