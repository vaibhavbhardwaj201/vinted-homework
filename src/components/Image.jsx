import React, {useEffect} from 'react'

import { useGlobalContext } from '../context'



const Image = ({url,title, secret}) => {

    const {favourite, setFavourite} = useGlobalContext();

    const inFav = favourite.some((item) => item.url === url)

    useEffect(() => {
      const storedData = localStorage.getItem('fav')
      if(storedData) {
        setFavourite(JSON.parse(storedData))
      }
    }, [])
    

    const addToFavourite = (url, title, secret) => {
        
        if(!inFav) {
            const newData = [...favourite, {url, title, secret}]
            setFavourite(newData)
            localStorage.setItem('fav', JSON.stringify(newData))
        }

    }

    const removeFromFavourite = url => {
        const newData = favourite.filter((item) => item.url !== url)
        setFavourite(newData)
        localStorage.setItem('fav', JSON.stringify(newData))
    }

    return <>
        <div className='card'>
            <div className="image-overlay">
                <div className="overlay-text">
                    <div className="title-text">
                    {title}
                    </div>
                    <div className="line-sep"></div>
                    <div className="extra-text">{secret}</div>
                    {inFav ?
                    <button className="image-button" onClick={() => removeFromFavourite(url)} >Remove</button> :
                <button className="image-button" onClick={() => addToFavourite(url, title, secret)} >Favourite</button>
                    }
                </div>
                
            </div>
            <img className='images' src={url} alt="img" />    
        </div>
    </>
}

export default Image