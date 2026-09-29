export default {async fetch(request,env){
 const u=new URL(request.url);
 if(!['GET','HEAD'].includes(request.method))return new Response('Method not allowed',{status:405,headers:{Allow:'GET, HEAD'}});
 if(u.hostname==='www.isunglobal.com'||u.protocol!=='https:'){u.hostname=u.hostname==='www.isunglobal.com'?'isunglobal.com':u.hostname;u.protocol='https:';return Response.redirect(u,308)}
 const res=await env.ASSETS.fetch(request);const h=new Headers(res.headers);
 h.set('X-Content-Type-Options','nosniff');h.set('Referrer-Policy','strict-origin-when-cross-origin');h.set('X-iSunGlobal-Release','2026-09-28');
 h.set('Content-Security-Policy',"default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'none'; object-src 'none'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'");
 h.set('Cache-Control',u.pathname.startsWith('/assets/')?'public,max-age=86400,no-transform':'public,max-age=0,must-revalidate,no-transform');
 h.set('Permissions-Policy','camera=(), microphone=(), geolocation=(), payment=()');h.delete('Set-Cookie');
 return new Response(res.body,{status:res.status,headers:h});
}};
