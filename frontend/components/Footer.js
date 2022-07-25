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
      <div className="max-w-7xl mx-auto flex flex-wrap text-white justify-center items-center lg:py-16">
        <div className="lg:w-[400px] w-3/4 flex h-[250px] flex-col text-center justify-between lg:m-4 m-12">
          <div className="mx-auto w-1/2">{logo}</div>
          <div
            className="mx-auto text-base"
            dangerouslySetInnerHTML={{ __html: footer.paragraphe }}
          ></div>
          <div
            className="mx-auto uppercase text-base"
            dangerouslySetInnerHTML={{ __html: footer.titre4 }}
          ></div>
          <div className="mx-auto w-full">
            <Link href="/demander-un-devis">
              <a>
                <button className="group bg-transparent border-white hover:bg-[#FC5050] hover:border-[#FC5050] w-2/3 h-12 mx-auto block rounded-lg border-2">
                  <span
                    dangerouslySetInnerHTML={{ __html: footer.button }}
                    className="font-bold text-white"
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
        <div className="lg:w-[250px] flex flex-col h-[250px] lg:m-4 m-12">
          {" "}
          <div
            className="uppercase font-bold text-center lg:text-left mb-4"
            dangerouslySetInnerHTML={{ __html: footer.titre4bis }}
          ></div>
          <div className="flex flex-col ml-2 text-xs lg:h-full h-[250px] justify-between text-center lg:text-left">
            {footer.nav.map((item) => (
              <Link key={item.id} href={item.lien}>
                {item.slug}
              </Link>
            ))}
          </div>
        </div>
        <div className="lg:w-[400px] flex flex-col h-[250px] justify-between lg:m-4 m-12">
          {" "}
          <div>
            <div
              className="uppercase font-bold text-center lg:text-left mb-4"
              dangerouslySetInnerHTML={{ __html: footer.titre4tierce }}
            ></div>
            <div className="flex justify-center lg:justify-start">
              {footer.reseaux.map((item) => (
                <a
                  key={item.id}
                  rel="noreferrer"
                  href={item.lien}
                  target="_blank"
                >
                  {LazyImage(
                    item.icon.data.attributes,
                    `"lien "${item.slug}`,
                    "lazy",
                    "40px",
                    undefined,
                    "lg:mr-4 lg:mx-0 mx-10 cursor-pointer"
                  )}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div
              className="uppercase font-bold text-center lg:text-left mb-4"
              dangerouslySetInnerHTML={{ __html: footer.titre4quarto }}
            ></div>
            <p className="text-center lg:text-left">
              <a href={`mailto:${footer.contact.mail}`}>
                {footer.contact.mail}
              </a>{" "}
              ou{" "}
              <Link href={footer.contact.lien}>
                <a className="underline">{footer.contact.lien}</a>
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
