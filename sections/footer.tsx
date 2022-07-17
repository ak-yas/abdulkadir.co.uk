import { useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { images } from '../public'
import WavyText from '../components/wavyText'
import { client } from '../lib/client'

const StyledFooterContainer = styled.div`
  margin: 0 auto;
  padding: 100px 0;
  max-width: 1600px;
  @media (max-width: 768px) {
    padding: 80px 0;
  }
  @media (max-width: 480px) {
    padding: 60px 0;
  }
`

const StyledFooterWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .wavy {
    font-size: clamp(12px, 4vw, var(--fz-md));
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  .app__footer-cards {
    width: 60%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin: 4em 2rem 2rem;

    .app__footer-card {
      min-width: 300px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      margin: 1rem 0;
      padding: 1rem;
      border-radius: 10px;
      cursor: pointer;
      background-color: var(--lightest-platinum);
      color: var(--dark-platinum);

      transition: all 0.3s ease-in-out;

      p {
        font-weight: 500;
      }
      a {
        text-decoration: none;
        font-weight: 500;
        margin-left: 0.7rem;
        font-size: var(--fz-sm);
      }
      &:hover {
        box-shadow: 0 0 25px var(--lightest-fogra);
        color: var(--gold);
      }

      @media screen and (max-width: 450px) {
        width: 100%;
      }
    }

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  .app__footer-cards .app__footer-card:last-child {
    background-color: var(--lightest-platinum);
  }

  .app__footer-cards .app__footer-card:last-child:hover {
    box-shadow: 0 0 25px var(--lightest-fogra);
  }

  .app__footer-form {
    width: 60%;
    flex-direction: column;
    margin: 1rem 2rem;

    div {
      width: 100%;

      margin: 0.75rem 0;
      border-radius: 10px;
      cursor: pointer;
      background-color: var(--fogra);

      transition: all 0.3s ease-in-out;

      input,
      textarea {
        width: 100%;
        padding: 0.95rem;
        border: none;
        border-radius: 7px;
        background-color: var(--fogra);

        font-family: var(--font-sans);
        color: var(--gold);
        outline: none;
        font-size: var(--fz-md);
      }

      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      input:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 1000px var(--fogra) inset !important;
        border-radius: initial;
        transition: background-color 5000s ease-in-out 0s;
      }

      input:-webkit-autofill {
        -webkit-text-fill-color: var(--gold) !important;
      }

      textarea {
        height: 170px;
      }

      &:hover,
      &:active {
        box-shadow: 0 0 25px var(--lightest-fogra);
        color: var(--gold);
      }
    }

    button {
      ${({ theme }) => theme.mixins.smallButton};
      margin-left: 15px;
      margin-top: 20px;
      font-size: var(--fz-sm);
    }

    @media screen and (max-width: 768px) {
      width: 100%;
      margin: 1rem 0;
    }
  }
`

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: formData.name,
      email: formData.email,
      message: formData.message,
    }

    client
      .create(contact)
      .then(() => {
        setLoading(false)
        setIsFormSubmitted(true)
      })
      .catch((err) => console.log(err))
  }

  return (
    <StyledFooterContainer id="contact">
      <StyledFooterWrapper>
        <h2>
          <WavyText text="Like what you see?" color />
        </h2>
        <h3 className="head-text">Get in Touch & chat with me</h3>
        <div className="app__footer-cards">
          <div className="app__footer-card ">
            <Image src={images.email} alt="email" height={25} width={25} />
            <a href="ak.yassin@hotmail.com" className="p-text">
              ak.yassin@hotmail.com
            </a>
          </div>
          <div className="app__footer-card">
            <Image src={images.mobile} alt="phone" height={25} width={25} />
            <a href="tel: +4407572320428" className="p-text">
              +4407572320428
            </a>
          </div>
        </div>
        {!isFormSubmitted ? (
          <div className="app__footer-form app__flex">
            <div className="app__flex">
              <input
                className="p-text"
                type="text"
                placeholder="Your Name"
                name="name"
                value={name}
                onChange={handleChangeInput}
              />
            </div>
            <div className="app__flex">
              <input
                className="p-text"
                type="email"
                placeholder="Your Email"
                name="email"
                value={email}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <textarea
                className="p-text"
                placeholder="Your Message"
                value={message}
                name="message"
                onChange={handleChangeInput}
              />
            </div>
            <button type="button" className="p-text" onClick={handleSubmit}>
              {!loading ? 'Send Message' : 'Sending...'}
            </button>
          </div>
        ) : (
          <div>
            <h3 className="head-text">Thank you for getting in touch!</h3>
          </div>
        )}
      </StyledFooterWrapper>
    </StyledFooterContainer>
  )
}

export default Footer
