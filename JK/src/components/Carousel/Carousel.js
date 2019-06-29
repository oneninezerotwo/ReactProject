import React from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import axios from 'axios'
class App extends React.Component {
  state = {
    data: [],
    imgHeight: 176,
  }
  async componentDidMount() {
    let data = (await axios.get('https://fe-wcgi.jianke.com/v1/homepage?type=home&platform=mobile')).data[0].rooms
    // console.log(data)
    setTimeout(() => {
      this.setState({
        data
      });
    }, 100);
  }
  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay
          autoplayInterval={3000}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map((item,val) => (
            <a
              key={val}
            //   href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={item.headImg}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
  
  componentWillUnmount() {
    // 卸载异步操作设置状态
    clearTimeout(this.timeouter)
    // this.setState = (state, callback) => {
    //   return
    // }
}
}
export default App
// ReactDOM.render(<App />, mountNode);