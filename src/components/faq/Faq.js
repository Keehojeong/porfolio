import './Faq.css'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {AiFillCaretDown} from 'react-icons/ai';

function Faq() {
    let [visible, setVisible] = useState([false,false,false,false]);
    let faqData = useSelector((state)=>{return state.faqData});
    let questionList = faqData.map((a, i)=>{
        return(
            <div className='container'>
                <ul className='list' style={{}}>
                    <li className='question'>{a.question}
                        <AiFillCaretDown className='moreBtn' onClick={()=>{
                            let copy = [...visible];
                            copy[i] = !copy[i];
                            setVisible(copy)}}/>
                        {visible[i] == true ? <div className='answer'>{a.answer}</div> : <div className='box_hidden'/>}
                    </li>
                </ul>
                
            </div>
        )
    });

    return (
        <div className='faqBox'>
            <h1 className='faq'>FAQ</h1>
            <ul>
                {questionList}
            </ul>
        </div>
    )
}

export default Faq;