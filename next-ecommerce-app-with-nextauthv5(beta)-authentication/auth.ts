import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";

export const { auth, signIn, signOut } = NextAuth({
    // authConfig = it acts as a middleware for routing (to not give access to other pages).
    ...authConfig,
    // providers = it provides 3rd party authentication like github, google etc. but we're using credentials options for manually data inserting in next auth. 
    providers: [
        // Credentials = for manually adding username & password to database
        Credentials({
            async authorize(credentials) {

                if (credentials?.username && credentials?.password) {
                    console.log("hello");
                    const { username, password } = credentials;
                    let data = await fetch("https://fakestoreapi.com/auth/login", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            username, password
                        })
                    })
                    data = await data.json();
                    if (!data?.token) {
                        return null;
                    }
                    console.log("User login successfully = ", data?.token);
                    console.log("Data = ", {username, password});
                    const user = {
                        name: username
                    };                    
                    return user;
                }
                return null
            }
        })
    ]
});