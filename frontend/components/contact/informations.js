import React from "react"
import LazyImage from "./../../lib/lazy-images"

const Informations = ({ informations }) => {
  const adressIcon = LazyImage(
    informations.iconAdresse.data.attributes,
    "icon adresse",
    "lazy",
    "60px"
  )
  const telIcon = LazyImage(
    informations.iconTelephone.data.attributes,
    "icon adresse",
    "lazy",
    "60px"
  )
  const mailIcon = LazyImage(
    informations.iconMail.data.attributes,
    "icon adresse",
    "lazy",
    "60px"
  )
  return (
    <div className="max-w-7xl mx-auto grid items-center text-center py-20">
      <div
        className="uppercase text-2xl text-center text-[#3F3F3F]"
        dangerouslySetInnerHTML={{ __html: informations.titre }}
      ></div>
      <div className="h-[2px] bg-[#41EAD4] mx-auto mt-6 w-[12%]"></div>
      <div className="flex lg:flex-row flex-col flex-wrap mx-auto lg:items-center lg:w-3/4 max-w-5xl lg:justify-around justify-start">
        <div className="flex items-center lg:mr-10 mt-16">
          {adressIcon}
          <div
            className="pl-6"
            dangerouslySetInnerHTML={{ __html: informations.adresse }}
          ></div>
        </div>
        <div className="flex items-center lg:mr-10 mt-16">
          {telIcon}
          <div
            className="pl-6"
            dangerouslySetInnerHTML={{ __html: informations.telephone }}
          ></div>
        </div>
        <div className="flex items-center mt-16">
          {mailIcon}
          <div
            className="pl-6 hover:text-[#FC5050]"
            dangerouslySetInnerHTML={{ __html: informations.mail }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Informations
