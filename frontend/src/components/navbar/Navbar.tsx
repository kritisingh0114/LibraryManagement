// """
// Creates a collapsible sidebar with icons and labels.
// """
import React, { useContext } from 'react';
import { RiBookLine, RiHome3Line, RiSettings3Line, RiUserLine,RiCloseFill , RiMenuLine,RiFileUserFill,RiLoginBoxLine ,RiLogoutBoxLine  } from 'react-icons/ri'; //load prebuilt icons from react-icons/ri
import { AuthContext } from '../../context/auth';
import "./../../styles/navbar.css"
import { Link } from 'react-router-dom';

//Connecting to App.tsx's input of toggleSideNavbar and sideNavbarOpen
type NavbarProps = {
  toggleSideNavbar: () => void;
  sideNavbarOpen: boolean
}

const Navbar: React.FC<NavbarProps> = ({toggleSideNavbar,sideNavbarOpen}) => {


    const authState = useContext(AuthContext)
    function logout(){
        if(window.confirm("Are you sure you want to log out?")){

            delete sessionStorage.login
            delete sessionStorage.userId
            window.location.href="/"
        }
    }
    return (
        <div className="bg-blue text-black w-20 md:w-68 min-h-screen flex-col navbar-container">
            <div className=" navbar-btn" onClick={toggleSideNavbar}>
            {
            sideNavbarOpen ?
            (

                //gives the x symbol to close things: &times
            <span className="text-xl md:text-2xl"><RiCloseFill   />
            </span>
            )
            :
            (
            //gives the three lines ..
            <span className="text-xl md:text-2xl"><RiMenuLine/></span>
            )
            }
        </div>
      {
      sideNavbarOpen && (
      <div className="flex-1 flex-col navbar">
        {/* Adding multiple items: TODO: Modify/Change the label of these items for different types of users. */}
        <SidebarItem icon={<RiHome3Line />}  label="Home" link='/'/>
        <SidebarItem icon={<RiBookLine />}   label="All Books"  link='/books'/>
        {authState.isLibrarian && (<SidebarItem icon={< RiFileUserFill />}   label="User Management" link='/users'/>)}
        {(authState.isLibrarian && authState.userId!==null) && (<SidebarItem icon={<RiUserLine  />}   label="My Profile" link={'/profile/'+authState.userId}/>)}
        {!authState.isLibrarian &&( <SidebarItem icon={<RiLoginBoxLine  />}   label="Login" link='/login'/>)}
        {authState.isLibrarian &&( <div onClick={logout}><SidebarItem icon={<RiLogoutBoxLine  />}   label="Logout" link = '/'/></div>)}

    </div>
    )}
</div>
)};

type SidebarItemProps = {
    icon: React.ReactNode;
    label: string
    link:string
    };

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label,link }) => {
    return (
        <Link to={link}>
            <div className="navitem">
                <div className="mr-2 navicon" >{icon}</div>
                <div>{label}</div>
            </div>
        </Link>
    );};

export default Navbar;
