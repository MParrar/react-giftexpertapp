import { useState } from "react"
import { useEffect } from "react";
import { getGif } from "../helpers/getGif";

export const useFetchGif = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })
    useEffect(() => {
        getGif(category)
            .then(img => {


                console.log(img)
                setState({
                    data: img,
                    loading: false
                });



            })
    }, [category])
    // useEffect(() => {
    //     getGif(category).then(setImage)
    // }, [category])

    return state;
}
