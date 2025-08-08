import type { MiddlewareHandler } from 'astro';

const SUPPORTED_LANGS = ['vi', 'en'];
const DEFAULT_LANG = 'vi';

export const onRequest: MiddlewareHandler = async (context, next) => {
  const url = new URL(context.request.url);
  const pathSegments = url.pathname.split('/').filter(Boolean);

  // Bỏ qua file tĩnh, API route, assets
  if (
    url.pathname.match(/\.[a-zA-Z0-9]+$/) || // có đuôi file
    pathSegments[0] === 'api'
  ) {
    return next();
  }

  if (pathSegments.length === 0 || !SUPPORTED_LANGS.includes(pathSegments[0])) {
    return Response.redirect(`${url.origin}/${DEFAULT_LANG}${url.pathname}`, 302);
  }

  return next();
};
