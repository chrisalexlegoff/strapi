import React from "react"
import LazyImage from "../../lib/lazy-images"

const Expertise = ({ expertise }) => {
  console.log(expertise)

  return (
    <div id="expertise">
      <div className="max-w-7xl mx-auto grid items-center text-center py-20">
        <div className="row-start-1 mx-auto lg:w-3/4 w-full">
          <div
            className="uppercase leading-9 text-2xl tracking-wider"
            dangerouslySetInnerHTML={{ __html: expertise.titre2 }}
          ></div>
          <div className="h-[2px] bg-[#4087FF] mx-auto mt-6 w-1/6"></div>
        </div>
        <div className="row-start-2 lg:col-span-2 mx-auto w-3/4 mb-8">
          <div
            className="leading-9 text-xl mt-8"
            dangerouslySetInnerHTML={{ __html: expertise.paragraphe }}
          ></div>
        </div>
        <div className="row-start-3 flex flex-wrap justify-center items-center mx-auto my-8 w-full">
          {expertise.board.map((item, index) => (
            <div
              key={item.id}
              className="w-[400px] h-[300px] flex flex-col justify-center items-center rounded-xl bg-[#FAFAFB] pt-16 m-4"
            >
              <div
                className="m-6 text-[#505050] uppercase min-h-[40px] w-3/5 font-bold"
                dangerouslySetInnerHTML={{ __html: item.titre }}
              ></div>
              {LazyImage(
                item.icon.data.attributes,
                `"icon-${index}`,
                "lazy",
                "50px"
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Expertise
