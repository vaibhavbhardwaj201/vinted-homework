import React from 'react'
import Image from './Image'

import { useGlobalContext } from '../context'

const Overlay = () => {
    const {classActive, favourite} = useGlobalContext();
  return (
    <div className={classActive ? 'overlay-bar is-active' : 'overlay-bar'}>
        {favourite.map((elem, index) => <Image url={elem.url} title={elem.title} secret={elem.secret} key={index} />)}
        
    </div>
  )
}

export default Overlay