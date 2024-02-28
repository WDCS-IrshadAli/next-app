import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server'

export function middleware (request: NextRequest) {
    const currentUserToken = request.cookies.get("currentUser")?.value;

    const path = request.nextUrl.pathname;
    const accessAdminPages = path.startsWith("/admin");
    const accessAdminLoginPages = path.startsWith("/authadmin");

    // console.log(accessAdminPages, accessAdminLoginPages, path, currentUserToken);

    if (accessAdminPages==true && !currentUserToken) {
        return NextResponse.redirect(new URL("/authadmin/login", request.url)); 
    }
    else if (accessAdminLoginPages==true && currentUserToken) {
        return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}