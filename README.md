
## PROGESS

### 2024-10-20 (일)

서버는 Flask를 사용 할 예정이며, 클라이언트는 React를 사용 할 예정이다. 다만 내가 원하는 Workspace 프로젝트는 웹이 아니라 애플리케이션을 기반으로 하기 때문에
추후 React 프로젝트를 Electron으로 덮을 예정이다.

그리고 서버와 클라이언트는 각 각 다른 폴더로 작업이 진행 될 예정이고 서버 폴더는 가상환경을 적용하여 작업을 진행 할 예정이다. 클라이언트는 npm을 이용하여 라이브러리 설치 시 Node_modules 폴더 모아서 설치되기 때문에 별도의 가상환경 관리가 필요하지 않다.

프로젝트 시작 전 지금 당장 생각나는 의문에 대한 호기심은 풀렸다. 프로젝트를 시작하도록 하자.

$ node -v 를 이용하여 현재 컴퓨터에 node가 정상적으로 설치되어있는지 확인했다. 결과는 v22.5.1로 정상 출력이 되었다.

그리고 바로 

$ npm -v 를 이용하여 현재 컴퓨터에 npm이 정상적으로 설치되었는지도 확인했다. 결과는 10.8.2로 정상 출력이 되었다.

우선 React 프로젝트 설치가 가능한 상태임을 확인했으므로 바로 React 프로젝트를 설치했다.

$ npx create-react-app frontend 를 이용하면 React 프로젝트의 기본 구조가 한꺼번에 생성되고 프로젝트 이름은 frontend로 생성된다.

그리고 코드 추적 및 버전 관리 연습을 위해 프로젝트 자체는 깃에 연결하였다.

$ npm install react-router-dom 을 이용하여 App.js를 로드할 때 기본으로 /main 경로로 접근하여 MAIN.js를 로드하도록 설정하였다.

> Commit : Route MAIN

### 2024-10-21 (월)

오늘은 MAIN 컴포넌트의 디자인의 기본 골격을 잡고 button 클릭 이벤트를 추가하겠다.

> Commit : MAIN Design

MAIN 컴포넌트의 상단에는 User를 관리하는 창으로 설정하였고 하단에는 Workspace를 관리하는 창으로 설정하였다. 그리고 각 각 영역마다 모두 버튼이 있으면 해당 버튼을 누르면 User와 Workspace를 추가할 수 있도록 만들 예정이다.

> Commit : MAIN Add Button

Workspace의 작업 추가 버튼을 누르면 PROJECT 업로드를 위한 정보 창이 나타난다.

> Commit : MAIN Add Button-Workspace
