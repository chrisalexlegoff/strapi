import React from "react"

const IntroPresentation = ({ introPresentation }) => {
  return (
    <div className="bg-[#41EAD4] text-white text-center py-20">
      <div className="max-w-7xl mx-auto grid items-center grid-rows-5 text-center font-normal">
        <div className="mx-auto">
          <div
            className="text-xl"
            dangerouslySetInnerHTML={{ __html: introPresentation.titre3 }}
          ></div>
          <div className="h-[2px] bg-[#FC5050] w-1/3 mx-auto mt-6"></div>
        </div>
        <div
          className="mx-auto uppercase text-[#FC5050] my-6 text-lg"
          dangerouslySetInnerHTML={{ __html: introPresentation.titre4 }}
        ></div>
        <div
          className="mx-auto w-3/4 text-left my-6"
          dangerouslySetInnerHTML={{ __html: introPresentation.paragraphe }}
        ></div>
        <div
          className="mx-auto uppercase"
          dangerouslySetInnerHTML={{ __html: introPresentation.titre4bis }}
        ></div>
        <div
          className="mx-auto text-lg font-medium"
          dangerouslySetInnerHTML={{ __html: introPresentation.titre5 }}
        ></div>
      </div>
    </div>
  )
}

export default IntroPresentation
