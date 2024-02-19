import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Sidebar } from "lucide-react";

function ForgotPassword() {
  const token = localStorage.getItem("ACCESS_TOKEN");
  const [modalStatus, setModalStatus] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState();
  const navigate = useNavigate();

  const { isLoading: isFpLoad, mutate: forgotPassword } = useMutation(
    async (data) => {
      // return await AuthServices.ForgotPassword(data);
    },
    {
      onSuccess: (res) => {
        if (res.data.user.isActive) {
          setModalStatus(true);
          setEmail(res.data.user.email);
        }
      },
      onError: (err) => {
        let status = "";
        if (err.response.data?.data) {
          status = err.response.data?.data;
          setErrorMsg(status);
        } else {
          status = err.response.data?.message;
          setErrorMsg(status);
        }
        console.log(err);
      },
    }
  );

  const { isLoading: isResetLoad, mutate: resetPassword } = useMutation(
    async (_data) => {
      // return await AuthServices.resetPassword(data);
    },
    {
      onSuccess: (res) => {
        if (res.code === 200) {
          setEmail("");
          setErrorMsg(res?.message);
          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else {
          setErrorMsg("Something went wrong");
        }
      },
      onError: (err) => {
        let status = "";
        if (err.response.data?.data) {
          status = err.response.data?.data;
          setErrorMsg(status);
        } else {
          status = err.response.data?.message;
          setErrorMsg(status);
        }
        console.log(err);
      },
    }
  );

  const resetFormik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("*Password required"),
      confirmPassword: Yup.string().required("*Confirm password required"),
    }),
    onSubmit: (values) => {
      if (values?.password === values?.confirmPassword) {
        const newObject = { ...values };
        // delete newObject.confirmPassword;
        setForm({ ...newObject, email: email});
        setConfirmDialog(true);
      } else {
        setErrorMsg("Password not matched");
      }
    },
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("*Email required"),
    }),
    onSubmit: (values) => {
      forgotPassword(values);
    },
  });

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div>
      <div className="w-full h-screen flex">
        <Sidebar />
        <div className="flex h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h1 className="text-start text-3xl font-bold leading-9 mb-2 tracking-tight text-gray-900">
              Forgot Password?
            </h1>
          </div>

          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={formik.handleSubmit}>
              <div>
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
              </div>
              <div>
                <Button
                  disabled={isFpLoad && true}
                  type="submit"
                  className="flex w-full justify-center bg-blue-500 rounded-full p-7 text-lg leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <span>Submit</span>
                </Button>
              </div>
            </form>
            <div className="flex items-center mt-5 justify-center">
              <div className="text-sm flex flex-col">
                <Link
                  to="/signup"
                  className="text-slate-500 text-md mb-2 text-center hover:text-slate-900"
                >
                  Don't have an account yet? Sign Up
                </Link>
                <Link
                  to="/"
                  className="text-slate-500 text-md text-center hover:text-slate-900"
                >
                  Back to Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        open={modalStatus}
        onOpenChange={() => {
          if (!isResetLoad) {
            setModalStatus(false);
          }
        }}
      >
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Reset Password</DialogTitle>
          </DialogHeader>
          <form onSubmit={resetFormik.handleSubmit}>
            <div className="py-4">
              <div className="items-center gap-4">
                <label className="text-right font-semibold">New Password</label>

                <div className="mt-2">
                  <Input
                    style={{ marginTop: "1rem" }}
                    name="password"
                    onChange={resetFormik.handleChange}
                    onBlur={resetFormik.handleBlur}
                    value={resetFormik.values.password}
                    className={`password-input dark:text-dark-text100 dark:bg-dark-bg100 border ${
                      resetFormik.errors.password &&
                      resetFormik.touched.password
                        ? "border-[#BA3636]"
                        : "dark:border-[#525252]"
                    } block w-full placeholder:text-md w-full rounded-full p-4 text-md border-0 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6`}
                  />
                  {resetFormik.touched.password &&
                    resetFormik.errors.password && (
                      <div className="ml-5 text-red-600">
                        {resetFormik.errors.password}
                      </div>
                    )}
                  {errorMsg && <div className="ml-5 text-red-600">{errorMsg}</div>}
                </div>
              </div>
              <div className="items-center gap-4 mt-4">
                <label className="text-right font-semibold">
                  Confirm Password
                </label>
                <div className="mt-2">
                  <Input
                    style={{ marginTop: "1rem" }}
                    name="confirmPassword"
                    onChange={resetFormik.handleChange}
                    onBlur={resetFormik.handleBlur}
                    value={resetFormik.values.confirmPassword}
                    className={`password-input dark:text-dark-text100 dark:bg-dark-bg100 border ${
                      resetFormik.errors.confirmPassword &&
                      resetFormik.touched.confirmPassword
                        ? "border-[#BA3636]"
                        : "dark:border-[#525252]"
                    } block w-full placeholder:text-md w-full rounded-full p-4 text-md border-0 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6`}
                  />
                  {resetFormik.touched.confirmPassword &&
                    resetFormik.errors.confirmPassword && (
                      <div className="ml-5 text-red-600">
                        {resetFormik.errors.confirmPassword}
                      </div>
                    )}
                  {errorMsg && <div className="ml-5 text-red-600">{errorMsg}</div>}
                </div>
              </div>
            </div>
            <div className="justify-end flex">
              <Button
                disabled={isResetLoad && true}
                type="reset"
                className="rounded-full mt-3"
                variant="outline"
                onClick={() => {
                  setModalStatus(false);
                  setEmail("");
                }}
              >
                Cancel
              </Button>
              <Button
                disabled={isResetLoad && true}
                type="submit"
                className="bg-blue-500 mt-3 ml-2 rounded-full hover:bg-blue-400"
              >
                {isResetLoad ? (
                  <div className="p-5">
                    {/* <LoadingSpin size={4} /> */}
                  </div>
                ) : (
                  <span>Submit</span>
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      <AlertDialog open={confirmDialog}>
        <AlertDialogTrigger asChild>
          {/* <Button variant="outline">Show Dialog</Button> */}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure change password?</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => {
                setConfirmDialog(false);
              }}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                resetPassword(form);
              }}
            >
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default ForgotPassword;
function useMutation(arg0: (data: any) => Promise<void>, arg1: { onSuccess: (res: any) => void; onError: (err: any) => void; }): { isLoading: any; mutate: any; } {
  throw new Error("Function not implemented.");
}

