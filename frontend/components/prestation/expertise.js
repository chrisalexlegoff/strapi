import React, { useState } from "react"
import LazyImage from "../../lib/lazy-images"
import Link from "next/link"

const Expertise = ({ expertise }) => {
  const [boardState, setBoardState] = useState(null)
  const imageDeco = LazyImage(
    expertise.images.data[0].attributes,
    "Image de décoration expertise prestation",
    "lazy",
    "200px",
    ""
  )
  return (
    <>
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
          <div className="row-start-3 flex flex-wrap justify-center mx-auto w-full">
            {expertise.board.map((item, index) => (
              <div
                key={item.id}
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),url(${
                    process.env.NEXT_PUBLIC_API_URL +
                    item.bg.data.attributes.url
                  })`,
                  backgroundPosition: "bottom",
                  backgroundSize: "cover",
                }}
                className="w-3/4 lg:w-[500px] min-h-[300px] rounded-xl bg-[#FAFAFB] m-4"
              >
                {boardState == index ? (
                  <div className="transition-all duration-500 flex flex-col min-h-[300px] h-auto justify-center items-center bg-white-transparent-board rounded-xl p-10">
                    <div className="flex w-full items-center justify-between text-left">
                      <div
                        className="my-4 text-[#FC5050] min-h-[40px] w-3/5 text-lg font-bold"
                        dangerouslySetInnerHTML={{ __html: item.titreVerso }}
                      ></div>
                      <div className="" onClick={() => setBoardState(null)}>
                        {LazyImage(
                          item.icons.data[0].attributes,
                          `"icon-${index}`,
                          "lazy",
                          "30px",
                          undefined,
                          "cursor-pointer"
                        )}
                      </div>
                    </div>
                    <div
                      className="text-left"
                      dangerouslySetInnerHTML={{ __html: item.paragraphe }}
                    ></div>
                  </div>
                ) : (
                  <div className="transition-all duration-500 flex flex-col min-h-[300px] h-full justify-center items-center bg-white-transparent rounded-xl pt-10">
                    <div
                      className="w-full my-6 text-[#2E437D] min-h-[40px] text-lg font-bold"
                      dangerouslySetInnerHTML={{ __html: item.titre }}
                    ></div>
                    <div className="" onClick={() => setBoardState(index)}>
                      {LazyImage(
                        item.icons.data[1].attributes,
                        `"icon-${index}`,
                        "lazy",
                        "30px",
                        undefined,
                        "cursor-pointer"
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mx-auto row-start-4 flex flex-col lg:flex-row w-3/4 lg:w-full lg:mt-10 justify-center">
            <div className="my-6 lg:mb-0">{imageDeco}</div>
            <div className="flex flex-col justify-around lg:pl-10">
              <div
                className="lg:text-left text-2xl mb-6 lg:mb-0"
                dangerouslySetInnerHTML={{ __html: expertise.titre2bis }}
              ></div>
              <div
                className="lg:text-left lg:font-semibold"
                dangerouslySetInnerHTML={{ __html: expertise.titre3 }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FC5050] ">
        <div className="max-w-7xl flex flex-col lg:flex-row items-center mx-auto py-10">
          <div
            className="mx-auto lg:ml-auto lg:mr-10 lg:w-1/2 text-right text-white tracking-wider text-xl font-semibold"
            dangerouslySetInnerHTML={{ __html: expertise.titre3bis }}
          ></div>
          <div className="lg:ml-10 w-full lg:w-1/2 mt-10 lg:mt-0">
            <Link href="/demander-un-devis">
              <a>
                <button className="group bg-[#FC5050] hover:bg-white h-16 w-3/4 lg:w-1/2 block rounded-lg border-2 border-[#FFFFFF] hover:border-[#FC5050] mx-auto lg:mx-0">
                  <span
                    dangerouslySetInnerHTML={{ __html: expertise.button }}
                    className="font-bold text-[#FFFFFF] lg:text-sm group-hover:text-[#FC5050]"
                  />
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Expertise
