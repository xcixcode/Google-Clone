# Google-Clone

**Google 메인 페이지의 사용자 인터페이스를 HTML, CSS, JavaScript만을 사용하여 클론한 웹 개발 연습 프로젝트**  

HTML, CSS, Vanilla JavaScript만을 사용하여 Google 메인 페이지의 UI를 재현한 프로젝트입니다.  
실제 Google 검색 페이지와의 연동을 비롯해 AI 모드, 음성 검색, 렌즈 검색 및 반응형 웹 레이아웃 등 실사용 인터랙션 기능을 반영했습니다.

---

## 개요

**Google-Clone** 프로젝트는 Google 메인 페이지 UI를 클론하여 HTML, CSS, JavaScript 활용 능력을 향상시키기 위해 제작되었습니다.  
사용자가 검색어를 입력하거나 버튼을 클릭할 때 실제 Google 검색 페이지와 연동되며, AI 모드, Web Speech API 기반 음성 검색, 실시간 입력 감지, 반응형 UI 등 인터랙티브 기능 학습에 초점을 맞추었습니다.

---

## 기술 스택

- **HTML5** - 페이지 구조 구성 및 시맨틱 태그 활용 (모바일 메타 태그 및 접근성 속성 적용)  
- **CSS3** - Flexbox 레이아웃, Media Queries 기반 반응형 디자인, UI 버튼/아이콘 스타일링  
- **JavaScript (Vanilla JS)** - DOM 이벤트 처리, Web Speech API 음성 인식 및 검색 연동  

---

## 주요 기능

- Google 메인 페이지 및 모바일/태블릿 전용 탭 레이아웃 클론  
- 검색 입력창 포커스/블러 이벤트 처리 및 입력 감지  
- 키보드, 음성 검색, Google 렌즈, 검색 추가(+) 아이콘 인터랙션 구현  
- **AI 모드 버튼**: 클릭 시 Google AI 검색 결과 페이지(`udm=50`)로 이동  
- **음성 검색 기능**: Web Speech API를 활용한 음성 인식 및 자동 검색 처리  
- **Google 렌즈 연동**: 이미지 및 렌즈 검색 서비스로 연결  
- **"Google 검색" 및 "I'm Feeling Lucky" 버튼**: 검색어 유무에 따른 동적 페이지 이동(Doodle 페이지 연동 포함)  
- **Enter 키 & ESC 키 이벤트**: 검색 실행 및 검색창 포커스 해제 제어  
- **반응형 웹 디자인**: 모바일 디바이스 및 다양한 화면 크기에 최적화된 레이아웃 제공  

---

## 설치 및 실행

### GitHub Pages
https://xcixcode.github.io/Google-Clone/

### 로컬에서 실행
1. 저장소를 클론하거나 `.zip` 파일로 다운로드합니다.  
2. 로컬에서 `index.html` 파일을 웹 브라우저로 열면 바로 실행됩니다.  
3. 음성 검색 및 외부 검색 서비스 연동 기능 사용 시 인터넷 연결이 필요합니다.

---

## 안내 및 참고사항

본 프로젝트는 개인 학습 및 포트폴리오 용도로 제작되었습니다.

> ⚠️ 참고
>
> * 검색 결과는 실제 Google 검색엔진으로 이동하므로 네트워크 연결이 필요합니다.  
> * 모바일 디바이스에서의 터치 이벤트 최적화 및 가상 키보드 대응 처리가 반영되어 있습니다.  
> * 외부 자료 출처:  
>    - [Google 공식 홈페이지](https://www.google.com/)  
>    - [MDN Web Docs (SpeechRecognition API)](https://developer.mozilla.org/ko/docs/Web/API/SpeechRecognition)
