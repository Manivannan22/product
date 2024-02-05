import { SiteHeader } from "@/components/site-header"


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Main from '../src/pages/FrontPage/first'
import Front from '../src/pages/FrontPage/front'



function App() {


  return (
    <>
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader />
        <Routes>
    <Route path='/' element={<Main />}/>
    <Route path="/about" element={<Front />} />
 </Routes>
      </div>
    </>
  )
}

export default App
