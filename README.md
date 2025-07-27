# 음식 룰렛 (Food Roulette)

음식 메뉴를 고르기 힘들 때 사용하는 간단한 웹 사이트입니다.
여러 음식을 입력하면 그 중에서 하나를 무작위로 추천해줍니다. ((ex) 마라샹궈, 짜장면, 된장찌개 ...)
https://choosefoodtoday.netlify.app/

## 주요 기능

- 애니메이션과 함께 재미있게 음식 추천
- 심플하고 직관적인 인터페이스

## 사용 방법

1. 프로그램 실행하기
   - Visual Studio Code에서 Live Server 확장프로그램 설치
   - src 폴더의 index.html 파일을 열고 'Go Live' 버튼 클릭
   - 또는 src/index.html 파일을 브라우저에서 직접 열기

2. 음식 입력하기
   - 입력창에 먹고 싶은 음식을 입력
   - 여러 음식을 입력할 때, 엔터키를 누르면 여러 음식 입력이 가능합니다.

3. 추천받기
   - '추천받기' 버튼을 클릭하면 입력한 음식 중 하나를 무작위로 추천

## 프로젝트 구조

```
food-roulette/
├── src/
│   ├── index.html      # 메인 HTML 파일
│   ├── css/
│   │   └── styles.css  # 스타일시트
│   └── js/
│       └── app.js      # 자바스크립트 로직
```

## 기술 스택

- HTML5
- CSS3
- JavaScript (바닐라)
