import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import _ from "lodash"

const AddToCart = ({ product, open, setOpen, cart, setCart }: any) => {
	const [notification, setNotification] = useState("")

	const _addToCart = (productToadd: any) => {
		const isProductInCart = cart.find(
			(item: any) => item._id === productToadd._id,
		)
		if (isProductInCart) {
			setNotification("Product is already add to cart")
		} else {
			setCart([...cart, productToadd])
			setNotification("Product add to cart")
		}
	}

	const increaseQuantity = (productId: any, sign: any) => {
		const updatedCart = cart.map((item: any) => {
			if (item._id === productId) {
				return {
					...item,
					quantity: sign === "+" ? item?.quantity + 1 : item?.quantity - 1,
				}
			}
			return item
		})
		setCart(updatedCart)
	};

	const removeProduct = (productId: any) => {
		const updatedCart = cart.filter((item: any) => item._id !== productId)
		setCart(updatedCart)
		setNotification("Product removed from cart")
	};

	const removeFromCart = (productId: any) => {
		const updatedCart = cart.filter((item: any) => item._id !== productId)
		setCart(updatedCart)
		setNotification("Product removed from cart")
	};

	const calculateTotal = () => {
		return cart.reduce(
			(total: number, item: { price: number; quantity: number }) => total + item.price * item.quantity,
			0
		);
	};

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={setOpen}>
				<Transition.Child
					as={Fragment}
					enter="ease-in-out duration-500"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in-out duration-500"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-hidden">
					<div className="absolute inset-0 overflow-hidden">
						<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
							<Transition.Child
								as={Fragment}
								enter="transform transition ease-in-out duration-500 sm:duration-700"
								enterFrom="translate-x-full"
								enterTo="translate-x-0"
								leave="transform transition ease-in-out duration-500 sm:duration-700"
								leaveFrom="translate-x-0"
								leaveTo="translate-x-full"
							>
								<Dialog.Panel className="pointer-events-auto w-screen max-w-md">
									<div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
										<div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
											<div className="flex items-start justify-between">
												<Dialog.Title className="text-lg font-medium text-gray-900">
													Shopping cart
												</Dialog.Title>
												<div className="ml-3 flex h-7 items-center">
													<button
														type="button"
														className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
														onClick={() => setOpen(false)}
													>
														{" "}
														id
														<span className="absolute -inset-0.5" />
														<span className="sr-only">Close panel</span>
														<XMarkIcon className="h-6 w-6" aria-hidden="true" />
													</button>	
												</div>
											</div>

											<div className="mt-1 text-sm text-gray-500">
												{notification}
											</div>
											<div className="mt-8">
												<div className="flow-root">
													<ul
														role="list"
														className="-my-6 divide-y divide-gray-200"
													>
														{cart.map((product: any, index: any) => (
															<li key={index} className="flex py-6">
																<div className="flex flex-1 flex-col">
																<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
																	<img
																		src={product.imageSrc}
																		alt={"img"}
																		className="h-full w-full object-cover object-center"
																	/>
																	<h3>{product.imageSrc}</h3>
																	<p>{product.price * product.quantity}</p>
																</div>
																<div className="flex items-end justify-between text-sm">
                                                                <p>Quantity: {product.quantity}</p> 
																</div>
																</div>

																<div className="ml-4 flex flex-1 flex-col">
																	<div>
																		{/* <div className="flex justify-between text-base font-medium text-gray-900">
																			<h3>
																				<a href={product.href}>
																					{product.name}
																				</a>
																			</h3>
																			<p className="ml-4">
																				{total(product.price, product.quantity)}
																			</p>
																		</div> */}
																		<p className="mt-1 text-sm text-gray-500">
																			{product.color}
																		</p>
																	</div>
																	<div className="flex flex-1 items-end justify-between text-sm">
																		<button
																			type="button"
																			className=" font-medium text-red-400 hover:text-red-600"
																			onClick={() =>
																				increaseQuantity(product._id, "-")
																			}
																		>
																			-
																		</button>
																		<p className="text mx-2">
																			<button
																				type="button"
																				className=" font-medium text-gray-400 hover:text-gray-600"
																			>
																				{product.quantity}
																			</button>
																		</p>
																		<button
																			type="button"
																			className="font-medium text-green-600 hover:text-green-500"
																			onClick={() =>
																				increaseQuantity(product._id, "+")
																			}
																		>
																			+
																		</button>
																		<div className="flex">
																			<button
																				type="button"
																				className="font-medium text-red-400 hover:text-red-500"
																				onClick={() =>
																					removeProduct(product._id)
																				}
																			>
																				Remove
																			</button>
																		</div>
																	</div>
																</div>
															</li>
														))}
													</ul>
												</div>
											</div>
										</div>

										<div className="border-t border-gray-200 px-4 py-6 sm:px-6">
											<div className="flex justify-between text-base font-medium text-gray-900">
												<p>Total: {calculateTotal()}</p>
											</div>
											<p className="mt-0.5 text-sm text-gray-500">
												Shipping and taxes calculated at checkout.
											</p>
											<div className="mt-6">
												<a
													href="/"
													className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
												>
													Checkout
												</a>
											</div>
											<div className="mt-6 flex justify-center text-center text-sm text-gray-500">
												<p>
													or{" "}
													<button
														type="button"
														className="font-medium text-indigo-600 hover:text-indigo-500"
														onClick={() => setOpen(false)}
													>
														Continue Shopping
														<span aria-hidden="true"> &rarr;</span>
													</button>
												</p>
											</div>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	)
}

export default AddToCart
function setCart(updatedCart: any) {
	throw new Error("Function not implemented.")
}
