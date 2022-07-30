import React from "react"
import LazyImage from "./../../lib/lazy-images"

const Binome = ({ binome }) => {
  const imageDeco = LazyImage(
    binome.images.data[1].attributes,
    "Image de décoration section binome",
    "lazy",
    undefined,
    ""
  )
  const imageCarre = LazyImage(
    binome.images.data[0].attributes,
    "Image carre section binome",
    "lazy",
    undefined,
    "",
    "flex lg:justify-end justify-center"
  )
  return (
    <div id="binome" className="max-w-7xl pb-24 pt-40 mx-auto">
      <div className="mx-auto hidden lg:grid grid-cols-2 gap-4 items-center justify-start  text-left">
        <div className="translate-x-10">{imageDeco}</div>
        <div className="">
          <div className="flex flex-col h-full justify-between rounded-2xl bg-blue-binome px-20 py-16 -translate-x-10 -translate-y-10">
            <div
              className="text-[#2E437D] font-bold text-lg"
              dangerouslySetInnerHTML={{ __html: binome.titre3 }}
            ></div>
            <div
              className="text-[#3F3F3F] uppercase text-sm font-semibold lg:my-12"
              dangerouslySetInnerHTML={{ __html: binome.titre4 }}
            ></div>
            <div
              className="text-[#3F3F3F]"
              dangerouslySetInnerHTML={{ __html: binome.paragraphe }}
            ></div>{" "}
          </div>
          <div className="mr-6">{imageCarre}</div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),url(${
            process.env.NEXT_PUBLIC_API_URL +
            binome.images.data[1].attributes.url
          })`,
          backgroundPosition: "bottom",
          backgroundSize: "cover ",
        }}
        className="h-[500px] rounded-2xl mx-auto block lg:hidden text-center w-5/6 mb-16"
      >
        {" "}
        <div className="flex flex-col h-full justify-evenly rounded-2xl bg-bg-blue-binome px-12 py-8 mx-auto">
          <div
            className="text-[#2E437D] font-bold text-lg"
            dangerouslySetInnerHTML={{ __html: binome.titre3 }}
          ></div>
          <div
            className="text-[#3F3F3F] uppercase text-sm font-semibold lg:my-12"
            dangerouslySetInnerHTML={{ __html: binome.titre4 }}
          ></div>
          <div
            className="text-[#3F3F3F]"
            dangerouslySetInnerHTML={{ __html: binome.paragraphe }}
          ></div>{" "}
        </div>
      </div>
      <div className="block lg:hidden my-12">{imageCarre}</div>
      <div
        className="lg:col-span-2 text-center text-xl lg:pt-10 w-5/6 lg:w-full mx-auto"
        dangerouslySetInnerHTML={{ __html: binome.paragrapheBis }}
      ></div>{" "}
    </div>
  )
}

export default Binome
