"use client";

import React, { useTransition } from 'react'
import { create } from './actions';
import { useFormState } from 'react-dom';
import Button from './button';
import {Toaster, toast} from "sonner";

const ServerFetch = () => {

    // binding user id 
    const userId: number = Date.now();
    const createWithId = create.bind(null, userId);

    // useformstate hook for registering data
    const initialState: {
        message?: null | string, error?: null | string, success?: null | boolean
    } = { message: null, error: null, success: null };
    const [state, dispatch] = useFormState(createWithId, initialState);

    // error handling
    if (state.success === false) {
        toast.error(state.error ? state.error : "Something went wrong, while validating register form.");
        state.success = null;
        state.error = null;
    } else if (state.success === true) {
        toast.success(state.message);
        state.success = null;
        state.success = null;
    }


    console.log(state);
  return (
    <div className="pt-10">
        <Toaster position="top-right" theme="dark" richColors />
        <h1 className="text-md pb-4">FORM HANDLING</h1>
        <form action={dispatch} className="flex flex-col md:w-80">
            <input type="text" name="name" placeholder="name" />
            <input type="email" name="email" placeholder="email" />
            <input type="text" name="username" placeholder="username" />
            <input type="number" name="age" placeholder="age" />
            <input type="password" name="password" placeholder="password" />
            <select name="city">
                <option value="montecarlo">montecarlo</option>
                <option value="santamonica">santamonica</option>
                <option value="monaco">monaco</option>
            </select>
            <div className="flex justify-between">
                <label>Gender</label>
                <label>Male <input type="radio" name="gender" value="male" /></label>
                <label>Female <input type="radio" name="gender" value="female" /></label>
            </div>
            <Button>Submit</Button>        
        </form>
    </div>
  )
}

export default ServerFetch
