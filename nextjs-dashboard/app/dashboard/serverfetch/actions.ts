"use server";

import { z } from 'zod';

// server action functions

interface FormStateTypeProps {
    message?: null | string, error?: null | string, success?: null | boolean
}

// registering data
export async function create (userId: number, prevState: FormStateTypeProps, formData: FormData) {
    // zod schema definition
    const schema = z.object({
        name: z.string().min(10),
        email: z.string({
            invalid_type_error: 'Invalid Email',
        }),
        username: z.string(),
        age: z.number(),
        password: z.string(),
        city: z.string(),
        gender: z.enum(["male", "female"])
    })
    
    // validating data using zod schema
    const validateFields = schema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        username: formData.get("username"),
        age: Number(formData.get("age")),
        password: formData.get("password"),
        city: formData.get("city"),
        gender: formData.get("gender")
    })

    console.log(validateFields);
    
    // check if errors
    if (!validateFields.success) {
        const errorShow: any = validateFields.error.flatten().fieldErrors;
        let key = Object.keys(errorShow)[0]===undefined ? "error" : Object.keys(errorShow)[0];
        let value = errorShow[Object.keys(errorShow)[0]]===undefined ? "Something went wrong, while validating register form." : `(${key}) ${errorShow[Object.keys(errorShow)[0]][0]}`;
        return {
            error: value,
            success: false
        }
    }
    
    // register data
    try {
        const {name, email, username, age, password, city, gender} = validateFields.data;
        // Database queries
        for (let i=0; i<100000; i++) {//console.log(i);
        }
        return {
            message: "User registered successfully",
            success: true
        }
    } catch (error: any) {
        return {
            error: error.message,
            success: false
        }
    }
}