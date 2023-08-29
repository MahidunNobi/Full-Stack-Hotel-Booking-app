import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useSearch } from '../Context/SearchContext'

const useFetch = (url) => {

    const {dispatch} = useSearch()

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState(false)

useEffect(()=>{
    const fetchData = async()=>{
        setLoading(true)
        try {
            const res = await axios.get(url);
            setData(res.data);
            dispatch({
                type: "Load_Data",
                payload: res.data
            });
        } catch (error) {
            setErr(true)
            console.log(error);
        }
        setLoading(false)
        
    };
    fetchData();

}, [])

const reFetchData = async()=>{
    setLoading(true)
    try {
        const res = await axios.get(url);
            setData(res.data);
            dispatch({
                type: "Load_Data",
                payload: res.data
            });
    } catch (error) {
        setErr(true)
        console.log(error);
    }
    setLoading(false)
};

    return {data, loading, err, reFetchData}
}

export default useFetch