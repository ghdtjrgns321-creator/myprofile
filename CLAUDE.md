# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

홍석훈(Data Analyst & CPA)의 개인 포트폴리오/이력서 정적 웹사이트.

## 기술 스택

- **HTML5** - 순수 정적 페이지 (빌드 도구 없음)
- **Tailwind CSS** - CDN (`cdn.tailwindcss.com`) 방식, 설치 불필요
- **Font Awesome 6.4.0** - CDN 아이콘
- **Google Fonts** - Noto Sans KR

## 개발 방법

빌드/번들링 없음. 브라우저에서 `index.html`을 직접 열거나 로컬 서버로 확인:
```bash
# Python
python -m http.server 8000
# Node (npx)
npx serve .
```

## 아키텍처

```
index.html          ← 메인 페이지 (About, Skills, Projects, Contact 섹션)
project_*.html      ← 개별 프로젝트 상세 페이지 (8개)
images/             ← 프로필 사진, PDF, 동영상 등 정적 리소스
```

- **단일 페이지 구조**: `index.html`이 내비게이션, 히어로, 경력 타임라인, 기술스택, 프로젝트, 푸터를 모두 포함
- **프로젝트 상세**: 각 `project_*.html`은 독립 페이지로 Back 버튼으로 메인 복귀
- **프로젝트 섹션 현재 상태**: `index.html`의 프로젝트 섹션은 주석 처리(초기화)된 상태

## 디자인 컨벤션

- **그라디언트 텍스트**: `linear-gradient(to right, #2563eb, #9333ea)` — 핵심 강조 텍스트에 사용
- **카드 호버**: `translateY(-5px)` + 그림자 확대
- **타임라인**: 수직선 + 원형 노드 (경력 섹션)
- **반응형**: Tailwind `md:` 브레이크포인트 기반, mobile-first
- **컬러**: Blue/Purple 주색, Slate 배경, 기술별 태그는 Orange/Green/Yellow

## 주의사항

- CDN 의존: 오프라인 환경에서는 Tailwind/FontAwesome/GoogleFonts 로드 불가
- 모든 스타일은 Tailwind 유틸리티 클래스 + `<style>` 태그 내 커스텀 CSS
- 개인정보(이메일, 전화번호) 포함 — 커밋 시 주의
