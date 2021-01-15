import React from "react"
import Layout from "../components/Layout"
import isEmail from "validator/lib/isEmail"
import { FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa"

import SpinnerForm from "../components/Spinner/SpinnerForm"

export default function Contact() {
  const [formFields, setFormFields] = React.useState({
    name: "",
    email: "",
    message: "",
  })
  const [message, setMessage] = React.useState({
    name: "",
    email: "",
    message: "",
  })
  const [fieldErrors, setFieldErrors] = React.useState({})
  const [loading, setLoading] = React.useState(false)
  const [formMsg, setFormMsg] = React.useState("")
  const [error, setError] = React.useState(null)

  const onInputChangedHandler = e => {
    const newFormFields = { ...formFields }
    newFormFields[e.target.name] = e.target.value
    setFormFields(newFormFields)
  }

  const validate = message => {
    const errors = {}
    if (!message.name) errors.name = "Name is Required!!!"
    if (!message.email) errors.email = "Email is Required!!!"
    if (message.email && !isEmail(message.email))
      errors.email = "An Invalid Email Was Entered!!!"
    if (!message.message) errors.message = "Message is Required!!!"
    return errors
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const onFormSubmitHandler = e => {
    e.preventDefault()
    setLoading(true)
    const visitorMessage = { ...message }
    visitorMessage.name = formFields.name
    visitorMessage.email = formFields.email
    visitorMessage.message = formFields.message
    const fieldErrors = validate(visitorMessage)

    setFieldErrors(fieldErrors)

    if (Object.keys(fieldErrors).length) {
      setLoading(false)
      return
    }

    setMessage(visitorMessage)
    setFormFields({
      name: "",
      email: "",
      message: "",
    })

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...visitorMessage }),
    })
      .then(() => {
        setInterval(() => {
          setFormMsg(
            `Thank you for contacting me, I'll get back to you as soon as i can.`
          )
          setLoading(false)
        }, 4000)
      })
      .catch(error => {
        setInterval(() => {
          setError(
            `Sorry your message could not be delivered, please try again`
          )
          setLoading(false)
        }, 4000)
      })
  }

  return (
    <Layout>
      <section className="page-wrapper">
        <h2 className="page-header">Get in touch</h2>
        <p className="contact-subheader">
          Hello feel free to reach out for work or just to say hi
        </p>
        <div className="contact">
          <form
            onSubmit={onFormSubmitHandler}
            className="contact__form"
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            {formMsg && (
              <div
                className="contact__form__feedback"
                style={
                  error
                    ? { backgroundColor: "#f51616" }
                    : { backgroundColor: "#03b603" }
                }
              >
                {formMsg || error}
              </div>
            )}
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div className="contact__form__group">
              <label htmlFor="name" className="contact__form__label">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="contact__form__input"
                placeholder="your name"
                value={formFields.name}
                onChange={onInputChangedHandler}
                name="name"
              />
              <span className="contact__form__error">{fieldErrors.name}</span>
            </div>
            <div className="contact__form__group">
              <label htmlFor="email" className="contact__form__label">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="contact__form__input"
                placeholder="your email"
                name="email"
                value={formFields.email}
                onChange={onInputChangedHandler}
              />
              <span className="contact__form__error">{fieldErrors.email}</span>
            </div>
            <div className="contact__form__group">
              <label htmlFor="message" className="contact__form__label">
                Message
              </label>
              <textarea
                id="message"
                className="contact__form__textarea"
                placeholder="your message"
                name="message"
                draggable={false}
                rows="6"
                value={formFields.message}
                onChange={onInputChangedHandler}
              />
              <span className="contact__form__error">
                {fieldErrors.message}
              </span>
            </div>
            <div className="contact__form__group">
              <button disabled={loading} className="contact__form__submit">
                Submit {loading && <SpinnerForm />}
              </button>
            </div>
          </form>
          <div className="contact__details">
            <div className="contact__details__group">
              <p className="contact__details__text">
                <FaEnvelope className="hide-icon" />
                <span>ayobamiagunroye@gmail.com</span>
              </p>
            </div>
            <div className="contact__details__group">
              <a
                className="contact__details__link"
                href="https://twitter.com/agunroye_"
              >
                <FaTwitter />
                <span>twitter</span>
              </a>
            </div>
            <div className="contact__details__group">
              <a
                className="contact__details__link"
                href="https://www.linkedin.com/in/ayobami-agunroye/"
              >
                <FaLinkedin />
                <span>linkedin</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
