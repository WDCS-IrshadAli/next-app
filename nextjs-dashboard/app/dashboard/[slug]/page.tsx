import React from 'react'

const page = ({ params }: {params: { slug?: string }}) => {
    console.log(params);
    
  return (
    <div>
      fgvtrhbnjyn {params?.slug}
    </div>
  )
}

export default page
