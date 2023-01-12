import { FEATURES } from "@/data/features";
import CheckIcon from "@heroicons/react/24/outline/CheckIcon";

export function Features() {
  return (
    <div id="features" className="mb-12">
      <div className="mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            All-in-one platform
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-off-white/75">
            Quia est qui aut velit exercitationem repudiandae voluptatem
            facilis. Neque est debitis dolor facilis ab amet.
          </p>
        </div>
        <dl className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
          {FEATURES.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckIcon
                  className="absolute mt-1 h-6 w-6 text-n4-cyan"
                  aria-hidden="true"
                />
                <p className="ml-10 text-lg font-semibold leading-8">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 ml-10 text-base leading-7 text-off-white/75">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
