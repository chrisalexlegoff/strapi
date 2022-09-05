import React from "react"
import Link from "next/link"
import LazyImage from "./../../lib/lazy-images"

const Pourquoi = ({ pourquoi }) => {
  const imageDeco = LazyImage(
    pourquoi.images.data[0].attributes,
    "Image de décoration accueil",
    "lazy",
    undefined,
    ""
  )
  return (
    <div className="text-center">
      <div
        style={{}}
        className="max-w-7xl mx-auto grid grid-col-1 lg:grid-cols-2 items-center text-center lg:text-left font-normal lg:-mt-6"
      >
        <div className="flex flex-col max-w-[400px] bg-[#FC5050] rounded-lg mx-auto p-12 text-white my-4 lg:my-0">
          <div
            className="mx-auto text-2xl text-center"
            dangerouslySetInnerHTML={{ __html: pourquoi.titre2 }}
          ></div>
          <div
            className="text-base mx-auto text-center my-12"
            dangerouslySetInnerHTML={{ __html: pourquoi.paragraphe }}
          ></div>
          <div className="mx-auto w-full">
            <Link href="/demander-un-devis">
              <a>
                <button className="group bg-[#FC5050] lg:bg-transparent lg:hover:bg-[#FFFFFF] w-full h-16 mx-auto lg:m-0 block rounded-lg border-2 border-[#FFFFFF]">
                  <span
                    dangerouslySetInnerHTML={{ __html: pourquoi.button }}
                    className="font-bold text-[#FFFFFF] lg:group-hover:text-[#FC5050]"
                  />
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col max-w-[400px] bg-[#EBFFFC] rounded-lg mx-auto p-12 my-4 lg:my-0">
          <div
            className="mx-auto text-2xl text-center"
            dangerouslySetInnerHTML={{ __html: pourquoi.titre2bis }}
          ></div>
          <div
            className="text-base mx-auto text-center my-12"
            dangerouslySetInnerHTML={{ __html: pourquoi.paragrapheBis }}
          ></div>
          <div className="mx-auto w-full">
            <Link href="/demander-un-devis">
              <a>
                <button className="group bg-transparent border-[#FC5050] lg:bg-transparent lg:hover:bg-[#FC5050] w-full h-16 mx-auto lg:m-0 block rounded-lg border-2 lg:border-[#FC5050]">
                  <span
                    dangerouslySetInnerHTML={{ __html: pourquoi.button }}
                    className="font-bold text-[#FC5050] lg:group-hover:text-[#FFFFFF]"
                  />
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div className="hidden lg:block lg:col-span-2 mx-auto w-1/3 my-4 lg:-mt-10 lg:-mb-2">
          {imageDeco}
        </div>
      </div>
    </div>
  )
}

export default Pourquoi
