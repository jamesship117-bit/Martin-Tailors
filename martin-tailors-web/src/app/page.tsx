function BrandMotif({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M8 28c6-8 14-6 20-12"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M10 30l3-2-1 4-2-2z"
        fill="currentColor"
        opacity="0.9"
      />
      <circle cx="26" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="32" cy="18" r="3.5" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M28 14l6 6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="luxury-site">
      <header className="luxury-header">
        <div className="luxury-header__inner">
          <a href="#home" className="luxury-brand">
            <span className="luxury-brand__mark" aria-hidden>
              <BrandMotif />
            </span>
            <span className="luxury-brand__text">Martin Tailors</span>
          </a>
          <nav aria-label="Primary navigation">
            <ul className="luxury-nav">
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#hours">Hours</a>
              </li>
              <li>
                <a href="#appointments">Appointments</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section
        id="home"
        className="editorial-hero bg-pattern-houndstooth"
        aria-labelledby="hero-heading"
      >
        <div className="luxury-section__inner editorial-hero__grid">
          <div>
            <p className="editorial-hero__kicker">Houston · Est. Craft</p>
            <h1 id="hero-heading" className="editorial-hero__title">
              Bespoke tailoring for those who notice the details.
            </h1>
            <p className="editorial-hero__lede">
              Alterations, repairs, and made-to-measure precision — executed
              with the discipline of Savile Row and the clarity of modern
              design.
            </p>
            <div className="editorial-hero__actions">
              <a className="btn-luxury" href="#appointments">
                Request a fitting
              </a>
              <a className="btn-luxury btn-luxury--secondary" href="tel:+17138614891">
                713-861-4891
              </a>
            </div>
          </div>
          <aside className="swatch-card" aria-label="Atelier location">
            <h2 className="swatch-card__title">The atelier</h2>
            <p>
              4712 Feagan Street
              <br />
              Houston, Texas 77007
            </p>
            <p>
              <a href="tel:+17138614891">713-861-4891</a>
            </p>
            <p style={{ marginBottom: 0 }}>
              <a
                href="https://maps.google.com/?q=4712+Feagan+St,+Houston,+TX+77007"
                target="_blank"
                rel="noreferrer"
              >
                Directions
              </a>
            </p>
          </aside>
        </div>
      </section>

      <div className="section-divider section-divider--full" role="presentation" />

      <section id="services" className="luxury-section bg-pattern-herringbone">
        <div className="luxury-section__inner">
          <h2 className="section-heading">Services</h2>
          <div className="service-grid">
            <article className="swatch-card swatch-card--light">
              <h3>Alterations</h3>
              <p>
                Hemming, tapering, waist and sleeve adjustments, and silhouette
                refinement — measured twice, stitched once.
              </p>
            </article>
            <article className="swatch-card swatch-card--light">
              <h3>Sewing &amp; restoration</h3>
              <p>
                Zipper and lining work, seam reinforcement, and careful repair so
                your investment pieces endure.
              </p>
            </article>
            <article className="swatch-card swatch-card--light">
              <h3>Formal &amp; bespoke</h3>
              <p>
                Suiting, eveningwear, and occasion tailoring with private
                fittings and uncompromising finish standards.
              </p>
            </article>
          </div>
        </div>
      </section>

      <div className="section-divider section-divider--full" role="presentation" />

      <section id="hours" className="luxury-section">
        <div className="luxury-section__inner">
          <h2 className="section-heading">Hours of operation</h2>
          <ul className="hours-panel" aria-label="Weekly business hours">
            <li>
              <span>Monday</span>
              <strong>8:00 AM — 5:00 PM</strong>
            </li>
            <li>
              <span>Tuesday</span>
              <strong>8:00 AM — 5:00 PM</strong>
            </li>
            <li>
              <span>Wednesday</span>
              <strong>8:00 AM — 5:00 PM</strong>
            </li>
            <li>
              <span>Thursday</span>
              <strong>8:00 AM — 5:00 PM</strong>
            </li>
            <li>
              <span>Friday</span>
              <strong>8:00 AM — 5:00 PM</strong>
            </li>
            <li>
              <span>Saturday</span>
              <strong>9:30 AM — 2:00 PM</strong>
            </li>
            <li>
              <span>Sunday</span>
              <strong>Closed</strong>
            </li>
          </ul>
        </div>
      </section>

      <div className="section-divider section-divider--full" role="presentation" />

      <section id="appointments" className="luxury-section bg-pattern-herringbone">
        <div className="luxury-section__inner appointment-layout">
          <div>
            <h2 className="section-heading">Appointments</h2>
            <p className="appointment-intro">
              Reserve a private consultation. We will confirm your time by
              phone. For urgent matters, call{" "}
              <a href="tel:+17138614891">713-861-4891</a>.
            </p>
          </div>
          <div className="appointment-shell">
            <form className="luxury-form">
              <div className="form-grid">
                <label>
                  Full name
                  <input required type="text" placeholder="Your name" />
                </label>
                <label>
                  Phone
                  <input required type="tel" placeholder="713-861-4891" />
                </label>
                <label>
                  Service
                  <select required defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Alterations</option>
                    <option>Sewing &amp; restoration</option>
                    <option>Formal &amp; bespoke</option>
                    <option>Other</option>
                  </select>
                </label>
                <label>
                  Preferred date
                  <input required type="date" />
                </label>
                <label>
                  Notes
                  <textarea
                    rows={4}
                    placeholder="Garment type, timeline, or special requests."
                  />
                </label>
                <button className="btn-luxury" type="submit">
                  Submit request
                </button>
                <p className="form-note">
                  Requests are reviewed during business hours. This form does not
                  confirm an appointment until we contact you.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <div className="section-divider section-divider--full" role="presentation" />

      <footer id="contact" className="luxury-footer">
        <div className="luxury-footer__grid">
          <div>
            <h2>Martin Tailors</h2>
            <p>
              Bespoke tailoring and alterations. Precision, discretion, and
              lasting craft.
            </p>
          </div>
          <div>
            <p>
              <strong className="luxury-footer__label">Address</strong>
              <br />
              4712 Feagan St, Houston, TX 77007
            </p>
            <p className="luxury-footer__block">
              <strong className="luxury-footer__label">Phone</strong>
              <br />
              <a href="tel:+17138614891">713-861-4891</a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
