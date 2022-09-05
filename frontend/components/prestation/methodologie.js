import React from "react"
import Link from "next/link"
import LazyImage from "./../../lib/lazy-images"

const Methodologie = ({ methodologie, mission }) => {
  const imageDeco = LazyImage(
    mission.images.data[0].attributes,
    "Image de décoration mission prestation",
    "lazy",
    "250px",
    "",
    "lg:ml-10"
  )
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(80, 80, 80, 0.4), rgba(80, 80, 80, 0.4)),url(${
            process.env.NEXT_PUBLIC_API_URL +
            methodologie.images.data[0].attributes.url
          })`,
          backgroundPosition: "50%",
          backgroundSize: "cover",
        }}
        className="pt-20"
      >
        <div className="grid max-w-7xl mx-auto text-center">
          <div
            className="text-white mx-auto row-start-1 uppercase text-2xl"
            dangerouslySetInnerHTML={{ __html: methodologie.titre2 }}
          ></div>
          <div className="row-start-2 mx-auto py-16">
            <div
              className="text-white mx-auto text-2xl"
              dangerouslySetInnerHTML={{ __html: methodologie.paragraphe }}
            ></div>
            <div
              className="text-white mx-auto"
              dangerouslySetInnerHTML={{ __html: methodologie.paragrapheBis }}
            ></div>
          </div>
          <div className="row-start-3 w-full lg:w-3/4 mx-auto">
            <Link href="/demander-un-devis">
              <a>
                <button className="group  hover:bg-[#FC5050] h-16 w-3/4 lg:w-1/2 block rounded-lg border-2 border-[#FFFFFF] hover:border-[#FC5050] mx-auto">
                  <span
                    dangerouslySetInnerHTML={{ __html: methodologie.button }}
                    className="font-bold text-[#FFFFFF] lg:text-sm group-hover:text-white"
                  />
                </button>
              </a>
            </Link>
          </div>
          <div className="h-20 grid grid-cols-2 lg:divide-x-2 lg:divide-white">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl hidden lg:block">
        <div className="h-20 grid grid-cols-2 divide-x-2 divide-[#41EAD4]">
          <div></div>
          <div></div>
        </div>
        {methodologie.board.map((item, index) =>
          index % 2 === 0 ? (
            <div key={item.id} className="mx-auto grid grid-cols-2">
              <div className="flex items-center col-start-2">
                {LazyImage(
                  item.icons.data[0].attributes,
                  `"icon-${index}`,
                  "lazy",
                  "30px",
                  undefined,
                  "-translate-x-1/2 h-[30px]"
                )}

                <div
                  className="uppercase text-[#41EAD4]"
                  dangerouslySetInnerHTML={{ __html: item.titre }}
                ></div>
              </div>
              <div className="flex divide-x-2 divide-[#41EAD4] col-span-2 h-[350px]">
                <div className="w-1/2">
                  <div
                    className="h-[250px] w-[250px] rounded-xl ml-auto mr-10 mt-6"
                    style={{
                      backgroundImage: `url(${
                        process.env.NEXT_PUBLIC_API_URL +
                        item.bg.data.attributes.url
                      })
                    `,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                </div>
                <div
                  className="w-1/2 pl-10 pt-10 pr-20"
                  dangerouslySetInnerHTML={{ __html: item.paragraphe }}
                ></div>
              </div>
            </div>
          ) : (
            <div key={item.id} className="mx-auto grid grid-cols-2">
              <div className="flex items-center justify-end">
                <div
                  className="uppercase text-[#41EAD4]"
                  dangerouslySetInnerHTML={{ __html: item.titre }}
                ></div>
                {LazyImage(
                  item.icons.data[0].attributes,
                  `"icon-${index}`,
                  "lazy",
                  "30px",
                  undefined,
                  "translate-x-1/2 h-[30px]"
                )}
              </div>
              <div className="flex divide-x-2 divide-[#41EAD4] col-span-2 h-[350px]">
                <div
                  className="w-1/2 pl-20 pt-10 pr-10 text-right"
                  dangerouslySetInnerHTML={{ __html: item.paragraphe }}
                ></div>
                <div className="w-1/2">
                  <div
                    className="h-[250px] w-[250px] rounded-xl mr-auto ml-10 mt-6"
                    style={{
                      backgroundImage: `url(${
                        process.env.NEXT_PUBLIC_API_URL +
                        item.bg.data.attributes.url
                      })
                    `,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <div className="mx-auto max-w-7xl block lg:hidden pt-20">
        {methodologie.board.map((item, index) => (
          <div key={item.id} className="mx-auto">
            <div className="flex items-center justify-center mx-auto w-2/3">
              <div className="w-max">
                {LazyImage(
                  item.icons.data[0].attributes,
                  `"icon-${index}`,
                  "lazy",
                  "30px",
                  undefined,
                  "h-[30px] w-[30px]"
                )}
              </div>
              <div
                className="uppercase text-[#41EAD4] pl-4"
                dangerouslySetInnerHTML={{ __html: item.titre }}
              ></div>
            </div>
            <div
              className="min-h-[300px] h-auto w-3/4 rounded-xl mx-auto"
              style={{
                backgroundImage: `url(${
                  process.env.NEXT_PUBLIC_API_URL + item.bg.data.attributes.url
                })
                    `,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="flex items-center bg-white-transparent-methodologie h-full min-h-[300px] my-16">
                {" "}
                <div
                  className="p-10 text-center mx-auto"
                  dangerouslySetInnerHTML={{ __html: item.paragraphe }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 lg:divide-x-2 lg:divide-[#41EAD4] lg:h-[300px] justify-items-center lg:justify-items-stretch pt-10 lg:pt-0">
        <div className="flex lg:items-end flex-col lg:h-full items-center lg:justify-evenly pb-10 w-3/4 lg:w-full">
          <div
            className="uppercase text-center lg:text-right w-1/2 lg:pr-10 text-xl"
            dangerouslySetInnerHTML={{ __html: mission.titre2bis }}
          ></div>
          <div
            className="text-center lg:text-right w-3/4 lg:pr-10 mt-10 lg:mt-0"
            dangerouslySetInnerHTML={{ __html: mission.paragraphe }}
          ></div>
          <div className="lg:w-2/3 mt-10 lg:mt-0 w-full">
            <Link href="/demander-un-devis">
              <a>
                <button className="group bg-[#FC5050] hover:bg-white h-16 w-3/4 block rounded-lg border-2 border-[#FFFFFF] hover:border-[#FC5050] mx-auto lg:mr-10">
                  <span
                    dangerouslySetInnerHTML={{ __html: mission.button }}
                    className="font-bold text-[#FFFFFF] lg:text-sm group-hover:text-[#FC5050]"
                  />
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div className="pb-10 flex lg:items-center lg:justify-start">
          {imageDeco}
        </div>
      </div>
    </>
  )
}

export default Methodologie
