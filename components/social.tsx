import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'
import { AiFillCodepenCircle } from 'react-icons/ai'
import Side from './side'

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 10px;
  min-height: 100vh;

  &:after {
    content: '';
    display: block;
    width: 2px;
    height: 50px;
    margin: 0 auto;
    background-color: var(--gold);
    opacity: 0.1;
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      padding: 10px;

      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  transition: {
    staggerChildren: 0.1,
  },
}

const children = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, y: 0 },
  transition: {
    duration: 1,
    delay: 1,
  },
}

const Social = ({ isHome }) => (
  <Side isHome={isHome} orientation="left">
    <StyledSocialList>
      <li>
        <a>
          <BsGithub />
        </a>
      </li>
      <li>
        <a>
          <BsLinkedin />
        </a>
      </li>
      <li>
        <a>
          <BsTwitter />
        </a>
      </li>
      <li>
        <a>
          <AiFillCodepenCircle />
        </a>
      </li>
    </StyledSocialList>
  </Side>
)

export default Social
