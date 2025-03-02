import { useTranslation } from "react-i18next"; // Importar el hook de traducción
import { FaCalendarAlt, FaCheck, FaFlag } from "react-icons/fa";
import { GoOrganization } from "react-icons/go";
import { IoPeopleSharp } from "react-icons/io5";

function ProjectsView() {
  const { t } = useTranslation(); // Hook para acceder a las traducciones

  return (
    <section className="mx-auto mt-20 flex max-w-screen-2xl flex-col gap-8 p-4 pt-0 md:p-8">
      {/* Título de la sección */}
      <div className="flex flex-col gap-2">
        <h1 className="animate-fadeIn text-3xl font-bold text-gray-900 md:text-4xl">
          {t("My")} <span className="text-orange-500">{t("projects")}</span>
        </h1>
        <div className="h-1 border-b-2 border-orange-500"></div>
      </div>

      {/* Proyecto 1: USMCA */}
      <div className="flex flex-wrap items-center gap-4">
        <h2 className="text-xl font-semibold text-gray-900">
          {t("usmcaTitle")}
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
                  <span>{t("period")}</span>
                </p>
                <p>01/01/2024 - 31/12/2024</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-2 text-lg font-semibold">
                  <FaCalendarAlt className="text-orange-500" />
                  <span>{t("status")}</span>
                </p>
                <p className="flex items-center gap-1">
                  <FaCheck className="text-emerald-400" />
                  <span>{t("completed")}</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-2 text-lg font-semibold">
                <FaFlag className="text-orange-500" />
                <span>{t("objective")}</span>
              </p>
              <p>{t("usmcaObjective")}</p>
            </div>
            <div className="flex flex-wrap justify-between gap-12">
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-2 text-lg font-semibold">
                  <IoPeopleSharp className="text-orange-500" />
                  <span>{t("responsiblesAndCollaborators")}</span>
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
            </div>
          </div>
        </div>
      </div>

      {/* Proyecto 2: Transporte Eléctrico */}
      <div className="my-8 h-1 border-b-2 border-gray-900"></div>
      <div className="flex flex-wrap items-center gap-4">
        <h2 className="text-xl font-semibold text-gray-900">
          {t("electricTransportTitle")}
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
                  <span>{t("period")}</span>
                </p>
                <p>17/09/2021 - 23/06/2023</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-2 text-lg font-semibold">
                  <FaCalendarAlt className="text-orange-500" />
                  <span>{t("status")}</span>
                </p>
                <p className="flex items-center gap-1">
                  <FaCheck className="text-emerald-400" />
                  <span>{t("completed")}</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-2 text-lg font-semibold">
                <FaFlag className="text-orange-500" />
                <span>{t("objective")}</span>
              </p>
              <p>{t("electricTransportObjective")}</p>
            </div>
            <div className="flex flex-wrap justify-between gap-12">
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-2 text-lg font-semibold">
                  <IoPeopleSharp className="text-orange-500" />
                  <span>{t("responsiblesAndCollaborators")}</span>
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
                  <span>{t("fundingSources")}</span>
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

      {/* Proyecto 3: Trampa de Ingresos Medios */}
      <div className="my-8 h-1 border-b-2 border-gray-900"></div>
      <div className="flex flex-wrap items-center gap-4">
        <h2 className="text-xl font-semibold text-gray-900">
          {t("middleIncomeTrapTitle")}
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
                  <span>{t("period")}</span>
                </p>
                <p>11/10/2019 - 20/12/2023</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-2 text-lg font-semibold">
                  <FaCalendarAlt className="text-orange-500" />
                  <span>{t("status")}</span>
                </p>
                <p className="flex items-center gap-1">
                  <FaCheck className="text-emerald-400" />
                  <span>{t("completed")}</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-2 text-lg font-semibold">
                <FaFlag className="text-orange-500" />
                <span>{t("objective")}</span>
              </p>
              <p>{t("middleIncomeTrapObjective")}</p>
            </div>
            <div className="flex flex-wrap justify-between gap-12">
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-2 text-lg font-semibold">
                  <IoPeopleSharp className="text-orange-500" />
                  <span>{t("responsiblesAndCollaborators")}</span>
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
                  <span>{t("fundingSources")}</span>
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