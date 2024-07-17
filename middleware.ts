import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
 
export function middleware(request: NextRequest) {

  const path = '/api/entries/';
  if (request.nextUrl.pathname.startsWith(path)) {

    const id = request.nextUrl.pathname.replace(path, '');
    const checkMongoIDRegExp = new RegExp("^[0-9a-fA-F]{24}$");

    if (!checkMongoIDRegExp.test(id)) {
      const url = request.nextUrl.clone();
      url.pathname = '/api/bad-request';
      url.search = `?message=${id} is not a valid MongoID`;
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}
 
export const config = {
  matcher: '/api/entries/:path*',
}