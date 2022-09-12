import Link from "next/link"
import React from "react"
import Slider from "../slider/Slider"

const Realisations = ({ realisations }) => {
  return (
    <div className="lg:bg-split-right-green-white bg-split-bottom-green-white">
      <div className="max-w-9xl mx-auto grid lg:grid-rows-5 grid-col-1 lg:grid-cols-2 gap-4 items-center lg:justify-start text-center lg:text-left py-20 font-normal text-white ">
        <div className="row-start-1 mx-auto w-3/4">
          <div
            className="uppercase leading-9 xl:text-[34px] lg:text-[30px]  text-[26px]  text-[26px] text-center"
            dangerouslySetInnerHTML={{ __html: realisations.titre2 }}
          ></div>
          <div className="h-[2px] bg-[#FC5050] w-1/4 mx-auto mt-6"></div>
        </div>
        <div className="row-start-5 lg:row-span-5 mx-auto w-3/4">
          <Slider items={realisations.carousel} classname="w-full" />
        </div>
        <div className="row-start-2 mx-auto w-3/4">
          <div
            className="leading-9 xl:text-[34px] lg:text-[30px]  text-[26px]  text-[26px] text-center"
            dangerouslySetInnerHTML={{ __html: realisations.titre3 }}
          ></div>
        </div>
        <div className="row-start-3 mx-auto w-3/4">
          <div
            className="leading-9 xl:text-[26px] lg:text-[22px]  text-[18px] text-center"
            dangerouslySetInnerHTML={{ __html: realisations.paragraphe }}
          ></div>
        </div>
        <div className="row-start-4 mx-auto w-3/4">
          <div
            className="leading-9 xl:text-[26px] lg:text-[22px]  text-[18px] text-center"
            dangerouslySetInnerHTML={{ __html: realisations.paragrapheBis }}
          ></div>
        </div>
        <div className="row-start-6 lg:row-start-5 mx-auto w-full lg:w-2/3">
          <Link href="/demander-un-devis">
            <a>
              <button className="group bg-transparent border-[#FC5050] lg:bg-transparent lg:hover:bg-[#FC5050] lg:w-2/3 w-3/4 h-16 mx-auto block rounded-lg border-2 lg:border-[#FC5050]">
                <span
                  dangerouslySetInnerHTML={{ __html: realisations.button }}
                  className="font-bold text-[#FC5050] lg:group-hover:text-[#FFFFFF] xl:text-[20px] lg:text-[17px]  text-[15px]"
                />
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Realisations
