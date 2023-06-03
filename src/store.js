import { configureStore, createSlice } from "@reduxjs/toolkit";
import hanjin from './img/hj.png'
import soil from './img/soil.png'
import oilbank from './img/oilbank.png'
import lbsall from './img/lbsall.png'

let faqData = createSlice({
    name: 'faqData',
    initialState:
        [
            {
                question: 'React 공부 어떻게 어느정도 하셨나요?',
                answer: `주위에서  ReactJS를 사용하는 개발자 동료에게 강의를 추천받아 지난 일주일기간동안 수강하며 단순히 문법들을 외운것이 아니라 
                     '왜 이런 상황에서 사용해야하고',  '어떻게 사용해야하는가'에 초점을 두고 공부했습니다. React에서의 데이터바인딩, 동적인 UI만드는 절차, 클릭이벤트, 컴포넌트와
                     컴포넌트, Router, 서버와 데이터를 주고받는 axios사용법, Redux사용법까지 기본적인 문법들은 전부 
                     공부했습니다. 그리고 나머지 일주일간은 배운 문법들로 간단한 자기소개페이지를 작성해보는 시간을 가졌습니다.`
            },
            {
                question: '자신의 장점, 본인이 채용되어야하는 이유는 무엇인가요?',
                answer: `저는 무엇이든 끝까지 배우고자하는 끈기, 그리고 팀워크를 향상 시킬 수 있도록하는 공감능력과 직장에서 진행한 프로젝트 경험을 바탕으로 빠르게 배우고 
                    동료들과 적극협조하여 적응해 더 효율적으로 업무를 진행하도록 하겠습니다 감사합니다.`
            }
            , {
                question: '생활신조 또는 좌우명이 있나요?',
                answer: `'최선을 다해 오늘을 살자' 이것이 제 좌우명입니다. 어떻게 사느 것이 행복한 삶인지 자주 생각하고는 했습니다. 하지만 행복의 조건에는 그리 거창한
                    이유가 필요하지 않다는 것을 깨달았습니다. 그저 오늘 주어진 시간 최선을 다하고 보람을 느끼는 것이 사소하지만 큰 행복이라고 생각합니다.
                    매 순간이 인생에 한 번밖에 없는 시간이고, 저에게 있어 가장 젋은 날이라고 생각하며 매사에 최선을 다하는 삶을 살고 있습니다.
                    이제는 웹 개발자라는 직업을 삶의 중심에 두고 매일 매일을 최대한으로, 최선을 다해 살고 싶습니다.`
            }
            , {
                question: '본인이 지원한 직무를 잘 수행할 수 있다고 생각하는 이유와 입사 후 자신의 목표를 설명하십시오.',
                answer: `타인과 함께 일을 할 때 가장 중요한 것은 일에 대한 진정성이라고 생각합니다. 그 일에 대해 관심을 가지고 잘 해내겠다는 목표를 가지고 있으면 나 자신과 타인의 공감대가 형성되어 조직 분위기도 좋아진다고 생각하기 때문입니다.
                    또 그 일을 해냈을 때의 성취감은 말로 표현할 수 없습니다. "일에 대한 진정성", 그 부분에 있어 저는 자신이 있습니다. 좋은 결과를 내지 못했다고 해서 낙담만 하고 있는 것은 아닌 다음번에는 꼭 잘 해내겠다는 생각으로 이전에 했던 실수나 잘못한 부분을 인지하고
                    더 좋은 결과를 내기 위해 노력합니다. 제 목표는 최고의 웹 개발자가 되는 것입니다. 빠른 시간 내에 업무 능력을 갖추어 업무에 많은 도움이 될 수 있도록 저의 가치를 높이도록 하겠습니다. 어릴 적부터 해온 아르바이트 경험, 동아리 경험은
                    웹 개발자가 되기 위한 최적의 교육과정이었다고 생각하며, 그 경험을 바탕으로 항상 아래에서 배우겠다는 자세로 임하겠습니다.`
            }
        ]
})

let portfolioData = createSlice({
    name: 'portfolioData', 
    initialState:
    [
        {
            img: {hanjin},
            name : 'HANJIN',
            period : '2021.04 ~ 2022.05',
            language : 'Javascript, CSS, Html5, Groovy',
            work : '퍼블리싱 20%, 프론트 개발 50%, 백앤드 개발 20%'
        },
        {
            img: {soil},
            name : 'SOIL',
            period : '2021.06 ~ 2021.08',
            language : 'Javascript, CSS, Html5, Groovy',
            work : '퍼블리싱 20%, 프론트 개발 40%, 백앤드 개발 10%'
        },
        {
            img: {oilbank},
            name : 'OILBANK',
            period : '2022.06 ~ 2022.08',
            language : 'Javascript, CSS, Html5, Groovy',
            work : '퍼블리싱 20%, 프론트 개발 30%, 백앤드 개발 20%'
        },
        {
            img: {lbsall},
            name : 'LBSALL',
            period : '2023.03 ~ 2023.05',
            language : 'Javascript, CSS, Html5, Groovy',
            work : '퍼블리싱 20%, 프론트 개발 80%, 백앤드 개발 30%'
        },
    ],
})

let portfolioDetailData = createSlice({
    name : 'portfolioDetailData',
    initialState: [
        {
            id: 0, 
            name: 'HANJIN',
            period : '2021.04 ~ 2022.05',
            language : 'Javascript, CSS, Html5, Groovy',
            work1 : '퍼블리싱 20%',
            work2 : '프론트 개발 60%',
            work3 : '백앤드 개발 20%',
            img1:'./img/gpsHJ.png',
            img2:'./img/conHJ.png',
            img3:'./img/areaHJ.png',
            img4:'./img/gpsHJ.png'
        },
        {
            id: 1,
            name: 'SOIL',
            period : '2021.06 ~ 2021.08',
            language : 'Javascript, CSS, Html5, Groovy',
            work1 : '퍼블리싱 20%',
            work2 : '프론트 개발 40%',
            work3 : '백앤드 개발 10%',
            img1:'./img/gpsSoil.png',
            img2:'./img/conSoil.png',
            img3:'./img/areaSoil.png',
            img4:'./img/vehicleSoil.png'
        },
        {
            id: 2,
            name: 'OILBANK',
            period : '2022.06 ~ 2022.08',
            language : 'Javascript, CSS, Html5, Groovy',
            work1 : '퍼블리싱 20%',
            work2 : '프론트 개발 40%',
            work3 : '백앤드 개발 20%',
            img1:'https://codingapple1.github.io/shop/shoes1.jpg',
            img2:'./img/locationOilbank.png',
            img3:'./img/gpsOilbank.png',
            img4:'./img/locationOilbank.png'
        },
        {
            id: 3,
            name: 'LBSALL',
            period : '2023.03 ~ 2023.05',
            language : 'Javascript, CSS, Html5, Groovy',
            work1 : '퍼블리싱 20%',
            work2 : '프론트 개발 80%',
            work3 : '백앤드 개발 30%',
            img1:'./img/lbsall.png',
            img2:'./img/companyLbs.png',
            img3:'./img/lbsall.png',
            img4:'./img/companyLbs.png'
        }
    ],
    reducers : {
        
    }
})


export let { changeData } = portfolioDetailData.actions

export default configureStore({
    reducer: {
        faqData: faqData.reducer,
        portfolioDetailData : portfolioDetailData.reducer
    }
}) 