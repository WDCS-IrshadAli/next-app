import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>F4 Page</h1>
      <Link href="/dashboard">F4 Page Navigate</Link>
    </div>
  )
}

export default page
