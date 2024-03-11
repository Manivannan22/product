import { useState, useEffect } from "react"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader} from "@/components/ui/card"
import './StarRating.css';
import ProductDetailsPage from "./carousel";
import axios from "axios";
import Footerr from "@/components/footer";


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
     <div style={{height: "40vh"}}>
     <Footerr />
     </div>
    </div>
  
  )
}

export default HomePage;