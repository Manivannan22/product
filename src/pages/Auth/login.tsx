import { siteConfig } from "@/config/site";
import axios from "axios";
import { useFormik } from "formik";
import { Link } from "lucide-react";
import React from "react"
import { FiShoppingCart } from "react-icons/fi";
import * as Yup from 'yup';


const Login = () => {

    const handleClick = async(val:any) => {
        await axios
        .post(`http://localhost:5000/api/log_in`, val)
        .then((res) => {
          console.log(res);    
          formik.resetForm()
        })
        .catch((err) => {
          console.log(err);
        })
      }

    const formik = useFormik({
        initialValues: {
          email: '',
          password:""
        },
        validationSchema: Yup.object({
          email: Yup.string().email('Invalid email address').required('Required'),
          password: Yup.string().required('Required'),
        }),

        onSubmit: values => {
            if (values?.email) {
                handleClick(values)
             }else{
                alert("error")
             }
        },
      });



    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
             <Link to="/" className="flex items-center ">
             <FiShoppingCart className="h-20 w-20"/>
        {/* <span className="inline-block font-bold">{siteConfig.name}</span> */}
      </Link>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Welcome E-Com
            </h2>
          </div>
          <form onSubmit={formik.handleSubmit} >
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email Id
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    type="email"
                    autoComplete="off"
                    required
                    {...formik. getFieldProps('email')}

                    className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2"
                  />
                  {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                  ) : null}
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    type="password"
                    autoComplete="off"
                    {...formik. getFieldProps('password')}
                    required
                    className=" ml-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="text-sm">
                    <a href="#" className="flex justify-end mt-2 font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Log in
                </button>
              </div>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?
              <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
               signup
              </Link>
            </p>
          </div>
         </form>
        </div>
      </>
    )
  }

  export default Login
  