import type { APIRoute } from 'astro';
import script from '../../../assets/installchr.sh?raw';

// Единственный источник скрипта: страница показывает его через ?raw, отсюда он скачивается.
export const GET: APIRoute = () =>
  new Response(script, {
    headers: { 'Content-Type': 'text/x-shellscript; charset=utf-8' },
  });
