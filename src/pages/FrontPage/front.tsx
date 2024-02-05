import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Badge} from "@/components/ui/badge";
// import { Link } from "react-router-dom"


const Front = () => {

    const productArray = [
        {
            title: "Camera",
            desc: "",
            url: "https://rukminim2.flixcart.com/image/416/416/xif0q/camera-bag/tote/d/t/i/gcra100-cospex-original-imagppk5zjzpychh.jpeg?q=70&crop=false"
        },
        {
            title: "USB Hub",
            desc: "",
            url: "https://rukminim2.flixcart.com/image/416/416/koad9jk0/usb-gadget/x/h/w/100hb-zebronics-original-imaf8r2gbb3rzqfh.jpeg?q=70&crop"
        },
        {
            title: " portable USB Hub",
            desc: "Portable Cable, ",
            url: "https://rukminim2.flixcart.com/image/416/416/xif0q/usb-gadget/f/m/u/-original-imagppnd3hkuv6k4.jpeg?q=70&crop=false"
        },
        {
            title: "Samsung G-s21",
            desc: "",
            url: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/a/y/g/-original-imagtnqkutcyzhgq.jpeg?q=70&crop=false"
        },
        {
            title: "LG - AC",
            desc: "",
            url: "https://rukminim2.flixcart.com/image/416/416/xif0q/air-conditioner-new/o/c/n/-original-imagmptfzaejnzwd.jpeg?q=70&crop=false"
        },
        {
            title: "Dell - Alienware",
            desc: "",
            url: "https://www.flipkart.com/dell-alienware-intel-core-i9-12th-gen-12900h-32-gb-1-tb-hdd-1-ssd-windows-11-home-8-gb-graphics-nvidia-geforce-rtx-3070-ti-360-hz-x15-r2-gaming-laptop/p/itm955f07d54a6c6?pid=COMGMZF39HRSYE7Q&lid=LSTCOMGMZF39HRSYE7Q8GMVC3&marketplace=FLIPKART&fm=neo%2Fmerchandising&iid=M_7420753c-307a-433b-a8dc-ff98e057ec74_9_W08FB4AVY13Q_MC.COMGMZF39HRSYE7Q&ppt=browse&ppn=browse&otracker=clp_pmu_v2_Dell%2BGaming%2BLaptops_2_9.productCard.PMU_V2_DELL%2BAlienware%2BIntel%2BCore%2Bi9%2B12th%2BGen%2B12900H%2B-%2B%252832%2BGB%252F1%2BTB%2BHDD%252F1%2BTB%2BSSD%252FWindows%2B11%2BHome%252F8%2BGB%2BGraphics%252FNVIDIA%2BGeForce%2BRTX%2B3070%2BTi%252F360%2BHz%2529%2BAlienware%2Bx15%2BR2%2BGaming%2BLaptop_gaming-laptops-store_COMGMZF39HRSYE7Q_neo%2Fmerchandising_1&otracker1=clp_pmu_v2_PINNED_neo%2Fmerchandising_Dell%2BGaming%2BLaptops_LIST_productCard_cc_2_NA_view-all&cid=COMGMZF39HRSYE7Q"
        },
    ]

    return (
        <div>
            <div >
                <div >
         <ResizablePanelGroup
      direction="horizontal"
      className="w-auto rounded-lg border mt-1">
        {/* <Card className="w-60">  */}
      <ResizablePanel defaultSize={40} >
        <div className="flex justify-center">
        <Carousel
        opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-20 "
    >
        <CarouselContent className="mt-16 h-[200px]">
        {Array.from({ length: 7 }).map((_, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/4">
              <Card className="">
                <CardContent className="flex justify-center p-3">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
        </Carousel>
       

        <div className="flex justify-center ">
          <img className="object-cover" src="https://rukminim2.flixcart.com/image/416/416/xif0q/usb-gadget/f/m/u/-original-imagppnd3hkuv6k4.jpeg?q=70&crop=false" />
        </div>
        </div>
        <div className="flex justify-center mt-4">
            <Button className="bg-orange-400 hover:bg-orange-700">ADD TO CART</Button>
            <Button className="ml-2 bg-gray-400 hover:bg-gray-700">BUY NOW</Button>
        </div>
        
       
        
      </ResizablePanel>
      {/* </Card> */}
      {/* <ResizableHandle /> */}
      <ResizablePanel defaultSize={60}>
        <ResizablePanelGroup direction="vertical">
          {/* <ResizableHandle /> */}
          <ResizablePanel defaultSize={75}> 
            {/* <Card> */}
    <CardTitle className="mt-6 ml-2 font-normal">Portable 4-Port USB 3.0 HUB (Black)</CardTitle> 
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-8">
            <div>
              <div className="text-wrap mt-2">
              <div className="flex gap-3 text-gray-500"> 
              <Badge className="bg-green-400 w-8 justify-center">4.5
              {/* <img className="w-2 h-2" src="Star" alt="star"/> */}
              </Badge>
               2,534 Ratings & 280 Reviews <img className="w-16" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"/>
              </div>
              <div className="flex gap-1 mt-4 text-2xl">
              <div>
                ₹999
              </div>
              <div className="text-sm text-slate-600">
                {/* "₹""1472" */}
              </div>
              <div>
                 <span className="text-lg text-green-600">32% off</span>
              </div>
              </div>
              <div className="mt-4">
               <text className="font-bold"><h2>Available  Offers</h2>
               <li className="text-black-400 mt-2 font-light"><span className="font-bold">Bank Offer</span>10% off on Canara Bank Credit Card Transactions, up to ₹1,500 on orders of ₹5,000 and above <p className="text-blue-400">T&C</p></li>
               <li className="text-black-400 mt-2 font-light"><span className="font-bold">Bank Offer</span>Flat ₹1,000 off on OneCard Credit Card and Credit EMI Transactions on orders of ₹10,000 and above <p className="text-blue-400">T&C</p></li>
               <li className="text-black-400 mt-2 font-light"><span className="font-bold">Bank Offer</span>8% off on Yes Bank Credit Card EMI Transactions, up to ₹2,000 on orders of ₹10,000 and above <p className="text-blue-400">T&C</p></li>
               <li className="text-black-400 mt-2 font-light">Buy for 100 get ₹225 off your Next Buy <p className="text-blue-400">T&C</p></li>
               </text>
              </div>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      {/* <CardFooter className="flex justify-between">
      <Link to="about" className=" hover:bg-gray-200 w-12 text-center text-blue-500 rounded-md">View</Link>
      </CardFooter> */}
    {/* </Card> */}
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
    </div>
    </div>
        
<div className="flex justify-center mt-24">
  <div>
    <Carousel
      opts={{
      align: "start",
    }}
      className="w-8/12 ml-24"
    >
    <CarouselContent>
     {productArray.map((item, index) => {
        return <CarouselItem key={index} className="md:basis-1/6 lg:basis-1/3">
        <div className="p-1">
        <Card>
        <CardContent className="flex aspect-square items-center justify-center p-6 ">
         <span className="text-w-2"><img src={item.url} /></span>
        </CardContent>
        </Card>
        </div>
        </CarouselItem>
    })}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
  </div>
  </div>
  </div>
  )
}

export default Front;