# Portfolio Overview

수습 공인회계사 홍석훈의 포트폴리오입니다
재무·회계 도메인 지식에 생성형 AI 기술을 접목하는 프로젝트를 진행중입니다.

## Live

https://ghdtjrgns321-creator.github.io/myprofile/

## 프로젝트 보러가기

### [K-IFRS 1115 AI](https://github.com/ghdtjrgns321-creator/k-ifrs-1115)

수익인식 기준서(K-IFRS 제1115호) 원문만 근거로 답하는 도메인 특화 RAG 챗봇.

- 용어사전으로 개념에 진입해 지식그래프를 타고 `개념 → 문단 → 사례`로 근거를 추적
- 사전에 정의한 판단트리로 추론 절차를 통제 — 근거가 없으면 지어내지 않고 "부족"이라고 답함
- 회계추론용·산술용 듀얼 LLM 라우팅, PydanticAI로 답변 형식 고정

`FastAPI` `PydanticAI` `MongoDB Atlas` `Streamlit` · [라이브 데모](http://134.185.104.224:8501/)

### [FS Multi Analyzer](https://github.com/ghdtjrgns321-creator/fs-multi-analyzer) *(작업 중)*

사업보고서를 5개 관점의 에이전트가 교차검증해 "의심스러운 건"을 카드로 뽑아주는 도구.

- 수치 연산은 전부 코드가 수행 — LLM에 계산을 맡기지 않아 숫자 환각이 원천 차단됨
- 전 계정·전 연도 결정론 스캔(기준축 5·관계사슬 11·재무비율 15) 후 그 발췌만 LLM에 전달
- 카드마다 원본 수치를 대조해 근거 없는 숫자는 탈락시키고, 반대근거와 다음 절차까지 제시

`OpenDART XBRL` `PydanticAI` `DuckDB` `Streamlit`

### [Local AI Audit Assistant](https://github.com/ghdtjrgns321-creator/local-ai-journal-assist) *(작업 중)*

전표 35만 건에서 감사인이 먼저 열어볼 검토 큐를 만드는 전표 테스트 자동화 도구.

- 금액 상위 N건이 아니라 처리 방식(수기·승인·시각) 축으로 표본을 세움
- 결정론 룰 29종 · 계정 단위 분석적 검토 · 비지도 모델을 **점수로 합치지 않고** 세 표면으로 분리
- 도구는 위험 등급을 선언하지 않음 — 감사인이 조합을 고르면 해당 전표를 근거와 함께 집계

`Python` `Rust(합성 원장 생성)` `DuckDB` `Streamlit`

### [PPTX Maker](https://github.com/ghdtjrgns321-creator/pptxmaker) *(작업 중)*

손으로 깎은 골든 덱 17장을 기준선으로 두고, 그 서식·밀도를 기계 게이트로 강제하는 PPT 공장.

- 프로젝트 정리본(보고서 md 묶음)을 재료로 `인터뷰 → 구성 → 빌드 → 검증` 4단계 파이프라인
- 이미지가 아닌 **네이티브 .pptx** — 표·차트 값을 받은 쪽에서 직접 편집 가능
- 같은 계약·같은 브랜드킷이면 같은 덱이 나오는 결정론 빌드

`python-pptx` `멀티에이전트 파이프라인`

## 그 외

- **[Claude Code Settings](https://github.com/ghdtjrgns321-creator/claudecodesettings)** — Claude Code 전역 개발환경 설정. 훅·스킬·하네스 관리체계
- **[AI Study Log](https://github.com/ghdtjrgns321-creator/ai-study-log)** — 매일 예약 에이전트가 AI 학습 주제를 선별·브리핑해 자동 커밋하는 학습 도우미

