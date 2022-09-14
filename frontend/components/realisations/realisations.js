import React from "react"
import Slider from "./../slider/Slider"

const RealisationsTab = ({ realisations }) => {
  return (
    <div id="realisations">
      <div className="max-w-9xl mx-auto pt-24">
        {realisations.map((realisation) => {
          return (
            <div key={realisation.id} className="mx-auto w-4/5 lg:w-3/4">
              <div className="grid xl:grid-cols-2 min-h-[450px] mx-auto auto-rows-min bg-[#FAFAFB] p-6 lg:p-16 rounded-2xl mb-10">
                <div className="row-start-1">
                  <div
                    className="text-[#FC5050] text-center xl:text-left"
                    dangerouslySetInnerHTML={{ __html: realisation.titre }}
                  ></div>
                  <div
                    className="text-[#2E437D] xl:text-left text-center uppercase"
                    dangerouslySetInnerHTML={{ __html: realisation.annee }}
                  ></div>
                </div>
                <div
                  className="text-[#3F3F3F] row-start-2 py-14 xl:pt-0 xl:text-start text-center xl:pb-14"
                  dangerouslySetInnerHTML={{ __html: realisation.paragraphe }}
                ></div>

                <a
                  className="row-start-5 xl:row-start-3 w-3/4 xl:py-0 py-14 xl:mx-0 mx-auto"
                  href="https://chocolatiermocquin.sabrina-dossantos.fr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="group bg-transparent hover:bg-[#2E437D] xl:w-2/3 w-full h-20 mx-auto xl:m-0 block rounded-xl border-2 border-[#2E437D]"
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: realisation.button,
                      }}
                      className=" text-[#2E437D] group-hover:text-white"
                    />
                  </button>
                </a>
                <div className="flex xl:justify-end w-full xl:col-start-2 ">
                  {" "}
                  <div className="flex flex-wrap text-xs text-white xl:justify-end xl:w-2/3 w-full justify-center xl:pb-0 pb-14">
                    {realisation.outils.map((outil) => {
                      return (
                        <div
                          className="rounded-xl bg-[#41EAD4] py-2 px-4 m-2"
                          key={outil.id}
                        >
                          {outil.competence}
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="xl:col-start-2 xl:row-span-2 xl:mb-0 xl:mt-auto">
                  <Slider
                    items={realisation.carousel}
                    classname={"w-4/5 xl:mx-0 xl:ml-auto mx-auto"}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RealisationsTab
