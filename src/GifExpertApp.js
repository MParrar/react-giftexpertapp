import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertAPP = () => {
    const [categories, setCategory] = useState(['Naruto'])
    return (
        <div>
            <h2>GifExpertAPP</h2>
            <AddCategory setCategories={setCategory} />
            <hr />
            <ol>
                {
                    categories.map(category =>
                        <GifGrid key={category}
                            category={category}
                        />


                    )
                }
            </ol>
        </div>
    )
}

