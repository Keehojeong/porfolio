import './Contact.css'
import img1 from '../../img/contact1.jpg'
import img2 from '../../img/contact2.jpg'
import { useState } from 'react'
import Introduce from '../home/Introduce';

function Contact() {
    let [modal, setModal] = useState(false);
    return(
        <div className='container'>
            {modal == true ? <Introduce setModal={setModal}/> : null}
            <h3 className="title">CONTACT ME</h3>
            <p className="subtitle">안녕하세요. 웹 개발자 기호정입니다.<br/>
                    저에게 관심이 생기셨다면 아래 정보로 연락주시면 감사하겠습니다.</p>

            <img className='img1' src={img1}/>
            <img className='img2' src={img2}/>
            <table className="contactTable">
                <tr>
                    <td>이름</td>
                    <td className='answer'>기호정(Kee Ho Jeong, 24세)</td>
                </tr>
                <tr>
                    <td>전화번호</td>
                    <td className='answer'>010-3654-6116</td>
                </tr>
                <tr>
                    <td>이메일</td>
                    <td className='answer'>emily3359@naver.com</td>
                </tr>
                <tr>
                    <td>취미, 특기</td>
                    <td className='answer'>헬스, 여행</td>
                </tr>
                <tr>
                    <td>좌우명</td>
                    <td className='answer'>최선을 다해 오늘을 살자</td>
                </tr>
                <tr>
                    <td>주소</td>
                    <td className='answer'>서울특별시 영등포구 여의대방로43나길 25(삼환APT)</td>
                </tr>
                <tr>
                    <td>입사 후 포부</td>
                    <td className='answer'>Title보다 Role을 중시하며 회사 경험을 바탕으로 다른 신입보다 발 빠른 팀원이 되겠습니다.</td>
                </tr>
            </table>
            <button className="btn" onClick={()=>{setModal(!modal)}}>자기소개서</button>
        </div>
    )
}

export default Contact;