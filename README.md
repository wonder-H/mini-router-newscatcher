# Mini Router Project

현 미완 상태로, 추가 작업 진행 예정입니다 😭🥲

<br>

## 미니 라우터 구현, 뉴스 사이트 제작

- React에서 기본 기능을 가진 라우터를 간단히 만들어보고, 이를 적용한 사이트 제작
- 구현 목표: 뉴스 사이트 
- 데이터로 Open API 사용

<br>

### 작업 중 변경사항

- NewsCatcher API → Hacker News API
1. NewsCatcher API는 사용 횟수 제한으로 인해 테스트의 제약이 있었음
2. NewsCatcher API의 한국어 지원으로 받은 응답 데이터가 생각보다 적어 추후 데이터 목록, 종류 등의 사용 제한이 염려됨

때문에 News 컨셉 + 사용이 자유로운 Hacker News API로 변경

- React ContextAPI → Recoil
1. 초기 라우터 상태만 관리하기 위해 ContextAPI를 사용하는 방향으로 작업
2. 이후 기능 확장 + 추가 상태 관리의 가능성 염두 

Router의 상태 확인에 Recoil을 활용하기로 결정

- API 요청 도메인, 패스, 리소스 주소 변경
1. 공식 Hacker News API에서는 GET요청 시 리스트의 목록만 가져오게 됨(예 - [ 33283674, 33281106, 33281682 ...])
2. 랜더링에 필요한 데이터를 얻기 위해서는 ID를 이용해 추가 네트워크 요청을 요구하는 구조
3. 현 API 구조가 빠르게 랜더링하는 것을 최우선으로 하는 프론트엔드 개발 방식과 거리가 있다고 판단
4. 따라서 네트워크 요청 1회로 랜더링에 필요한 데이터를 얻을 수 있는 API구조를 사용하는 것으로 변경 

<br>

### 목표 기간

2022년 10월 14일 제출 → 추가 작업 진행 예정

<br>

### 구현 & 학습 목표 키워드

- 타입스크립트 
- 라우터 구조, 원리 분석
- 기본 라우터 기능 적용(url,페이지 변경)
- 리코일 활용한 상태 관리
- 동기/비동기 처리
- 리액트 컨텍스트 API, Provider

<br>

### 고민 & 생각

- 상태관리  
리코일의 핵심은 Atom으로 개별 관리하는 것인데, 현 상황처럼 API가 ID값인 배열로 올 경우 어떻게 처리할까?  
Family를 사용하더라도 개별로 값이 들어와 배열로 오는 ID를 각각 요청하고 받아오는 로직을 쉽게 구현할 수 없었다  
GET메소드가 아닌 POST메소드를 여럿 처리할 때의 해결 방법도 고민이 필요하다

- 동기/비동기 연결  
동기적으로 처리하는 것은 보다 쉽게 구현되었으나, 비동기 작업을 구현 후 연결하기 시작하면서 어려움을 느꼈다  
리코일만으로 동기/비동기 상태를 한 번에 관리하기가 어려운걸까?

- 타입스크립트 타입 지정  
데이터 타입을 명확하게 지정하면서 로직을 개선하는 작업이 필요하다

- 생명 주기  
Recoil State와 React useState의 생명 주기가 다른 것 같았다   
때문에 비동기 호출 방법으로 아래 두 가지를 사용하려했다

  1. Recoil Atom + Recoil Selector
  2. React useState + Recoil SelelctorFamily 
   
  비동기 호출 파라미터의 유무에 따라 선택이 필요할 것 같아보였다

<br>

### 작업 중 발생 문제&해결
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
