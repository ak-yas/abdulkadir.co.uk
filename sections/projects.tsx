import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styled from 'styled-components'
import Image from 'next/image'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { images } from '../public'
import WavyText from '../components/wavyText'

const StyledProjectsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  .projects-grid {
    ${({ theme }) => theme.mixins.resetList};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .more-button {
    ${({ theme }) => theme.mixins.button};
    margin: 80px auto 0;
  }
`

const StyledWorkFilter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  margin: 4rem 0 2rem;

  .app__work-filter-item {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background-color: #fff;
    color: #000;
    font-weight: 800;

    cursor: pointer;
    transition: all 0.3s ease;
    margin: 0.5rem;

    &:hover {
      background-color: var(--blue);
      color: #fff;
    }

    @media screen and (min-width: 2000px) {
      padding: 1rem 2rem;
      border-radius: 0.85rem;
    }
  }

  .item-active {
    background-color: var(--blue);
    color: #fff;
  }
`
const StyledWorkPortfolio = styled(motion.li)`
  ${({ theme }) => theme.mixins.resetList};
  ${({ theme }) => theme.mixins.flexBetween};
  flex-direction: column;
  background: var(--fogra);
  margin-bottom: 30px;

  .app__work-item {
    width: 270px;
    display: flex;
    flex-direction: column;

    margin: 2rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: var(--platinum);

    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      ${({ theme }) => theme.mixins.boxShadow};
    }

    @media screen and (min-width: 2000px) {
      width: 470px;
      padding: 1.25rem;
      border-radius: 0.75rem;
    }

    @media screen and (max-width: 300px) {
      width: 100%;
      margin: 1rem;
    }
  }

  .app__work-img {
    width: 100%;

    position: relative;

    img {
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
      object-fit: cover;
    }

    .app__work-tag {
      position: absolute;

      padding: 0.5rem 1rem;
      border-radius: 10px;
      background-color: var(--dark-fogra);
      color: var(--blue);
      bottom: -10px;
    }

    @media screen and (min-width: 2000px) {
      height: 350px;
    }
  }

  .app__work-hover {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: var(--light-fogra-shadow);

    border-radius: 0.5rem;
    opacity: 0;
    transition: all 0.3s ease;

    div {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: var(--fogra);
      color: var(--platinum);

      margin: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;

      svg {
        width: 49%;
        height: 49%;
        color: var(--gold);
      }
    }
  }

  .app__work-content {
    padding: 0.5rem;
    padding-block: 1rem;
    width: 100%;
    /* position: relative; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex: 1;
    /* border: 1px solid var(--light-fogra-shadow); */
    background-color: var(--fark-fogra);
    h4 {
      margin-top: 1rem;
      line-height: 1.5;

      @media screen and (min-width: 2000px) {
        margin-top: 3rem;
      }
    }
  }
`
const projects = [
  {
    id: 'work-1',
    title: 'Modern UI/UX Website',
    description: 'A modern UI/UX website for a startup company.',
    imgUrl: images.about01,
    tags: ['UI/UX', 'Web Design', 'React JS'],
  },
  {
    id: 'work-2',
    title: 'Ewalle wallet app',
    description: 'Ewalle wallet app built with React Native.',
    imgUrl: images.about02,
    tags: ['Mobile App', 'React Native', 'UI/UX', 'Javascript'],
  },
  {
    id: 'work-3',
    title: 'Shareme Website',
    description: 'Beautiful pinterest-like website using React JS.',
    imgUrl: images.about03,
    tags: ['Web App', 'React JS', 'UI/UX', 'Javascript'],
  },
  {
    id: 'work-4',
    title: 'SpaceX',
    description: 'SpaceX CRUD API built with Node JS.',
    imgUrl: images.about04,
    tags: ['Backend App', 'Node JS'],
  },
  {
    id: 'work-5',
    title: 'Sweet Shop',
    description: 'An E-commerce app with beautiful UI/UX.',
    imgUrl: images.about04,
    tags: ['UI/UX', 'Mobile App', 'React Native', 'Javascript'],
  },
  {
    id: 'work-6',
    title: 'Community App',
    description: 'A community app built with React Native CLI.',
    imgUrl: images.about03,
    tags: ['Mobile App', 'React Native', 'UI/UX', 'Javascript'],
  },
  {
    id: 'work-7',
    title: 'Web3.0 Project',
    description: 'A web 3.0 app built with React JS & Solidity.',
    imgUrl: images.about02,
    tags: ['Web App', 'React JS', 'Solidity', 'Javascript'],
  },
  {
    id: 'work-8',
    title: 'MERN Memories',
    description: 'A MERN app built with React JS & MongoDB.',
    imgUrl: images.about01,
    tags: ['Web App', 'React JS', 'MongoDB', 'Javascript'],
  },
  {
    id: 'work-9',
    title: 'Starbucks Clone',
    description: 'A Starbucks clone built with React JS.',
    imgUrl: images.about04,
    tags: ['Web App', 'React JS', 'UI/UX', 'Javascript'],
  },
  {
    id: 'work-10',
    title: 'Blog Website',
    description: 'A blog website built with React JS.',
    imgUrl: images.about03,
    tags: ['Web App', 'React JS', 'UI/UX', 'Javascript'],
  },
]
const Projects = () => {
  const [showMore, setShowMore] = useState(false)
  const GRID_LIMIT = 6
  const firstSix = projects.slice(0, GRID_LIMIT)
  const projectsToShow = showMore ? projects : firstSix

  return (
    <StyledProjectsSection id="more">
      <h2>
        <WavyText text="Other creative projects" />
      </h2>

      <motion.ul className="projects-grid">
        {projectsToShow.map((work, index) => (
          <AnimatePresence>
            <StyledWorkPortfolio
              className="app__work-item "
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                y: { duration: 0.5 },
                duration: 1,
                delay: 0.15 * index,
                ease: 'easeIn',
              }}
              exit={{ opacity: 0, y: -80 }}
            >
              {/* image */}
              <div className="app__work-img app__flex">
                <Image
                  src={work.imgUrl}
                  alt={work.title}
                  layout="fixed"
                  objectFit="cover"
                  height={200}
                />

                {/* link overlay */}
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: 'easeInOut',
                    staggerChildren: 0.5,
                  }}
                  className="app__work-hover app__flex"
                >
                  <a href="#" target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href="#" target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>

                {/* tag */}
                <div className="app__work-tag app__flex">
                  <p className="p-text">{work.tags[0]}</p>
                </div>
              </div>

              {/* description */}
              <div className="app__work-content app__flex project-description">
                <h4 className="bold-text">{work.title}</h4>

                <p className="p-text">{work.description}</p>
              </div>
            </StyledWorkPortfolio>
          </AnimatePresence>
        ))}
      </motion.ul>

      <button className="more-button" onClick={() => setShowMore(!showMore)}>
        Show {showMore ? 'Less' : 'More'}
      </button>
    </StyledProjectsSection>
  )
}

export default Projects
