
/*
    MAIN 컴포넌트

    크기와 비율을 정해놓고 보이는 창의 크기도 정할 것이므로 스크롤 방지를 위해 
*/

import { useState } from 'react';

import './Main.css';

const Main = () => {

    const [ WorkspaceOption , setWorkspaceOption ] = useState(false);

    function AddWorkspace() {

        setWorkspaceOption(!WorkspaceOption);
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
                            {WorkspaceOption ? <button className="ADD" onClick={AddWorkspace}> 완료 </button> : <button className="ADD" onClick={AddWorkspace}> 추가 </button>}
                        </div>
                        {WorkspaceOption ? 
                            <div className='OPTION'>
                                <div className='HEAD'>
                                    <code className='TITLE'> 작업공간에 PROJECT를 추가하세요. </code>
                                </div>
                                {/* <div className='BOX1'> </div> */}
                                <input className='BOX1' type='text' placeholder='PROJECT 이름을 입력하세요.' />
                                {/* <div className='BOX2'> </div> */}
                                <input className='BOX2' type='text' placeholder='PROJECT의 경로를 설정하세요.' />
                                {/* <div className='BOX3'> </div> */}
                                <input className='BOX3' type='text' placeholder='추후 업데이트 예정.' />
                            </div> 
                            : 
                            <div className="BODY"> </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Main;
