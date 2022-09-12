import React from "react"
import LazyImage from "./../../lib/lazy-images"

const Informations = ({ informations }) => {
  const adressIcon = LazyImage(
    informations.iconAdresse.data.attributes,
    "icon adresse",
    "lazy",
    "80px"
  )
  const telIcon = LazyImage(
    informations.iconTelephone.data.attributes,
    "icon adresse",
    "lazy",
    "80px"
  )
  const mailIcon = LazyImage(
    informations.iconMail.data.attributes,
    "icon adresse",
    "lazy",
    "80px"
  )
  return (
    <div className="max-w-9xl mx-auto grid items-center text-center pt-20 pb-28 bg-[#F8FAFF]">
      <div
        className="uppercase xl:text-[34px] lg:text-[30px]  text-[26px] text-center text-[#3F3F3F]"
        dangerouslySetInnerHTML={{ __html: informations.titre }}
      ></div>
      <div className="h-[2px] bg-[#41EAD4] mx-auto mt-6 w-[12%]"></div>
      <div className="flex lg:flex-row flex-col flex-wrap mx-auto lg:items-center lg:w-3/4 max-w-5xl lg:justify-around justify-start">
        <div className="flex items-center lg:mr-10 mt-16">
          {adressIcon}
          <div
            className="pl-6 xl:text-[21px] lg:text-[18px]  text-[15px]"
            dangerouslySetInnerHTML={{ __html: informations.adresse }}
          ></div>
        </div>
        <div className="flex items-center lg:mr-10 mt-16">
          {telIcon}
          <div
            className="pl-6 xl:text-[21px] lg:text-[18px]  text-[15px]"
            dangerouslySetInnerHTML={{ __html: informations.telephone }}
          ></div>
        </div>
        <div className="flex items-center mt-16">
          {mailIcon}
          <div
            className="pl-6 xl:text-[21px] lg:text-[18px]  text-[15px] hover:text-[#FC5050]"
            dangerouslySetInnerHTML={{ __html: informations.mail }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Informations
