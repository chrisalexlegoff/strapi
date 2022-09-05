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
    <div className="max-w-7xl mx-auto pt-16 pb-24">
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="flex flex-col text-left max-w-[450px] h-[600px] justify-between lg:mr-20 mb-20 lg:mb-0">
          <div className="flex items-end text-[#FC5050] h-[200px]">
            <div className="grow mb-2 tracking-wider">
              <div
                className="text-2xl font-semibold"
                dangerouslySetInnerHTML={{ __html: presentation.titre3 }}
              ></div>
              <div
                className="uppercase font-medium"
                dangerouslySetInnerHTML={{ __html: presentation.titre4 }}
              ></div>
            </div>
            <div className="w-3/5">{imgChris}</div>
          </div>
          <div className="flex flex-wrap text-xs text-white">
            {presentation.competencesChris.map((item) => {
              return (
                <div
                  className="rounded-lg bg-[#41EAD4] py-2 px-4  m-2"
                  key={item.id}
                >
                  {item.competence}
                </div>
              )
            })}
          </div>
          <div
            className="italic text-sm tracking-wide h-40"
            dangerouslySetInnerHTML={{ __html: presentation.paragraphe }}
          ></div>
          <div className="w-full">
            <Link href="/#">
              <a>
                <button className="group  w-full hover:bg-[#FC5050] h-16 lg:w-2/3  block rounded-lg border-2 border-[#FC5050]">
                  <span
                    dangerouslySetInnerHTML={{ __html: presentation.button }}
                    className="font-bold text-[#FC5050] lg:text-sm group-hover:text-white"
                  />
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col text-right max-w-[450px] h-[600px] justify-between">
          <div className="flex items-end text-[#FC5050] h-[200px]">
            <div className="w-3/5">{imgSab}</div>
            <div className="grow mb-2 tracking-wider">
              <div
                className="text-2xl font-semibold"
                dangerouslySetInnerHTML={{ __html: presentation.titre3bis }}
              ></div>
              <div
                className="uppercase font-medium"
                dangerouslySetInnerHTML={{ __html: presentation.titre4bis }}
              ></div>
            </div>
          </div>
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
            className="italic text-sm tracking-wide text-right h-40"
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
