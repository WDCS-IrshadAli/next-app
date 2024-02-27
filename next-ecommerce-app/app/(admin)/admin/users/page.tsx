
import React from 'react'
import { getAllUsers } from '@/app/lib/actions'
import AdminUsersTable from '@/app/ui/AdminUsersTable'

const Users = async () => {

  type ProductsProps = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
      rate: number,
      count: number
    }
  }

  const getUsersData = await getAllUsers();  

  return (
    <>
      <div className="py-3 sm:py-6">
          <div className="flex flex-row justify-between mb-4 px-3 sm:px-6">
            <h1 className="text-2xl">Users</h1>
          </div>

          <div className="overflow-x-auto overflow-y-auto w-full h-[75vh] px-3 sm:px-6">

              <AdminUsersTable data={getUsersData} />
          
          </div>
      </div>
    </>
  )
}

export default Users