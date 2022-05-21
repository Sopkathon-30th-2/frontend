<div align="center">

<img src="https://user-images.githubusercontent.com/68318945/169671624-301a0650-82b1-43ff-93a9-2dfb369f0a92.png">

##

`30th SOPKATHON` 무박 2일 해커톤
</br>
</br>
📆 2022.05.21 ~ 2022.05.22
</br>
</br>

### 🌏@-레이저를 소개합니다💥

| <img src="https://user-images.githubusercontent.com/68318945/169662751-a174abcf-8cda-4cbb-bb30-57b87f0560cb.jpeg" height="300" /> | <img src="https://user-images.githubusercontent.com/68318945/169662748-6d6c637d-548e-4171-aedc-e19a2f6fea2d.jpeg" height="300" /> | <img src="https://user-images.githubusercontent.com/68318945/169662756-32774101-9dc8-42ed-952b-986989d6a6d4.jpeg" height="300" /> |
| :-------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------: |
|                                                              김남준                                                               |                                                              박나희                                                               |                                                              최다인                                                               |
|                                          [@NamjunKim12](https://github.com/NamjunKim12)                                           |                                           [@Nahee-Park](https://github.com/Nahee-Park)                                            |                                             [@Chedda98](https://github.com/Chedda98)                                              |

---

</div>

</br>
</br>

## `프로젝트 소개`

### 💫 일상 속 무심코 쌓여온 인터넷 속 email! `@-레이저`가 없애줄게! 🧝‍♂️

> 메일함을 정리하며, 인터넷 일상에서 환경보호 손쉽게 시작하기

</br>

# 📄 IA

<img src="https://user-images.githubusercontent.com/68318945/169663047-b8e4db23-f782-49e5-bb73-647af9f73717.png" width="1400"/>

</br>
</br>

# 💻 기능 소개

|        기능        |                상세 기능                 |          담당          | 구현 여부 |
| :----------------: | :--------------------------------------: | :--------------------: | :-------: |
|   메인 홈페이지    |         스플래시 이미지 보여주기         |         김남준         |   ☑️        |
|  구글 소셜 로그인  |          구글 소셜 로그인 기능           | 김남준, 박나희, 최다인 |    ☑️     |
| 메일함 현황 페이지 | 현재 읽지 않은 메일 갯수 보여주는 페이지 |         박나희         |         ☑️  |
|       로딩창       |     메일을 지우는 동안의 로딩 페이지     | 김남준, 박나희, 최다인 |       ☑️    |
|      캘린더뷰      |      메일을 지우는 기간의 캘린더뷰       |         박나희         |     ☑️      |
|    결과 페이지     |     결과 노출 페이지, 공유하기 버튼      |         최다인         |       ☑️    |

</br>
</br>

# 📱 개발 환경 및 라이브러리

</br>

| 라이브러리              | 목적               |
| :---------------------- | :----------------- |
| Axios                   | 서버 통신          |
| React                   | 사용자 인터페이스  |
| styled-components       | 코드 레이아웃 작성 |
| react-calendar          | 캘린더뷰(커스텀)   |
| react-copy-to-clipboard | 클립보드           |
| react-google-login      | 구글 소셜 로그인   |

</br>
</br>

# 🔗 Dependecy

```
  "dependencies": {
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^13.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.27.2",
    "hoist-non-react-statics": "^3.3.2",
    "moment": "^2.29.3",
    "react": "^18.1.0",
    "react-copy-to-clipboard": "^5.1.0",
    "react-calendar": "^3.7.0",
    "react-dom": "^18.1.0",
    "react-google-login": "^5.2.2",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "styled-components": "^5.3.5",
    "styled-reset": "^4.4.0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^5.25.0",
    "@typescript-eslint/parser": "^5.25.0",
    "babel-eslint": "^10.1.0",
    "eslint": "^8.15.0",
    "eslint-config-airbnb": "^19.0.4",
    "eslint-config-prettier": "^8.5.0",
    "eslint-import-resolver-typescript": "^2.7.1",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-jsx-a11y": "^6.5.1",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-react": "^7.30.0",
    "eslint-plugin-react-hooks": "^4.5.0",
    "prettier": "^2.6.2"
  }
}
```

# 🌱 Commit Convention

</br>

> 우리의 브랜치는 꼼꼼해!

type(타입): title(제목)

제목은 최대 50글자까지만 입력

body(본문, 생략 가능)

본문은 한 줄에 최대 72글자까지만 입력

types = {
init: 브랜치 첫 커밋
feat: 새로운 기능에 대한 커밋
fix: 버그 수정에 대한 커밋
build: 빌드 관련 파일 수정에 대한 커밋
chore: 그 외 자잘한 수정에 대한 커밋
ci: CI 관련 설정 수정에 대한 커밋
docs: 문서 수정에 대한 커밋
style: 코드 스타일 혹은 포맷 등에 관한 커밋
refactor: 코드 리팩토링에 대한 커밋
}

</br>
</br>

# 🛠 Coding Convention

</br>

## 2️⃣ 컨벤션 설정

- **⚙ eslint & prettier 사용하기 위한 설정**

  1. **vscode extension에서 eslint + prettier 설치**
     ![eslint](https://user-images.githubusercontent.com/68318945/169663338-5e6f6431-15a0-45c7-8337-c5fd2b82d975.png)
     ![prettier](https://user-images.githubusercontent.com/68318945/169663336-7ff5c5f9-aa0f-4b0b-9dab-b6b492c95cb0.png)

  2. setting.json (`command + ,` or `ctrl + ,`) 수정하기

     ```json
     "editor.formatOnSave": true,
     ```

- **💯 eslint 설정**
  ```json
  {
    "extends": ["react-app", "plugin:prettier/recommended"],
    "plugins": ["prettier"],
    "rules": {
      "prettier/prettier": [
        "error",
        {
          "endOfLine": "auto"
        }
      ]
    }
  }
  ```
- **🌸 prettier 설정**
  ```jsx
  module.exports = {
    printWidth: 100,
    tabWidth: 2,
    singleQuote: true,
    trailingComma: 'all',
    bracketSpacing: true,
    semi: true,
    useTabs: false,
    arrowParens: 'avoid',
    endOfLine: 'lf',
  };
  ```
- **👻 패키지 매니저 설정**

  1. **yarn** 사용하기

     [YARN에 대한 사용법 및 설치](https://velog.io/@ddusi/Linux-4)

  2. **패키지 다운로드 받을 때 —save 꼭 작성하기**

     **Ex) yarn add react-router-dom —save**

- **🍞 컴포넌트 및 함수 이름 컨벤션**
    <aside>
    🐥 **컴포넌트 생성 방식**
    
    - 컴포넌트 생성 시에만 function 키워드 사용 `function Main (){}` ~~const Main = () ⇒ {}~~
    - 그 외 함수 생성 시에는 화살표 함수 사용
    </aside>
    
    <aside>
    🐳  **함수 이름 컨벤션**
    
    - const handle이벤트명 = () ⇒ {}
    - handleClick, handleSubmit, ...
    </aside>

</br>
</br>

# 📂 Directory Structure

</br>

```
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
│   └── _redirects
└── src
    ├── App.jsx
    ├── index.jsx
    ├── assets
    │   ├── font
    │   ├── icon
    │   └── image
    ├── components
    │   ├── GetDataTest.jsx
    │   └── common
    │       ├── ErrorBoundary.jsx
    │       ├── ErrorComponent.jsx
        │   ├── Header.jsx
    │       └── Loading.jsx
    ├── constants
    ├── cores
    │   └── router.jsx
    ├── hooks
    ├── index.jsx
    ├── lib
    │   └── index.js
    ├── pages
    │   ├── CleanMailPage.jsx
    │   ├── Mainpage.jsx
    │   ├── ResultPage.jsx
    │   └── Sample.jsx
    ├── styles
    │   ├── globalStyle.jsx
    │   └── theme.jsx
    └── utils
    │   ├── app.js
        └── wrapPromise.js
```

</br>
</br>

# 🍒 branch 전략

```
main > 각자의 브랜치
ex ) main ← feature/남준-1, feature/체다-1, feature/나희-1, feature/나희-2
각자의 브랜치에서 pull request 하고 코드 리뷰 후 merge
```

</br>
</br>
