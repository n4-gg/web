export default function Page() {
  return (
    <div className="relative overflow-hidden py-16">
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-lg">
          <h1>
            <span className="block text-center text-lg font-semibold text-n4-cyan">
              Introducing
            </span>
            <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-white/95 sm:text-4xl">
              n4.gg - The Rebrand
            </span>
          </h1>
          <p className="mt-8 text-xl leading-8">
            We are happy to announce that "vyast.dev" is now "n4.gg". This
            rebrand comes after 2+ years of FiveM scripting under our old name,
            and its finally time for a fresh start. Details about our new
            domain, a new discord, and more can be found below.
          </p>
        </div>

        <div className="prose prose-lg prose-red mx-auto mt-6 text-off-white">
          <p>
            Our new official domain that we acquired is <b>n4.gg</b>. Any and
            all websites owned by us will now use this domain. Common links we
            shared before such as our script documentation (
            <a
              target="_blank"
              href="https://docs.n4.gg"
              className="text-off-white"
            >
              docs.n4.gg
            </a>
            ), status page (
            <a
              target="_blank"
              href="https://status.n4.gg"
              className="text-off-white"
            >
              status.n4.gg
            </a>
            ), etc, that were under the <b>vyast.dev</b> domain still share the
            same subdomain, it is only the root domain that has changed.
          </p>

          <img
            className="w-full rounded-lg"
            src="/images/banner.jpg"
            alt="n4.gg Banner"
            width={1310}
            height={873}
          />

          <h2 className="text-off-white">Join our discord server!</h2>
          <p>
            The <b>n4.gg</b> discord server is still the old <b>vyast.dev</b>{" "}
            server. A new discord has not been made, but it has been completely
            rebranded and restructured, so you may not recognize it at first.
            All customers who own a script made by us and sold through Tebex
            still have their <b>Customer</b> role in the discord.{" "}
            <b>Please note</b> that if you are a VenomAC customer, you will need
            to migrate over to the new v2 discord if you have not already. For
            more info, you can the new VenomAC website{" "}
            <a
              target="_blank"
              href="https://venomac.com"
              className="text-off-white"
            >
              here
            </a>
            .
          </p>
          <p>
            Our vanity URL to join the server has also changed from <b>vyast</b>{" "}
            to <b>n4</b>, therefore you can join our new discord by clicking the
            full link below:{" "}
            <a
              target="_blank"
              href="https://discord.gg/n4"
              className="text-n4-cyan"
            >
              discord.gg/n4
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
