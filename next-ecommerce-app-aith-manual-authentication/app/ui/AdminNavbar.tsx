import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  import {
    GearIcon,
    PersonIcon,
    RocketIcon,
    TokensIcon,
  } from "@radix-ui/react-icons"
import Link from "next/link"
import { userLogout } from "../lib/actions"
  
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
            
            <MenubarItem><TokensIcon className="mr-2" /> <Link href="/admin/dashboard">Dashboard</Link></MenubarItem>
            <MenubarItem><GearIcon className="mr-2" /> <button onClick={() => userLogout()}>Logout</button></MenubarItem>
            
            <MenubarSeparator />
            <MenubarItem inset className="text-xs font-semibold">About this admin page</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

      </Menubar>
    )
  }
  