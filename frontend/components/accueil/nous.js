import React from "react"
import Link from "next/link"
import LazyImage from "../../lib/lazy-images"

const Nous = ({ nous }) => {
  const imageFleche = LazyImage(
    nous.images.data[0].attributes,
    "Image fleche mission",
    "lazy",
    undefined,
    "",
    "mx-auto"
  )
  return (
    <div id="nous" className="">
      <div
        style={{}}
        className="max-w-9xl mx-auto grid lg:grid-cols-2 items-center lg:text-left text-center bg-white text-[#2E437D] pt-20 lg:-mb-10"
      >
        <div
          className="row-start-1 mx-auto uppercase leading-9 xl:text-[34px] lg:text-[30px]  text-[26px]  text-[28px] w-3/4 mb-10 lg:mb-0"
          dangerouslySetInnerHTML={{ __html: nous.titre2 }}
        ></div>
        <div
          className="lg:mt-10 row-start-2 mx-auto leading-9  xl:text-[34px] lg:text-[30px]  text-[26px]  text-[28px] w-3/4 font-semibold mb-10 lg:mb-0"
          dangerouslySetInnerHTML={{ __html: nous.titre3 }}
        ></div>
        <div
          className="row-start-3 lg:col-start-2 mx-auto leading-9  xl:text-[34px] lg:text-[30px]  text-[26px]  text-[28px] w-3/4 mt-8 mb-4 lg:mt-12 lg:mb-6"
          dangerouslySetInnerHTML={{ __html: nous.titre4 }}
        ></div>
        <div
          className="row-start-4 lg:col-start-2 mx-auto leading-9 w-3/4  xl:text-[23px] lg:text-[20px]  text-[17px] mb-10 lg:mb-0"
          dangerouslySetInnerHTML={{ __html: nous.paragraphe }}
        ></div>
        <div className="hidden lg:block row-start-4 ml-auto">{imageFleche}</div>
        <div
          className="row-start-5 mx-auto leading-9 w-3/4  xl:text-[34px] lg:text-[30px]  text-[26px]  text-[28px] text-[#4087FF] lg:mt-6 text-center mb-10 lg:mb-0"
          dangerouslySetInnerHTML={{ __html: nous.titre3bis }}
        ></div>
        <div className="row-start-7 lg:row-satrt-6 mx-auto w-4/5 mt-8 mb-12 lg:mt-0">
          <Link href="/contact">
            <a>
              <button className="group bg-[#FFFFFF] hover:bg-[#2E437D] border-[#2E437D] w-4/6 lg:max-w-xs h-16 mx-auto block rounded-lg border-2">
                <span
                  dangerouslySetInnerHTML={{ __html: nous.button }}
                  className="font-bold text-[#2E437D] group-hover:text-[#FFFFFF]  xl:text-[20px] lg:text-[17px]  text-[15px]"
                />
              </button>
            </a>
          </Link>
        </div>
        <div
          style={{
            backgroundImage: `url(${
              process.env.NEXT_PUBLIC_API_URL +
              nous.images.data[1].attributes.url
            })`,
          }}
          className="bg-cover bg-no-repeat bg-center mx-auto w-[270px] h-[240px] border-[#41EAD4] border-4 rounded-2xl lg:row-start-7 row-start-6 lg:col-start-2"
        ></div>
      </div>
    </div>
  )
}

export default Nous
