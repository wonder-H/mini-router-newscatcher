# Mini Router Project
## 미니 라우터 구현, 뉴스 사이트 제작

- React에서 기본 기능을 가진 라우터를 간단히 만들어보고, 이를 적용한 사이트 제작
- 구현 목표: 뉴스 사이트 
- 데이터로 Open API 사용

### 작업 중 변경사항

- NewsCatcher API → Hacker News API
1. NewsCatcher API는 사용 횟수 제한으로 인해 테스트의 제약이 있었음
2. NewsCatcher API의 한국어 지원으로 받은 응답 데이터가 생각보다 적어 추후 데이터 목록, 종류 등의 사용 제한이 염려됨

때문에 News 컨셉 + 사용이 자유로운 Hacker News API로 변경

- React ContextAPI → Recoil
1. 초기 라우터 상태만 관리하기 위해 ContextAPI를 사용하는 방향으로 작업
2. 이후 기능 확장 + 추가 상태 관리의 가능성 염두 

Router의 상태 확인에 Recoil을 활용하기로 결정

### 목표 기간

- 2022년 10월 14일까지



#### 작업 중 발생 문제&해결

#### 1. 컨텍스트 적용 중 DevTools 문제 발생

- React DevTools 영역에서 오류 메세지 출력
 
* 오류 메세지
```
Cannot add node "1" because a node with that id is already in the Store.
```

* 해결 

1. package.json에 아래 코드를 추가

```json
"resolutions": { "react-devtools-core": "4.14.0" }
```

2. node modules 삭제 후 패키지 재설치

* 관련 링크

[DevTools Bug](https://github.com/facebook/react/issues/23226)



