import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="about section">
      {/* Section Title */}
      <div className="container section-title">
        <h2>About</h2>
        <p>
          I&apos;m a creative Full Stack Web Developer based in Ethiopia. I&apos;m very
          passionate and dedicated to my work. I&apos;m a self-motivated,
          detail-oriented, and self-starter. I have acquired the skills
          necessary to build great, appealing, and premium websites that meet
          the latest web standards.
          <br />
          Detail-orientated Web Developer adept at interpreting blueprints,
          working with others, and meeting production deadlines. Skilled at
          quickly learning new processes, technologies, and machinery.
          Self-motivated with strong organizational and time management
          abilities. Most importantly, I&apos;m constantly trying to learn new
          skills to improve myself and my work.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4 justify-content-center">
          {/* Profile photo */}
          <div className="col-lg-4">
            <Image
              src="/img/hero-bg.jpg"
              className="img-fluid"
              alt="Hana Guesh"
              width={400}
              height={400}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>

          {/* Content */}
          <div className="col-lg-8 content">
            <h2>Freelancer &amp; Full Stack Developer.</h2>
            <p className="fst-italic py-3">
              I knew I was hooked into the world of software development. Since
              then, I can&apos;t get enough and I have been obsessed with the idea
              of using software to solve practical problems.
            </p>

            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Birthday:</strong> <span>05 February 2002</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Phone:</strong> <span>+251987121253</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>City:</strong> <span>Axum</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Age:</strong> <span>24</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Degree:</strong> <span>Bachelor</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Email:</strong>{" "}
                    <span>hanaweldetnsae73@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="py-3">
              My specialities include quickly learning new skills and
              programming languages, problem solving, responsive design
              principles, website optimization, cross-platform and API managing
              and the Model View Controller (MVC) method of organizing code. So
              far I have under my belt. I&apos;m still enthusiastically grabbing on
              to any other programming languages, frameworks, or principles I
              can integrate into the coding web in my head.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
