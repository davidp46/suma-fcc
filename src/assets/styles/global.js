import { createGlobalStyle } from 'styled-components';
import DMSans_Regular from '../fonts/DMSans-Regular.ttf';
import DMSans_Medium from '../fonts/DMSans-Medium.ttf';
import DMSans_Bold from '../fonts/DMSans-Bold.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "DM Sans";
    src: url(${DMSans_Regular}) format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
      font-family: "DM Sans";
      src: url(${DMSans_Medium}) format("truetype");
      font-weight: 500;
      font-style: normal;
  }

  @font-face {
      font-family: "DM Sans";
      src: url(${DMSans_Bold}) format("truetype");
      font-weight: 700;
      font-style: normal;
  }
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'DM Sans', system-ui;
  }

  :root {
    --primary-color-1: #C6F6D5;
    --primary-color-2: #9ae6b4;
    --primary-color-3: #68d391;
    --primary-color-4: #48bb78;
    --primary-color-5: #38a169;
    --primary-color-6: #2f855a;
    --primary-color-7: #276749;

    --gray-color-1: #edf2f7;
    --gray-color-2: #e2e8f0;
    --gray-color-3: #cbd5e0;
    --gray-color-4: #a0aec0;
    --gray-color-5: #718096;
    --gray-color-6: #2d3748;
    --gray-color-7: #1a202c;

    --white-color: #F2F4F5;
    --error-color: #F42C74;

    --text-color: var(--gray-color-7);
    --bg-color: var(--white-color);

    --navbar-padding: 4rem;
    --margin-left-link: 2.5rem;
    --max-width-view: 960px;

    --card-color: #fff;
    --shadow-color: 26, 32, 44;
    --hero-gradient-color-1: 26, 32, 44;
    --hero-gradient-color-2: 26, 32, 44;
    --height-hero: 380px;
  }

  body {
    color: var(--text-color);
    background-color: var(--bg-color);
    width: 100%;
  }

  h1 {
    font-size: 36px;
    font-weight: 700;
  }

  h2 {
    font-size: 30px;
    font-weight: 700;
  }

  h3 {
    font-size: 24px;
    font-weight: 700;
  }

  h4 {
    font-size: 20px;
    font-weight: 500;
  }

  h5 {
    font-size: 18px;
    font-weight: 500;
  }

  a {
    color: var(--text-color);
    text-decoration: none;
  }
`;
