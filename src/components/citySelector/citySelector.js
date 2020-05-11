import React from "react";
import {useDispatch, useSelector} from "react-redux"
import {setActiveCity, getAxiosData} from "../../redux/actions";

export default () => {
    const  cities = useSelector(state => state.cities)
    const dispatch = useDispatch()

    const setCity = (event) =>{
        dispatch(setActiveCity(event.target.value))
        dispatch(getAxiosData(event.target.value))
    }

    return (
        <select onChange={setCity}>
            {cities.map((item,index)=>{return <option key={index}>{item}</option>})}
        </select>
    )
}
