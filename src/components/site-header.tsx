import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { Link } from "react-router-dom"
import { FiShoppingBag } from "react-icons/fi"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-40 w-full border-b bg-background">
			<div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
				<MainNav items={siteConfig.mainNav} />
				<div className="flex flex-1 items-center justify-end space-x-4">
					<nav className="flex items-center space-x-1">
						<Link to="/addtocart">
							<FiShoppingBag className=" mr-4 h-6 w-6" />
						</Link>

						{/* <Link to={siteConfig.links.github} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              to={siteConfig.links.youtube}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </div>
            </Link> */}

						<ModeToggle />
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Avatar>
									<AvatarImage
										className=" ml-4 inline-block h-10 w-10 rounded-full ring-2 ring-white"
										src="https://github.com/shadcn.png"
										alt="@shadcn"
									/>
									{/* <AvatarFallback>CN</AvatarFallback> */}
								</Avatar>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuItem onClick={() => "light"}>
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
