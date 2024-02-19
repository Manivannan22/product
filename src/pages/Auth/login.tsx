import axios from "axios";
import { useFormik } from "formik";
import { FiShoppingCart } from "react-icons/fi";
import { toast } from "sonner";
import * as Yup from 'yup';


const Login = () => {

    const handleClick = async(val:any) => {
        await axios
        .post(`http://localhost:5000/api/log_in`, val)
        .then((res) => {
          console.log(res);    
          formik.resetForm();
          toast.success("Login sucessful")
        })
        .catch((err) => {
          console.error(err);
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
                toast.error("error")
             }
        },
      });



    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className=" flex justify-center text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            <FiShoppingCart className=" h-8 w-10 mr-4"/>
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
                    required
                    {...formik. getFieldProps('password')}
                    className=" ml-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {formik.touched.password && formik.errors.password ? (
                  <div>{formik.errors.password}</div>
                  ) : null}
                </div>
                <div className="text-sm">
                    <a href="/forgotPassword" className="flex justify-end mt-2 font-semibold text-gray-600 hover:text-black">
                      Forgot password?
                    </a>
                  </div>
              </div>
  
              <div>
                
                <button
                  type="submit"
                  className="flex w-full justify-center mt-2 rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Log in
                </button>
                
              </div>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?
              <a href="/signup" className="font-semibold leading-6 text-gray-600 hover:text-black">
               signup
              </a>
            </p>
          </div>
         </form>
        </div>
      </>
    )
  }

  export default Login
  