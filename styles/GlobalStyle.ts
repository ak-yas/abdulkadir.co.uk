import { createGlobalStyle } from 'styled-components'
import { ThemeInterface } from '../theme'
import variables from './variables'

const GlobalStyle = createGlobalStyle<{theme: ThemeInterface}>`
  ${variables};
  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  ::selection {
    background-color: var(--lightest-fogra);
    color: var(--lightest-platinum);
  }
  /* Provide basic, default focus styles.*/
  :focus {
    outline: 2px dashed var(--gold);
    outline-offset: 3px;
  }
  /*
    Remove default focus styles for mouse users ONLY if
    :focus-visible is supported on this platform.
  */
  :focus:not(:focus-visible) {
    outline: none;
    outline-offset: 0px;
  }
  /*
    Optionally: If :focus-visible is supported on this
    platform, provide enhanced focus styles for keyboard
    focus.
  */
  :focus-visible {
    outline: 2px dashed var(--gold);
    outline-offset: 3px;
  }
  /* Scrollbar Styles */
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--dark-platinum) var(--fogra);
  }
  body::-webkit-scrollbar {
    width: 10px;
  }
  body::-webkit-scrollbar-track {
    background: var(--fogra);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--gold);
    border: 3px solid var(--fogra);
    border-radius: 10px;
  }
  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--fogra);
    color: var(--platinum);
    font-family: var(--font-sans);
    font-size: var(--fz-xl);
    line-height: 1.3;
    min-width: 270px;
    @media (max-width: 480px) {
      font-size: var(--fz-lg);
    }
    &.hidden {
      overflow: hidden;
    }
    &.blur {
      overflow: hidden;
      header {
        background-color: transparent;
      }
      #content > * {
        filter: blur(5px) brightness(0.7);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      }
    }
  }
  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }
  main{
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 200px 150px;
    @media (max-width: 1080px) {
      padding: 200px 100px;
    }
    @media (max-width: 768px) {
      padding: 150px 50px;
    }
    @media (max-width: 480px) {
      padding: 125px 25px;
    }
    &.fillHeight {
      padding: 0 150px;
      @media (max-width: 1080px) {
        padding: 0 100px;
      }
      @media (max-width: 768px) {
        padding: 0 50px;
      }
      @media (max-width: 480px) {
        padding: 0 25px;
      }
    }
  }
  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;
    @media (max-width: 768px) {
      padding: 80px 0;
    }
    @media (max-width: 480px) {
      padding: 60px 0;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0;
    font-weight: 600;
    color: var(--lightest-platinum);
    line-height: 1.1;
  }
  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
  }
  .medium-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 60px);
  }
  .numbered-heading {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0 40px;
    width: 100%;
    font-size: clamp(26px, 5vw, var(--fz-heading));
    white-space: nowrap;
    &:before {
      position: relative;
      bottom: 4px;
      counter-increment: section;
      content: '0' counter(section) '.';
      margin-right: 10px;
      color: var(--gold);
      font-family: var(--font-mono);
      font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
      font-weight: 400;
      @media (max-width: 480px) {
        margin-bottom: -3px;
        margin-right: 5px;
      }
    }
  }
  img,
  svg {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }
  img[alt=""],
  img:not([alt]) {
    filter: blur(5px);
  }
  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
    &.feather {
      fill: none;
    }
  }
  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    &:hover,
    &:focus {
      color: var(--gold);
    }
    &.inline-link {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }
  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
  }
  input, textarea {
    border-radius: 0;
    outline: 0;
    &:focus {
      outline: 0;
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }
  p {
    margin: 0 0 15px 0;
    &:last-child,
    &:last-of-type {
      margin: 0;
    }
    & > a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
    & > code {
      background-color: var(--light-fogra);
      color: var(--white);
      font-size: var(--fz-sm);
      border-radius: var(--border-radius);
      padding: 0.3em 0.5em;
    }
  }
  ul {
    &.fancy-list {
      padding: 0;
      margin: 0;
      list-style: none;
      font-size: var(--fz-lg);
      li {
        position: relative;
        padding-left: 30px;
        margin-bottom: 10px;
        &:before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--gold);
        }
      }
    }
  }
  blockquote {
    border-left-color: var(--gold);
    border-left-style: solid;
    border-left-width: 1px;
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 1.5rem;
    p {
      font-style: italic;
      font-size: 24px;
    }
  }
  hr {
    background-color: var(--lightest-fogra);
    height: 1px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    margin: 1rem;
  }
  code {
    font-family: var(--font-mono);
    font-size: var(--fz-md);
  }
  .skip-to-content {
    ${({ theme }) => theme.mixins.button};
    position: absolute;
    top: auto;
    left: -999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
    z-index: -99;
    &:focus,
    &:active {
      background-color: var(--gold);
      color: var(--fogra);
      top: 0;
      left: 0;
      width: auto;
      height: auto;
      overflow: auto;
      z-index: 99;
    }
  }
  #logo {
    color: var(--gold);
  }
  .overline {
    color: var(--gold);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;
  }
  .subtitle {
    color: var(--gold);
    margin: 0 0 20px 0;
    font-size: var(--fz-md);
    font-family: var(--font-mono);
    font-weight: 400;
    line-height: 1.5;
    @media (max-width: 1080px) {
      font-size: var(--fz-sm);
    }
    @media (max-width: 768px) {
      font-size: var(--fz-xs);
    }
    a {
      ${({ theme }) => theme.mixins.inlineLink};
      line-height: 1.5;
    }
  }
  .breadcrumb {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    color: var(--gold);
    .arrow {
      display: block;
      margin-right: 10px;
      padding-top: 4px;
    }
    a {
      ${({ theme }) => theme.mixins.inlineLink};
      font-family: var(--font-mono);
      font-size: var(--fz-sm);
      font-weight: 600;
      line-height: 1.5;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
  }
  
  .app {
    background-color: var(--primary-color);
    font-family: var(--font-base);
}

.app__whitebg {
    background-color: var(--fogra);
}

.app__primarybg {
    background-color: var(--primary-color);
}

.app__container {
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: row;
}

.app__flex {
    display: flex;
    justify-content: center;
    align-items: center;
}

.app__wrapper {
    flex: 1;
    width: 100%;
    flex-direction: column;
    padding: 4rem 2rem;
    background-color: var(--fogra);

    @media screen and (max-width: 450px) {
        padding: 4rem 1rem 2rem;
    }
}

.copyright {
    width: 100%;
    padding: 2rem 0 0;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    p {
        text-transform: uppercase;
        color: var(--black-color);
    }
}

.head-text {
    font-size: 2.75rem;
    font-weight: 800;
    text-align: center;
    color: var(--black-color);
    text-transform: capitalize;

    span {
        color: var(--secondary-color);
    }

    @media screen and (min-width: 2000px) {
        font-size: 4rem;
    }

    @media screen and (max-width: 450px) {
        font-size: 2rem;
    }
}

.p-text {
    font-size: 0.8rem;
    text-align: left;
    color: var(--gray-color);
    line-height: 1.5;

    @media screen and (min-width: 2000px) {
        font-size: 1.75rem;
    }
}

.bold-text {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--black-color);
    text-align: left;

    @media screen and (min-width: 2000px) {
        font-size: 2rem;
    }

    @media screen and (max-width: 450px) {
        font-size: 0.9rem;
    }
}

.app__social {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;

    padding: 1rem;

    div {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: var(--white-color);
        margin: 0.25rem 0;
        border: 1px solid var(--lightGray-color);

        display: flex;
        justify-content: center;
        align-items: center;

        transition: all 0.3s ease-in-out;

        svg {
            width: 15px;
            height: 15px;
            color: var(--gray-color);
        }

        &:hover {
            background-color: var(--secondary-color);
            border-color: var(--secondary-color);

            svg {
                color: var(--white-color);
            }
        }

        @media screen and (min-width: 2000px) {
            width: 70px;
            height: 70px;

            margin: 0.5rem 0;

            svg {
                width: 30px;
                height: 30px;
            }
        }
    }
}

@media screen and (max-width: 500px) {
   
    .app__social {
        display: none;
    }

    .copyright {
        padding: 2rem;
    }
}
#home {
  position: relative;
  background: url("../assets/bgIMG.png");
  background-size: cover;
  background-position: center;
  background-repeat: repeat;
 
  // disable the default padding styles
  .app__wrapper {
    padding: 0;

    .copyright {
      display: none;
    }
  }
}

.about {
  flex: 1;
  width: 100%;
  flex-direction: column;
}

#projectsX {
  flex: 1;
  width: 100%;
  flex-direction: column;
  padding: 200px 150px;

    // disable the default padding styles
    .app__wrapper {
    padding: 0;

    .copyright {
      display: none;
    }
  }
    @media (max-width: 1080px) {
      padding: 200px 50px;
    }
    @media (max-width: 768px) {
      padding: 150px 50px;
    }
    @media (max-width: 480px) {
      padding: 125px 25px;
    }
}

.works {
  flex: 1;
  width: 100%;
  flex-direction: column;
}

.skills {
  flex: 1;
  width: 100%;
  flex-direction: column;
}

.app__navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 1rem;

    .app__navigation-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #cbcbcb;
        margin: 0.5rem;

        transition: background-color 0.2s ease-in-out;

        &:hover {
            background-color: var(--secondary-color);
        }

        @media screen and (min-width: 2000px) {
            width: 20px;
            height: 20px;
        }
    }
}
`

export default GlobalStyle