import React from "react"
import LazyImage from "./../../lib/lazy-images"

const FlipCard = ({ card }) => {
  const icon = LazyImage(card.icons.data.attributes, "icon", "lazy", undefined)

  return (
    <div className="flip-card-outer mx-6">
      <div className="flip-card-inner">
        <div className="card front">
          <div className="card-body">
            <div className="group flex flex-col items-center justify-center card-body  bg-white rounded-lg lg:min-w-[300px] min-h-[300px] hover:bg-[#41EAD4] cursor-pointer hover:text-white text-[#FC5050]">
              <div
                className="card-body uppercase leading-2 text-xl"
                dangerouslySetInnerHTML={{ __html: card.front }}
              ></div>
              <div className="relative top-10 group-hover:invisible block">
                {icon}
              </div>
            </div>
          </div>
        </div>
        <div className="card back">
          <div className="card-body">
            <div
              className="flex items-center justify-center leading-2 text-lg bg-white text-[#2E437D] rounded-lg min-h-[300px] lg:min-w-[300px] p-10"
              dangerouslySetInnerHTML={{ __html: card.back }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlipCard
