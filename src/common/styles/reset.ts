import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
      box-sizing: border-box;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
    ol, ul, li {
      list-style: none;
    }
    a {
      &:link,
      &:visited,
      &:hover,
      &:active {
        color: inherit;
        text-decoration: inherit;
      }
    }

    input,
    select,
    button {
      -webkit-appearance: none;
      background: none;
      border: none;
      font-size: inherit;
      color: inherit;
      &:focus {
        outline: none;
      }
      &:disabled {
        cursor: not-allowed;
      }
    }
    a, button {
      cursor: pointer;
    }
    
    pre {
      white-space: pre-line;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(359deg);
      }
    }
    @keyframes glow {
      0%,
      100% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
    }
    @font-face {
      font-family: 'Nunito Sans';
      font-style: italic;
      font-weight: 400;
      src: url('https://fonts.gstatic.com/s/nunitosans/v8/pe0oMImSLYBIv1o4X1M8cce4E9lKcw.ttf')
        format('truetype');
    }

    @font-face {
      font-family: 'Nunito Sans';
      font-style: normal;
      font-weight: 400;
      src: url('https://fonts.gstatic.com/s/nunitosans/v8/pe0qMImSLYBIv1o4X1M8cce9I94.ttf')
        format('truetype');
    }
    @font-face {
      font-family: 'Nunito Sans';
      font-style: normal;
      font-weight: 800;
      src: url('https://fonts.gstatic.com/s/nunitosans/v8/pe03MImSLYBIv1o4X1M8cc8aBc5tU1Q.ttf')
        format('truetype');
    }
    .force-wrap {
      word-wrap: break-word;
      word-break: break-all;
      -ms-word-break: break-all;
      word-break: break-word;
      hyphens: auto;
    }
.type-light {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 300;
}
.type-bold {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 800;
}
.type-italic {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-style: italic;
}
* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}
html,
button,
input,
textarea,
select {
  outline: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}



input[type='text'],
input[type='email'],
input[type='password'],
textarea {
  font-size: 14px;
  line-height: 20px;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-style: 400;
  padding: 0.75rem 0;
  line-height: 1.5rem !important;
  border: none;
  border-radius: 0;
  box-sizing: border-box;
  color: #333;
  outline: none;
}
input[type='text'] ::placeholder,
input[type='email'] ::placeholder,
input[type='password'] ::placeholder,
textarea ::placeholder {
  color: #778b91;
}
input[type='text'][disabled],
input[type='email'][disabled],
input[type='password'][disabled],
textarea[disabled] {
  opacity: 0.5;
}
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 1000px white inset;
}
.checkbox {
  display: inline-block;
  height: 3rem;
  position: relative;
  vertical-align: middle;
  width: 44px;
}
.checkbox input[type='checkbox'] {
  font-size: 1em;
  visibility: hidden;
}
.checkbox input[type='checkbox'] + span:before {
  position: absolute;
  top: 50%;
  right: auto;
  bottom: auto;
  left: 50%;
  width: 0.85em;
  height: 0.85em;
  transform: translate3d(-50%, -50%, 0);
  background: transparent;
  box-shadow: #2cc5d2 0 0 0 1px inset;
  content: '';
  display: block;
}
.checkbox input[type='checkbox']:checked + span:before {
  font-size: 16px;
  line-height: 24px;
  box-shadow: none;
  color: #2cc5d2;
  margin-top: -1px;
  font-family: 'percolate';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: '\e65e';
}
`;

export default GlobalStyle;

// console.log(reset[0]);

// /* http://meyerweb.com/eric/tools/css/reset/
//    v5.0.1 | 20191019
//    License: none (public domain)
// */

// html, body, div, span, applet, object, iframe,
// h1, h2, h3, h4, h5, h6, p, blockquote, pre,
// a, abbr, acronym, address, big, cite, code,
// del, dfn, em, img, ins, kbd, q, s, samp,
// small, strike, strong, sub, sup, tt, var,
// b, u, i, center,
// dl, dt, dd, menu, ol, ul, li,
// fieldset, form, label, legend,
// table, caption, tbody, tfoot, thead, tr, th, td,
// article, aside, canvas, details, embed,
// figure, figcaption, footer, header, hgroup,
// main, menu, nav, output, ruby, section, summary,
// time, mark, audio, video {
//   margin: 0;
//   padding: 0;
//   border: 0;
//   font-size: 100%;
//   font: inherit;
//   vertical-align: baseline;
// }
// /* HTML5 display-role reset for older browsers */
// article, aside, details, figcaption, figure,
// footer, header, hgroup, main, menu, nav, section {
//   display: block;
// }
// /* HTML5 hidden-attribute fix for newer browsers */
// *[hidden] {
//     display: none;
// }
// body {
//   line-height: 1;
// }
// menu, ol, ul {
//   list-style: none;
// }
// blockquote, q {
//   quotes: none;
// }
// blockquote:before, blockquote:after,
// q:before, q:after {
//   content: '';
//   content: none;
// }
// table {
//   border-collapse: collapse;
//   border-spacing: 0;
// }
