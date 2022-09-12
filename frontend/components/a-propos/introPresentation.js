import React from "react"

const IntroPresentation = ({ introPresentation }) => {
  return (
    <div className="bg-[#41EAD4] text-white text-center pb-16 xl:pb-40 pt-20">
      <div className="max-w-9xl mx-auto grid items-center text-center font-normal grid-auto-row">
        <div className="mx-auto">
          <div
            className="text-center uppercase xl:text-[34px] lg:text-[30px]  text-[26px] w-3/4 lg:w-2/3 mx-auto mb-12"
            dangerouslySetInnerHTML={{ __html: introPresentation.titre3 }}
          ></div>
          <div className="h-[2px] bg-[#FC5050] w-1/3 mx-auto mt-6"></div>
        </div>
        <div
          className="mx-auto text-[#FC5050] lg:my-12 my-6 xl:text-[34px] lg:text-[30px]  text-[26px]"
          dangerouslySetInnerHTML={{ __html: introPresentation.titre4 }}
        ></div>
        <div
          className="mx-auto lg:w-2/3 xl:w-1/2 w-3/4 text-left my-6 xl:text-[24px] lg:text-[20px]  text-[18px]"
          dangerouslySetInnerHTML={{ __html: introPresentation.paragraphe }}
        ></div>
        <div
          className="mx-auto uppercase xl:text-[20px] lg:text-[16px]  text-[14px] w-3/4 my-10"
          dangerouslySetInnerHTML={{ __html: introPresentation.titre4bis }}
        ></div>
        <div
          className="mx-auto xl:text-[20px] lg:text-[16px]  text-[14px] font-medium"
          dangerouslySetInnerHTML={{ __html: introPresentation.titre5 }}
        ></div>
      </div>
    </div>
  )
}

export default IntroPresentation
