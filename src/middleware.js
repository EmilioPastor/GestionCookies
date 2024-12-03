import { NextResponse } from "next/server";
import { getCookie, updateCookie } from "@/lib/cookies";

const LOGIN_URL = '/'

export async function middleware(request) {
  const cookie = await getCookie('session')
  console.log('MIDDLEWARE ', request.nextUrl.pathname);


  if (cookie) {  
    // HAY SESIÓN
    // renovamos sesión ampliando tiempo de expiración de la cookie
    const newCookie = updateCookie('session', cookie)

    const response = NextResponse.next();
    response.cookies.set(newCookie)

    return response
  }

  // NO HAY SESIÓN
  if (request.nextUrl.pathname != LOGIN_URL) {  // Si página distinta de LOGIN_URL

    const loginUrl = new URL(LOGIN_URL, request.url)
    
    // Colocamos en callbackUrl la dirección a la que volver tras login exitoso
    loginUrl.searchParams.set('callbackUrl', request.nextUrl.pathname)

    return NextResponse.redirect(loginUrl)    // redirigimos a LOGIN_URL con callbackUrl
  }

}


export const config = {
  matcher: [
    /*
     * Todas las rutas excepto las que comienzan por:
     * - /api (API routes)
     * - /_next/static (static files)
     * - /_next/image (image optimization files)
     * - /favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
