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
      <div className="max-w-9xl mx-auto grid lg:grid-cols-2 items-center text-center py-20">
        <div className="row-start-1 lg:col-span-2 mx-auto lg:w-3/4 w-full">
          <div
            className="uppercase leading-9 xl:text-[34px] lg:text-[30px]  text-[26px]"
            dangerouslySetInnerHTML={{ __html: mission.titre2 }}
          ></div>
        </div>
        <div className="row-start-2 lg:col-span-2 mx-auto w-3/4 mb-8">
          <div
            className="leading-9 xl:text-[34px] lg:text-[30px] text-[26px] mt-8"
            dangerouslySetInnerHTML={{ __html: mission.titre3 }}
          ></div>
        </div>
        <div className="row-start-3 lg:col-span-2 flex flex-wrap justify-center items-center mx-auto my-8 w-full">
          {mission.services.map((miss, index) => (
            <div
              key={miss.id}
              className="w-[360px] flex flex-col justify-center items-center rounded-xl bg-[#FAFAFB] pt-16 m-4"
            >
              {LazyImage(
                miss.icons.data.attributes,
                `"icon-${index}`,
                "lazy",
                "100px"
              )}
              <div
                className="m-6 text-[#505050] text-[1.4rem] uppercase min-h-[40px] w-3/5 font-bold"
                dangerouslySetInnerHTML={{ __html: miss.legend }}
              ></div>
              <div
                className=" text-[#505050] text-[1.2rem] min-h-[200px] w-3/4"
                dangerouslySetInnerHTML={{ __html: miss.paragraphe }}
              ></div>
            </div>
          ))}
        </div>
        <div className="row-start-4 mx-auto lg:ml-auto uppercase w-3/4 lg:text-end mb-8 lg:mb-0 lg:mr-6">
          <div
            className="leading-9 xl:text-[34px] lg:text-[30px] text-[26px] w-3/4 lg:ml-auto lg:mr-0 mx-auto"
            dangerouslySetInnerHTML={{ __html: mission.titre2bis }}
          ></div>
        </div>
        <div className="row-start-5 mx-auto lg:ml-auto w-3/4 lg:w-2/3 lg:mr-6 lg:text-end">
          <div
            className="leading-9 xl:text-[24px] lg:text-[20px]  text-[16px]"
            dangerouslySetInnerHTML={{ __html: mission.paragraphe }}
          ></div>
        </div>

        <div className="mx-auto lg:ml-auto lg:mr-6 w-3/4 row-start-7 lg:row-start-6 mt-10">
          <Link href="/a-propos">
            <a>
              <button className="group bg-[#FC5050] w-full hover:bg-white h-16 mx-auto lg:w-1/2 lg:ml-auto lg:mr-0 block rounded-lg border-2 border-[#FFFFFF] hover:border-[#FC5050]">
                <span
                  dangerouslySetInnerHTML={{ __html: mission.button }}
                  className="font-bold text-[#FFFFFF] group-hover:text-[#FC5050] xl:text-[20px] lg:text-[17px]  text-[15px]"
                />
              </button>
            </a>
          </Link>
        </div>
        <div className="lg:row-span-3 justify-items-center mx-auto lg:mr-auto lg:ml-6 row-start-6  my-8 lg:my-0">
          {imageDeco}
        </div>
      </div>
    </div>
  )
}

export default Mission
