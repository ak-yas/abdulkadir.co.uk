import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { images } from '../public/index'
import { usePrefersReducedMotion } from '../hooks'
import { useEffect } from 'react'

const StyledContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;

  & > div {
    padding: 0;
    ${({ theme }) => theme.mixins.flexCenter};
    width: 100%;
  }
`

const StyledHero = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  width: 100%;
  height: 100%;
  flex-direction: row;
  padding: 9rem 2rem 0rem;

  @media screen and (min-width: 2000px) {
    padding-top: 8rem;
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }

  @media screen and (max-width: 450px) {
    padding: 6rem 1rem 2rem;
  }
`

const StyledHeroInfo = styled(motion.div)`
  flex: 0.7;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;

  margin: 0rem 2rem;
  margin-bottom: 5rem;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin-right: 0rem;
  }
`
const StyledBadge = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;

  .badge-cmp,
  .tag-cmp {
    ${({ theme }) => theme.mixins.boxShadow};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    border-radius: 15px;
    flex-direction: row;
    width: auto;
  }

  .tag-cmp {
    flex-direction: column;
    margin-top: 3rem;
    p {
      width: 100%;
      text-align: right;
      font-family: var(--font-mono);
      font-size: var(--fz-sm);
      font-weight: 400;
      text-transform: uppercase;
    }
  }

  span {
    font-size: 2.5rem;

    @media screen and (min-width: 2000px) {
      font-size: 5rem;
    }
  }

  @media screen and (max-width: 1200px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`

const StyledHeroImg = styled(motion.div)`
  flex: 1;
  height: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;

  img {
    width: 100%;
    object-fit: contain;
    z-index: 1;
  }

  .overlay_circle {
    ${({ theme }) => theme.mixins.flexCenter};
    align-items: flex-end;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 1200px) {
    margin: 2rem 0;
  }
`
const StyledHeroCircles = styled(motion.div)`
  flex: 0.75;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  height: 100%;
  margin-left: 1rem;

  div {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    padding: 15px;
    background: var(--white-color);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

    img {
      width: 50%;
      height: 50%;
    }
  }

  // circles with different height & width

  div:nth-child(1) {
    width: 100px;
    height: 100px;
    padding: 20px;
  }

  div:nth-child(2) {
    padding: 30px;
    margin: 1.75rem;
    width: 150px;
    height: 150px;
  }

  div:nth-child(3) {
    width: 70px;
    height: 70px;
  }

  @media screen and (min-width: 2000px) {
    div:nth-child(2) {
      width: 400px;
      height: 400px;
    }

    div:nth-child(3) {
      width: 170px;
      height: 170px;
    }

    div:nth-child(1) {
      width: 200px;
      height: 200px;
    }
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 0;

    div {
      margin: 1rem;
    }
  }
`
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
}

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    const timeout = setTimeout(() => setIsMounted(true), 1500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <StyledContainer id="home">
      <div>
        <StyledHero>
          {prefersReducedMotion ? (
            <>
              <StyledHeroInfo>
                <StyledBadge>
                  <div className="badge-cmp">
                    <span>👋</span>
                    <div style={{ marginLeft: 20 }}>
                      <p className="p-text">Hello, I am</p>
                      <h1 className="head-text">Abdulkadir</h1>
                    </div>
                  </div>

                  <div className="tag-cmp">
                    <p className="p-text">Web Developer</p>
                    <p className="p-text">FullStack Engineer</p>
                  </div>
                </StyledBadge>
              </StyledHeroInfo>

              <StyledHeroImg>
                <Image
                  src={images.profile}
                  alt="profile_bg"
                  layout="intrinsic"
                  height={700}
                  width={700}
                />
                <div className="overlay_circle">
                  <Image
                    src={images.circle}
                    alt="profile_circle"
                    layout="intrinsic"
                    height={900}
                    width={700}
                    style={{ opacity: 0.15 }}
                  />
                </div>
              </StyledHeroImg>

              <StyledHeroCircles>
                {[images.flutter, images.redux, images.sass].map(
                  (circle, index) => (
                    <div className="circle-cmp " key={`circle-${index}`}>
                      <Image src={circle} alt="profile_bg" />
                    </div>
                  )
                )}
              </StyledHeroCircles>
            </>
          ) : (
            isMounted && (
              <>
                <StyledHeroInfo>
                  <StyledBadge>
                    <div className="badge-cmp">
                      <motion.span
                        initial={{ rotate: 0, opacity: 0, scale: 0.9 }}
                        animate={{
                          rotate: [0, 70, 0, 70, 0],
                          opacity: 1,
                          scale: 1.1,
                          transition: {
                            rotate: {
                              repeat: Infinity,
                              duration: 1.3,
                              repeatDelay: 3.5,
                            },
                            delay: 1.7,
                          },
                        }}
                      >
                        👋
                      </motion.span>
                      <div style={{ marginLeft: 20 }}>
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.7 }}
                          className="p-text"
                        >
                          Hello, I am
                        </motion.p>
                        <motion.h1
                          animate={{ y: [20, 0], opacity: [0, 1] }}
                          initial={{ opacity: 0 }}
                          transition={{ duration: 1, delay: 0.7 }}
                          className="head-text"
                        >
                          Abdulkadir
                        </motion.h1>
                        <motion.h1
                          animate={{ y: [20, 0], opacity: [0, 1] }}
                          initial={{ opacity: 0 }}
                          transition={{ duration: 1, delay: 0.7 }}
                          className="head-text"
                        >
                          Yassin
                        </motion.h1>
                      </div>
                    </div>

                    <motion.div
                      whileInView={{ y: [10, 0], opacity: [0, 1] }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="tag-cmp"
                    >
                      <p className="p-text">Web Developer</p>
                      <p className="p-text">FullStack Engineer</p>
                    </motion.div>
                  </StyledBadge>
                </StyledHeroInfo>

                <StyledHeroImg animate={{ opacity: [0, 1] }}>
                  <Image
                    src={images.profile}
                    alt="profile_bg"
                    layout="intrinsic"
                    height={700}
                    width={700}
                  />
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="overlay_circle"
                  >
                    <Image
                      src={images.circle}
                      alt="profile_circle"
                      layout="intrinsic"
                      height={1000}
                      width={700}
                      style={{ opacity: 0.15 }}
                    />
                  </motion.div>
                </StyledHeroImg>

                <StyledHeroCircles
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: { duration: 1.3, delay: 0.7 },
                  }}
                >
                  {[images.flutter, images.redux, images.sass].map(
                    (circle, index) => (
                      <div className="circle-cmp " key={`circle-${index}`}>
                        <Image src={circle} alt="profile_bg" />
                      </div>
                    )
                  )}
                </StyledHeroCircles>
              </>
            )
          )}
        </StyledHero>
      </div>
    </StyledContainer>
  )
}

export default Hero
