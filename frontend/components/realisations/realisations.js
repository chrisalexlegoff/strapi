import React from "react"
import Slider from "./../slider/Slider"

const RealisationsTab = ({ realisations }) => {
  return (
    <div id="realisations">
      <div className="max-w-7xl mx-auto pt-24">
        {realisations.map((realisation) => {
          return (
            <div key={realisation.id} className="mx-auto lg:w-2/3 w-3/4">
              <div className="grid lg:grid-cols-2 min-h-[450px] mx-auto auto-rows-min">
                <div className="row-start-1">
                  <div
                    className="text-[#FC5050] font-semibold text-xl text-center lg:text-left"
                    dangerouslySetInnerHTML={{ __html: realisation.titre }}
                  ></div>
                  <div
                    className="text-[#2E437D] lg:text-left text-center uppercase text-xs font-semibold"
                    dangerouslySetInnerHTML={{ __html: realisation.annee }}
                  ></div>
                </div>
                <div
                  className="text-[#3F3F3F] text-xs row-start-2 py-14 lg:pt-0 lg:text-start text-center lg:pb-14"
                  dangerouslySetInnerHTML={{ __html: realisation.paragraphe }}
                ></div>

                <a
                  className="row-start-5 lg:row-start-3 w-3/4 lg:py-0 py-14 lg:mx-0 mx-auto"
                  href="https://chocolatiermocquin.sabrina-dossantos.fr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="group bg-transparent hover:bg-[#2E437D] lg:w-2/3 w-full h-12 mx-auto lg:m-0 block rounded-lg border-2 border-[#2E437D]"
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: realisation.button,
                      }}
                      className="font-bold text-[#2E437D] group-hover:text-white"
                    />
                  </button>
                </a>
                <div className="flex flex-wrap text-xs text-white lg:justify-end justify-center lg:col-start-2 lg:pb-0 pb-14">
                  {realisation.outils.map((outil) => {
                    return (
                      <div
                        className="rounded-lg bg-[#41EAD4] py-2 px-4  m-2"
                        key={outil.id}
                      >
                        {outil.competence}
                      </div>
                    )
                  })}
                </div>
                <div className="lg:col-start-2 lg:row-span-2 lg:mb-0 lg:mt-auto">
                  <Slider
                    items={realisation.carousel}
                    classname={"w-4/5 lg:mx-0 lg:ml-auto mx-auto"}
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
