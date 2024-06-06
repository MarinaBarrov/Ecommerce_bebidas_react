import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Beer = () => {
    const [beer, setBeer] = useState({})
    const navigate = useNavigate();
    const params = useParams();

 
    const getBeer = async()=>{
        const res = await fetch(`https://api.sampleapis.com/beers/ale/${params.id}`)
        const data = await res.json()
        console.log(data);
        setBeer(data)
    }

    useEffect(()=>{
        getBeer(params.id)
    }, [])
    
  
  
  return (
    <div>

        <h2>Cerveza numero {params.id}</h2>
        <div className='card' key={params.id}>
            <img src={beer.image} alt="beer-detail" />
            <p>{beer.name}</p>
            <p>{beer.price} </p>
        </div>
        <button onClick={() => navigate(-1)} >Go back</button>
    </div>

  )

}

export default Beer