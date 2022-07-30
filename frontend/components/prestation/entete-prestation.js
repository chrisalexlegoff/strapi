import Image from "next/image"
import React from "react"
import Link from "next/link"
import LazyImage from "../../lib/lazy-images"

const EntetePrestations = ({ header }) => {
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
        backgroundPosition: "bottom",
        backgroundSize: "cover ",
      }}
    >
      <div className="lg:bg-split-right-green-transparent bg-green-transparent">
        <div className="max-w-7xl mx-auto h-screen grid grid-col-1 lg:grid-cols-2 gap-4 items-center lg:justify-start text-center lg:text-left pt-28 font-normal">
          <div className="flex flex-col lg:flex-row lg:row-start-1 mx-auto w-3/4 mt-32 justify-between">
            <div
              className="uppercase leading-9 text-2xl lg:w-2/3"
              dangerouslySetInnerHTML={{ __html: header.titrePage }}
            ></div>
            <div className="my-12 lg:my-0">{imageDeco}</div>
          </div>
          <div
            className="lg:row-start-2 mx-auto w-3/4 text-lg mb-32"
            dangerouslySetInnerHTML={{ __html: header.paragraphe }}
          ></div>
          <div className="row-start-3 lg:col-span-2 animate-pulse">
            <Link href="/nos-prestations/#expertise">
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

export default EntetePrestations
