import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif'
// import { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem'
// import { getGif } from '../helpers/getGif'

export const GifGrid = ({ category }) => {
    // const [image, setImage] = useState([])
    const { data: img, loading } = useFetchGif(category);
    console.log(loading)


    // getGif();
    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {loading && <p>Loading....</p>}

                {img.map((img) => (
                    <GifGridItem
                        key={img.id}
                        {...img} />
                ))
                }

            </div>
        </>
    )
}
