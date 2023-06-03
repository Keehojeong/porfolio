import img from '../../img/myface.jpg'
import './Home.css'
import Introduce from './Introduce';
import { useState } from 'react';

function Home(){
    let [modal, setModal] = useState(false);

    return(
        <div className='container'>
        {modal == true ? <Introduce setModal={setModal}/> : null}
            <div className='main-greeting'>
                <div className='short-info'>
                    <div className='front'>
                        <h4><i>#My Portfolio</i></h4>
                        <img className='kee' src={img}/>
                        <div className='info-tag'>
                            #신입개발자&nbsp;&nbsp; #React.js &nbsp;&nbsp; #Groovy &nbsp;&nbsp;#html<br/>
                        #기호정&nbsp; #Java&nbsp; #JavaScript&nbsp;<br/> #Front-end developer💻 <br/>
                        #Back-end developer💻<br/>
                        <button className='report' onClick={()=>{setModal(!modal)}}>자기소개서</button>
                        </div>
                    </div>
                </div>
                <div className='short-info2'>
                    <h1 className='text'>A newcomer skilled front-end developer💻<br/>
                    Area of expertise<br/>
                    : React.js / JavaScript / Groovy / Java / Css3 / Html </h1>
                </div>
                <div className='who'><b>who am i?</b>
                    <div className='introduce'>
                        <span>안녕하십니까. 웹 프론트앤드 신입 개발자 기호정입니다.<br/>
                            2주 동안 ReactJS 강의를 수강하며 문법을 공부했고, 이를 바탕으로 자기소개 페이지를 작성 중입니다.<br/>
                            졸업 후 직장에 들어가 'Webix'와 'Groovy'를 이용하여 웹 개발을 해왔습니다.<br/>
                            흔히 사용되지는 않지만 기존 언어와 유사하고 개발을 해왔던 경험을 바탕으로 다른 신입보다 빠른 적응이 가능할 것입니다.<br/>
                            차량의 경로, 반경에 따른 출도착시간 등의 차량 관제 페이지를 개발하며 서버로부터 받아온 데이터를 그리드에 뿌리고,
                            지도에 마커를 표시하는 작업들을 해왔습니다.<br/>
                            개발을 하며 Layer Achitecture와 Restful API에 대한 개념 정리가 필요하다 느껴 간단하게라도 개념을 익히는 시간도 가졌습니다.
                            단순 개발뿐만 아니라 왜 이런 구조인지, 왜 사용되는지 항상 고민하는 개발자가 되기 위해 노력하고 실천하겠습니다.<br/>
                            
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;