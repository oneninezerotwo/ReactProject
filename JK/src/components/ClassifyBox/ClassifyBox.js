import React from 'react'
import { connect } from 'dva'
import './ClassifyBox.css'
import axios from 'axios';
class Cbox extends React.Component {
    state = {
        boxList: [],
        NavList: []
        // NavList: [
        //     {
        //         id:"191",
        //         categoryName:"男科用药",
        //         sortKey:"0",
        //         adImage: "https://img.tianditao.com/mall/common/201906/ba3fe1c208344ce8bae3dabce46069fe.jpg"
        //     },
        //     {
        //         id:"196",
        //         categoryName:"心血管科",
        //         sortKey:"1",
        //         adImage: "https://img.jianke.com/mall/common/201811/4276f3cf28294e77bdf240e0c7edd023.jpg"
        //     },
        //     {
        //         id:"982",
        //         categoryName:"糖尿病科",
        //         sortKey:"2",
        //         adImage: "https://img.jianke.com/mall/common/201805/3e87ad7610334bb09f4db3038a9d504b.png"
        //     },
        //     {
        //         id:"207",
        //         categoryName:"内分泌科",
        //         sortKey:"3",
        //         adImage: "https://img.jianke.com/app/upload/tangniaobingyao/xunsujiangtang.jpg"
        //     },
        //     {
        //         id:"216",
        //         categoryName:"风湿骨科",
        //         sortKey:"4",
        //         adImage: "https://img.jianke.com/mall/common/201811/ca28eb092bbf4733982dd10826c31364.jpg"
        //     },
        //     {
        //         id:"269",
        //         categoryName:"肝胆科药",
        //         sortKey:"5",
        //         adImage: "https://img5.jianke.com/mall/common/201906/23c9f5e72e744a25aa9799783b6ad85a.jpg"
        //     },
        //     {
        //         id:"230",
        //         categoryName:"肿瘤科药",
        //         sortKey:"6",
        //         adImage: "https://img5.jianke.com/mall/common/201812/8ce95fffd48c4d3f9e6f61ef0e88b6be.jpg?imageslim"
        //     },
        //     {
        //         id:"242",
        //         categoryName:"皮肤科药",
        //         sortKey:"7",
        //         adImage: "https://img.jianke.com/mall/common/201811/22645009d51c4bca86f78fdd9e3a3e68.jpg"
        //     },
        //     {
        //         id:"1023",
        //         sortKey:"8",
        //         categoryName:"艾滋病类",
        //         adImage: "https://img5.jianke.com/mall/common/201811/f88c099653394050a316f4a864d156a2.jpg"
        //     },
        //     {
        //         id:"280",
        //         categoryName:"消化系统",
        //         sortKey:"9",
        //         adImage: "https://img5.jianke.com/mall/common/201812/e4ffe88276344ede98ccaad77cb4a195.jpg?imageslim"
        //     },
        //     {
        //         id:"289",
        //         sortKey:"10",
        //         categoryName:"神经系统",
        //         adImage: "https://img5.jianke.com/mall/common/201812/9c77a408c6ba4920b04db6bfd6fc77e2.jpg?imageslim"
        //     },
        //     {
        //         id:"303",
        //         categoryName:"呼吸系统",
        //         sortKey:"11",
        //         adImage: "https://img5.jianke.com/mall/common/201812/a4be3b8b3c4b49168557561e2275e28d.jpg?imageslim"
        //     },
        //     {
        //         id:"314",
        //         categoryName:"泌尿科药",
        //         sortKey:"12",
        //         adImage: "https://img.jianke.com/app/upload/miniaokeyao/miniaokeyao.jpg"
        //     },
        //     {
        //         id:"319",
        //         categoryName:"女性用药",
        //         sortKey:"13",
        //         adImage: "https://img5.jianke.com/mall/common/201811/2bdfa051685448eba3c20b983ab67852.jpg"
        //     },
        //     {
        //         id:"329",
        //         categoryName:"儿科用药",
        //         sortKey:"14",
        //         adImage: "https://img.jianke.com/app/upload/erkeyongyao/erkeyongyao.jpg"
        //     },
        //     {
        //         id:"335",
        //         categoryName:"日常用药",
        //         sortKey:"15",
        //         adImage: "https://img.jianke.com/mall/common/201811/5fae34ef95d24796a7bba17d17df5506.jpg"
        //     },
        //     {
        //         id:"342",
        //         categoryName:"成人用品",
        //         sortKey:"16",
        //         adImage: "https://img.jianke.com/mall/common/201810/4015a8a23aac49caaebba4116ad333b6.jpg"
        //     },
        //     {
        //         id:"1044",
        //         categoryName:"全球购",
        //         sortKey:"17",
        //         adImage: "https://img5.jianke.com/mall/common/201812/68e6a6b335c549fb804e89dbc5952aa2.jpg?imageslim"
        //     },
        //     {
        //         id:"347",
        //         categoryName:"滋补保健",
        //         sortKey:"18",
        //         adImage: "https://img.jianke.com/mall/common/201811/ce8a62c9fe084707b5994dd5b806e93e.jpg"
        //     },
        //     {
        //         id:"354",
        //         categoryName:"医疗器械",
        //         sortKey:"19",
        //         adImage: "https://img.jianke.com/app/upload/yiliaoqixie/yiliaoqixie.jpg"
        //     },
        //     {
        //         id:"370",
        //         categoryName:"健康服务",
        //         sortKey:"20",
        //         adImage: "https://m.jianke.com/images/list-barnner19.jpg"
        //     },
        //     {
        //         id:"810",
        //         categoryName:"美妆个护",
        //         sortKey:"21",
        //         adImage: "https://img.jianke.com/mall/common/201811/6fcb20429c6d42d6bb8345057314703c.jpg"
        //     }
        // ]
    }
    async componentDidMount() {
        let data = (await axios.get('https://wcgi.jianke.com/category/api/fullCategories?pid=191&platform=1')).data
        let NavList = this.state.NavList
        // console.log(NavList, data)
        this.setState({
            boxList: data,
            NavList: NavList
        })
    }
    async componentDidUpdate() {
        let indexPut = this.props.example.indexPut
        let dataList = this.props.example.NavList
        // console.log(indexPut)
        // console.log(dataList)
        // console.log(dataList[indexPut])
        // console.log(dataList[indexPut] ? dataList[indexPut].id : '191')
        // console.log(this.state.NavList[indexPut].id)
        let gid = dataList[indexPut] ? dataList[indexPut].id : '191'
        // this.state.NavList[indexPut].id
        let data = (await axios.get('https://wcgi.jianke.com/category/api/fullCategories?pid=' + gid + '&platform=1')).data
        // console.log(data)
        this.setState({
            boxList: data,
            NavList: dataList
        })
    }

    render() {
        // console.log(this)
        return (
            <section className="classify-box">
                <div className="classify-list">
                    <div className="classify-ad">
                    {/* {
                        this.state.NavList.map((item,index)=>(

                        ))
                    } */}
                        <a href="https://m-zt.jianke.com/activity/mobile/act-e1258ee5-bd87-4bcc-89bd-bc02d8823dfb?fltjnkyy20190616">
                            <img src="https://img.tianditao.com/mall/common/201906/ba3fe1c208344ce8bae3dabce46069fe.jpg" />
                        </a>
                    </div>
                    <ul>
                        {
                            this.state.boxList.map((item, index) => (
                                <li key={index}>
                                    <img src={item.categoryImage} />
                                    <span>{item.categoryName}</span>
                                </li>
                            ))
                        }

                    </ul>
                </div>
            </section>
        )
    }
}
export default connect((state) => {
    return state
})(Cbox)

