"use client";

import { useRef } from "react";

const ClientComp = ({ create }: { create: any }) => {
    const ref: any = useRef(null);
   
  return (
    <div>
        <form ref={ref} action={
            async (formData) => {
                console.log(formData.get("name"));
                await create(formData);
                ref.current?.reset();
                const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {next: {revalidate: 3600}});
                if (!res.ok) {
                    throw new Error("Failed to fetch data.");
                }
                console.log(res.json());
            }
        }>
          <input type="text" name="name" placeholder="name" />
          <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ClientComp
