import Link from "next/link"
import React from "react"
import FlipCard from "../flip-cards/FlipCard"

const Valeurs = ({ valeurs }) => {
  const cards = valeurs.flipCard
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(46, 67, 125, 0.85), rgba(46, 67, 125, 0.85)),url(${
          process.env.NEXT_PUBLIC_API_URL +
          valeurs.images.data[0].attributes.url
        })`,
      }}
      className="bg-cover bg-bottom bg-no-repeat"
    >
      <div className="text-white max-w-7xl mx-auto grid items-center text-center py-20">
        <div className="row-start-1 mx-auto w-3/4">
          <div
            className="uppercase leading-9 text-2xl"
            dangerouslySetInnerHTML={{ __html: valeurs.titre2 }}
          ></div>
          <div className="h-[2px] bg-[#FC5050] w-1/6 mx-auto mt-6"></div>
        </div>
        <div className="row-start-2 mx-auto w-1/2">
          <div
            className="leading-9 text-xl mt-8"
            dangerouslySetInnerHTML={{ __html: valeurs.paragraphe }}
          ></div>
        </div>
        <div className="row-start-3 mx-auto w-1/2">
          <div
            className="uppercase leading-9 text-lg"
            dangerouslySetInnerHTML={{ __html: valeurs.titre2bis }}
          ></div>
        </div>
        <div className="row-start-4 mx-auto w-1/2">
          <div
            className="leading-9 text-sm"
            dangerouslySetInnerHTML={{ __html: valeurs.paragrapheBis }}
          ></div>
        </div>
        <div className="row-start-5 mx-auto w-1/2">
          <div
            className="leading-9 text-sm"
            dangerouslySetInnerHTML={{ __html: valeurs.titre4 }}
          ></div>
        </div>
        <div className="row-start-6 flex flex-wrap justify-center items-center mx-auto my-8">
          {cards.map((card) => (
            <FlipCard key={card.id} card={card} />
          ))}
        </div>
        <div className="mx-auto w-full lg:w-1/3 row-start-7">
          <Link href="/a-propos">
            <a>
              <button className="group bg-transparent lg:hover:bg-[#FC5050] lg:w-3/4 w-1/2 h-16 mx-auto  block rounded-lg border-2 border-[#FFFFFF] lg:hover:border-[#FC5050]">
                <span
                  dangerouslySetInnerHTML={{ __html: valeurs.button }}
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

export default Valeurs
