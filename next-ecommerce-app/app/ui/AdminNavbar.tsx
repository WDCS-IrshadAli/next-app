import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  import {
    GearIcon,
    PersonIcon,
    RocketIcon,
  } from "@radix-ui/react-icons"
import Link from "next/link"
  
  export default function AdminNavbar() {
    return (
      <Menubar className="h-full flex flex-row justify-between border-0 rounded-none">
        
        <div></div>

        <div>
            <Link href="/admin/dashboard" className="font-semibold">LOGO</Link>
        </div>
        
        <MenubarMenu>
          <MenubarTrigger>Profiles</MenubarTrigger>
          <MenubarContent>
            
            <MenubarItem><RocketIcon className="mr-2" /> <Link href="/admin/dashboard">Dashboard</Link></MenubarItem>
            <MenubarItem><PersonIcon className="mr-2" /> <Link href="/admin/profile">Profile</Link></MenubarItem>
            <MenubarItem><GearIcon className="mr-2" /> <Link href="/admin/logout">Logout</Link></MenubarItem>
            
            <MenubarSeparator />
            <MenubarItem inset className="text-xs font-semibold">About this admin page</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

      </Menubar>
    )
  }
  