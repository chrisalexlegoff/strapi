import Link from "next/link"
import React from "react"
import LazyImage from "../../lib/lazy-images"

const Mission = ({ mission }) => {
  return (
    <>
      <div className="lg:bg-split-bottom-blue-white bg-blue-2-transparent">
        <div className="max-w-9xl mx-auto grid lg:grid-cols-2 items-center text-center py-20">
          <div className="row-start-1 lg:col-span-2 mx-auto lg:w-3/4 w-full">
            <div
              className="uppercase text-white"
              dangerouslySetInnerHTML={{ __html: mission.paragrapheBis }}
            ></div>
          </div>
          <div className="row-start-2 lg:col-span-2 mx-auto w-3/4 mb-8">
            <div
              className="mt-8 text-white"
              dangerouslySetInnerHTML={{ __html: mission.titre3 }}
            ></div>
          </div>
          <div className="row-start-3 lg:col-span-2 flex flex-wrap justify-center items-center mx-auto my-8 w-full">
            {mission.services.map((miss, index) => (
              <div
                key={miss.id}
                className="w-3/4 lg:w-[400px] min-h-[470px] flex flex-col justify-center items-center rounded-xl bg-[#FAFAFB] pt-16 m-4"
              >
                {LazyImage(
                  miss.icons.data.attributes,
                  `"icon-${index}`,
                  "lazy",
                  "80px"
                )}
                <div
                  className="m-6 text-[#505050] min-h-[40px] w-3/5 "
                  dangerouslySetInnerHTML={{ __html: miss.legend }}
                ></div>
                <div
                  className=" text-[#505050] min-h-[200px] w-3/5"
                  dangerouslySetInnerHTML={{ __html: miss.paragraphe }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#FC5050] ">
        <div className="max-w-9xl grid items-center mx-auto py-10">
          <div
            className="row-start-1 mx-auto lg:ml-auto text-center text-white"
            dangerouslySetInnerHTML={{ __html: mission.titre3bis }}
          ></div>
          <div className="row-start-2 lg:row-start-1 lg:col-start-2 w-full mt-10 lg:mt-0">
            <Link href="/demander-un-devis">
              <a>
                <button className="group bg-[#FC5050] hover:bg-white h-20 w-3/4 lg:w-1/2 block rounded-lg border-2 border-[#FFFFFF] hover:border-[#FC5050] mx-auto lg:mx-0">
                  <span
                    dangerouslySetInnerHTML={{ __html: mission.button }}
                    className="text-[#FFFFFF] lg:text-sm group-hover:text-[#FC5050]"
                  />
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Mission
