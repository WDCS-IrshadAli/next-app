import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>F1 Page</h1>
      <Link href="/dashboard/f1/f2">F2 page Navigate</Link>
    </div>
  )
}

export default page
