import { SiteHeader } from "@/components/site-header"
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link,
	Routes,
} from "react-router-dom"
import Main from "../src/pages/FrontPage/first"
import Front from "../src/pages/FrontPage/front"
import ProductDetails from "./pages/productDetails"
import AddProduct from "./pages/FrontPage/addProducts"
import HomePage from "../src/pages/FrontPage/first"
import ProductDetailsPage from "./pages/FrontPage/carousel"
import AddToCart from "./pages/addToCart"
import Login from "./pages/Auth/login"
import Signup from "./pages/Auth/signup"

function App() {
	return (
		<>
			<div className="relative flex min-h-screen flex-col">
				<SiteHeader />
				<Routes>
					<Route path="/cart" element={<AddToCart />} />
					<Route path="/Product" element={<ProductDetailsPage />} />
					<Route path="/addProduct" element={<AddProduct />} />
					<Route path="/about" element={<Front />} />
					<Route path="/:id" element={<ProductDetails />} />
					<Route path="/addtocart" element={<AddToCart />} />
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />

					
				</Routes>
			</div>
		</>
	)
}

export default App
