import { FaCalendarAlt, FaCheck, FaFlag } from "react-icons/fa";
import { GoOrganization } from "react-icons/go";
import { IoPeopleSharp } from "react-icons/io5";

function ProjectsView() {
  return (
    <section className="mx-auto mt-20 flex max-w-screen-2xl flex-col gap-8 p-4 py-0 md:p-8">
      <div className="flex flex-col gap-2">
        <h1 className="animate-fadeIn text-3xl font-bold text-gray-900 md:text-4xl">
          My <span className="text-orange-500">Projects</span>
        </h1>
        <div className="h-1 border-b-2 border-orange-500"></div>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <h2 className="text-xl font-semibold text-gray-900">
          USMCA, new labor agenda and cross-border labor institutions: Where is
          the transition of human-labor rights in Mexico headed?
        </h2>
        <img
          src="/images/projects/tmec.jpg"
          className="mx-auto w-fit max-w-full object-cover"
        />
        <div className="flex flex-col flex-wrap gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap justify-between gap-8">
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-2 text-lg font-semibold">
                  <FaCalendarAlt className="text-orange-500" />
                  <span>Period</span>
                </p>
                <p>01/01/2024 - 31/12/2024</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-2 text-lg font-semibold">
                  <FaCalendarAlt className="text-orange-500" />
                  <span>Status</span>
                </p>
                <p className="flex items-center gap-1">
                  <FaCheck className="text-emerald-400" />
                  <span>Completed</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-2 text-lg font-semibold">
                <FaFlag className="text-orange-500" />
                <span>Objective</span>
              </p>
              <p>
                The person in charge has studied workers' rights and the
                evolution of movements for the freedom of association and
                collective bargaining for over two decades, particularly in the
                automotive industry. His CONACYT Frontier Science project, "The
                Limits of an Expanding Automotive Industry: An Analytical Model
                to Study the Factors That Condition the Middle-Income Trap in
                Mexico", which is set to conclude in April 2024, is the latest
                in a series of related projects and studies. This project is a
                derivative of the previous one. In other words, it is a
                continuity project in the field of frontier science research.
                The new trade agreement for North America (USMCA) mandated a new
                labor law (NLL) and created unique cross-border institutions to
                monitor and promote the implementation of fundamental
                human-labor rights in Mexico. In connection with this, the 2019
                Labor Law Reform specifically sanctioned changes to guarantee
                the exercise of Fundamental Labor Rights in Mexico.
              </p>
            </div>
            <div className="flex flex-wrap justify-between gap-12">
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-2 text-lg font-semibold">
                  <IoPeopleSharp className="text-orange-500" />
                  <span>Responsibles and collaborators</span>
                </p>
                <div className="flex flex-wrap items-end justify-center gap-12">
                  <div className="flex flex-col items-center gap-1">
                    <img
                      src="/images/alex/alex_sonriendo.png"
                      alt="Alex Covarrubias"
                      className="aspect-square w-40 rounded-full object-cover object-top"
                    />
                    <p className="text-center font-semibold text-gray-900">
                      Alex Covarrubias Valdenebro
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <img
                      src="/images/projects/colegio_sonora_logo.jpg"
                      alt="Alex Covarrubias"
                      className="w-40 object-contain object-top"
                    />
                    <p className="text-center font-semibold text-gray-900">
                      El Colegio de Sonora
                    </p>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8 h-1 border-b-2 border-gray-900"></div>
      <div className="flex flex-wrap items-center gap-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Contributing to the decarbonization of Mexican cities through an
          electric transport ecosystem and sustainable mobility: Case studies
          and intervention in two polar cities (Cuernavaca, Morelos and
          Hermosillo, Sonora)
        </h2>
        <img
          src="/images/projects/electric_transport.webp"
          className="mx-auto max-h-96 w-fit max-w-full object-cover"
        />
        <div className="flex flex-col flex-wrap gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap justify-between gap-8">
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-2 text-lg font-semibold">
                  <FaCalendarAlt className="text-orange-500" />
                  <span>Period</span>
                </p>
                <p>17/09/2021 - 23/06/2023</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-2 text-lg font-semibold">
                  <FaCalendarAlt className="text-orange-500" />
                  <span>Status</span>
                </p>
                <p className="flex items-center gap-1">
                  <FaCheck className="text-emerald-400" />
                  <span>Completed</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-2 text-lg font-semibold">
                <FaFlag className="text-orange-500" />
                <span>Objective</span>
              </p>
              <p>
                The objective of the project is to develop a comprehensive,
                progressive, and inclusive electric transport ecosystem and
                sustainable mobility in the targeted cities, with the
                participation of key stakeholders and based on the introduction
                of technological routes, business models, and the development of
                social and institutional governance capacities committed to
                environmental care, in order to reduce carbon emissions,
                greenhouse gases and climate-altering compounds (GHG), as well
                as heat impacts and heat islands, contributing to improving air
                quality, health, and the quality of life of their populations.
              </p>
            </div>
            <div className="flex flex-wrap justify-between gap-12">
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-2 text-lg font-semibold">
                  <IoPeopleSharp className="text-orange-500" />
                  <span>Responsibles and collaborators</span>
                </p>
                <div className="flex flex-wrap items-end justify-center gap-12">
                  <div className="flex flex-col items-center gap-1">
                    <img
                      src="/images/alex/alex_sonriendo.png"
                      alt="Alex Covarrubias"
                      className="aspect-square w-40 rounded-full object-cover object-top"
                    />
                    <p className="text-center font-semibold text-gray-900">
                      Alex Covarrubias Valdenebro
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <img
                      src="/images/projects/colegio_sonora_logo.jpg"
                      alt="El Colegio de Sonora"
                      className="w-40 object-contain object-top"
                    />
                    <p className="text-center font-semibold text-gray-900">
                      El Colegio de Sonora
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-2 text-lg font-semibold">
                  <GoOrganization className="text-orange-500" />
                  <span>Funding sources</span>
                </p>
                <div className="flex flex-wrap items-end justify-center gap-12">
                  <div className="flex flex-col items-center justify-center gap-1">
                    <img
                      src="/images/projects/conacyt_logo.png"
                      alt="CONACYT"
                      className="w-40 object-contain object-top"
                    />
                    <p className="text-center font-semibold text-gray-900">
                      CONACYT
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8 h-1 border-b-2 border-gray-900"></div>
      <div className="flex flex-wrap items-center gap-4">
        <h2 className="text-xl font-semibold text-gray-900">
          The Limits of an Expanding Automotive Industry: An Analytical Model to
          Study the Factors that Condition the Middle-Income Trap in Mexico.
        </h2>
        <img
          src="/images/projects/middle_income_trap.webp"
          className="mx-auto max-h-96 w-fit max-w-full object-cover"
        />
        <div className="flex flex-col flex-wrap gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap justify-between gap-8">
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-2 text-lg font-semibold">
                  <FaCalendarAlt className="text-orange-500" />
                  <span>Period</span>
                </p>
                <p>11/10/2019 - 20/12/2023</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-2 text-lg font-semibold">
                  <FaCalendarAlt className="text-orange-500" />
                  <span>Status</span>
                </p>
                <p className="flex items-center gap-1">
                  <FaCheck className="text-emerald-400" />
                  <span>Completed</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-2 text-lg font-semibold">
                <FaFlag className="text-orange-500" />
                <span>Objective</span>
              </p>
              <p>
                The project aims to formulate an alternative analytical model to
                assess the factors that condition the middle-income trap in the
                country, based on evidence from the Mexican Automotive Industry
                (MAI), with the goal of enriching the theory of the factors that
                condition it with institutional and social concepts not
                considered so far. These are: A) the concept of institutional
                complementarity, to study the degrees of articulation between
                the government’s innovation agenda, academia, and private sector
                initiatives for the industry (science and technology programs
                and projects); and B) the concept of the economic morality of
                inequality, to study how the justice ideologies of business and
                labor organizations affect their employment and income
                relations. A gender perspective will be promoted by integrating
                a team of women—including a postdoctoral researcher—who will
                pursue their theses and support their training with products
                from the project.
              </p>
            </div>
            <div className="flex flex-wrap justify-between gap-12">
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-2 text-lg font-semibold">
                  <IoPeopleSharp className="text-orange-500" />
                  <span>Responsibles and collaborators</span>
                </p>
                <div className="flex flex-wrap items-end justify-center gap-12">
                  <div className="flex flex-col items-center gap-1">
                    <img
                      src="/images/alex/alex_sonriendo.png"
                      alt="Alex Covarrubias"
                      className="aspect-square w-40 rounded-full object-cover object-top"
                    />
                    <p className="text-center font-semibold text-gray-900">
                      Alex Covarrubias Valdenebro
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <img
                      src="/images/projects/sandra.jpg"
                      alt="Sandra Acosta García"
                      className="aspect-square w-40 rounded-full object-cover object-center"
                    />
                    <p className="text-center font-semibold text-gray-900">
                      Sandra Acosta García
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <img
                      src="/images/projects/colegio_sonora_logo.jpg"
                      alt="El Colegio de Sonora"
                      className="w-40 object-contain object-top"
                    />
                    <p className="text-center font-semibold text-gray-900">
                      El Colegio de Sonora
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-2 text-lg font-semibold">
                  <GoOrganization className="text-orange-500" />
                  <span>Funding sources</span>
                </p>
                <div className="flex flex-wrap items-end justify-center gap-12">
                  <div className="flex flex-col items-center justify-center gap-1">
                    <img
                      src="/images/projects/conacyt_logo.png"
                      alt="CONACYT"
                      className="w-40 object-contain object-top"
                    />
                    <p className="text-center font-semibold text-gray-900">
                      CONACYT
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsView;
