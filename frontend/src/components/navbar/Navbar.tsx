// """
// Creates a collapsible sidebar with icons and labels.
// """
import React, { useContext } from "react"
import {
	RiBookLine,
	RiHome3Line,
	RiSettings3Line,
	RiUserLine,
	RiCloseFill,
	RiMenuLine,
	RiFileUserFill,
	RiLoginBoxLine,
	RiLogoutBoxLine,
} from "react-icons/ri" //load prebuilt icons from react-icons/ri
import { AuthContext } from "../../context/auth"
import "./../../styles/navbar.css"
import { Link, useLocation } from "react-router-dom"

//Connecting to App.tsx's input of toggleSideNavbar and sideNavbarOpen
type NavbarProps = {
	toggleSideNavbar: () => void
	sideNavbarOpen: boolean
}

const Navbar: React.FC<NavbarProps> = ({ toggleSideNavbar, sideNavbarOpen }) => {
	const location = useLocation()

	const authState = useContext(AuthContext)
	function logout() {
		if (window.confirm("Are you sure you want to log out?")) {
			delete sessionStorage.login
			delete sessionStorage.userId
			window.location.href = "/"
		}
	}
    console.log(location.pathname)
	return (
		<div className="bg-blue text-black w-20 md:w-68 min-h-screen flex-col navbar-container">
			<div className=" navbar-btn" onClick={toggleSideNavbar}>
				{sideNavbarOpen ? (
					//gives the x symbol to close things: &times
					<span className="text-xl md:text-2xl">
						<RiCloseFill />
					</span>
				) : (
					//gives the three lines ..
					<span className="text-xl md:text-2xl">
						<RiMenuLine />
					</span>
				)}
			</div>
			{sideNavbarOpen && (
				<div className="flex-1 flex-col navbar">
					{/* Adding multiple items: TODO: Modify/Change the label of these items for different types of users. */}
					<SidebarItem icon={<RiHome3Line />} active={location.pathname === "/"} label="Home" link="/" />
					<SidebarItem icon={<RiBookLine />} active={location.pathname === "/books"} label="All Books" link="/books" />
					{authState.isLibrarian && (
						<SidebarItem
							icon={<RiFileUserFill />}
							active={location.pathname === "/users"}
							label="User Management"
							link="/users"
						/>
					)}
					{authState.isLibrarian && authState.userId !== null && (
						<SidebarItem
							active={location.pathname === "/profile/"+ authState.userId}
							icon={<RiUserLine />}
							label="My Profile"
							link={"/profile/" + authState.userId}
						/>
					)}
					{!authState.isLibrarian && (
						<SidebarItem icon={<RiLoginBoxLine />} active={location.pathname==="/login"} label="Login" link="/login" />
					)}
					{authState.isLibrarian && (
						<div onClick={logout}>
							<SidebarItem icon={<RiLogoutBoxLine />} active={false} label="Logout" link="#" />
						</div>
					)}
				</div>
			)}
		</div>
	)
}

type SidebarItemProps = {
	icon: React.ReactNode
	label: string
	link: string
	active: boolean
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, link, active }) => {
	return (
		<Link to={link}>
			<div className={"navitem" + (active ? " active" : "")}>
				<div className="mr-2 navicon">{icon}</div>
				<div>{label}</div>
			</div>
		</Link>
	)
}

export default Navbar
