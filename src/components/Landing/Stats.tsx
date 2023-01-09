export function Stats() {
  return (
    <div id="stats" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by over 150 servers
          </h2>

          <p className="mt-3 text-xl text-off-white/75 sm:mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus repellat laudantium.
          </p>
        </div>
      </div>

      <div className="mt-10 pb-12 sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <dl className="rounded-lg bg-off-white/5 shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-off-white p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-off-white/90">
                    Customers
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-n4-cyan/90">
                    65+
                  </dd>
                </div>
                <div className="flex flex-col border-t border-b border-off-white p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-off-white/90">
                    Delivery
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-n4-cyan/90">
                    24/7
                  </dd>
                </div>
                <div className="flex flex-col border-t border-off-white p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-off-white/90">
                    Optimized
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-n4-cyan/90">
                    100%
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
