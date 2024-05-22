 
import withPWA from 'next-pwa';
import runtimeCaching from 'next-pwa/cache.js';
const isProduction = process.env.NODE_ENV === 'production';
 
const config = {
};
 
const nextConfig = withPWA({
    dest: 'public',
    cacheOnFrontEndNav:true,
    reloadOnOnline:true,
    disable:false,
})(
  config
);
 
export default nextConfig;