import { css } from 'styled-components'

const variables = css`
  :root {
    --dark-fogra: #08161b;
    --fogra: #0a1a20;
    --light-fogra: #14333e;
    --lightest-fogra: #1e4c5c;
    --fogra-shadow: rgba(2, 12, 27, 0.7); 
    --light-fogra-shadow: rgba(2, 12, 27, 0.5);
    --dark-platinum: #b6b6b6;
    --platinum: #c7c7c7;
    --light-platinum: #d7d7d7;
    --lightest-platinum: #e7e7e7;
    --white: #ffffeb;
    --gold: #cfac51;
    --green: ##08d9a1;
    --green-tint: rgba(100, 255, 218, 0.1);
    --blue: #48beff;



    --font-sans: 'Kanit', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --font-mono: 'DM Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`

export default variables

