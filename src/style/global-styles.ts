import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

// 위에서 받은 `normalize`로 기본 css가 초기화 합니다.
const GlobalStyle = createGlobalStyle`
  ${normalize}
  
    html,
    body {
    }
    * {
        font-family: 'Noto Sans KR', 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        outline: none;
        word-break: keep-all;
        box-sizing: border-box;

        letter-spacing: -0.055em;
    }

    input, select {
      border: 0.2px solid lightslategrey;
      border-radius: 4px;
      height: 35px;
    }

    & input[type="checkbox"] {
        height: fit-content;
    }

    .error {
        border: 1px solid red !important
    }
`;

export default GlobalStyle;