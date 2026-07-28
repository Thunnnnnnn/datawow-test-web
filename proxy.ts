import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
    const token = request.cookies.get('token')?.value;

    const pathname = request.nextUrl.pathname;

    const publicRoutes = [
        '/',
        '/user/login',
        '/admin/login',
        '/user/create-account',
        '/admin/create-account'
    ];

    if (publicRoutes.includes(pathname)) {
        return NextResponse.next();
    }

    if (!token) {
        if (pathname.startsWith('/admin')) {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }

        return NextResponse.redirect(new URL('/user/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
    ],
};