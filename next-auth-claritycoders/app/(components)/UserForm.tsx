"use client";

import { useRouter } from "next/navigation";
import React, { useState } from 'react'

const UserForm = () => {
    
    const router = useRouter();
    const [formData, setFormData] = useState({});
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        const res = await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify({ formData }),
            "Content-Type": "application/json"
        });

        if (!res.ok) {
            const response = await res.json();
            setErrorMessage(response.message)
        } else {
            router.refresh();
            router.push("/");
        }
    }

  return (
    <div>
        <h1 className="text-xl mb-3">UserForm (Create new user)</h1>

        <form onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={handleChange} value={formData?.name} placeholder="name" />
            <input type="email" name="email" onChange={handleChange} value={formData?.email} placeholder="email" />
            <input type="password" name="password" onChange={handleChange} value={formData?.password} placeholder="password" />
            <button type="submit">Submit</button>
        </form>
        <p className="text-red-500">{errorMessage && errorMessage}</p>
    </div>
  )
}

export default UserForm