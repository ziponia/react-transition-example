# 리액트 트랜지션 사용하기

리액트에 라우터 트랜지션을 적용 해 보았다.

## Getting Started

`git clone https://github.com/ziponia/react-transition-example.git react-transition_example`

`cd react-transition_example && npm install`

`npm start`

connect to http://127.0.0.1:3000

online - https://codesandbox.io/s/github/ziponia/react-transition-example


### 적용하면서 힘들었던 점

예제 코드가 모두 react-transition-group 이 거의 v1 예제밖에 안나와있어 알아보는데 좀 고생했다.

특히, src/pages/TaskPage.js 에 거의 모든 사용법이 나와있는데

in 속성과 unmountOnExit 속성을 지정하는데있어, 이 두가지가 없으면, 생각대로 작동하지 않았다.

추후에 하면서 조금씩 속성들에 대해서 알아 볼 생각이다.

in 속성에 경우 this.state.visible && (JSX.Element) 를 대체 하는 것 같다. ( 조건부 랜더링 )

어쨋든 잘 됬으니 만족 :)

- 참조 사이트 https://reactcommunity.org/react-transition-group/
