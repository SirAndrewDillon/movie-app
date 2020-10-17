import React, {useState, useEffect} from 'react'

// Config
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config'

// Hook


// Image 
import NoImage from '../images/no_image.jpg'

 const Home = () => {

    const [state, setState] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    return (
        <div>
            HOMEPAGE 
        </div>
    )
}

export default Home
