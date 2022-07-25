import React from "react"

const Projet = ({ projet }) => {
  return (
    <div className="bg-[#41EAD4] text-white text-center py-20">
      <div
        style={{}}
        className="max-w-7xl mx-auto grid items-center grid-rows-2 text-center font-normal"
      >
        <div className="row-start-1 mx-auto w-3/4">
          <div
            className="uppercase leading-9 text-2xl"
            dangerouslySetInnerHTML={{ __html: projet.titre2 }}
          ></div>
          <div className="h-[2px] bg-[#FC5050] w-1/4 mx-auto mt-6"></div>
        </div>
      </div>
      <div
        className="leading-9 text-2xl row-start-2 mx-auto w-3/4"
        dangerouslySetInnerHTML={{ __html: projet.paragraphe }}
      ></div>
    </div>
  )
}

export default Projet
