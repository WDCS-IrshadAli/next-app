
import React from 'react'
import { create } from './action'
import ClientComp from './ClientComp'

const button = () => {
  return (
    <div>
      <ClientComp create={create} />
    </div>
  )
}

export default button
