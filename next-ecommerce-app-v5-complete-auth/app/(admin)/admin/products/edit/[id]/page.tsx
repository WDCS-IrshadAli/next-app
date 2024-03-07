import { getSingleProduct } from '@/app/lib/actions';
import CategoriesDropdown from '@/app/ui/CategoriesDropdown'
import ProductForm from '@/app/ui/ProductForm'
import React from 'react'

const EditProduct = async ({ params }: { params: { id: string } }) => {
    // console.log(params.id);
    const data: any = await getSingleProduct(Number(params?.id));
    
  return (
    <ProductForm title="Edit Product" data={data} formType={"productEdit"} userId={params?.id}> 
      <CategoriesDropdown data={data?.category} />
    </ProductForm>
  )
}

export default EditProduct