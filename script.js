/**
 * Google 홈페이지 클론 - JavaScript
 * 실제 Google.com 한국 버전 기능 기반
 */

// DOM 요소 참조
const searchContainer = document.getElementById('searchContainer');
const searchInput = document.getElementById('searchInput');
const luckyBtn = document.getElementById('luckyBtn');
const searchForm = document.querySelector('.search-form');
const aiModeBtn = document.getElementById('aiModeBtn');
const settingsBtn = document.getElementById('settingsBtn');
const voiceBtn = document.querySelector('.voice-btn');
const lensBtn = document.querySelector('.lens-btn');
const keyboardBtn = document.querySelector('.keyboard-btn');
const addBtn = document.querySelector('.add-btn');

/**
 * 검색 실행 함수
 */
function performSearch(query) {
    if (!query) return;
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.location.href = url;
}

/**
 * 검색창 포커스 이벤트 핸들러
 */
searchInput.addEventListener('focus', function() {
    searchContainer.classList.add('focused');
});

/**
 * 검색창 블러 이벤트 핸들러
 */
searchInput.addEventListener('blur', function() {
    setTimeout(() => {
        if (!searchContainer.contains(document.activeElement)) {
            searchContainer.classList.remove('focused');
        }
    }, 200);
});

/**
 * 검색 폼 제출 이벤트 핸들러
 */
searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (query) {
        performSearch(query);
    }
});

/**
 * 검색 키보드 이벤트 핸들러
 */
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        const query = this.value.trim();
        if (query) {
            performSearch(query);
        }
    }
});

/**
 * ESC 키로 검색창 포커스 해제
 */
searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        searchInput.blur();
    }
});

/**
 * 문서 클릭 이벤트 핸들러 (검색창 바깥 클릭 시 포커스 스타일 해제)
 */
document.addEventListener('click', function(e) {
    if (!searchContainer.contains(e.target)) {
        searchContainer.classList.remove('focused');
    }
});

/**
 * I'm Feeling Lucky 버튼 클릭 이벤트 핸들러
 */
if (luckyBtn) {
    luckyBtn.addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query) {
            const url = `https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=1`;
            window.location.href = url;
        } else {
            window.location.href = 'https://www.google.com/doodles';
        }
    });
}

/**
 * 설정 버튼 클릭 이벤트
 */
if (settingsBtn) {
    settingsBtn.addEventListener('click', function() {
        window.location.href = 'https://www.google.com/preferences?hl=ko';
    });
}

/**
 * AI 모드 버튼 클릭 핸들러
 */
if (aiModeBtn) {
    aiModeBtn.addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query) {
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}&udm=50`;
        } else {
            window.location.href = 'https://www.google.com/search?udm=50';
        }
    });
}

/**
 * 음성 검색 버튼 클릭 핸들러
 */
if (voiceBtn) {
    voiceBtn.addEventListener('click', function() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            startVoiceSearch();
        } else {
            window.location.href = 'https://www.google.com/search?q=';
        }
    });
}

/**
 * 음성 검색 시작
 */
function startVoiceSearch() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = 'ko-KR';
    recognition.continuous = false;
    recognition.interimResults = true;

    recognition.onstart = function() {
        searchInput.placeholder = '듣고 있습니다...';
    };

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        searchInput.value = transcript;

        if (event.results[0].isFinal) {
            performSearch(transcript);
        }
    };

    recognition.onerror = function() {
        searchInput.placeholder = '';
    };

    recognition.onend = function() {
        searchInput.placeholder = '';
    };

    recognition.start();
}

/**
 * Google 렌즈 버튼 클릭 핸들러
 */
if (lensBtn) {
    lensBtn.addEventListener('click', function() {
        window.location.href = 'https://lens.google.com/';
    });
}

/**
 * 키보드 버튼 클릭 핸들러
 */
if (keyboardBtn) {
    keyboardBtn.addEventListener('click', function() {
        searchInput.focus();
    });
}

/**
 * + 버튼 클릭 핸들러 (검색 추가)
 */
if (addBtn) {
    addBtn.addEventListener('click', function() {
        searchInput.focus();
    });
}

/**
 * 페이지 로드 완료 시 초기화
 */
document.addEventListener('DOMContentLoaded', function() {
    initMobileFeatures();
});

/**
 * 모바일 기능 초기화
 */
function initMobileFeatures() {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
        document.body.classList.add('touch-device');
        handleMobileKeyboard();
    }

    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
}

/**
 * 뷰포트 높이 설정
 */
function setViewportHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

/**
 * 모바일 키보드 대응
 */
function handleMobileKeyboard() {
    const footer = document.querySelector('.footer');
    let initialHeight = window.innerHeight;

    if (window.visualViewport) {
        window.visualViewport.addEventListener('resize', function() {
            const heightDiff = initialHeight - window.visualViewport.height;
            const isKeyboardOpen = heightDiff > 150;

            if (isKeyboardOpen) {
                document.body.classList.add('keyboard-open');
                if (footer) footer.style.display = 'none';
            } else {
                document.body.classList.remove('keyboard-open');
                if (footer) footer.style.display = '';
            }
        });
    }
}
