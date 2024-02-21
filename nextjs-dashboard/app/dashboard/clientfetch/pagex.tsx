"use client";
import React from 'react';
import { create } from './action';

const page = () => {
  return (
    <div>
      
      <form action={create}>
          <input type="text" name="name" placeholder="name" />
          <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default page
