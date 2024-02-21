import React from 'react'

// # 1. Fetching Data on the Server with fetch
// # 2. Fetching data on the Server with third-party libraries
    // - Request Memoization 
    //  -(for fetch): it automatically cache GET request (but not route handler GET request)
    //    = React extends the fetch API to automatically memoize requests that have the same URL and options.
    //    = This means you can call a fetch function for the same data in multiple places in a React component tree while only executing it once.
    //  -(for 3rd party libraries)
    //    = In cases where you're using a third-party library that doesn't support or expose fetch (for example, a database, CMS, or ORM client)
    //    = In that case you can use The React (cache) function is used to memoize data requests.
// # 3. Fetching Data on the Client with Route Handlers (consider route handler as api)
// # 4. Fetching Data on the Client with third-party libraries (SWR or TanStack Query)
    // -You can also fetch data on the client using a third-party library such as SWR or TanStack Query
    // -These libraries provide their own APIs for memoizing requests, caching, revalidating, and mutating data.

// Fetching Data on the Server with fetch
// {cache: "force-cache"}      =    by default (force-cache)
// {cache: "no-store"}         =    to opt-out of cache (use = no-store)
// {next: {revalidate: 3600}}  =   to revaidate data after some certain amount of time (1 hour)
// export const revalidate = 3600 ---(segment config options)--- revalidate after every 1 hour
// { next: { tags: ['collection'] } } = Data can be revalidated on-demand by path (revalidatePath) or by cache tag (revalidateTag) inside a Server Action or Route Handler.

async function fetchDataOnServerWithFetch () {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {next: {revalidate: 3600}});
    if (!res.ok) {
        throw new Error("Failed to fetch data.");
    }
    return res.json();
}

const DataFetch = async () => {
    const data = await fetchDataOnServerWithFetch();
    console.log(data);
    
    
  return (
    <pre>
      Data Fetched : 
      UserId : {data?.UserId}
      Title : {data?.title}
      Completed : {data?.completed}
    </pre>
  )
}

export default DataFetch
