import React from 'react'
import Loader from './Loader';

import { useGlobalContext } from '../context';
import Image from './Image';


const CardImage = () => {

  const {item, loading} = useGlobalContext()

  return (
    <>
      <div className='cards-container'>
          {item.map((url, index) => <Image url={url.url} title={url.title.length > 15 ? url.title.slice(0, 15) : url.title.length === 0 ? 'Not Available' : url.title} secret={url.id} key={index} />)}
        </div>
        <div className="cards-container">
            {loading && <Loader />}
        </div>
      </> 
  )
}

export default CardImage