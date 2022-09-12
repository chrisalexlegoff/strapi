import React from "react"
import LazyImage from "./../../lib/lazy-images"
import Link from "next/link"

const Presentation = ({ presentation }) => {
  const imgChris = LazyImage(
    presentation.images.data[0].attributes,
    "image christophe",
    "lazy"
  )
  const imgSab = LazyImage(
    presentation.images.data[1].attributes,
    "image christophe",
    "lazy"
  )
  return (
    <div className="max-w-9xl mx-auto pt-16 xl:pt-32 pb-16 xl:pb-32">
      <div className="flex flex-col xl:flex-row justify-center items-center">
        <div className="flex flex-col max-w-[600px] xl:h-[800px] xl:justify-between justify-center mx-6 mb-16 xl:mb-0">
          <div className="flex xl:items-end text-[#FC5050] h-auto xl:h-[200px]">
            <div className="w-3/4 xl:w-2/3 mb-2 xl:pr-2 pr-0 tracking-wider xl:text-right text-center mx-auto xl:mx-0">
              <div
                className="xl:text-[34px] lg:text-[30px]  text-[26px]  text-[26px] font-semibold"
                dangerouslySetInnerHTML={{ __html: presentation.titre3 }}
              ></div>
              <div
                className="uppercase font-medium xl:text-[21px] lg:text-[18px]  text-[15px]"
                dangerouslySetInnerHTML={{ __html: presentation.titre4 }}
              ></div>
              <div className="grow xl:hidden block mx-auto">{imgSab}</div>
            </div>
            <div className="grow hidden xl:block">{imgSab}</div>
          </div>
          <div
            className="uppercase text-[#3F3F3F] font-bold xl:text-[17px] lg:text-[15px] pl-2 text-[13px] mt-6"
            dangerouslySetInnerHTML={{ __html: presentation.titre2 }}
          ></div>
          <div className="flex flex-wrap text-white justify-start text-xs">
            {presentation.competencesChris.map((item) => {
              return (
                <div
                  className="rounded-lg bg-[#41EAD4] py-2 px-4 m-2"
                  key={item.id}
                >
                  {item.competence}
                </div>
              )
            })}
          </div>
          <div
            className="italic py-6  xl:text-[21px] lg:text-[18px]  text-[15px]  tracking-wide xl:h-[320px]"
            dangerouslySetInnerHTML={{ __html: presentation.paragraphe }}
          ></div>
          <div className="w-full">
            <Link href="/#">
              <a>
                <button className="group  w-full hover:bg-[#FC5050] h-16 lg:w-2/3 lg:mr-auto block rounded-lg border-2 border-[#FC5050]">
                  <span
                    dangerouslySetInnerHTML={{ __html: presentation.button }}
                    className="font-bold text-[#FC5050] lg:text-sm group-hover:text-white"
                  />
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col max-w-[600px] xl:h-[800px] justify-between mx-6">
          <div className="flex items-end text-[#FC5050] h-auto xl:h-[200px]">
            <div className="grow hidden xl:block">{imgSab}</div>
            <div className="w-3/4 xl:w-2/3 mx-auto xl:mx-0 text-center xl:text-left mb-2 xl:pl-2 pl-0 tracking-wider">
              <div
                className="xl:text-[34px] lg:text-[30px]  text-[26px]  text-[26px] font-semibold"
                dangerouslySetInnerHTML={{ __html: presentation.titre3bis }}
              ></div>
              <div
                className="uppercase font-medium xl:text-[21px] lg:text-[18px]  text-[15px]"
                dangerouslySetInnerHTML={{ __html: presentation.titre4bis }}
              ></div>
            </div>
          </div>
          <div className="grow xl:hidden block mx-auto">{imgSab}</div>
          <div
            className="text-right uppercase text-[#3F3F3F] font-bold xl:text-[17px] lg:text-[15px] pr-2 text-[13px] mt-6"
            dangerouslySetInnerHTML={{ __html: presentation.titre2bis }}
          ></div>
          <div className="flex flex-wrap text-white justify-end text-xs">
            {presentation.competencesSab.map((item) => {
              return (
                <div
                  className="rounded-lg bg-[#41EAD4] py-2 px-4 m-2"
                  key={item.id}
                >
                  {item.competence}
                </div>
              )
            })}
          </div>
          <div
            className="italic py-6  xl:text-[21px] lg:text-[18px]  text-[15px]  tracking-wide text-right xl:h-[320px]"
            dangerouslySetInnerHTML={{ __html: presentation.paragrapheBis }}
          ></div>
          <div className="w-full">
            <Link href="/#">
              <a>
                <button className="group  w-full hover:bg-[#FC5050] h-16 lg:w-2/3 lg:ml-auto block rounded-lg border-2 border-[#FC5050]">
                  <span
                    dangerouslySetInnerHTML={{ __html: presentation.button }}
                    className="font-bold text-[#FC5050] lg:text-sm group-hover:text-white"
                  />
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Presentation
