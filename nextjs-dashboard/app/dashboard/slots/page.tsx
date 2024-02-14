import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1 className="text-xl bg-slate-500 p-10">Home page slots</h1>
      <Link href="/dashboard/slots/maxs">abc</Link>
    </div>
  )
}

export default page