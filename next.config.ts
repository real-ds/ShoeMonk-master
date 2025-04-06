import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
// next.config.js
module.exports = {
  images: {
    domains: [
      'static.nike.com',          // Nike Air Force 1
      'assets.adidas.com',        // Adidas Samba OG
      'nb.scene7.com',            // New Balance 550
      'dms.deckers.com',          // Hoka Clifton 9 (new URL)
      'images.ctfassets.net',     // On Cloud 5 (new URL)
      'salomon.com.au',           // Salomon XT-6 (new URL)
      'images.asics.com',         // Asics Gel-Kayano 30
      'icon2.cleanpng.com',       // Crocs Classic Clog (new URL)
      'www.knowear.co',           // Converse Chuck Taylor (new URL)
      'soleathens.com',           // Nike Dunks (new URL)
      'www.on.com',              // On Cloud 5 (old URL - can be removed)
      'images.puma.com',
      'www.google.com',
      'encrypted-tbn3.gstatic.com'
    ],
  },
}

export default nextConfig;
