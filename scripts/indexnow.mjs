// IndexNow submitter for dasdigitalai.com
// Usage:
//   node indexnow.mjs                 -> submits every URL in the sitemap
//   node indexnow.mjs /pricing /about -> submits only those paths
//
// Requires Node 18+ (built-in fetch). Run it after you deploy changes.

const HOST = "dasdigitalai.com";
const KEY = "9e6cd5d08bb9af3d9ecca97c4d57b5f0";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP = `https://${HOST}/sitemap.xml`;

async function urlsFromSitemap() {
  const res = await fetch(SITEMAP);
  if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
}

async function main() {
  const args = process.argv.slice(2);
  const urlList = args.length
    ? args.map((p) => (p.startsWith("http") ? p : `https://${HOST}${p.startsWith("/") ? p : "/" + p}`))
    : await urlsFromSitemap();

  if (!urlList.length) {
    console.log("No URLs to submit.");
    return;
  }

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });

  // 200 = accepted, 202 = accepted (key check pending), 403 = key file not found/invalid,
  // 422 = URLs don't match host, 429 = too many requests
  console.log(`IndexNow responded ${res.status} for ${urlList.length} URL(s)`);
  urlList.forEach((u) => console.log("  " + u));
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
