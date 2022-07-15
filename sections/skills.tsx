import styled from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { images } from '../public'
import WavyText from '../components/wavyText'

const StyledSkillsSection = styled.div`
  margin: 0 auto;
  padding: 100px 0;
  max-width: 1600px;
  @media (max-width: 768px) {
    padding: 80px 0;
  }
  @media (max-width: 480px) {
    padding: 60px 0;
  }

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
    width: 80%;
    margin: 0 auto;
  }
`

const StyleContainer = styled.div`
  width: 80%;
  margin-top: 3rem;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  ${({ theme }) => theme.mixins.flexCenter};

  @media screen and (max-width: 900px) {
    width: 100%;
    flex-direction: column;
  }

  .app__skills-list {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;

    margin-right: 5rem;

    @media screen and (max-width: 900px) {
      margin-right: 0;
      justify-content: center;
      align-items: center;
    }
  }

  .app__skills-item {
    flex-direction: column;
    text-align: center;

    margin: 1rem;

    transition: all 0.3s ease-in-out;

    div {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      background-color: var(--lightest-platinum);

      img {
        width: 50%;
        height: 50%;
      }

      &:hover {
        box-shadow: 0px 0px 25px var(--lightest-fogra);
      }

      @media screen and (min-width: 2000px) {
        width: 150px;
        height: 150px;
      }

      @media screen and (max-width: 450px) {
        width: 70px;
        height: 70px;
      }
    }

    p {
      font-weight: 500;
      margin-top: 0.5rem;
    }

    @media screen and (min-width: 2000px) {
      margin: 1rem 2rem;

      p {
        margin-top: 1rem;
      }
    }
  }

  .app__skills-exp {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    @media screen and (max-width: 900px) {
      margin-top: 2rem;
    }
  }

  .app__skills-exp-item {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 1rem 0;
  }

  .app__skills-exp-works {
    flex: 1;

    .app__skills-exp-work {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin-bottom: 1rem;
      cursor: pointer;

      h4 {
        font-weight: 500;
      }

      p {
        font-weight: 400;
        color: var(--gold);
        margin-top: 5px;
      }
    }
  }

  .app__skills-exp-year {
    margin-right: 3rem;

    p {
      font-weight: 800;
      color: var(--blue);
    }

    @media screen and (max-width: 450px) {
      margin-right: 1rem;
    }
  }
`

const Skills = () => {
  const skills = [
    {
      name: 'HTML5',
      icon: images.html,
    },
    {
      name: 'CSS3',
      icon: images.css,
    },
    {
      name: 'Javascript',
      icon: images.javascript,
    },
    {
      name: 'React JS',
      icon: images.react,
    },
    {
      name: 'Redux',
      icon: images.redux,
    },
    {
      name: 'Node JS',
      icon: images.node,
    },
    {
      name: 'Sass',
      icon: images.sass,
    },
    {
      name: 'Figma',
      icon: images.figma,
    },
    {
      name: 'Git',
      icon: images.git,
    },
    {
      name: 'React Native',
      icon: images.react,
    },
  ]

  const experiences = [
    {
      year: 2022,
      works: [
        {
          name: 'Senior Product Designer',
          company: 'Amazon Inc.',
        },
      ],
    },
    {
      year: 2021,
      works: [
        {
          name: 'UI/UX Web Designer',
          company: 'Google',
        },
        {
          name: 'Internship Graphic Designer',
          company: 'Invision',
        },
      ],
    },
    {
      year: 2020,
      works: [
        {
          name: 'Senior WP Frontend Developer',
          company: 'ENVATO',
        },
        {
          name: 'IOS Developer',
          company: 'Zara',
        },
        {
          name: 'Internship Frontend Developer',
          company: 'Apple',
        },
      ],
    },
  ]

  return (
    <StyledSkillsSection id="skills">
      <h2>
        <WavyText text="Skills & Experiences" />
      </h2>

      <StyleContainer>
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: 'var(--lightest-platinum)' }}
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  height={85}
                  width={85}
                />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                    data-for={work.name}
                    key={work.name}
                  >
                    <h4 className="bold-text">{work.name}</h4>
                    <p className="p-text">{work.company}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </StyleContainer>
    </StyledSkillsSection>
  )
}

export default Skills
