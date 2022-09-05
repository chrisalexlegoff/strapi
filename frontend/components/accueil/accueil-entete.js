import Image from "next/image"
import React from "react"
import Link from "next/link"
import LazyImage from "./../../lib/lazy-images"

const AccueilEntete = ({ header }) => {
  const imageDeco = LazyImage(
    header.imageDeco.data.attributes,
    "Image de décoration accueil",
    "lazy",
    undefined,
    ""
  )

  return (
    <div className="lg:bg-split-right-orange-white bg-split-bottom-orange-white">
      <div
        style={{}}
        className="max-w-7xl mx-auto h-screen grid lg:grid-rows-4 grid-col-1 lg:grid-cols-2 gap-4 items-center lg:justify-start text-center lg:text-left pt-28 font-normal text-white "
      >
        <div
          className="lg:row-start-1 mx-auto w-3/4 uppercase leading-9 text-2xl"
          dangerouslySetInnerHTML={{ __html: header.titrePage }}
        ></div>
        <div
          className="lg:row-start-2 mx-auto w-3/4 text-lg"
          dangerouslySetInnerHTML={{ __html: header.paragraphe }}
        ></div>
        <div className="row-start-4 lg:row-start-3 mx-auto w-3/4">
          <Link href="/demander-un-devis">
            <a>
              <button className="group bg-[#FC5050] border-[#FC5050] lg:bg-transparent lg:hover:bg-[#FFFFFF] w-2/3 h-16 mx-auto lg:m-0 block rounded-lg border-2 lg:border-[#FFFFFF]">
                <span
                  dangerouslySetInnerHTML={{ __html: header.button }}
                  className="font-bold text-[#FFFFFF] lg:group-hover:text-[#FC5050]"
                />
              </button>
            </a>
          </Link>
        </div>
        <div
          id="image-deco-accueil"
          className="row-start-3 lg:row-span-3 lg:w-2/3 lg:h-2/3 justify-items-center mx-auto w-1/3"
        >
          {imageDeco}
        </div>
        <div className="lg:col-span-2 animate-pulse">
          <Link href="/#nous">
            <a className="flex flex-col items-center">
              <span className="mb-2 text-[#41EAD4]">
                {/* {header.enSavoirPlus.text} */}
              </span>
              <Image
                src={
                  process.env.NEXT_PUBLIC_API_URL +
                  header.enSavoirPlus.image.data.attributes.url
                }
                alt="logo dualdclic"
                width={175}
                height={75}
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AccueilEntete
