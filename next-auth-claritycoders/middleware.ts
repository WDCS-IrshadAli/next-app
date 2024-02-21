import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware (req) {
        console.log(req.url.pathname);
        console.log(req.nextauth.token.role);
        
        // for role permission (if they're not admin they'll will be redirected to admin page)
        if (req.nextUrl.pathname.startsWith("/createuser") && req.nextauth.token.role != "admin") {
            return NextResponse.rewrite(new URL("/denied", req.url))
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        }
    }
)
// export { default } from "next-auth/middleware";

export const config = { matcher: ["/createuser"] }