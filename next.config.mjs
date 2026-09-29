/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // Routes retired in the 2026 redesign. The old demo case studies have no
    // successor page, so they land on the work index rather than a 404.
    const oldStudies = [
      "plainsong-espresso",
      "rotary-ashburton",
      "mainline-plumbing",
      "styles-and-smiles",
      "monster-chicken",
      "thicket",
    ];
    return [
      { source: "/about", destination: "/#studio", permanent: true },
      { source: "/free-audit", destination: "/contact", permanent: true },
      { source: "/services", destination: "/#studio", permanent: true },
      { source: "/pricing", destination: "/contact", permanent: true },
      ...oldStudies.map((slug) => ({ source: `/work/${slug}`, destination: "/work", permanent: true })),
    ];
  },
};

export default nextConfig;
