import Link from "next/link";

export function Hero() {
  return (
    <div id="hero" className="relative px-6 lg:px-8">
      <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
        <div>
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-off-white/30 hover:ring-white/30">
              <span>
                Announcing our rebrand from vyast.dev!{" "}
                <Link
                  href="/news/rebrand"
                  className="pl-1 font-semibold text-n4-cyan/80"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </Link>
              </span>
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
              Premium quality scripts for your FiveM server
            </h1>

            <p className="mt-6 text-lg leading-8 text-off-white/75 sm:text-center">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>

            <div className="mt-8 flex gap-x-4 sm:justify-center">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://store.n4.gg"
                className="inline-block rounded-lg bg-n4-blue px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-n4-blue duration-200 hover:bg-n4-blue/80"
              >
                Visit store{" "}
                <span className="pl-2 text-off-white" aria-hidden="true">
                  &rarr;
                </span>
              </a>

              <a
                href="/#faq"
                className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 ring-1 ring-off-white/30 hover:ring-white/30"
              >
                Learn more{" "}
                <span className="pl-2 text-off-white/50" aria-hidden="true">
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
