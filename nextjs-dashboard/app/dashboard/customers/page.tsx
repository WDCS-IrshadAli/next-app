const Customers = () => {

  const abc = async (formData: FormData) => {
    "use server";
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        userId: 2,
        id: 390,
        title: "xea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      }),
    })
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", res);
    
  }
  // const ref = useRef<HTMLFormElement>(null)

  return (
    <>
      <h1>CUSTOMER PAGE</h1>

      <form action={abc}>
      {/* <form ref={ref} action={
        async (formData) => {
          await abc(formData);
          ref.current?.reset();
        }
      }> */}
        <input type="text" name="sname" />
        <button type="submit">Submit</button>
      </form>
   
    </>
  )
}

export default Customers