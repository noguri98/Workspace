
// npm install react-router-dom
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import MAIN from './MAIN/MAIN';

const App = () => {

    return (

        <Router>
            <Routes>
                {/* 
                    Route : 경로를 지정 
                    path="/" : 루트 경로에 대한 라우팅을 정의합니다. 즉 사용자가 기본 URL로 접속할 때 자동 적용
                    element={<Navigate to="/main" replace />} : /main 경로로 리다이렉트

                    - <Navigate> 는 React Router의 리다이렉트 컴포넌트
                    - to="/main" : 리다이렉트할 목적지 경로를 지정
                    - replace : 현재 경로를 목적지 경로로 대체. 즉 어떤 방법으로도 "/"로 갈 수 없도록 설정
                */}
                <Route path="/" element={<Navigate to="/main" replace />} />
                <Route path="/main" element={<MAIN />} />
             </Routes>
        </Router>
    )
}

export default App;