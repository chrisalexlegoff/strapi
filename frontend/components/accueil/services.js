import Link from "next/link"
import React from "react"
import LazyImage from "./../../lib/lazy-images"

const Services = ({ services }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(50, 50, 50, 0.85), rgba(50, 50, 50, 0.85)),url(${
          process.env.NEXT_PUBLIC_API_URL +
          services.images.data[0].attributes.url
        })`,
      }}
      className="bg-cover bg-bottom bg-no-repeat"
    >
      <div className="text-white max-w-9xl mx-auto grid items-center text-center py-20">
        <div className="row-start-1 mx-auto lg:w-3/4 w-full">
          <div
            className="uppercase leading-9 xl:text-[34px] lg:text-[30px]  text-[26px]  text-[26px]"
            dangerouslySetInnerHTML={{ __html: services.titre2 }}
          ></div>
          <div className="h-[2px] bg-[#4087FF] w-1/12 mx-auto mt-6"></div>
        </div>
        <div className="row-start-2 mx-auto w-3/4 mb-8 lg:w-1/2">
          <div
            className="leading-9 xl:text-[34px] lg:text-[30px]  text-[26px]  text-[26px] mt-8"
            dangerouslySetInnerHTML={{ __html: services.titre3 }}
          ></div>
        </div>
        <div className="row-start-3 mx-auto w-3/4 lg:w-2/3">
          <div
            className="leading-9 xl:text-[24px] lg:text-[20px]  text-[16px]"
            dangerouslySetInnerHTML={{ __html: services.paragraphe }}
          ></div>
        </div>

        <div className="row-start-4 flex flex-wrap justify-center items-center mx-auto my-8 w-full">
          {services.services.map((service, index) => (
            <div
              key={service.id}
              className="m-14 rounded-xl bg-white w-[200px] h-[200px] flex flex-col justify-evenly items-center"
            >
              {LazyImage(
                service.icons.data.attributes,
                `"icon-${index}`,
                "lazy",
                "80px"
              )}
              <div
                className=" text-[#505050] uppercase text-[1.2rem] min-h-[40px] mx-6 font-bold"
                dangerouslySetInnerHTML={{ __html: service.legend }}
              ></div>
            </div>
          ))}
        </div>
        <div className="mx-auto w-full lg:w-1/3 row-start-5">
          <Link href="/a-propos">
            <a>
              <button className="group bg-transparent lg:hover:bg-[#FC5050] w-3/4 h-16 mx-auto  block rounded-lg border-2 border-[#FFFFFF] lg:hover:border-[#FC5050]">
                <span
                  dangerouslySetInnerHTML={{ __html: services.button }}
                  className="font-bold text-[#FFFFFF] xl:text-[20px] lg:text-[17px]  text-[15px]"
                />
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Services
