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
      <div className="text-white max-w-7xl mx-auto grid items-center text-center py-20">
        <div className="row-start-1 mx-auto lg:w-3/4 w-full">
          <div
            className="uppercase leading-9 text-2xl"
            dangerouslySetInnerHTML={{ __html: services.titre2 }}
          ></div>
          <div className="h-[2px] bg-[#4087FF] w-1/12 mx-auto mt-6"></div>
        </div>
        <div className="row-start-2 mx-auto w-3/4 mb-8">
          <div
            className="leading-9 text-xl mt-8"
            dangerouslySetInnerHTML={{ __html: services.titre3 }}
          ></div>
        </div>
        <div className="row-start-3 mx-auto w-3/4">
          <div
            className="leading-9 text-lg"
            dangerouslySetInnerHTML={{ __html: services.paragraphe }}
          ></div>
        </div>

        <div className="row-start-4 flex flex-wrap justify-center items-center mx-auto my-8 w-full">
          {services.services.map((service, index) => (
            <div
              key={service.id}
              className="m-6 rounded-xl bg-white w-[150px] h-[150px] flex flex-col justify-center items-center"
            >
              {LazyImage(
                service.icons.data.attributes,
                `"icon-${index}`,
                "lazy",
                "60px"
              )}
              <div
                className=" text-[#505050] uppercase text-sm min-h-[40px] mx-6 font-bold"
                dangerouslySetInnerHTML={{ __html: service.legend }}
              ></div>
            </div>
          ))}
        </div>
        <div className="mx-auto w-full lg:w-1/3 row-start-5">
          <Link href="/a-propos">
            <a>
              <button className="group bg-transparent lg:hover:bg-[#FC5050] lg:w-3/4 w-1/2 h-16 mx-auto  block rounded-lg border-2 border-[#FFFFFF] lg:hover:border-[#FC5050]">
                <span
                  dangerouslySetInnerHTML={{ __html: services.button }}
                  className="font-bold text-[#FFFFFF]"
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
