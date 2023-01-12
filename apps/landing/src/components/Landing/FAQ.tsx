import { FAQS } from "@/data/faqs";

export function FAQ() {
  return (
    <div id="faq" className="pb-12">
      <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight">
          Frequently asked questions
        </h2>

        <div className="mt-12">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 md:space-y-0 lg:grid-cols-3">
            {FAQS.map((faq, index) => (
              <div key={index}>
                <dt className="text-lg font-medium leading-6">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base text-off-white/75">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
