import React from 'react'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { options } from '../api/auth/[...nextauth]/options'

const Navbar = async () => {

    const session = await getServerSession(options);
  return (
    <div className="flex flex-row justify-between p-3 bg-gray-600 text-white">
        <div>
            <h1><Link href="/">My Site</Link></h1>
        </div>

        <div className="text-sm flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/createuser">Create User</Link>
            <Link href="/clientmember">Client Member</Link>
            <Link href="/member">Member</Link>
            <Link href="/public">Public</Link>
            {
                session ? <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
                        : <Link href="/api/auth/signin">Login</Link>
            }
        </div>
    </div>
  )
}

export default Navbar