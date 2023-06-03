import img from '../../img/myface.jpg';
import './Introduce.css';

function Introduce(props) {
    return (
        <div className="container-box2">
            <div className="white-bg">
                <div className="section_profile">
                    <div className="title_area" style={{borderBottom: '1px solid black'}}>
                        <p style={{marginBottom: "8px", float: "left"}}><strong>기호정의 이력서 입니다.</strong></p>
                        <button className="x-btn" onClick={()=>{props.setModal(false)}}>X</button>
                        <div style={{clear: 'both'}}></div>
                    </div>
                <div className="main_area">
                    <div className="img_area">
                        <img className="profile_img" src={img}/>
                    </div>
                <div className="info_area">
                    <p><span style={{fontSize: "22px"}}><b>기호정</b></span> <span style={{fontSize: "20px"}}>2000년 (24세/만23세) / 여</span></p>
                    <p style={{fontSize: "19.2px"}}>✉️ &nbsp;&nbsp;emily3359@naver.com</p>
                    <p style={{fontSize: "19.2px"}}>📞 &nbsp;&nbsp;010-3654-6116</p>
                    <p style={{fontSize: "19.2px"}}>🏛️ &nbsp;&nbsp;(07360) 서울 영등포구 여의대방로43</p>
                </div>
            </div>
        </div>
        <div style={{clear: "both"}}></div>

        <div className="dashborad">
            <ul>
                <li>
                    <strong>학력사항</strong>
                    <p>대학교(2년)졸업</p>
                </li>
                <li>
                    <strong>경력사항</strong>
                    <p>신입</p>
                </li>
                <li>
                    <strong>희망연봉</strong>
                    <p>회사내규에 따름</p>
                </li>
                <li>
                    <strong>희망근무형태</strong>
                    <p>정규직</p>
                </li>
                <li>
                    <strong>포트폴리오</strong>
                    <p style={{borderRight: '0px', solid: '#eaeaea'}}>-</p>
                </li>
            </ul>
        </div>
        <div style={{clear: "both"}}></div>
 
        <div className="section_part">
            <div className="title part">
                <h3><b>학력</b></h3>
            </div>
            <div className="part_table">
                <table>
                    <thead>
                        <tr>
                            <th style={{width: "17%"}}>재학기간</th>
                            <th style={{width: "12%"}}>구분</th>
                            <th style={{width: "32%"}}>학교명(소재지)</th>
                            <th style={{width: "27%"}}>전공</th>
                            <th style={{width: "12%"}}>학점</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2019.03 ~ 2021.02</td>
                            <td>졸업</td>
                            <td>동양미래대학교 (서울)</td>
                            <td>컴퓨터정보공학과</td>
                            <td>4.44 / 4.5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div className="section_part">
            <div className="title part">
                <h3><b>경험 / 활동 / 교육</b></h3>
            </div>
            <div className="part_table">
                <table>
                    <thead>
                        <tr>
                            <th style={{width: "17%"}}>기간</th>
                            <th style={{width: "12%"}}>구분</th>
                            <th style={{width: "32%"}}>기관 / 장소</th>
                            <th style={{width: "39%"}}>내용</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{borderBottom: "1px solid #eaeaea"}}>
                            <td>2021.03 ~ </td>
                            <td>프론트 개발자</td>
                            <td>비즈인카(주)</td>
                            <td>한진, SOIL, OILBANK, LBSALL의 프론트 웹 개발 및 백앤드 참여</td>
                        </tr>
                        <tr style={{borderBottom: "1px solid #eaeaea"}}>
                            <td>2019.03 ~ 2021.02</td>
                            <td>전공 동아리</td>
                            <td>동양미래대학교 (서울)</td>
                            <td>전공 동아리의 일원으로서 세미나, 멘토멘티 활동, 코엑스 작품전 출전,  등 여러가지 활동 참여</td>
                        </tr>
                        <tr>
                            <td>2020.03 ~ 2021.02</td>
                            <td>동아리</td>
                            <td>동양미래대학교 (서울)</td>
                            <td>2020학년도 이브와 ICT 멘토링 공모전 출전</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div className="section_part">
            <div className="title part">
                <h3><b>자격증 / 어학 / 수상내역</b></h3>
            </div>
            <div className="part_table">
                <table>
                    <thead>
                        <tr>
                            <th style={{width: "17%"}}>재학기간</th>
                            <th style={{width: "12%"}}>구분</th>
                            <th style={{width: "32%"}}>자격 / 어학 / 수상명</th>
                            <th style={{width: "27%"}}>발행처 / 기관 / 언어</th>
                            <th style={{width: "12%"}}>합격 / 점수</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{borderBottom: "1px solid #eaeaea"}}>
                            <td>2019.02</td>
                            <td>자격증 / 면허증</td>
                            <td>2종보통운전면허</td>
                            <td>경찰청(운전면허시험관리단)</td>
                            <td>최종합격</td>
                        </tr>
                        <tr>
                            <td>2022.12</td>
                            <td>수상내역 / 공모전</td>
                            <td>2022 동양미래EXPO 우수상</td>
                            <td>동양미래대학교 (서울)</td>
                            <td> - </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

            <div className="section_part">
                <div className="title part">
                    <h3><b>자기소개서</b></h3>
                </div>
                <div className="part_table part_table2">
                    <div className="my_letter">
                        <p style={{fontSize: "20px", fontWeight: "bold"}}> [성장과정 (가정환경 기준)]</p>
                        <div className="my_letter_main">
                            <p><span>[첫째도 인성, 둘째도 인성]</span><br/>
                                어린 시절부터 학업에 충실하기를 강조하시던 부모님 아래 많은 학원과 과외를 다니며 흔히 말하는 ‘엄친아’로 자라왔습니다.
                                공부를 잘했기에 항상 반장을 놓치지 않았고, 선생님으로부터 칭찬만 들어와 학업 성적이 좋지 못한 친구들을 잘 이해하지 못했습니다.
                                그러던 중 부모님과 대화 속에 무의식적으로 그런 친구들을 무시하는 발언을 한 적이 있었습니다. 그 때 부모님께서 공부를 잘 한다고 해서
                                그렇지 않은 친구들을 무시하는 말을 해도 되는 것은 절대 아니라고 하셨고 인성이 올바르지 못하면 공부 잘하는 것은 필요 없다며 크게 화를 내셨습니다.
                                부모님께서 화내시는 모습을 보며 큰 충격을 받았고 동시에 잘못된 생각을 가졌음을 느껴 그 뒤로는 공부만이 아니라 친구와 선후배사이의 관계를 보다 우선시하며
                                살아왔습니다.
                                그 결과 현재, 주위에는 어떠한 고난과 역경이 닥쳐도 같이 고민하고 이겨낼 친구들이 여럿 있으며, 학교에서의 프로젝트를 진행할 때 훌륭한 결과와 함께 그 과정
                                속에서
                                팀원들과 화합을 이끌어 나갈 만한 원동력을 가진 사람이 되었습니다.</p>
                        </div>
                    </div>
                    <div className="my_letter">
                        <p style={{fontSize: "20px", fontWeight: "bold"}}> [성격 장/단점 ]</p>
                        <div className="my_letter_main">
                            <p><span>[끝까지 하면 무조건 된다]</span><br/>
                                제 장점은 하겠다고 마음먹은 것은 꼭 해내며, 어떻게든 좋은 결과까지 가져온다는 것입니다.
                                학창 시절에는 사용하던 스마트폰을 2G폰으로 변경하며 학업에 매진해 전교 2등까지 해 본 경험이 있으며,
                                최근 2월 26일 군대에서 시작한 운동으로 2023 IFBB NPC Natural 서울(보디빌딩 대회)에 출전해 2등으로 입상을 한 경험도 있습니다.
                                학업뿐만 아니라 어떠한 분야에서든 목표한 것은 해내고야 마는 끈기를 가졌습니다.</p>
                            <p><span>[걱정 모아 태산]</span><br/>
                                단점은 결과를 너무 중요시하기 때문에 그 과정에서 과도한 스트레스를 받는다는 것입니다.
                                저는 과정보다 결과가 중요하다고 생각합니다. 과정의 끝은 결국 결과이며, 성공적인 결과로 과정을 되짚어가는 것은 이야기가 잘 풀리지만
                                실패한 결과로 과정을 뜯어보는 것은 오래 걸리기 때문입니다. 이 때문에 전에 너무 잘하고 싶었던 프로젝트를 진행할 때에도 밤샘 작업도 자주 했었고
                                그 과정에서 스트레스도 많이 받아 스트레스성 탈모와 위염이 온 적이 있었습니다.
                                그 후엔 과정이 괜찮으면 결과도 좋게 나온다는 생각을 가지려 노력하고 있고,
                                스스로 이제는 모든 것에 완벽할 수는 없다는 것을 인정하고 주위 사람들에게 조언도 구하며 천천히 기간을 두고 효율적으로 진행하려고 노력하고 있습니다.</p>
                        </div>
                    </div>
                    <div className="my_letter">
                        <p style={{fontSize: "20px", fontWeight: "bold"}}> [사회경험 또는 학교생활]</p>
                        <div className="my_letter_main">
                            <p><span>[사회경험]</span><br/>
                                한국생산성 본부에서 진행한 경기대학교의 MD 및 디지털마케팅과정과 특성화고등학교 진학관련 콘서트에 운영위원으로 참여했습니다.
                                생산성 본부의 운영위원으로 활동하며 여러 유형의 사람들을 만날 기회를 얻었고,
                                경험을 통해 낯선 사람들과 대화하는 것이 이전보다 훨씬 더 편해졌습니다.
                                또한 돌발상황이 발생하거나 실수를 했을 때 대처하는 효과적인 방법도 익혔습니다.</p>
                            <p><span>[학교생활]</span><br/>
                                신입생 시절 1년동안 전공 동아리 MARS에서 진행한 자바 세미나를 수강했습니다.
                                2학년때는 세미나 멘토로 참여하여 5명의 신입생들의 질의 응답을 받아주었으며, 간단한 프로젝트를 진행시켰습니다.
                                전공 동아리 MARS에서 웹 개발 팀의 Front-End파트를 담당하여 2학년 코엑스 작품전에 출전해 우수상을 수상했습니다.</p>
                        </div>
                    </div>
                    <div className="my_letter">
                        <p style={{fontSize: "20px", fontWeight: "bold"}}> [마지막 할 말 및 입사 후 포부]</p>
                        <div className="my_letter_main">
                            <p><span>[동료애]</span><br/>
                                현대의 조직에서 뛰어난 하나의 개인보다는, 서로를 이해하고 경쟁하며 같은 목표를 바라보는 동료애가 업무의 성패를 좌우한다고 생각하며
                                동료는 단순히 나와 함께 일을 하는 사람, 업무를 진행하는 사람이 아닌 서로의 삶을 이끌어 주는 존재라고 생각합니다.
                                동료와 조직으로 인해 회사도 발전하고 나로 인해 나의 동료가 행복해질 수 있다는 믿음으로 항상 동료애를 유지할 것입니다.
                                단순히 회사에서 만난 일시적인 인맥이 아닌, 삶의 동반자로서 동료를 이해하고 선의의 경쟁을 통해 발전할 수 있도록 하겠습니다.
                                저의 목표 중 하나는 외국 개발자와 커뮤니케이션을 할 수 있을 만큼의 영어회화 능력 향상입니다.
                                개발자로서 영어실력은 개발 능력만큼이나 중요하다고 생각하기 때문에 독해 능력뿐만 아니라 회화 능력까지 갖춘 개발자가 되고 싶습니다.
                                이를 위해 여유가 된다면 퇴근 후나 주말에 영어 회화학원을 다닐 생각을 가지고 있습니다.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Introduce;