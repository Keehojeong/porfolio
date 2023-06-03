import './PortfolioDetail.css'
import Carousel from 'react-bootstrap/Carousel';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function PortfolioDetail() {
    let {id} = useParams();
    let portfolioDetailData = useSelector((state)=>{return state.portfolioDetailData});
    return(
        <div className='detail'>
            <h1 className='detailName'>{portfolioDetailData[id].name}</h1>
                <p className='detailInfo'>Info</p>
                <table style={{textAlign: 'left', border: '0px', width: '40%', marginLeft: '20%'}}>
                    <tr>
                        <td style={{width: '100px', float: 'left', marginRight: '26px', color: '#999', fontSize: '19px'}}>개발 기간</td>
                        <td style={{fontSize: '19px', color: '#333'}}><p>{portfolioDetailData[id].period}</p></td>
                    </tr>
                    <tr>
                        <td style={{width: '100px', float: 'left', marginRight: '26px', color: '#999', fontSize: '19px'}}>개발 언어</td>
                        <td style={{fontSize: '19px', color: '#333'}}><p>{portfolioDetailData[id].language}</p></td>
                    </tr>
                    <tr>
                        <td style={{width: '100px', float: 'left', marginRight: '26px', color: '#999', fontSize: '19px'}}>담당 업무</td>
                        <td style={{fontSize: '19px', color: '#333'}}>{portfolioDetailData[id].work1}<br/>{portfolioDetailData[id].work2}<br/>{portfolioDetailData[id].work3}</td>
                    </tr>
                </table>

                <Carousel variant="dark" style={{width: '60%', marginLeft: '20%', marginTop: '7%', marginBottom: '8%'}}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={portfolioDetailData[id].img1}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h5>위치관제</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={portfolioDetailData[id].img2}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h5>컨테이너</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={portfolioDetailData[id].img3}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h5>작업지/시설물</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={portfolioDetailData[id].img4}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h5>작업지/시설물</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        </div>
    )
}

export default PortfolioDetail;