import React from "react";

export default function ChikomaFarmLandingPage() {
  return (
    <div className="min-h-screen bg-[#f7f5ef] text-[#1d2b1f]">
      <header className="sticky top-0 z-20 border-b border-black/5 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1f5c3f] text-white shadow-sm">
              <svg
                viewBox="0 0 64 64"
                className="h-8 w-8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 39c0-9 6-15 14-15 7 0 12 4 14 11 2 0 4 2 4 5s-2 6-6 6H27c-5 0-8-3-8-7Z"
                  fill="currentColor"
                  opacity="0.95"
                />
                <path
                  d="M24 23c1-5 5-9 10-9 2 0 4 1 6 2-1 1-2 3-2 5 0 1 0 2 1 3-2-1-4-2-6-2-3 0-6 1-9 1Z"
                  fill="#f4c542"
                />
                <circle cx="41" cy="29" r="1.8" fill="#1d2b1f" />
                <path d="M47 30l6 2-6 3v-5Z" fill="#e0a126" />
                <path
                  d="M22 48c3 3 8 5 13 5 8 0 14-3 18-9"
                  stroke="#f4c542"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div>
              <p className="text-lg font-extrabold tracking-tight">
                Chikoma Farm
              </p>
              <p className="text-xs uppercase tracking-[0.22em] text-[#6d7b6f]">
                Fresh eggs • healthy poultry
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#314535] md:flex">
            <a href="#about" className="transition hover:text-[#1f5c3f]">
              About
            </a>
            <a href="#products" className="transition hover:text-[#1f5c3f]">
              Products
            </a>
            <a href="#why" className="transition hover:text-[#1f5c3f]">
              Why Us
            </a>
            <a href="#contact" className="transition hover:text-[#1f5c3f]">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-[#1f5c3f] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
          >
            Order Now
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,197,66,0.22),transparent_30%),radial-gradient(circle_at_left,rgba(31,92,63,0.14),transparent_35%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div className="relative z-10">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d6decf] bg-white px-4 py-2 text-sm text-[#45614a] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#f4c542]" />
                Trusted farm-fresh poultry products
              </div>

              <h1 className="max-w-xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Premium poultry products raised with care at{" "}
                <span className="text-[#1f5c3f]">Chikoma Farm</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#516453]">
                From nutrient-rich eggs to healthy broiler chickens, we deliver
                freshness, hygiene, and dependable farm quality for families,
                retailers, and bulk buyers.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#products"
                  className="rounded-full bg-[#1f5c3f] px-6 py-3.5 font-semibold text-white shadow-lg shadow-[#1f5c3f]/20 transition hover:-translate-y-0.5"
                >
                  Explore Products
                </a>
                <a
                  href="#about"
                  className="rounded-full border border-[#1f5c3f]/20 bg-white px-6 py-3.5 font-semibold text-[#1f5c3f] transition hover:border-[#1f5c3f]"
                >
                  Learn More
                </a>
              </div>

              <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
                {[
                  ["500+", "Daily fresh eggs"],
                  ["100%", "Clean feeding practices"],
                  ["24/7", "Customer support"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm"
                  >
                    <div className="text-2xl font-black text-[#1f5c3f]">
                      {value}
                    </div>
                    <div className="mt-1 text-sm text-[#617364]">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <div className="relative mx-auto max-w-xl rounded-[2rem] border border-white/50 bg-white p-5 shadow-2xl shadow-black/10">
                <div className="aspect-[4/4.6] overflow-hidden rounded-[1.6rem] bg-[linear-gradient(180deg,#eef4e8_0%,#fdf7de_100%)] p-6">
                  <div className="flex h-full flex-col justify-between rounded-[1.35rem] border border-[#dfe7d8] bg-white/50 p-6 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#738372]">
                          Featured farm quality
                        </p>
                        <h2 className="mt-2 text-3xl font-black text-[#203524]">
                          Farm to table freshness
                        </h2>
                      </div>
                      <div className="rounded-2xl bg-[#1f5c3f] px-4 py-2 text-sm font-bold text-white">
                        Since 2018
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-3xl bg-[#1f5c3f] p-5 text-white shadow-lg">
                        <p className="text-sm uppercase tracking-[0.18em] text-white/75">
                          Fresh eggs
                        </p>
                        <p className="mt-2 text-3xl font-black">Grade A</p>
                        <p className="mt-3 text-sm leading-6 text-white/80">
                          Collected daily and handled hygienically for maximum
                          freshness.
                        </p>
                      </div>

                      <div className="rounded-3xl bg-[#fff4cf] p-5 text-[#3b3a2d] shadow-sm">
                        <p className="text-sm uppercase tracking-[0.18em] text-[#8a7b41]">
                          Healthy broilers
                        </p>
                        <p className="mt-2 text-3xl font-black">Strong stock</p>
                        <p className="mt-3 text-sm leading-6 text-[#665f40]">
                          Raised in a clean environment with balanced nutrition
                          and proper care.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-3xl border border-dashed border-[#bfd0be] bg-white/70 p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#70806f]">
                        Why customers return
                      </p>
                      <div className="mt-4 grid gap-3 sm:grid-cols-3">
                        {[
                          "Reliable supply",
                          "Clean production",
                          "Trusted quality",
                        ].map((item) => (
                          <div
                            key={item}
                            className="rounded-2xl bg-white p-4 text-center text-sm font-semibold text-[#38513d] shadow-sm"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b0891b]">
              Our products
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Everything you need from a modern poultry farm
            </h2>
            <p className="mt-4 text-lg text-[#586c5a]">
              Built for households, restaurants, resellers, and bulk poultry
              buyers who value consistency and freshness.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Fresh Farm Eggs",
                desc: "Nutritious, clean, and carefully packaged eggs collected daily for premium freshness.",
                tag: "Daily collection",
              },
              {
                title: "Broiler Chickens",
                desc: "Healthy, well-raised broilers suitable for home use, restaurants, and commercial buyers.",
                tag: "Quality stock",
              },
              {
                title: "Poultry Support",
                desc: "Guidance on poultry best practices, supply partnerships, and farm-based business support.",
                tag: "Trusted advice",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-[2rem] border border-black/5 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="inline-flex rounded-full bg-[#eef4e8] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#1f5c3f]">
                  {item.tag}
                </div>
                <h3 className="mt-5 text-2xl font-black tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#617364]">
                  {item.desc}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-[#1f5c3f]"
                >
                  Make an inquiry <span aria-hidden>→</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="bg-white py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div className="rounded-[2rem] bg-[#1f5c3f] p-8 text-white shadow-xl lg:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f4d46b]">
                About Chikoma Farm
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                Healthy poultry. Honest farming. Reliable supply.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
                Chikoma Farm is committed to producing high-quality poultry
                products through clean housing, proper nutrition, and careful
                farm management. We focus on freshness, trust, and long-term
                customer satisfaction.
              </p>
            </div>

            <div className="grid gap-5">
              {[
                [
                  "Clean Environment",
                  "Birds are raised in a well-managed farm setting that supports health and hygiene.",
                ],
                [
                  "Balanced Feed",
                  "Quality feeding practices help improve growth, strength, and product consistency.",
                ],
                [
                  "Reliable Service",
                  "We value customer relationships and aim for dependable supply and communication.",
                ],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-[1.75rem] border border-black/5 bg-[#faf9f4] p-6 shadow-sm"
                >
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-2 leading-7 text-[#617364]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b0891b]">
              Why choose us
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              A trusted farm brand customers can count on
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Fresh and hygienic egg handling",
              "Healthy chickens raised with care",
              "Consistent product quality and supply",
              "Professional farm image for modern buyers",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.75rem] border border-[#dfe6d8] bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef4e8] text-xl">
                  ✓
                </div>
                <p className="mt-4 text-lg font-semibold leading-7 text-[#314535]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 pb-16 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.2rem] bg-[linear-gradient(135deg,#1f5c3f_0%,#2d6f4d_55%,#d9b347_160%)] p-8 text-white shadow-2xl lg:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f7dea1]">
                  Ready to order?
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  Get fresh poultry products from Chikoma Farm today
                </h2>
                <p className="mt-4 text-lg leading-8 text-white/85">
                  Order eggs, inquire about broilers, or start a supply
                  partnership with a farm that values quality.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-white px-6 py-3.5 font-semibold text-[#1f5c3f] transition hover:-translate-y-0.5"
                >
                  Contact Us
                </a>
                <a
                  href="#products"
                  className="rounded-full border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
                >
                  See Products
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-black/5 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1f5c3f] text-white">
                <svg
                  viewBox="0 0 64 64"
                  className="h-8 w-8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 39c0-9 6-15 14-15 7 0 12 4 14 11 2 0 4 2 4 5s-2 6-6 6H27c-5 0-8-3-8-7Z"
                    fill="currentColor"
                    opacity="0.95"
                  />
                  <path
                    d="M24 23c1-5 5-9 10-9 2 0 4 1 6 2-1 1-2 3-2 5 0 1 0 2 1 3-2-1-4-2-6-2-3 0-6 1-9 1Z"
                    fill="#f4c542"
                  />
                  <circle cx="41" cy="29" r="1.8" fill="#1d2b1f" />
                  <path d="M47 30l6 2-6 3v-5Z" fill="#e0a126" />
                </svg>
              </div>
              <div>
                <p className="text-xl font-black tracking-tight">
                  Chikoma Farm
                </p>
                <p className="text-sm text-[#617364]">
                  Fresh eggs • Healthy poultry • Trusted farming
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md leading-7 text-[#617364]">
              A modern poultry farm brand focused on clean production,
              dependable quality, and customer trust.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.22em] text-[#1f5c3f]">
              Quick links
            </h3>
            <div className="mt-4 space-y-3 text-[#49604d]">
              <a href="#about" className="block hover:text-[#1f5c3f]">
                About Us
              </a>
              <a href="#products" className="block hover:text-[#1f5c3f]">
                Products
              </a>
              <a href="#why" className="block hover:text-[#1f5c3f]">
                Why Choose Us
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.22em] text-[#1f5c3f]">
              Contact
            </h3>
            <div className="mt-4 space-y-3 text-[#49604d]">
              <p>Phone: +000 000 0000</p>
              <p>Email: hello@chikomafarm.com</p>
              <p>Location: Your farm address here</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
