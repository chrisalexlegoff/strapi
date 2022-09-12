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
      <div className="text-white max-w-9xl mx-auto grid items-center text-center py-32">
        <div className="row-start-1 mx-auto w-3/4">
          <div
            className="uppercase leading-9  xl:text-[34px] lg:text-[30px]  text-[26px]  text-[28px]"
            dangerouslySetInnerHTML={{ __html: valeurs.titre2 }}
          ></div>
          <div className="h-[2px] bg-[#41EAD4] w-1/6 mx-auto mt-6"></div>
        </div>
        <div className="row-start-2 mx-auto lg:w-1/2 w-3/4">
          <div
            className="leading-9  xl:text-[30px] lg:text-[26px]  text-[22px] my-12"
            dangerouslySetInnerHTML={{ __html: valeurs.paragraphe }}
          ></div>
        </div>
        <div className="row-start-3 mx-auto lg:w-1/2 w-3/4">
          <div
            className="uppercase leading-9  xl:text-[26px] lg:text-[22px]  text-[18px]"
            dangerouslySetInnerHTML={{ __html: valeurs.titre2bis }}
          ></div>
        </div>{" "}
        <div className="row-start-4 mx-auto lg:w-1/2 w-3/4">
          <div
            className="leading-9  xl:text-[26px] lg:text-[22px]  text-[18px]"
            dangerouslySetInnerHTML={{ __html: valeurs.titre4 }}
          ></div>
        </div>
        <div className="row-start-5 mx-auto lg:w-1/2 w-3/4 mt-10">
          <div
            className="leading-9  xl:text-[24px] lg:text-[20px]  text-[16px]"
            dangerouslySetInnerHTML={{ __html: valeurs.paragrapheBis }}
          ></div>
        </div>
        <div className="row-start-6 flex flex-wrap mx-auto mt-8 mb-12 w-full lg:w-4/5 justify-evenly">
          {cards.map((card) => (
            <FlipCard key={card.id} card={card} />
          ))}
        </div>
        <div className="mx-auto lg:w-1/3 w-3/4 row-start-7">
          <Link href="/a-propos">
            <a>
              <button className="group bg-transparent lg:hover:bg-[#FC5050] h-16 mx-auto w-full block rounded-lg border-2 border-[#FFFFFF] lg:hover:border-[#FC5050]">
                <span
                  dangerouslySetInnerHTML={{ __html: valeurs.button }}
                  className="font-bold text-[#FFFFFF]  xl:text-[20px] lg:text-[17px]  text-[15px]"
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
