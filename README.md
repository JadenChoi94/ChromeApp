# 프로젝트 소개

HTML, CSS, 바닐라JS를 활용한 "Devholic" 크롬앱입니다.<br/>

<br/>

![chromeApp](https://user-images.githubusercontent.com/38060979/125185146-f2e71b00-e25d-11eb-96a4-471bda7ecd13.png)

<br/>

# 개발 인원

1명(개인 프로젝트)

<br/>
<br/>

# 개발 기간

2021.04.01 ~ 2021.04.10 (10일)

<br/>
<br/>

# 핵심 기능

- 시계
- 랜덤 배경 변경
- 사용자 이름 입력받아 출력, 수정
- todo list 생성, 삭제
- 위치
- 해당 위치에 대한 날씨

<br/>
<br/>

# 개발 환경

- 개발환경 : Windows 10 Enterprise x64
- 개발도구 : vscode, Github
- 구성환경 : HTML, CSS, Vanilla js

<br/>
<br/>

# 프로젝트 진행 중 어려웠던 점

## 사용자의 이름을 받아온 후 이름 수정하는 것

- 이름을 수정하는 아이콘을 이름을 입력할 때는 보이지 않게 하고 이름을 출력했을 때는 보이게 하는 부분이 어려웠습니다.<br/><br/>
  이유 : <i>태그 className에 `showing` 을 추가하여 css에서 `.showing{display:none}`을 해주었지만 fa-edit::before로 인해 실행되지 않음<br/><br/>
  해결방법 : <i>태그 className에 `fa-edit`을 추가 및 삭제를 해줌으로 수정 아이콘을 입력 시에는 보이지 않고 출력 시에는 보이게 만들어주었습니다.

<br/>
<br/>
