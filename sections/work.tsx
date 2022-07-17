import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaGithubAlt } from 'react-icons/fa'
import { HiExternalLink } from 'react-icons/hi'
import WavyText from '../components/wavyText'
import { usePrefersReducedMotion } from '../hooks'
import { useEffect, useState } from 'react'
import { urlFor, client } from '../lib/client'

const StyledProjectsGrid = styled('ul')`
  ${({ theme }) => theme.mixins.resetList};

  a {
    position: relative;
    z-index: 1;
  }
`

const StyledProject = styled(motion.li)`
  > div {
    position: relative;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
  }

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.boxShadow};
  }

  &:not(:last-of-type) {
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }

    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;

      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }
    .project-tech-list {
      justify-content: flex-end;

      @media (max-width: 768px) {
        justify-content: flex-start;
      }

      li {
        margin: 0 0 5px 20px;

        @media (max-width: 768px) {
          margin: 0 10px 5px 0;
        }
      }
    }
    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;

      @media (max-width: 768px) {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0;
      }
    }
    .project-image {
      grid-column: 1 / 8;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }

  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;

    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }

    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }

  .project-overline {
    margin: 10px 0;
    color: var(--gold);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    font-weight: 400;
  }

  .project-title {
    color: var(--lightest-platinum);
    font-size: clamp(24px, 5vw, 28px);

    @media (min-width: 768px) {
      margin: 0 0 20px;
    }

    @media (max-width: 768px) {
      color: var(--white);

      a {
        position: static;

        &:before {
          content: '';
          display: block;
          position: absolute;
          z-index: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    }
  }

  .project-description {
    ${({ theme }) => theme.mixins.boxShadow};
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: var(--fogra);
    color: var(--light-platinum);
    font-size: var(--fz-sm);
    line-height: 1.3rem;

    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;

      &:hover {
        box-shadow: none;
      }
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }

    strong {
      color: var(--lightest-platinum);
      font-weight: normal;
    }
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;

    li {
      margin: 0 20px 5px 0;
      color: var(--light-platinum);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      margin: 10px 0;

      li {
        margin: 0 10px 5px 0;
        color: var(--lightest-platinum);
      }
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--lightest-platinum);

    a {
      ${({ theme }) => theme.mixins.flexCenter};
      padding: 10px;

      &.external {
        svg {
          width: 22px;
          height: 22px;
          margin-top: -4px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }

    .cta {
      ${({ theme }) => theme.mixins.smallButton};
      margin: 10px;
    }
  }

  .project-image {
    ${({ theme }) => theme.mixins.boxShadow};
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }

    .img {
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(90%);
      height: 100%;

      @media (max-width: 768px) {
        width: auto;
        height: 100%;
        filter: grayscale(100%) contrast(1) brightness(50%);
      }
    }

    a {
      width: 100%;
      height: 100%;
      background-color: var(--gold);
      border: 1px dashed transparent;
      border-radius: var(--border-radius);
      vertical-align: middle;

      &:hover,
      &:focus {
        background: transparent;
        outline: 0;

        &:before,
        .img {
          background: transparent;
          filter: none;
        }
      }

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        transition: var(--transition);
        background-color: var(--fogra);
        mix-blend-mode: screen;
      }
    }
  }
`

const Work = () => {
  const [work, setWork] = useState([])

  useEffect(() => {
    const query = '*[_type == "works"]'

    client.fetch(query).then((data) => {
      setWork(data)
    })
    console.log(work)
  }, [])

  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <section id="work">
      <WavyText text="Projects I've built" color />

      <StyledProjectsGrid>
        {work &&
          work.map((project, i) => {
            const { projectLink, title, tags, codeLink, imgUrl, description } =
              project

            return (
              <>
                {prefersReducedMotion ? (
                  <StyledProject key="title">
                    <motion.div
                      key={i}
                      style={{ marginBottom: '100px' }}
                      initial={{ opacity: 0 }}
                      // viewport={{ once: true }}
                      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                      transition={{
                        type: 'tween',
                        ease: 'easeInOut',
                        duration: 1.07,
                        delay: 0.05,
                      }}
                    >
                      <div className="project-content">
                        <div>
                          <p className="project-overline">Main Project</p>

                          <h3 className="project-title">
                            <a href={projectLink}>{title}</a>
                          </h3>

                          <div
                            className="project-description"
                            dangerouslySetInnerHTML={{ __html: description }}
                          />

                          {tags.length && (
                            <ul className="project-tech-list">
                              {tags.map((tag, i) => (
                                <li key={i}>{tag}</li>
                              ))}
                            </ul>
                          )}

                          <div className="project-links">
                            {codeLink && (
                              <a href={codeLink} aria-label="codeLink Link">
                                <FaGithubAlt />
                              </a>
                            )}
                            {projectLink && (
                              <a
                                href={projectLink}
                                aria-label="Project Link"
                                className="external"
                              >
                                <HiExternalLink />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="project-image">
                        <a
                          href={
                            projectLink
                              ? projectLink
                              : codeLink
                              ? codeLink
                              : '#'
                          }
                        >
                          <img
                            src={`${urlFor(imgUrl)}`}
                            alt={title}
                            className="img"
                          />
                        </a>
                      </div>
                    </motion.div>
                  </StyledProject>
                ) : (
                  <StyledProject>
                    <motion.div
                      key={i}
                      style={{ marginBottom: '100px' }}
                      initial={{ opacity: 0 }}
                      viewport={{ once: true }}
                      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                      transition={{
                        type: 'tween',
                        ease: 'easeInOut',
                        duration: 1.07,
                        delay: 0.05,
                      }}
                    >
                      <div className="project-content">
                        <div>
                          <p className="project-overline">Main Project</p>

                          <h3 className="project-title">
                            <a href={projectLink}>{title}</a>
                          </h3>

                          <div
                            className="project-description"
                            dangerouslySetInnerHTML={{ __html: description }}
                          />

                          {tags.length && (
                            <ul className="project-tech-list">
                              {tags.map((tag, i) => (
                                <li key={i}>{tag}</li>
                              ))}
                            </ul>
                          )}

                          <div className="project-links">
                            {codeLink && (
                              <a href={codeLink} aria-label="codeLink Link">
                                <FaGithubAlt />
                              </a>
                            )}
                            {project && (
                              <a
                                href={projectLink}
                                aria-label="Project Link"
                                className="external"
                              >
                                <HiExternalLink />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="project-image">
                        <a
                          href={
                            projectLink
                              ? projectLink
                              : codeLink
                              ? codeLink
                              : '#'
                          }
                        >
                          <img
                            src={`${urlFor(imgUrl)}`}
                            alt={title}
                            className="img"
                          />
                        </a>
                      </div>
                    </motion.div>
                  </StyledProject>
                )}
              </>
            )
          })}
      </StyledProjectsGrid>
    </section>
  )
}

export default Work
