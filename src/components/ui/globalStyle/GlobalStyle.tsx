import { createGlobalStyle } from 'styled-components';
import BMDOHYEON from '../../../assets/fonts/BMDOHYEON.woff';
import NotoSansLight from '../../../assets/fonts/NotoSans-Light.woff';
import NotoSansRegular from '../../../assets/fonts/NotoSans-Regular.woff';
import NotoSansMedium from '../../../assets/fonts/NotoSans-Medium.woff';
import NotoSansBold from '../../../assets/fonts/NotoSans-Bold.woff';

const GlobalStyle = createGlobalStyle`
  /* reset.css */

    @font-face {
    font-family: 'BMDOHYEON';
    font-weight: normal;
    src: url('${BMDOHYEON}') format('woff');
    }

    @font-face {
    font-family: 'NotoSans-Light';
    font-weight: 300;
    src: url('${NotoSansLight}') format('woff');
    }

    @font-face {
    font-family: 'NotoSans-Regular';
    font-weight: 400;
    src: url('${NotoSansRegular}') format('woff');
    }

    @font-face {
    font-family: 'NotoSans-Medium';
    font-weight: 500;
    src: url('${NotoSansMedium}') format('woff');
    }

    @font-face {
    font-family: 'NotoSans-Bold';
    font-weight: 600;
    src: url('${NotoSansBold}') format('woff');
    }

/* 모든 요소의 패딩, 마진, 테두리 초기화 */
* {
  font-family: 'NotoSans-Medium';
  font-weight: 500;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 제목 요소의 기본 스타일 초기화 */
h1, h2, h3, h4, h5, h6 {
  font-size: 1em;
  font-weight: normal;
}

/* 리스트 요소의 기본 스타일 초기화 */
ul, ol {
  list-style: none;
}

/* 링크 요소의 기본 스타일 초기화 */
a {
  text-decoration: none;
  color: inherit;
}

/* 버튼 요소의 기본 스타일 초기화 */
button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

input {
    border: none;
    outline: none;
    background-color: transparent;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
  }
`;

export default GlobalStyle;
