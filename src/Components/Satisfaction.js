import React from "react";

const Satisfaction = () => {
  return (
    <section>
        <div class="max-w-screen-4xl px-4 py-8 mx-auto text-center lg:py-8 lg:px-2">
          <dl class="grid max-w-screen-xl gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
            <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-xl text-[#334155] font-extrabold">10,000+</dt>
              <dd class="font-light text-[#475569]">
              Happy blogger, marketer and agencies.
              </dd>
            </div>
            <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-xl text-[#334155] font-extrabold">4.9/5</dt>
              <dd class="font-light text-[#475569]">
              Satisfaction rating from 1000+ reviews on TrustPilot.
              </dd>
            </div>
            <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-xl text-[#334155] font-extrabold">2,00,000+ hr</dt>
              <dd class="font-light text-[#475569]">
              $50 million+ saved in content writing.
              </dd>
            </div>
          </dl>
        </div>
    </section>
  );
};

export default Satisfaction;
