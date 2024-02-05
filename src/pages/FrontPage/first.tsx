// import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader} from "@/components/ui/card"
import './StarRating.css';
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { HoverCard, HoverCardTrigger } from "@radix-ui/react-hover-card";
// import { Star } from "@/components/ui/star"



const Main = () => {
  // const [rating, setRating] = useState<number>(0);
  const handleClick = () => {
  }

  return (
    <div className="flex justify-center mt-10">
      <HoverCard>
        <HoverCardTrigger>
    <Card className="w-[250px] hover:bg-slate-50 shadow-lg"  onClick={handleClick}>
      <CardHeader>
        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/usb-gadget/f/m/u/-original-imagppnd3hkuv6k4.jpeg" />
        {/* <CardTitle className="mt-10">Create project</CardTitle> */}
        <CardDescription className="text-blue-400">Portable 4-Port USB.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <div className="text-xs">Black</div>
              <div className="text-wrap md:text-balance">
              <div className="flex gap-3"> 
              <Badge className="bg-green-400 w-8 justify-center">4.5
              <img className="w-2 h-2" src="Star" alt="star"/>
              </Badge>
               (2K) <img className="w-16" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"/>
              </div>
              <div className="flex gap-1 mt-1">
              <div>
                ₹999
              </div>
              <div className="text-sm text-slate-600">
                {/* "₹""1472" */}
              </div>
              <div>
                 <span className="text-sm text-green-600">32% off</span>
              </div>
              </div>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
      <Link to="about" className=" hover:bg-gray-200 w-12 text-center text-blue-500 rounded-md">View</Link>
      </CardFooter>
    </Card>
    </HoverCardTrigger>
    </HoverCard>
    </div>
  )
}

export default Main;