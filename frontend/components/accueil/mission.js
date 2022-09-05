import Link from "next/link"
import React from "react"
import LazyImage from "../../lib/lazy-images"

const Mission = ({ mission }) => {
  const imageDeco = LazyImage(
    mission.images.data[0].attributes,
    "Image de décoration mission",
    "lazy",
    undefined,
    "",
    "w-3/4 mx-auto"
  )
  return (
    <div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center text-center py-20">
        <div className="row-start-1 lg:col-span-2 mx-auto lg:w-3/4 w-full">
          <div
            className="uppercase leading-9 text-2xl"
            dangerouslySetInnerHTML={{ __html: mission.titre2 }}
          ></div>
        </div>
        <div className="row-start-2 lg:col-span-2 mx-auto w-3/4 mb-8">
          <div
            className="leading-9 text-xl mt-8"
            dangerouslySetInnerHTML={{ __html: mission.titre3 }}
          ></div>
        </div>
        <div className="row-start-3 lg:col-span-2 flex flex-wrap justify-center items-center mx-auto my-8 w-full">
          {mission.services.map((miss, index) => (
            <div
              key={miss.id}
              className="w-[280px] flex flex-col justify-center items-center rounded-xl bg-[#FAFAFB] pt-16 m-4"
            >
              {LazyImage(
                miss.icons.data.attributes,
                `"icon-${index}`,
                "lazy",
                "80px"
              )}
              <div
                className="m-6 text-[#505050] uppercase min-h-[40px] w-3/5 font-bold"
                dangerouslySetInnerHTML={{ __html: miss.legend }}
              ></div>
              <div
                className=" text-[#505050] min-h-[200px] w-3/5 text-sm"
                dangerouslySetInnerHTML={{ __html: miss.paragraphe }}
              ></div>
            </div>
          ))}
        </div>
        <div className="row-start-4 mx-auto uppercase w-3/4 lg:text-end mb-8 lg:mb-0">
          <div
            className="leading-9 text-lg w-1/2 lg:w-2/3 lg:ml-auto lg:mr-0 mx-auto"
            dangerouslySetInnerHTML={{ __html: mission.titre2bis }}
          ></div>
        </div>
        <div className="row-start-5 mx-auto w-3/4 lg:text-end">
          <div
            className="leading-9 text-lg"
            dangerouslySetInnerHTML={{ __html: mission.paragraphe }}
          ></div>
        </div>

        <div className="mx-auto w-3/4 row-start-7 lg:row-start-6">
          <Link href="/a-propos">
            <a>
              <button className="group bg-[#FC5050] w-full hover:bg-white h-16 mx-auto lg:w-1/2 lg:ml-auto lg:mr-0 block rounded-lg border-2 border-[#FFFFFF] hover:border-[#FC5050]">
                <span
                  dangerouslySetInnerHTML={{ __html: mission.button }}
                  className="font-bold text-[#FFFFFF] lg:text-sm group-hover:text-[#FC5050]"
                />
              </button>
            </a>
          </Link>
        </div>
        <div className="lg:row-span-3 justify-items-center mx-auto row-start-6  my-8 lg:my-0">
          {imageDeco}
        </div>
      </div>
    </div>
  )
}

export default Mission
