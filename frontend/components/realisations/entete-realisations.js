import Image from "next/image"
import React from "react"
import Link from "next/link"
import LazyImage from "../../lib/lazy-images"

const EnteteRealisations = ({ header }) => {
  const imageDeco = LazyImage(
    header.imageDeco.data.attributes,
    "Image de décoration entête prestation",
    "lazy",
    undefined,
    ""
  )

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),url(${
          process.env.NEXT_PUBLIC_API_URL + header.bg.data.attributes.url
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover ",
      }}
    >
      <div className="lg:bg-split-right-green-transparent bg-green-transparent">
        <div className="max-w-9xl mx-auto h-screen grid grid-col-1 lg:grid-cols-2 gap-4 items-center lg:justify-start text-center lg:text-left lg:pt-28 font-normal text-white">
          <div className="flex flex-col lg:flex-row lg:row-start-1 mx-auto w-3/4 mt-32 justify-between">
            <div
              className="uppercase leading-9 xl:text-[38px] lg:text-[34px]  text-[30px] lg:w-2/3"
              dangerouslySetInnerHTML={{ __html: header.titrePage }}
            ></div>
            <div className="my-12 lg:my-0">{imageDeco}</div>
          </div>
          <div
            className="lg:row-start-2 mx-auto w-3/4 xl:text-[24px] lg:text-[20px]  text-[16px] mb-32"
            dangerouslySetInnerHTML={{ __html: header.paragraphe }}
          ></div>
          <div className="row-start-3 lg:col-span-2 animate-pulse">
            <Link href="/nos-realisations/#realisations">
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
    </div>
  )
}

export default EnteteRealisations
