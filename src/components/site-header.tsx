import { MainNav } from "@/components/main-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { siteConfig } from "@/config/site"
import { Link, Navigate } from "react-router-dom"
import { FiShoppingBag } from "react-icons/fi"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Navigation } from "lucide-react"

export function SiteHeader() {
	const handleLogout = () => {
		clearAll()
		// Navigate("/");
		console.log("Logout")
	}

	return (
		<header className="sticky top-0 z-40 w-full border-b bg-background">
			<div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
				<MainNav items={siteConfig.mainNav} />
				<div className="flex flex-1 items-center justify-end space-x-4">
					<nav className="flex items-center space-x-1">
						<Link to="/addtocart">
							<FiShoppingBag className=" mr-4 h-6 w-6" />
						</Link>

						<ModeToggle />
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Avatar>	
									<AvatarImage
										className=" ml-4 inline-block h-10 w-10 rounded-full ring-2 ring-white"
										src="https://github.com/shadcn.png"
										alt="@shadcn"
									/>
								</Avatar>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuItem onClick={() => handleLogout}>
									Logout
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>

						{/* <img
          className=" ml-4 inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        /> */}
					</nav>
				</div>
			</div>
		</header>
	)
}
function clearAll() {
	throw new Error("Function not implemented.")
}
