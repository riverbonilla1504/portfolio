import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const acceptLanguage = request.headers.get('accept-language') || 'en';
  const detectedLanguage = acceptLanguage.split(',')[0].split('-')[0];

  // Agregar el idioma detectado a las cookies para que esté disponible en la app
  const response = NextResponse.next();
  response.cookies.set('language', detectedLanguage === 'es' ? 'es' : 'en');

  return response;
}

export const config = {
  matcher: '/:path*', // Aplica el middleware a todas las rutas
};
