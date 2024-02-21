import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import axios from "axios"
import { useFormik } from "formik"
import { useRef, useState } from "react"
import { redirect, useNavigate } from "react-router-dom"
import { toast } from "sonner"
import * as Yup from "yup"

let emailID = ""

const forgotPasswordSchema = Yup.object().shape({
	email: Yup.string()
		.email("Invalid email address")
		.required("Email is required"),
})

const passwordschema = Yup.object().shape({
	password: Yup.string().required("Password is required"),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref("password")], "Passwords must match")
		.required("Confirm Password is required"),
})

export function ForgotPasswordForm({ setStep }: { setStep: any }) {
	const [error, setError] = useState<string | null>(null)
	const [email, setEmail] = useState()
	const [otp, setOtp] = useState()
	const [showModal, setShowModal] = useState(false)
	const { toast } = useToast()

	const formik = useFormik({
		initialValues: {
			email: "",
		},
		validationSchema: forgotPasswordSchema,
		onSubmit: async (values) => {
			try {
				console.log(values)
				emailID = values?.email
				const response = await axios.post(
					`http://localhost:5000/api/forgotPassword`,
					values,
				)
				setEmail(response.data.email)
				setShowModal(true)
				setStep(2)
				toast({
					variant: "default",
					description: "send the email successful",
				})
			} catch (error) {
				console.error("Reset password")
				setError("Reset email !")
				toast({ description: "email address invalid" })
			}
		},
	})

	return (
		<>
			<div>
				<div className="flex flex-col gap-6">
					<div className="grid w-full items-center gap-1.5">
						<Input
							type="email"
							name="email"
							id="email"
							placeholder="Email"
							className={`rounded-lg ${
								formik.touched.email &&
								formik.errors.email &&
								"border-red-500 focus-visible:ring-0 "
							}`}
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.email && formik.errors.email ? (
							<div className="pb-0 text-xs text-red-500">
								{formik.errors.email}
							</div>
						) : null}
					</div>
					<div className="grid w-full items-center gap-1.5">
						<Button
							variant={"default"}
							className="rounded-lg"
							size={"sm"}
							onClick={() => {
								formik.handleSubmit()
							}}
						>
							Send OTP
						</Button>
					</div>
					{error && <div className="text-red-500">{error}</div>}
				</div>
			</div>
		</>
	)
}

export function OtpForm({ setStep }: any) {
	const [error, setError] = useState<string | null>(null)
	const formik = useFormik({
		initialValues: Array.from({ length: 4 }, () => ""),
		validate: (values: any) => {
			const errors = []
			for (let i = 0; i < 4; i++) {
				if (!values[i]) {
					errors[i] = "Required"
				} else if (!/^\d*$/.test(values[i])) {
					errors[i] = "Must be a number"
				}
			}
			return errors
		},
		onSubmit: async (values: any) => {
			let payload = {
				enter_otp: values?.map((v: any) => v).join(""),
				email: emailID,
			}
			try {
				const response = await axios.post(
					"http://localhost:5000/api/verify_password",
					payload,
				)
				if (response?.data?.isPasOpen === true) {
					toast.success(response?.data?.message)
					setStep(3)
				}
			} catch (error: any) {
				console.error("OTP verification error:", error)
				toast.error(error.response.data.message)
			}
		},
	})

	const inputRefs: any = useRef([])

	const handleInputChange = (index: any, value: any) => {
		if (value === "") {
			const prevIndex = index - 1
			if (prevIndex >= 0) {
				inputRefs.current[prevIndex]?.focus()
			}
		} else if (/^\d*$/.test(value)) {
			const nextIndex = index + 1
			if (nextIndex < 4) {
				inputRefs.current[nextIndex]?.focus()
			}
		}

		formik.setFieldValue(index.toString(), value)
	}

	return (
		<div>
			<div className="mb-6 flex items-center justify-center">
				{Array.from({ length: 4 }, (_, index) => (
					<Input
						key={index}
						autoComplete="off"
						type="text"
						name={index.toString()}
						maxLength={1}
						value={formik.values.otp}
						onChange={(e) => handleInputChange(index, e.target.value)}
						onBlur={formik.handleBlur}
						className={`mx-2 h-9 w-9 border ${
							formik.touched.otp && formik.errors.otp
								? "border-red-500"
								: "border-gray-300"
						} rounded text-center focus:border-blue-500 focus:outline-none`}
						ref={(input) => (inputRefs.current[index] = input)}
					/>
				))}
			</div>

			<Button
				onClick={() => {
					formik.handleSubmit()
				}}
				className="w-full rounded-lg"
			>
				Verify
			</Button>
			{error && <div className="text-red-500">{error}</div>}
		</div>
	)
}

export function ChangePassword() {
	const navigate = useNavigate()
	const [error, _setError] = useState<string | null>(null)
	const formik = useFormik({
		initialValues: {
			password: "",
			confirmPassword: "",
		},
		validationSchema: passwordschema,
		onSubmit: async (values) => {
			try {
				const response = await axios.post(
					"http://localhost:5000/api/reset_password",
					{
						email: emailID,
						password: values.password,
					},
				)
				toast.success(response?.data?.message)
				navigate("/")
			} catch (err: any) {
				console.error("Password reset error:", error)
				toast.error(err.response.data.message)
			}
		},
	})

	return (
		<>
			<>
				<div className="flex flex-col gap-6">
					<div className="grid w-full items-center gap-1.5">
						<Input
							id="password"
							placeholder="Password"
							name="password"
							type="password"
							value={formik?.values?.password}
							onChange={formik?.handleChange}
							onBlur={formik?.handleBlur}
							className={`rounded-lg ${
								formik.touched.password &&
								formik.errors.password &&
								"border-red-500 focus-visible:ring-0 "
							}`}
						/>
						{formik.touched.password && formik.errors.password ? (
							<div className="pb-0 text-xs text-red-500">
								{formik.errors.password}
							</div>
						) : null}
					</div>
					<div className="grid w-full items-center gap-1.5">
						<Input
							id="confirm password"
							placeholder="Confirm Password"
							name="confirmPassword"
							type="password"
							value={formik?.values?.confirmPassword}
							onChange={formik?.handleChange}
							onBlur={formik?.handleBlur}
							className={`rounded-lg ${
								formik.touched.confirmPassword &&
								formik.errors.confirmPassword &&
								"border-red-500 focus-visible:ring-0 "
							}`}
						/>
						{formik.touched.confirmPassword && formik.errors.confirmPassword ? (
							<div className="pb-0 text-xs text-red-500">
								{formik.errors.confirmPassword}
							</div>
						) : null}
					</div>
					<div className="grid w-full items-center gap-1.5">
						<Button
							variant={"default"}
							className="rounded-lg"
							size={"sm"}
							onClick={() => {
								formik.handleSubmit()
							}}
						>
							Change Password
						</Button>
					</div>
				</div>
			</>
		</>
	)
}

