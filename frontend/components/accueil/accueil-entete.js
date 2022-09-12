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
  const imageLogo = LazyImage(
    header.bg.data.attributes,
    "Image du logo accueil",
    "lazy",
    undefined,
    ""
  )

  return (
    <div className="lg:bg-split-right-orange-white bg-[#FC5050]">
      <div
        style={{}}
        className="max-w-9xl mx-auto h-screen grid lg:grid-rows-4 grid-col-1 lg:grid-cols-2 gap-4 items-center lg:justify-start text-center lg:text-left pt-10 font-normal text-white"
      >
        <div className="row-start-1 lg:col-span-2 mx-auto text-center text-xl w-3/4 lg:w-full">
          <div className="lg:ml-[1.1rem] ml-0">{imageLogo}</div>
          <div
            className="hidden lg:block leading-6 lg:tracking-[4.6px] tracking-[1.6px] lg:ml-[1.5rem] ml-0 text-[25px] lg:text-[27px]"
            dangerouslySetInnerHTML={{ __html: header.titre }}
          ></div>
          <div
            className="block lg:hidden leading-6 lg:tracking-[4.6px] tracking-[1.6px] lg:ml-[1.5rem] ml-0 text-[25px] lg:text-[27px]"
            dangerouslySetInnerHTML={{ __html: header.titre2 }}
          ></div>
        </div>
        <div
          className="lg:row-start-2 mx-auto w-3/4 uppercase leading-9 xl:text-[38px] lg:text-[34px]  text-[30px]"
          dangerouslySetInnerHTML={{ __html: header.titrePage }}
        ></div>
        <div
          className="lg:row-start-3 mx-auto w-3/4 xl:text-[25px] lg:text-[22px]  text-[18px]"
          dangerouslySetInnerHTML={{ __html: header.paragraphe }}
        ></div>
        <div className="row-start-5 lg:row-start-4 mx-auto w-3/4">
          <Link href="/demander-un-devis">
            <a>
              <button className="group bg-transparent hover:bg-[#FFFFFF] w-1/2 h-16 mx-auto lg:m-0 block rounded-lg border-2 border-[#FFFFFF]">
                <span
                  dangerouslySetInnerHTML={{ __html: header.button }}
                  className="font-bold xl:text-[20px] lg:text-[17px]  text-[15px] text-[#FFFFFF] group-hover:text-[#FC5050]"
                />
              </button>
            </a>
          </Link>
        </div>
        <div
          id="image-deco-accueil"
          className="row-start-4 lg:row-span-3 lg:w-2/3 lg:h-2/3 justify-items-center mx-auto w-1/3"
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
