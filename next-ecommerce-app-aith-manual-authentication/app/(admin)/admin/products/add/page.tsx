import React from 'react'
import CategoriesDropdown from '@/app/ui/CategoriesDropdown'
import ProductForm from '@/app/ui/ProductForm'

const AddProducts = () => {
  return (
    <ProductForm title="Add Products" data={null} formType="productAdd" userId={null}> 
      <CategoriesDropdown data={null} />
    </ProductForm>
  )
}

export default AddProducts