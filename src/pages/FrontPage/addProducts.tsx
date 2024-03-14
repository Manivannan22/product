import React, {useState} from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import ImageUploader from 'react-images-upload';


const AddProduct = () => {
  const navigate = useNavigate()
	const formik = useFormik({
		initialValues: {
			name: "",
			price: "",
			quantity: "",
			description: "",
			category: "",
			image_upload: [],
		},
		// validationSchema: Yup.object({
		// 	firstName: Yup.string()
		// 		.max(15, "Must be 15 characters or less")
		// 		.required("Required"),
		// 	lastName: Yup.string()
		// 		.max(20, "Must be 20 characters or less")
		// 		.required("Required"),
		// 	email: Yup.string().email("Invalid email address").required("Required"),
		// }),
		onSubmit: async (values) => {
			await axios
				.post("http://localhost:5000/api/create_product", values)
				.then((res) => {
          console.log(res);
          navigate("/home")
        })
				.catch((err) => {
          console.log(err);
        })
		},
	})
    const UploadImageForm = () => {
	  const [image, setImage] = useState(null);

	  const handleImageUpload = (picture: any) => {
			setImage(picture[0]);
	  };

	  const handleFormSubmit = async () => {
		const formData = new FormData();
		// formData.append('image', image);
		try {
          const response = await fetch('http://localhost:5000/api/imageUploadDB', {
			method: 'POST',
            body: formData,
		  });
		  if(response.ok)  { 
			console.log('Image Upload Successfully');
		  } else {
			console.error('Failed to upload image');
		  }
		} catch(error) {
          console.error('Error Uploading image:', error);
		}
	  }
	};

	return (  
		<div className="mt-10 flex justify-center">
			<div className="grid w-full max-w-sm items-center gap-1.5">
				<form onSubmit={formik.handleSubmit}>
					<div>
					<h3 className="text mb-6 font-bold ">Add New Products</h3>
					</div>
					<label>Product Name</label>
					<input
						id="name"
						name="name"
						type="text"
						className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.name}
					/>
					{formik.touched.name && formik.errors.name ? (
						<div>{formik.errors.name}</div>
					) : null}

					<label>Price</label>            
					<input
						id="price"
						name="price"
						type="number"
						className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.price}
					/>
					{formik.touched.price && formik.errors.price ? (
						<div>{formik.errors.price}</div>
					) : null}

					<label>Quantity</label>
					<input
						id="quantity"
						name="quantity"
						type="number"
						className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.quantity}
					/>
					{formik.touched.quantity && formik.errors.quantity ? (
						<div>{formik.errors.quantity}</div>
					) : null}

					<label>Description</label>
					<input
						id="description"
						name="description"
						type="text"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.description}
						className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
					{formik.touched.description && formik.errors.description ? (
						<div>{formik.errors.description}</div>
					) : null}

					<label>Category</label>
					<input
						id="category"
						name="category"
						className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						type="text"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.category}
					/>
					{formik.touched.category && formik.errors.category ? (
						<div>{formik.errors.category}</div>
					) : null}

                    <label>Image Upload</label>
					<ImageUploader
					    withIcon = {true}
						buttonText="Choose images"
						onChange = {(image => formik.setFieldValue('image_upload', image))}
						imgExtension={['.jpg', '.gif', '.png', '.jpeg']}
                        maxFileSize={5242880}
                        withPreview={true}    
					/>

					<button type="submit" className="w-16 h-10 mt-8 rounded-lg bg-orange-300 hover:bg-orange-400" >Submit</button>
				    {/* <button onClick={handleFormSubmit}> Upload </button>  */}
				</form>
			</div>
		</div>
	)
}

export default AddProduct
