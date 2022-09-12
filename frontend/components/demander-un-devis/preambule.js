import Link from "next/link"
import React from "react"
import LazyImage from "./../../lib/lazy-images"

const Preambule = ({ preambule }) => {
  return (
    <div
      id="preambule"
      className="max-w-9xl pb-10 lg:pb-24 pt-20 lg:pt-40 mx-auto"
    >
      <div className="mx-auto hidden lg:grid grid-cols-2 gap-4 items-center justify-start text-left">
        <div
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),url(${
              process.env.NEXT_PUBLIC_API_URL +
              preambule.images.data[0].attributes.url
            })`,
            backgroundPosition: "bottom",
            backgroundSize: "cover ",
          }}
          className="h-full rounded-t-lg w-4/5 ml-auto mr-10"
        ></div>
        <div className="">
          <div className="flex flex-col h-full justify-center items-center rounded-2xl bg-blue-binome pl-20 py-16 -translate-x-32 -translate-y-10">
            <div
              className="uppercase text-[#2E437D] font-bold xl:text-[34px] lg:text-[30px]  text-[26px] mb-6 px-6 text-center"
              dangerouslySetInnerHTML={{ __html: preambule.titre2 }}
            ></div>
            <div
              className="text-[#3F3F3F] font-semibold xl:text-[21px] lg:text-[18px]  text-[15px]"
              dangerouslySetInnerHTML={{ __html: preambule.paragraphe }}
            ></div>{" "}
            <div className="mx-auto w-3/4 lg:w-1/2 mt-10">
              <Link href="/demander-un-devis">
                <a>
                  <button className="group bg-transparent hover:bg-[#FC5050] w-full h-16 mx-auto lg:m-0 block rounded-lg border-2 border-[#FC5050]">
                    <span
                      dangerouslySetInnerHTML={{ __html: preambule.button }}
                      className="font-bold text-[#FC5050] group-hover:text-white xl:text-[20px] lg:text-[17px]  text-[15px]"
                    />
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),url(${
            process.env.NEXT_PUBLIC_API_URL +
            preambule.images.data[0].attributes.url
          })`,
          backgroundPosition: "bottom",
          backgroundSize: "cover ",
        }}
        className="h-[500px] rounded-2xl mx-auto block lg:hidden text-center w-5/6 mb-16"
      >
        {" "}
        <div className="flex flex-col justify-evenly items-center h-full rounded-2xl bg-blue-binome px-12 py-8 mx-auto">
          <div
            className="uppercase text-[#2E437D] font-bold xl:text-[34px] lg:text-[30px]  text-[26px]"
            dangerouslySetInnerHTML={{ __html: preambule.titre2 }}
          ></div>
          <div
            className="text-[#3F3F3F] text-left font-semibold xl:text-[21px] lg:text-[18px]  text-[15px]"
            dangerouslySetInnerHTML={{ __html: preambule.paragraphe }}
          ></div>
          <div className="mx-auto w-3/4 lg:w-1/2 mt-6">
            <Link href="/demander-un-devis">
              <a>
                <button className="group bg-transparent hover:bg-[#FC5050] w-full h-16 mx-auto lg:m-0 block rounded-lg border-2 border-[#FC5050]">
                  <span
                    dangerouslySetInnerHTML={{ __html: preambule.button }}
                    className="font-bold text-[#FC5050] group-hover:text-white xl:text-[20px] lg:text-[17px]  text-[15px]"
                  />
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preambule
