import React, { useState, useEffect, useContext } from "react"


const AppContext = React.createContext()


const AppProvider = ({children}) => {


  const API_KEY = import.meta.env.VITE_APP_FLICKR_API
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL


  const [item, setItem] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [isEnterPressed, setIsEnterPressed] = useState(false)
  const [classActive, setClassActive] = useState(false)

  const [favourite, setFavourite] = useState([])

  const [isFav, setIsFav] = useState(false)



      // function to call api
  const fetchDataFromApi = async (keyword, page) => {
    if(keyword === ""){
      keyword = 'lithuania'
    }
    const params = `api_key=${API_KEY}&text=${keyword}&format=json&nojsoncallback=1&per_page=12&page=${page}`

    try {
        const res = await fetch(BASE_URL + params);
        const data = await res.json()
        const newItems = data.photos.photo.map((element) => {
            
        const photoObj = {
            url: `https://live.staticflickr.com/${element.server}/${element.id}_${element.secret}_w.jpg`,
            title: element.title,
            secret: element.secret,
            id: element.id
        };

        return photoObj;
    });

    // check for duplicate image
    const itemsExist = newItems.some(newItem => item.some(item => item.url === newItem.url));


    if (!itemsExist) {
        setItem(prevItems => [...prevItems, ...newItems]);
      }

    setLoading(false)
    } catch (error) {
        console.log(error);
    }


}

// use effect to call api function 
  useEffect(() => {
    if(isEnterPressed && search !== '') {
        setItem([])
        setPage(1)
        setIsEnterPressed(false)
    } else {
        fetchDataFromApi(search, page);

    }

    // to implement infinite scroll functionality
    window.addEventListener("scroll", scrollHandle)

    return () => window.removeEventListener("scroll", scrollHandle)

}, [isEnterPressed, search, page])




  const scrollHandle = () => {
    if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
      setLoading(true)
      setPage(prev => prev + 1)
    }
  }


    return <AppContext.Provider value={{item, setItem, page, loading,isFav, setIsFav, search, favourite, setFavourite, setSearch, isEnterPressed, setIsEnterPressed, classActive, setClassActive}}>
            {children}
        </AppContext.Provider>;
}

const useGlobalContext = () => {
    return useContext(AppContext)
}


export {AppContext, AppProvider, useGlobalContext}