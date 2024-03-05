
import React from 'react'
import { getAllCategories } from '@/app/lib/actions'
import AdminCategoriesTable from '@/app/ui/AdminCategoriesTable';

const Users = async () => {

  const getCategoriesData = await getAllCategories();  

  return (
    <>
      <div className="py-3 sm:py-6">
          <div className="flex flex-row justify-between mb-4 px-3 sm:px-6">
            <h1 className="text-2xl">Categories</h1>
          </div>

          <div className="overflow-x-auto overflow-y-auto w-full h-[75vh] px-3 sm:px-6">

              <AdminCategoriesTable data={getCategoriesData} />
          
          </div>
      </div>
    </>
  )
}

export default Users