import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import {getArticles} from "../../features/articleslice";
const Listarticles = () => {
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(getArticles())
    }, [dispatch])
  return (
    <div>
      
    </div>
  )
}

export default Listarticles
