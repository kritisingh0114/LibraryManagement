// """
// Creates a collapsible sidebar with icons and labels.
// """
import React from 'react';
import { RiBookLine, RiHome3Line, RiSettings3Line, RiUserLine } from 'react-icons/ri'; //load prebuilt icons from react-icons/ri

//Connecting to App.tsx's input of toggleSideNavbar and sideNavbarOpen
type NavbarProps = {
  toggleSideNavbar: () => void;
  sideNavbarOpen: boolean
}

const Navbar: React.FC<NavbarProps> = ({toggleSideNavbar,sideNavbarOpen}) => {
return (
        <div className="bg-blue text-black w-20 md:w-68 min-h-screen flex-col">
            <div className="p-4 cursor-pointer" onClick={toggleSideNavbar}>
            {
            sideNavbarOpen ?
            (
                //gives the x symbol to close things: &times
            <span className="text-xl md:text-2xl">&#9776;</span>
            )
            :
            (
            //gives the three lines ..
            <span className="text-xl md:text-2xl">&#9776;</span>
            )
            }
        </div>
      {
      sideNavbarOpen && (
      <div className="flex-1 flex-col">
        {/* Adding multiple items: TODO: Modify/Change the label of these items for different types of users. */}
        <SidebarItem icon={<RiHome3Line />}  label="Home" />
        <SidebarItem icon={<RiBookLine />}   label="All Books" />
        <SidebarItem icon={<RiBookLine />}   label="Books Rented" />
        <SidebarItem icon={<RiUserLine />}   label="User Management" />
        <SidebarItem icon={<RiSettings3Line />}   label="Books Rental Status" />
    </div>
    )}
</div>
)};

type SidebarItemProps = {
    icon: React.ReactNode;
    label: string
    };

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label }) => {
    return (
    <div className="p-4 flex items-center cursor-pointer hover:bg-gray-700">
        <div className="mr-2">{icon}</div>
        <div>{label}</div>
    </div>
    );};

export default Navbar;
