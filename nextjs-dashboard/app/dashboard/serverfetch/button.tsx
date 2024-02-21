import React from 'react'
import { useFormStatus } from 'react-dom';

const Button = ({ children }: { children: string }) => {
    const {pending} = useFormStatus();
    console.log(pending);
  return (

    <button type="submit" className="bg-gray-700 text-white py-2" disabled={pending}>
        {pending ? "Loading...": children}
    </button>

  )
}

export default Button
