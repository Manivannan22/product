import { useFormik } from "formik"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import * as Yup from "yup"
import { useToast } from "@/components/ui/use-toast"
import { ChangePassword, ForgotPasswordForm, OtpForm } from "./forgotForm"

function ForgotPassword() {
	const token = localStorage.getItem("ACCESS_TOKEN")
	const [_email, _setEmail] = useState("")
	const [_errorMsg, _setErrorMsg] = useState("")
	const [_otp, _setOtp] = useState("")
	const [_showModal, _setShowModal] = useState(false)
	const navigate = useNavigate()
	const { toast } = useToast()
	const [step, setStep] = useState(1)

	const renderForm = () => {
		switch (step) {
			case 1:
				return <ForgotPasswordForm setStep={setStep} />
			case 2:
				return <OtpForm setStep={setStep} />
			default:
				return <ChangePassword />
		}
	}

	const formik = useFormik({
		initialValues: {
			email: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Invalid email address")
				.required("*Email required"),
		}),
		onSubmit: async (values) => {},
	})

	useEffect(() => {
		if (token) {
			navigate("/")
		}
	}, [token])

	return (
		<div>
			<div className="flex h-screen w-full">
				<div className="flex h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
					<div className="sm:mx-auto sm:w-full sm:max-w-sm">
						<h1 className="mb-2 text-start text-3xl font-bold leading-9 tracking-tight text-gray-900">
							{step == 2
								? "Verify Password"
								: step == 3
									? "Change Password"
									: "Forgot Password?"}
						</h1>
					</div>

					<div className="sm:mx-auto sm:w-full sm:max-w-sm">
						<form className="space-y-6" onSubmit={formik.handleSubmit}>
							{renderForm()}
						</form>
						<div className="mt-5 flex items-center justify-center">
							<div className="flex flex-col text-sm">
								<Link
									to="/signup"
									className="text-md mb-2 text-center text-slate-500 hover:text-slate-900"
								>
									Don't have an account yet? Sign Up
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ForgotPassword
