import NextAuth from "next-auth";
import { options } from "./options";

const handler = NextAuth(options); // we're just setting this up (it's from directly from next-auth documentation)
export { handler as GET, handler as POST };