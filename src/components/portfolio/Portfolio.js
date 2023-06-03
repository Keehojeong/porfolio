import './Portfolio.css'
import hanjin from '../../img/hj.png'
import soil from '../../img/soil.png'
import oilbank from '../../img/oilbank.png'
import lbsall from '../../img/lbsall.png'
import { useNavigate, useParams } from 'react-router-dom'

function Portfolio() {
    let navigate = useNavigate();
    let {id} = useParams();

    return(
        <div>
            <h1 className='name'>Porfolio</h1>
                <table className='table'>
                    <tr>
                        <td><img onClick={()=>{navigate('/portfolio/detail/0')}} className='hanjin' src={hanjin}/></td>
                        <td><img onClick={()=>{navigate('/portfolio/detail/1')}} className='soil' src={soil}/></td>
                    </tr>
                    <tr>
                        <td><img onClick={()=>{navigate('/portfolio/detail/2')}} className='oilbank' src={oilbank}/></td>
                        <td><img onClick={()=>{navigate('/portfolio/detail/3')}} className='lbsall' src={lbsall}/></td>
                    </tr>
                </table>
        </div>
    )
}

export default Portfolio;