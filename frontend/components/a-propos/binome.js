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
    "lg:flex lg:justify-end"
  )
  return (
    <div
      id="binome"
      className="max-w-7xl mx-auto grid grid-col-1 lg:grid-cols-2 gap-4 items-center lg:justify-start text-center lg:text-left pb-24 pt-40"
    >
      <div className="translate-x-10">{imageDeco}</div>
      <div className="">
        <div className="flex flex-col h-full justify-between rounded-2xl bg-bg-blue-binome px-20 py-16 -translate-x-10 -translate-y-10">
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
      <div
        className="lg:col-span-2 text-center text-xl lg:pt-10"
        dangerouslySetInnerHTML={{ __html: binome.paragrapheBis }}
      ></div>{" "}
    </div>
  )
}

export default Binome
