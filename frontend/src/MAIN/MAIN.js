
/*
    MAIN 컴포넌트

    크기와 비율을 정해놓고 보이는 창의 크기도 정할 것이므로 스크롤 방지를 위해 
*/

import { useState } from 'react';

import './Main.css';

const Main = () => {

    const [ addWorkspace , setAddWorkspace ] = useState(false);

    function AddWorkspaceClick() {

        setAddWorkspace(true);
    } 

    return (

        <div>
            {/* 가능하다면 추후 배경 이미지를 선택하여 지정하는 기능 추가를 고려 중 */}
            <div className="WALLPAPER">
                <div className="MAIN">
                    <div className="USER">
                        <div className="HEAD">
                            <code className="NAME"> User </code>
                            <button className="ADD"> + </button>
                        </div>
                    </div>
                    <div className="LIST">
                        <div className="HEAD">
                            <code className="TITLE"> WorkSpace </code>
                            <button className="ADD" onClick={AddWorkspaceClick}> + </button>
                        </div>
                        <div className="BODY">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Main;
