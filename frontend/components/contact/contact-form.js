// @ts-ignore
import React, { useState } from "react"
import { gql, useMutation } from "@apollo/client"
import client from "../../lib/apollo-client"
import LazyImage from "../../lib/lazy-images"
import { useRouter } from "next/router"
import Loader from "../loader/loader"
import { uuid } from "./../../lib/uuid"

const ADD_CONTACT = gql`
  mutation addContact(
    $identifiant: String!
    $titre: String!
    $inputNom: String!
    $inputMail: String!
    $inputMessage: String!
  ) {
    createContactForm(
      data: {
        identifiant: $identifiant
        contact: {
          titre: $titre
          personne: {
            inputNom: $inputNom
            inputMail: $inputMail
            inputMessage: $inputMessage
          }
        }
      }
    ) {
      data {
        attributes {
          identifiant
          contact {
            titre
            personne {
              inputNom
              inputMail
              inputMessage
            }
          }
        }
      }
    }
  }
`

const ContactForm = ({ contact }) => {
  const router = useRouter()
  const uncheckedIcon = LazyImage(
    contact.checkTerms.icons.data[1].attributes,
    "icon unchecked",
    "lazy",
    "30px"
  )
  const checkedIcon = LazyImage(
    contact.checkTerms.icons.data[0].attributes,
    "icon checked",
    "lazy",
    "30px"
  )
  const imageDeco = LazyImage(
    contact.imageDeco.data.attributes,
    "icon checked",
    "lazy",
    "80px",
    "",
    "mx-auto lg:flex hidden w-3/4 max-w-5xl justify-end"
  )

  const [errorContactFormInputNom, setErrorContactFormInputNom] =
    useState(false)
  const [errorContactFormInputMessage, setErrorContactFormInputMessage] =
    useState(false)

  const [errorContactFormInputMail, setErrorContactFormInputMail] =
    useState(false)
  const [errorContactFormInputMailRegex, setErrorContactFormInputMailRegex] =
    useState(false)

  const [errorCheckTermsContactForm, setErrorCheckTermsContactForm] =
    useState(false)

  const [message, setMessage] = useState(false)

  // @ts-ignore
  const [checked, setChecked] = useState({
    checkTerms: false,
  })

  const [contactEnCours, setContactEnCours] = useState({
    inputNom: "",
    inputMessage: "",
    inputMail: "",

    checkedTerms: false,
  })

  // @ts-ignore
  const [mutateFunction, { data, loading, error }] = useMutation(ADD_CONTACT, {
    client: client,
  })

  if (loading) return <Loader />
  if (error) return `Submission error! ${error.message}`

  const handleSubmit = (event) => {
    event.preventDefault()
    if (contactEnCours.inputNom.length == 0) setErrorContactFormInputNom(true)
    if (contactEnCours.inputMessage.length == 0)
      setErrorContactFormInputMessage(true)
    if (contactEnCours.inputMail.length == 0) setErrorContactFormInputMail(true)
    const terms = checked.checkTerms
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (
      contactEnCours.inputMail.length > 0 &&
      !mailformat.test(contactEnCours.inputMail)
    )
      setErrorContactFormInputMailRegex(true)
    if (!terms) setErrorCheckTermsContactForm(true)
    const errorSubmit =
      errorContactFormInputMail ||
      errorContactFormInputNom ||
      errorContactFormInputMessage ||
      errorContactFormInputMailRegex ||
      !terms

    const uuidEnCours = uuid()

    if (!errorSubmit) {
      mutateFunction({
        variables: {
          identifiant: uuidEnCours,
          titre: contact.titre,
          inputNom: contactEnCours.inputNom,
          inputMail: contactEnCours.inputMail,
          inputMessage: contactEnCours.inputMessage,
        },
      })
      setContactEnCours({
        inputNom: "",
        inputMessage: "",
        inputMail: "",
        checkedTerms: false,
      })
      setMessage(!message)
      window.scrollTo({
        top: 1400,
        left: 0,
        behavior: "smooth",
      })
      setTimeout(() => {
        router.push("/")
      }, 5000)
    }
  }

  const handleCheck = () => {
    checked.checkTerms = !checked.checkTerms
    setErrorCheckTermsContactForm(false)

    setContactEnCours({
      ...contactEnCours,
      checkedTerms: checked.checkTerms,
    })
  }
  return (
    <div id="contactForm" className="max-w-9xl pb-24 pt-24 mx-auto">
      <div
        className="uppercase mb-12 xl:text-[34px] lg:text-[30px]  text-[26px] text-center"
        dangerouslySetInnerHTML={{ __html: contact.titre }}
      ></div>
      <div className="mb-12 h-[2px] bg-[#41EAD4] mx-auto mt-6 w-1/12"></div>
      <div>
        {!message ? (
          <>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="mx-auto w-4/5 lg:w-3/4 max-w-[600px]"
            >
              <div className="mx-auto grid gap-4 items-center">
                <div className="text-[#2E437D] xl:text-[20px] lg:text-[18px]  text-[16px] font-medium pb-10">
                  <div className="flex flex-col grow min-w-full lg:min-w-[400px]">
                    <input
                      onChange={(event) => {
                        setErrorContactFormInputNom(false)
                        setContactEnCours({
                          ...contactEnCours,
                          inputNom: event.target.value,
                        })
                      }}
                      type="text"
                      id={contact.personne.placeholderNom}
                      name={contact.personne.placeholderNom}
                      placeholder={contact.personne.placeholderNom}
                      className="mt-4 shadow appearance-none border-2 border-[#2E437D] rounded-lg w-full py-2 px-3 h-[60px] text-[#2E437D] leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#2E437D] placeholder:xl:text-[20px] lg:text-[18px]  text-[16px]"
                      value={contactEnCours.inputNom}
                      required
                    />
                    {errorContactFormInputNom && (
                      <div
                        className="text-[#4087FF] mt-2 animate-pulse"
                        dangerouslySetInnerHTML={{
                          __html: contact.personne.errorMessageInputNom,
                        }}
                      ></div>
                    )}
                    <input
                      onChange={(event) => {
                        setErrorContactFormInputMail(false)
                        setErrorContactFormInputMailRegex(false)
                        setContactEnCours({
                          ...contactEnCours,
                          inputMail: event.target.value,
                        })
                      }}
                      type="text"
                      id={contact.personne.placeholderMail}
                      name={contact.personne.placeholderMail}
                      placeholder={contact.personne.placeholderMail}
                      className="mt-4 shadow appearance-none border-2 border-[#2E437D] rounded-lg w-full py-2 px-3 h-[60px] text-[#2E437D] leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#2E437D] placeholder:xl:text-[20px] lg:text-[18px]  text-[16px]"
                      value={contactEnCours.inputMail}
                      required
                    />
                    {errorContactFormInputMail && (
                      <div
                        className="text-[#4087FF] mt-2 animate-pulse"
                        dangerouslySetInnerHTML={{
                          __html: contact.personne.errorMessageInputMail,
                        }}
                      ></div>
                    )}
                    {errorContactFormInputMailRegex && (
                      <div
                        className="text-[#4087FF] mt-2 animate-pulse"
                        dangerouslySetInnerHTML={{
                          __html: contact.personne.errorMessageInputMailRegex,
                        }}
                      ></div>
                    )}
                    <textarea
                      onChange={(event) => {
                        setErrorContactFormInputMessage(false)
                        setContactEnCours({
                          ...contactEnCours,
                          inputMessage: event.target.value,
                        })
                      }}
                      style={{ resize: "none" }}
                      rows={6}
                      cols={50}
                      id={contact.personne.placeholderMessage}
                      name={contact.personne.placeholderMessage}
                      placeholder={contact.personne.placeholderMessage}
                      className="mt-4 shadow appearance-none border-2 border-[#2E437D] rounded-lg w-full py-2 px-3 h-[140px] text-[#2E437D] leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#2E437D] placeholder:xl:text-[20px] lg:text-[18px]  text-[16px]"
                      value={contactEnCours.inputMessage}
                      required
                    />
                    {errorContactFormInputMessage && (
                      <div
                        className="text-[#4087FF] mt-2 animate-pulse"
                        dangerouslySetInnerHTML={{
                          __html: contact.personne.errorMessageInputMessage,
                        }}
                      ></div>
                    )}
                  </div>
                </div>
                <div className="text-[#2E437D] xl:text-[20px] lg:text-[18px]  text-[16px] font-medium pb-10">
                  <div className="flex">
                    <div
                      className="cursor-pointer w-2/12 lg:w-1/12 lg:pt-1 pt-2"
                      onClick={() => handleCheck()}
                    >
                      {checked.checkTerms ? checkedIcon : uncheckedIcon}
                    </div>
                    <div
                      className="text-[#3F3F3F] ml-4 xl:text-[14px] lg:text-[12px]  text-[10px]"
                      dangerouslySetInnerHTML={{
                        __html: contact.checkTerms.text,
                      }}
                    />
                  </div>
                  {errorCheckTermsContactForm && (
                    <div
                      className="text-[#4087FF] mt-6 animate-pulse px-2"
                      dangerouslySetInnerHTML={{
                        __html: contact.checkTerms.errorMessage,
                      }}
                    ></div>
                  )}
                </div>

                <button
                  type="submit"
                  className="group bg-transparent hover:bg-[#2E437D] lg:w-1/2 w-full h-16 mx-auto lg:m-0 block rounded-lg border-2 border-[#2E437D]"
                >
                  <span
                    dangerouslySetInnerHTML={{ __html: contact.button }}
                    className="font-bold text-[#2E437D] group-hover:text-white xl:text-[20px] lg:text-[17px]  text-[15px]"
                  />
                </button>
              </div>
            </form>
            {imageDeco}
          </>
        ) : (
          <div className="flex justify-center items-center">
            <div
              className="py-6 px-16 rounded-xl border-2  border-[#41EAD4]"
              dangerouslySetInnerHTML={{
                __html: contact.successMessage,
              }}
            ></div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContactForm
