const BASE_URL = "https://n4.gg";

console.log(process.env.VERCEL_URL, "BASE_URL", BASE_URL);

const title = "n4.gg | FiveM Scripts";
const image = `${BASE_URL}/images/banner.jpg`;

const description =
  "n4.gg provides premium quality FiveM scripts sold through our Tebex store";

const keywords =
  "fivem, development, n4, vyast, vyast.dev, script, scripts, rp, tebex, cfx, cfx.re, roleplay, queue, quality, premium, resource, lua";

export default function Head() {
  return (
    <>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#014188" />
      <meta name="msapplication-TileColor" content="#014188" />
      <meta name="theme-color" content="#014188" />

      <meta name="author" content="Vyast" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={BASE_URL} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@vyasts" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
}
