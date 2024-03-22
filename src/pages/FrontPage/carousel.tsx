import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import headphone from "../../assets/image1.jpg";
import clock from "../../assets/image2.jpg";
import shoes from "../../assets/image3.jpg"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

  export default function ProductDetailsPage({products}:any) {

    // products.forEach((product: any) => {
    //   if(!categories[product.category]) {
    //     categories[product.category]=[];
    //   }
    //   categories[product.category].push(product);
    // });

    return (
      <div className="bg-white">
        <div className="flex  justify-center">
        <div className=" w-full h-96">
        <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{delay: 3000}}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      effect="fade"
    >
      <SwiperSlide>
      {/* <div className="object-cover"> */}
      <img src={headphone} alt="Headphones" className="w-full h-96 flex justify-center" />
      <div className="text-start ">
        <h2 className="text-xl font-bold">Headphones</h2> 
        <p className="text-gray-600">High-quality sound experience</p>
      </div>
      {/* </div> */}
      </SwiperSlide> 
      <SwiperSlide> 
      <img src={clock} alt="Clock" className="w-full h-96 object-cover" />
      <div className="text-center p-8">
        <h2 className="text-xl font-bold">Clock</h2>
        <p className="text-gray-600">Elegant timepiece for your home</p>
      </div>
      </SwiperSlide>  
      <SwiperSlide>
      <img src={shoes} alt="Shoes" className="w-full h-96 flex justify-center" />
      <div className="text-center p-8">
        <h2 className="text-xl font-bold">Shoes</h2>
        <p className="text-gray-600">Comfortable and stylish footwear</p>
      </div>
      </SwiperSlide>
    </Swiper>
    </div>
        </div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product:any, index:number) => (
              <Link to={`/${product?._id}`}>              
              <div key={index} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                      alt={product.name}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">₹{product.price}</p>
                  <p className="text-sm font-medium text-gray-900">{product.category}</p>
                </div>
              </div>
              </Link>

            ))}
          </div>
        </div>
        
      </div> 
    )
  }
  