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
        <div className="row-start-1 mx-auto uppercase w-3/4 lg:text-end mb-8 lg:mb-0">
          <div
            className="leading-9 text-lg w-1/2 lg:w-2/3 lg:ml-auto lg:mr-0 mx-auto"
            dangerouslySetInnerHTML={{ __html: mission.titre2bis }}
          ></div>
        </div>
        <div className="row-start-2 mx-auto w-3/4 lg:text-end">
          <div
            className="leading-9 text-lg"
            dangerouslySetInnerHTML={{ __html: mission.paragraphe }}
          ></div>
        </div>

        <div className="mx-auto w-3/4 row-start-5 lg:row-start-3">
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
        <div className="lg:row-span-3 justify-items-center mx-auto row-start-4  my-8 lg:my-0">
          {imageDeco}
        </div>
      </div>
    </div>
  )
}

export default Mission
