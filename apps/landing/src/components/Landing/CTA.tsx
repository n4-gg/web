export function CTA() {
  return (
    <div id="cta" className="mb-24 bg-off-white/10 shadow-lg">
      <div className="mx-auto max-w-2xl py-16 px-6 text-center sm:py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white/95 sm:text-4xl">
          <span className="block">Upgrade your server.</span>
          <span className="block">Purchase a script today.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-off-white/80">
          Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
          Malesuada adipiscing sagittis vel nulla nec.
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://store.n4.gg"
          className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-n4-blue px-5 py-3 text-base font-medium text-white ring-1 ring-n4-blue duration-200 hover:bg-n4-blue/80 sm:w-auto"
        >
          Visit Tebex Store
        </a>
      </div>
    </div>
  );
}
