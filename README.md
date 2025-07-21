# Google-Clone

**Google 메인 페이지의 사용자 인터페이스를 HTML, CSS, JavaScript만을 사용하여 클론한 웹 개발 연습 프로젝트**

---

## 📌 프로젝트 개요

이 프로젝트는 Google의 메인 페이지 UI를 클론하여 HTML, CSS, JavaScript의 활용 능력을 향상시키기 위해 제작되었습니다. jQuery를 사용해 동적인 UI 동작을 구현했으며, 다크/라이트 모드 전환, 검색어 입력 처리, 버튼 클릭 시 이벤트 등 실사용 기능을 일부 반영했습니다.

---

## ⚙️ 주요 기능

- ✅ Google 메인 페이지 레이아웃 클론
- ✅ 검색 입력창 및 버튼 인터랙션 구현
- ✅ 키보드/마이크/이미지 검색 아이콘 포함
- ✅ "Google 검색" 및 "I'm Feeling Lucky" 버튼 포함
- ✅ 실시간 검색어 입력 감지 및 clear 버튼 표시
- ✅ Enter 키 입력 시 실제 Google 검색 페이지로 이동
- ✅ 다크/라이트 모드 전환 (버튼 클릭으로 색상 및 로고 전환)

---

## 🛠 사용 기술

- **HTML5**: 마크업 구조 구성
- **CSS3**: 반응형 디자인, 아이콘 및 버튼 스타일링
- **JavaScript (Vanilla + jQuery)**: UI 동작 및 이벤트 처리
- **FontAwesome**: 아이콘 적용

---

## 📁 파일 구조

- `index.html` – 메인 HTML 파일
- `style.css` – 페이지 스타일 정의
- `colors.js` – 다크/라이트 모드 색상 처리용 스크립트
- `events.js` – 이벤트 처리용 JavaScript
- `images/`
  - `logo.png` – 기본 Google 로고
  - `logo-white.png` – 다크 모드용 Google 로고
  - `profile.png` – 프로필 이미지

---

## 🚀 실행 방법

1. 이 저장소를 클론하거나 `.zip`으로 다운로드합니다.
2. 로컬에서 `index.html` 파일을 브라우저로 열면 바로 실행됩니다.
3. 인터넷 연결이 필요합니다 (jQuery와 FontAwesome CDN 사용).

```bash
git clone https://github.com/xcixcode/google-clone.git
cd google-clone
open index.html  # 또는 브라우저에서 직접 열기
```

---

## ⚠ 주의사항

- 검색 결과는 실제 구글로 이동하므로 네트워크 연결이 필요합니다.
- 로컬 테스트 시 images 폴더 내 이미지들이 존재해야 UI가 정상적으로 보입니다.
- 모바일 환경에서 일부 UI가 완벽히 대응되지 않을 수 있습니다.

---

## 📌 향후 개선 계획

- 모바일 반응형 레이아웃 완성도 향상
- 이미지 검색 아이콘 기능 추가
- 다국어 지원 (영문 README, UI 텍스트)
- Google 앱 버튼 클릭 시 실제 앱 목록 창 구현 (모달 등)
- 검색어 자동완성 기능 실험적 추가

---

## 🙏 참고 및 출처

- Google 공식 홈페이지: https://www.google.com/
- jQuery 공식 문서:
https://api.jquery.com/
- FontAwesome:
https://fontawesome.com/

---

📎 본 프로젝트는 Google과 무관하며, 교육 및 개인 포트폴리오 용도로 제작되었습니다.
