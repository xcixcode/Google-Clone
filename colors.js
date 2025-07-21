// Body 객체는 배경 색을 설정하는 메서드를 포함합니다.
var Body = {
    setBackgroundColor: function (color) {
        // jQuery를 사용하여 body 태그의 배경 색을 설정합니다.
        $("body").css("backgroundColor", color);
    }
}

// Logo 객체는 로고 이미지를 설정하는 메서드를 포함합니다.
var Logo = {
    setImage: function (mode) {
        // 'dark' 모드일 때 흰색 로고로 변경
        if(mode === "dark") {
            $(".logo-image").attr("src", "images/logo-white.png");  // 로고 이미지 변경
        } else {
            $(".logo-image").attr("src", "images/logo.png");  // 기본 로고 이미지로 변경
        }
    }
}

// Header 객체는 헤더 부분의 색상과 스타일을 설정하는 메서드를 포함합니다.
var Header = {
    setToggleFontColor: function (color) {
        // 다크/라이트 모드 토글 버튼의 글자 색을 설정
        $(".dark-light-btn").css("color", color);
    },

    setToggleBackgroundColor: function (color) {
        // 다크/라이트 모드 토글 버튼의 배경 색을 설정
        $(".dark-light-btn").css("backgroundColor", color);
    },

    setLinkColor: function (color) {
        // 헤더 내의 모든 링크 색상을 설정
        $("header a").css("color", color);
    },

    setGoogleAppColor: function (color) {
        // 구글 앱 아이콘의 색상을 설정
        $(".google-app").css("color", color);
    }
}

// AdditionalBox 객체는 추가 검색 박스와 관련된 색상 설정을 처리합니다.
var AdditionalBox = {
    setBoxBackgroundColor: function (color) {
        // 추가 검색 박스의 배경 색을 설정
        $(".additional-box a").css("backgroundColor", color);
    },

    setBoxFontColor: function (color) {
        // 추가 검색 박스의 글자 색을 설정
        $(".additional-box a").css("color", color);
    }
}

// Footer 객체는 하단 영역의 색상 설정을 처리합니다.
var Footer = {
    setBackgroundColor: function (color) {
        // 푸터 영역의 배경 색을 설정
        $("footer").css("backgroundColor", color);
    },

    setCountryInfoColor: function (color) {
        // 국가 정보 색상을 설정
        $(".country-info").css("color", color);
    },

    setInstructionColor: function (color) {
        // 푸터 내의 링크 색상을 설정
        $(".instruction a").css("color", color);
    }
}
