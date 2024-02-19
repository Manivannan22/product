import axios from "axios";
import { useFormik } from "formik";
import { FiShoppingCart } from "react-icons/fi";
import * as Yup from 'yup';


const Signup = () => {

const handleClick = async(val:any) => {
    await axios
    .post(`http://localhost:5000/api/sign_up`,val)
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
          name: '',
          email: '',
          password:"",
          confirmpassword: "",
        },
        validationSchema: Yup.object({
          name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          password: Yup.string().required('Required'),
          confirmpassword: Yup.string().required('Required')
        }),        

        onSubmit: values => {
         if (values?.password === values?.confirmpassword) {
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
            <h2 className="flex justify-center text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            <FiShoppingCart className=" h-8 w-10 mr-4"/>
              Welcome E-Com
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={formik.handleSubmit} >
            
            <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                 User Name
                </label>
                <div className="mt-2">
                  <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    id="name"
                    type="text"
                    autoComplete="off"
                    required
                    {...formik. getFieldProps('name')}
                    />
                    {formik.touched.name && formik.errors.name ? (
                    <div>{formik.errors.name}</div>
                    ) : null}
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email Id
                </label>
                <div className="mt-2">
                  <input className=" ml-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    id="email"
                    type="email"
                    autoComplete="off"
                    required
                    {...formik. getFieldProps('email')}
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
                  <input className=" ml-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    id="password"
                    type="password"
                    autoComplete="off"
                    required
                    {...formik. getFieldProps('password')}
                  />
                  {formik.touched.password && formik.errors.password ? (
                  <div>{formik.errors.password}</div>
                  ) : null}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Confirm Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="confirmpassword"
                    type="password"
                    autoComplete="off"
                    {...formik. getFieldProps('confirmpassword')}
                    required
                    className=" ml-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="text-sm">
                    <a href="#" className="flex justify-end mt-2 font-semibold text-gray-600 hover:text-black">
                      Forgot password?
                    </a>
                  </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Sign up
                </button>
              </div>
          </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?
              <a href="/" className="font-semibold leading-6 text-gray-600 hover:text-black">
               Login
              </a>
            </p>
          </div>
        </div>
      </>
    )
  }

  export default Signup

// function setErrorMessage(arg0: string) {
//     throw new Error("Function not implemented.");
// }
  