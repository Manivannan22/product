import { useState, useEffect, Component } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader} from "@/components/ui/card"
import './StarRating.css';
import ProductDetailsPage from "./carousel";
import axios from "axios";
// import { Badge } from "@/components/ui/badge";
// import { Link } from "react-router-dom";
// import { HoverCard, HoverCardTrigger } from "@radix-ui/react-hover-card";
// import { Carousel, IconButton } from "@";
// import { Star } from "@/components/ui/star"



const HomePage = () => {
  const [products, setProducts] = useState([]);
  // const [rating, setRating] = useState<number>(0);

  
  const handleClick = async() => {
    await axios
    .get("http://localhost:5000/api/get_product")
    .then((res) => {
      console.log(res);
      setProducts(res?.data?.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    handleClick()
  },[])

  return (
    <div style={{width:"100%"}}> 
     <ProductDetailsPage products={products}/>
    </div>
  
  )
}

export default HomePage;