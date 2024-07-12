import { useEffect } from "react";
import {useLocation as   UseLocation } from "react-router-dom";

export default function ScrollToTop(){
const{pathname} = UseLocation()

useEffect(() =>{
    window.scrollTo(0,0)

},[pathname]);
return null;

}