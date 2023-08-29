import React, { useContext } from 'react'
import { useReducer } from 'react'
import { createContext } from 'react'
import reducer from '../Reducers/SearchReducers'

const SearchContext = createContext()

const initialState={
    destination: "",
    DateRangeState: [
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ],
    options: {
        adult: 1,
        child: 0,
        room: 1
      },
    minimumPrice: 0,
    maximumPrice: 9999,
    data: []    
}

const SearchContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState)

    // Set Destination Function
    const setDestination =(e)=>{
        dispatch({
            type: "All-Ok",
            payload: e.target.value
        })
    }
    // Set DateRangeState 
    const setDateRangeState=(arr)=>{
      dispatch({
        type:"Set-Date-Range-State",
        payload: arr
      })
    }
    // Handle Options
    const handleOptions = (name, WtoDO)=>{
      dispatch({
        type: "Set-Options",
        name,
        WtoDO
      })
    }


    return <SearchContext.Provider value={{...state, dispatch, setDestination,setDateRangeState, handleOptions}}>
            {children}
    </SearchContext.Provider>
}

const useSearch = ()=>{
  return useContext(SearchContext)
}

export {SearchContextProvider, SearchContext, useSearch}