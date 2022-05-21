<div align="center">

<img src="이미지 삽입할 것임">

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
</br>
</br>

## `프로젝트 소개`

### 💫 일상 속 무심코 지나쳤던 인터넷 속 email! 사실 엄청난 나비효과를 불러오고 있었다! 🦋 @-레이저가 없애줄게! 🧝‍♂️

> 서비스 설명~

</br>
</br>

# 📄 IA

<img src="https://user-images.githubusercontent.com/68318945/169663047-b8e4db23-f782-49e5-bb73-647af9f73717.png" width="1400"/>

</br>
</br>

# 💻 기능 소개

|   기능    |   상세 기능    |    담당    | 구현 여부 |
| :-------: | :------------: | :--------: | :-------: |
| 기능 이름 | 상세 기능 설명 | 담당누구야 |    ☑️     |

</br>
</br>

# 🌱 Commit Message

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

     ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8fcb8def-3d9d-44b9-be06-298c6706aa88/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8fcb8def-3d9d-44b9-be06-298c6706aa88/Untitled.png)

     ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5b5bec33-fc07-4aff-bb96-99552ce3bfc4/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5b5bec33-fc07-4aff-bb96-99552ce3bfc4/Untitled.png)

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
디렉토리 구조 삽입
```

</br>
</br>

# 🍒 branch 전략

```
main > 각자의 브랜치
ex ) main ← feature/윤선-1, feature/체다-1, feature/나희-1, feature/나희-2
각자의 브랜치에서 pull request 하고 코드 리뷰 후 merge
```

</br>
</br>
