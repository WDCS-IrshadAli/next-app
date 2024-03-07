
import AdminTable from '@/app/ui/AdminTable'
import React from 'react'
import { getAllProducts } from '@/app/lib/actions'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Products = async () => {

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

  const getProductsData: any = await getAllProducts();


  return (
    <>
      <div className="py-3 sm:py-6">
          <div className="flex flex-row justify-between mb-4 px-3 sm:px-6">
            <h1 className="text-2xl">Products</h1>
            <Button>
              <Link href="/admin/products/add">Add Products</Link>
            </Button>
          </div>

          <div className="overflow-x-auto overflow-y-auto w-full h-[75vh] px-3 sm:px-6">

              <AdminTable data={getProductsData} />
          
          </div>
      </div>
    </>
  )
}

export default Products