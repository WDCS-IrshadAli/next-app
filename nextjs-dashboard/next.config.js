/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          // Basic redirect
          {
            source: '/abc',
            destination: '/abc/sal',
            permanent: true,
          },
          // Wildcard path matching
        //   {
        //     source: '/blog/:slug',
        //     destination: '/news/:slug',
        //     permanent: true,
        //   },
        ]
      },
};

module.exports = nextConfig;
// module.exports = {
    
//   }