export default function Home() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-[92%] max-w-6xl flex-wrap items-center justify-between gap-3 py-4">
          <a href="#home" className="text-lg font-bold tracking-tight">
            Martin Tailors
          </a>
          <nav aria-label="Primary navigation">
            <ul className="flex flex-wrap gap-4 text-sm font-medium">
              <li>
                <a href="#services" className="hover:text-blue-700">
                  Services
                </a>
              </li>
              <li>
                <a href="#hours" className="hover:text-blue-700">
                  Hours
                </a>
              </li>
              <li>
                <a href="#appointments" className="hover:text-blue-700">
                  Appointments
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-700">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="home" className="py-16 md:py-20">
        <div className="mx-auto grid w-[92%] max-w-6xl gap-6 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
              Houston Sewing & Alterations
            </p>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Professional Tailoring That Fits You Perfectly
            </h1>
            <p className="max-w-2xl text-lg text-slate-600">
              Martin Tailors provides expert sewing and alteration services for
              everyday garments, formal wear, and special occasions. We focus on
              precise fit, clean finishing, and reliable turnaround times.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#appointments"
                className="rounded-md bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
              >
                Set Up an Appointment
              </a>
              <a
                href="tel:+17138614891"
                className="rounded-md bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-900 hover:bg-blue-200"
              >
                Call 713-861-4891
              </a>
            </div>
          </div>
          <aside className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold">Visit Us</h2>
            <p className="mt-3 text-slate-700">
              4712 Feagan St
              <br />
              Houston, TX 77007
            </p>
            <p className="mt-3">
              <span className="font-semibold">Phone:</span>{" "}
              <a href="tel:+17138614891" className="text-blue-700 hover:underline">
                713-861-4891
              </a>
            </p>
            <a
              className="mt-2 inline-block text-sm font-semibold text-blue-700 hover:underline"
              href="https://maps.google.com/?q=4712+Feagan+St,+Houston,+TX+77007"
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps
            </a>
          </aside>
        </div>
      </section>

      <section id="services" className="py-14">
        <div className="mx-auto w-[92%] max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tight">Our Services</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-xl font-semibold">Alterations</h3>
              <p className="mt-2 text-slate-600">
                Hemming, tapering, waist adjustments, sleeve shortening, and dress
                resizing for a polished fit.
              </p>
            </article>
            <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-xl font-semibold">Sewing & Repairs</h3>
              <p className="mt-2 text-slate-600">
                Zipper replacements, seam repair, patching, and button replacement
                to extend the life of your garments.
              </p>
            </article>
            <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-xl font-semibold">Formal Wear Fittings</h3>
              <p className="mt-2 text-slate-600">
                Tailoring support for suits, eveningwear, and special occasion
                outfits with careful, detail-first finishing.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="hours" className="bg-slate-100 py-14">
        <div className="mx-auto w-[92%] max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tight">
            Days & Hours of Operation
          </h2>
          <ul className="mt-6 divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white">
            <li className="flex items-center justify-between p-4">
              <span>Monday</span>
              <strong>8:00 AM - 5:00 PM</strong>
            </li>
            <li className="flex items-center justify-between p-4">
              <span>Tuesday</span>
              <strong>8:00 AM - 5:00 PM</strong>
            </li>
            <li className="flex items-center justify-between p-4">
              <span>Wednesday</span>
              <strong>8:00 AM - 5:00 PM</strong>
            </li>
            <li className="flex items-center justify-between p-4">
              <span>Thursday</span>
              <strong>8:00 AM - 5:00 PM</strong>
            </li>
            <li className="flex items-center justify-between p-4">
              <span>Friday</span>
              <strong>8:00 AM - 5:00 PM</strong>
            </li>
            <li className="flex items-center justify-between p-4">
              <span>Saturday</span>
              <strong>9:30 AM - 2:00 PM</strong>
            </li>
            <li className="flex items-center justify-between p-4">
              <span>Sunday</span>
              <strong>Closed</strong>
            </li>
          </ul>
        </div>
      </section>

      <section id="appointments" className="py-14">
        <div className="mx-auto grid w-[92%] max-w-6xl gap-6 md:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Appointments</h2>
            <p className="mt-3 text-slate-600">
              Fill out this form and we will contact you to confirm your fitting
              or drop-off time.
            </p>
            <p className="mt-2 text-slate-700">
              Need immediate help? Call{" "}
              <a className="font-semibold text-blue-700 hover:underline" href="tel:+17138614891">
                713-861-4891
              </a>
              .
            </p>
          </div>
          <form className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="grid gap-4">
              <label className="grid gap-1 text-sm font-medium">
                Full Name
                <input
                  required
                  type="text"
                  className="rounded-md border border-slate-300 px-3 py-2 outline-none ring-blue-300 placeholder:text-slate-400 focus:ring-2"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-1 text-sm font-medium">
                Phone Number
                <input
                  required
                  type="tel"
                  className="rounded-md border border-slate-300 px-3 py-2 outline-none ring-blue-300 placeholder:text-slate-400 focus:ring-2"
                  placeholder="713-861-4891"
                />
              </label>
              <label className="grid gap-1 text-sm font-medium">
                Service Needed
                <select
                  required
                  className="rounded-md border border-slate-300 px-3 py-2 outline-none ring-blue-300 focus:ring-2"
                  defaultValue=""
                >
                  <option disabled value="">
                    Select a service
                  </option>
                  <option>Alterations</option>
                  <option>Sewing & Repairs</option>
                  <option>Formal Wear Fittings</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="grid gap-1 text-sm font-medium">
                Preferred Date
                <input
                  required
                  type="date"
                  className="rounded-md border border-slate-300 px-3 py-2 outline-none ring-blue-300 focus:ring-2"
                />
              </label>
              <label className="grid gap-1 text-sm font-medium">
                Notes
                <textarea
                  rows={4}
                  className="rounded-md border border-slate-300 px-3 py-2 outline-none ring-blue-300 placeholder:text-slate-400 focus:ring-2"
                  placeholder="Tell us what needs to be tailored."
                />
              </label>
              <button
                type="submit"
                className="rounded-md bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
              >
                Request Appointment
              </button>
              <p className="text-xs text-slate-500">
                Online appointment requests are reviewed during business hours.
              </p>
            </div>
          </form>
        </div>
      </section>

      <footer id="contact" className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto grid w-[92%] max-w-6xl gap-3 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">Martin Tailors</h2>
            <p className="text-slate-600">
              Professional sewing and alterations in Houston, Texas.
            </p>
          </div>
          <div className="text-slate-700">
            <p>
              <strong>Address:</strong> 4712 Feagan St, Houston, TX 77007
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a className="text-blue-700 hover:underline" href="tel:+17138614891">
                713-861-4891
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
