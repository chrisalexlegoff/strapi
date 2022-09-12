import React from "react"
import LazyImage from "../lib/lazy-images"
import Link from "next/link"

const Footer = ({ footer }) => {
  const logo = LazyImage(
    footer.logo.data.attributes,
    "logo dualdclic footer",
    "lazy",
    undefined,
    ""
  )
  return (
    <div className="bg-[#2E437D]">
      <div className="max-w-9xl mx-auto grid xl:grid-col-3 lg:grid-col-2 auto-cols-fr auto-rows-fr justify-items-center text-white lg:py-16">
        <div className="xl:col-start-1 xl:row-start-1 xl:col-span-1 lg:row-start-2 lg:col-span-2  w-3/4 flex h-[300px] flex-col text-center justify-between lg:m-10 xl:m-4 m-12">
          <div className="mx-auto w-1/2">{logo}</div>
          <div
            className="mx-auto text-[1.1rem]"
            dangerouslySetInnerHTML={{ __html: footer.paragraphe }}
          ></div>
          <div
            className="mx-auto text-[1.2rem] font-semibold"
            dangerouslySetInnerHTML={{ __html: footer.titre4 }}
          ></div>
          <div className="mx-auto w-full">
            <Link href="/demander-un-devis">
              <a>
                <button className="group bg-transparent border-white  hover:border-[#41EAD4] w-2/3 h-12 mx-auto block rounded-lg border-2">
                  <span
                    dangerouslySetInnerHTML={{ __html: footer.button }}
                    className="font-bold text-white group-hover:text-[#41EAD4]"
                  />
                </button>
              </a>
            </Link>
          </div>
          <div
            className="mx-auto text-sm"
            dangerouslySetInnerHTML={{ __html: footer.copyright }}
          ></div>
        </div>
        <div className="xl:col-start-2 flex flex-col h-[300px] lg:m-4 m-12">
          {" "}
          <div
            className="font-bold text-center text-[1.3rem] lg:text-left mb-4"
            dangerouslySetInnerHTML={{ __html: footer.titre4bis }}
          ></div>
          <div className="group flex flex-col ml-2 text-[1rem] lg:h-full h-[250px] justify-between text-center lg:text-left">
            {footer.nav.map((item) => (
              <Link key={item.id} href={item.lien}>
                <a className="hover:text-[#41EAD4]">{item.slug}</a>
              </Link>
            ))}
          </div>
        </div>
        <div className="xl:col-start-3 flex flex-col h-[300px] justify-between lg:m-4 m-12">
          {" "}
          <div>
            <div
              className="font-bold text-center text-[1.3rem] lg:text-left mb-4"
              dangerouslySetInnerHTML={{ __html: footer.titre4tierce }}
            ></div>
            <div className="flex justify-center lg:justify-start">
              {footer.reseaux.map((item) => (
                <a
                  key={item.id}
                  rel="noreferrer"
                  href={item.lien}
                  target="_blank"
                  className="group"
                >
                  {LazyImage(
                    item.icon.data.attributes,
                    `lien ${item.slug}`,
                    "lazy",
                    "50px",
                    undefined,
                    "lg:mr-4 lg:mx-0 mx-2 cursor-pointer block group-hover:hidden"
                  )}
                  {LazyImage(
                    item.iconHover.data.attributes,
                    `lien ${item.slug}`,
                    "lazy",
                    "50px",
                    undefined,
                    "lg:mr-4 lg:mx-0 mx-2 cursor-pointer hidden group-hover:block"
                  )}
                </a>
              ))}
            </div>
          </div>
          <div className="text-[1.1rem]">
            <div
              className="font-bold text-center text-[1.3rem] lg:text-left mb-4"
              dangerouslySetInnerHTML={{ __html: footer.titre4quarto }}
            ></div>
            <p className="text-center lg:text-left">
              <a
                className="hover:text-[#41EAD4]"
                href={`mailto:${footer.contact.mail}`}
              >
                {footer.contact.mail}
              </a>{" "}
              ou{" "}
              <Link href={footer.contact.lien}>
                <a className="underline hover:text-[#41EAD4]">
                  {footer.contact.lien}
                </a>
              </Link>
            </p>
            <p className="text-center lg:text-left">
              Tel: {footer.contact.tel}
            </p>
            <p className="text-center lg:text-left">
              {footer.contact.horaires}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
