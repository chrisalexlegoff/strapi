import React from "react"
import Link from "next/link"

const Nous = ({ nous }) => {
  console.log(nous.images.data[0].attributes.url)
  return (
    <div id="nous" className="">
      <div
        style={{}}
        className="max-w-7xl mx-auto grid grid-rows-6 grid-col-1  items-center text-center  bg-white text-[#2E437D] pt-20"
      >
        <div
          className="row-start-1 mx-auto uppercase leading-9 text-2xl w-3/4"
          dangerouslySetInnerHTML={{ __html: nous.titre3 }}
        ></div>
        <div
          className="row-start-2 mx-auto leading-9 text-2xl w-3/4"
          dangerouslySetInnerHTML={{ __html: nous.titre4 }}
        ></div>
        <div
          className="row-start-3 mx-auto leading-9 w-3/4"
          dangerouslySetInnerHTML={{ __html: nous.paragraphe }}
        ></div>
        <div
          className="row-start-4 mx-auto leading-9 w-3/4 text-2xl text-[#4087FF]"
          dangerouslySetInnerHTML={{ __html: nous.titre3bis }}
        ></div>

        <div className="row-start-5 mx-auto w-4/5">
          <Link href="/contact">
            <a>
              <button className="group bg-[#FFFFFF] hover:bg-[#2E437D] border-[#2E437D] w-4/6 max-w-xs h-16 mx-auto block rounded-lg border-2">
                <span
                  dangerouslySetInnerHTML={{ __html: nous.button }}
                  className="font-bold text-[#2E437D] group-hover:text-[#FFFFFF]"
                />
              </button>
            </a>
          </Link>
          <div
            style={{
              backgroundImage: `url(${
                process.env.NEXT_PUBLIC_API_URL +
                nous.images.data[0].attributes.url
              })`,
            }}
            className="bg-cover bg-no-repeat bg-center ml-auto w-[200px] h-[180px] border-[#41EAD4] border-4 rounded-2xl relative -top-24 -mb-24"
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Nous
