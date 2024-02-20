import axios from "axios";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { toast, useToast } from "@/components/ui/use-toast";
import { ChangePassword, ForgotPasswordForm, OtpForm } from "./forgotForm";

function ForgotPassword() {
  const token = localStorage.getItem("ACCESS_TOKEN");
  const [_email, setEmail] = useState("");
  const [_errorMsg, setErrorMsg] = useState("");
  const [otp, _setOtp] = useState("");
  const [_showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  
  const renderForm = () => {
    switch (step) {
      case 1:
        return <ForgotPasswordForm setStep={setStep} />;
      case 2:
        return <OtpForm setStep={setStep} />;
      default:
        return <ChangePassword />;
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("*Email required"),
    }),
    onSubmit: async (values) => {
      // try {
      //   const response = await axios.post(`http://localhost:5000/api/forgot_password`, values);
      //   console.log(response);
      //   setEmail(response.data.email);
      //   setShowModal(true);
      //   toast({ 
      //    variant: "default",
      //    description: "send the email successful"})
      // } catch (error) {
      //   console.error(error);
      //   toast({ description: "email address invalid"});
      // }
    },
  });

  const handleOtpSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/VerifyPassword', { otp });
      if (response.data.success) {
        setShowModal(false);
        toast({
          variant:"default",
          description:"Password verified"
        })
      } else {
        setErrorMsg("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setErrorMsg("An error occurred while verifying OTP. Please try again later.");
    }
  };
  
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div>
      <div className="w-full h-screen flex">
        <div className="flex h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h1 className="text-start text-3xl font-bold leading-9 mb-2 tracking-tight text-gray-900">
              Forgot Password?
            </h1>
          </div>

          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={formik.handleSubmit}>
              {renderForm()}
              {/* <div>
                <div className="mt-5">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="block w-full placeholder:text-md rounded-full p-7 text-md border-0 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="ml-5 text-red-600">
                      {formik.errors.email}
                    </div>
                  )}
                  {errorMsg && <div className="ml-5 text-red-600">{errorMsg}</div>}
                </div>
              </div> */}
              {/* <div>
                <Button
                  type="submit"
                  className="flex w-full justify-center bg-gray-700 rounded-full p-7 text-lg leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <Link to={"/"}>
                  <span>Submit</span>
                  </Link>
                </Button>
              </div> */}
            </form>
            <div className="flex items-center mt-5 justify-center">
              <div className="text-sm flex flex-col">
                <Link
                  to="/signup"
                  className="text-slate-500 text-md mb-2 text-center hover:text-slate-900"
                >
                  Don't have an account yet? Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
