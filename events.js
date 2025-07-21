// 검색창의 "clear" 버튼과 검색 입력창을 변수로 저장
const clearBtn = document.querySelector(".clear-btn");
const searchBar = document.querySelector(".search-bar");

// 검색창에 키를 눌렀을 때 "keyup" 이벤트 처리
searchBar.addEventListener("keyup", function() {
    // 검색창에 입력값이 있고 "clear" 버튼이 보이지 않으면 버튼을 보이게 설정
    if(searchBar.value && clearBtn.style.visibility != "visible") {
        clearBtn.style.visibility = "visible";  // clear 버튼 보이기
    } 
    // 검색창에 입력값이 없으면 "clear" 버튼을 숨김
    else if(!searchBar.value) {
        clearBtn.style.visibility = "hidden";  // clear 버튼 숨기기
    }
});

// "clear" 버튼을 클릭했을 때 검색창을 초기화하고 버튼을 숨김
clearBtn.addEventListener("click", function() {
    searchBar.value = "";  // 검색창 값 비우기
    clearBtn.style.visibility = "hidden";  // "clear" 버튼 숨기기
});

// 검색창에서 키보드 입력을 감지하고, Enter 키를 눌렀을 때 동작 처리
searchBar.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && searchBar.value.trim() !== "") {
        const query = encodeURIComponent(searchBar.value);  
        const googleSearchUrl = `https://www.google.com/search?q=${query}`;  
        // 현재 탭에서 구글 검색 결과를 엽니다.
        window.location.href = googleSearchUrl;
    }
});

// darkLightHandler 함수는 다크 모드와 라이트 모드 간의 전환을 처리합니다.
function darkLightHandler(self) { 
    // 현재 모드가 'dark'일 경우
    if(self.value === "dark") {
        // 각 영역에 대해 다크 모드 스타일을 적용
        Body.setBackgroundColor("rgb(32,33,36)");  // Body 배경을 다크로 설정
        Logo.setImage(self.value);  // 로고를 다크 모드에 맞게 설정
        Header.setToggleFontColor("white");  // 토글 버튼 글자색을 흰색으로 설정
        Header.setToggleBackgroundColor("rgb(23, 23, 23)");  // 토글 버튼 배경을 다크로 설정
        Header.setLinkColor("white");  // 헤더 내 링크 색상을 흰색으로 설정
        Header.setGoogleAppColor("white");  // 구글 앱 아이콘을 흰색으로 설정
        AdditionalBox.setBoxBackgroundColor("rgb(48, 49, 52)");  // 추가 박스 배경을 다크로 설정
        AdditionalBox.setBoxFontColor("white");  // 추가 박스 글자 색을 흰색으로 설정
        Footer.setBackgroundColor("rgb(23, 23, 23)");  // 푸터 배경을 다크로 설정
        Footer.setCountryInfoColor("white");  // 국가 정보 글자 색을 흰색으로 설정
        Footer.setInstructionColor("white");  // 푸터 링크 색상을 흰색으로 설정
        
        // 토글 버튼의 value 값을 'light'로 변경 (현재 상태를 반영)
        self.value = "light";  // 모드를 라이트로 변경
    } 
    // 현재 모드가 'light'일 경우
    else if(self.value === "light") {
        // 각 영역에 대해 라이트 모드 스타일을 적용
        Body.setBackgroundColor("white");  // Body 배경을 라이트로 설정
        Logo.setImage(self.value);  // 로고를 라이트 모드에 맞게 설정
        Header.setToggleFontColor("black");  // 토글 버튼 글자색을 검정색으로 설정
        Header.setToggleBackgroundColor("rgb(248,249,250)");  // 토글 버튼 배경을 라이트로 설정
        Header.setLinkColor("black");  // 헤더 내 링크 색상을 검정색으로 설정
        Header.setGoogleAppColor("rgb(95,99,104)");  // 구글 앱 아이콘을 회색으로 설정
        AdditionalBox.setBoxBackgroundColor("rgb(248,249,250)");  // 추가 박스 배경을 라이트로 설정
        AdditionalBox.setBoxFontColor("black");  // 추가 박스 글자 색을 검정색으로 설정
        Footer.setBackgroundColor("rgb(242,242,242)");  // 푸터 배경을 라이트로 설정
        Footer.setCountryInfoColor("rgb(138,138,138)");  // 국가 정보 글자 색을 회색으로 설정
        Footer.setInstructionColor("rgb(138,138,138)");  // 푸터 링크 색상을 회색으로 설정
        
        // 토글 버튼의 value 값을 'dark'로 변경 (현재 상태를 반영)
        self.value = "dark";  // 모드를 다크로 변경
    }
}
