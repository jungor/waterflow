require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import update from 'react-addons-update';

const COL_WIDTH = 360;
const LOAD_MORE_BTN_HEIGHT = 30;

let imgBoxPropsArr = require('../data/imageDatas.json');
for (let item of imgBoxPropsArr) {
  item.src = require('../images/' + item.fileName);
}


/**
 * 图片元素组件
 */
class ImgBox extends React.Component {
  shouldComponentUpdate() {
    return false; //禁止已经加载的组件在加载更多的时候更新
  }
  render() {
    // console.log(this.props.src+' render!');
    return (
      <img className={['img-box', 'waiting'].join(' ')} src={this.props.src + '?' + Date.now()}
        title={this.props.title} alt={this.props.title} style={this.props.style}
        onLoad={this.props.resolvePms} />
    );
  }
}

class LoadMoreBtn extends React.Component {
  render() {
    return (
      <div className={'load-more-btn'} onClick={this.props.loadMoreImgs}>正在加载... </div>
    );
  }
}

/**
 * 主应用
 */
class AppComponent extends React.Component {
  constructor() {
    super();
    this.colHeightArr = [];
    this.offset = 0;
    this.state = {imgBoxPropsArr: []};
    this.isLoading = false;
    this.size = 0;
    this.timerId;
    this.loadMoreImgs = this.loadMoreImgs.bind(this);
    this.reflow = this.reflow.bind(this);
  }

  componentWillMount() {
    // 容器要挂载时若 state 的 imgBoxPropsArr 数组为空需要加载一次
    if (this.state.imgBoxPropsArr.length === 0) {
      this.loadMoreImgs();
    }
  }

  render() {
    let { imgBoxPropsArr } = this.state;
    let imgBoxArr = [];
    let pmsArr = imgBoxPropsArr.map((item, index) => {
      return new Promise(function(resolve, reject) { // 用 promise 来封装图片的 load
        imgBoxArr.push(
          <ImgBox key={index} ref={'imgBox'+index} classList={[]} src={item.src}
          resolvePms={(event)=>{
            console.log(item.src + ' load!');
            resolve(event.target); // load 完成时 resolve 这个 dom 本身
          }} />
        );
      });
    });
    //  已加载的直接 resolve 对应的 dom
    for (let i = 0; i < this.size; i++) {
      pmsArr[i] = Promise.resolve(document.getElementsByClassName('img-box')[i]);
    }
    this.isLoading = true;
    // console.log(`Current size: ${this.size}, waiting ${pmsArr.length} promises...`);
    Promise.all(pmsArr).then((imgboxDOMArr) => {
      this.waterflow(imgboxDOMArr);
      imgboxDOMArr.forEach((item, index) => {
        item.classList.remove('waiting');
      });
      this.size = imgboxDOMArr.length;
      this.isLoading = false;
      document.getElementsByClassName('load-more-btn')[0].textContent = '点击加载更多';
      document.body.classList.remove('waiting');
    })
    return (
      <div className='img-box-container' ref='img-box-container'>
        {imgBoxArr}
        <LoadMoreBtn loadMoreImgs={this.loadMoreImgs} />
      </div>
    );
  }

  componentDidMount() {
    this.adjustColCount();
    window.addEventListener('resize', this.reflow);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.reflow);
  }

  /**
   * 加载更多图片。即在容器组件的 state 的 imgBoxPropsArr 数组添加元素以触发容器更新
   */
  loadMoreImgs() {
    if (this.isLoading) return;
    if (this.size > 0)
      document.getElementsByClassName('load-more-btn')[0].textContent = '正在加载...';
    document.body.classList.add('waiting');
    let newState = update(this.state, {
      imgBoxPropsArr: {
        $push: imgBoxPropsArr
      }
    });
    this.setState(newState);
  }

  /**
   * 计算列数和偏移
   */
  adjustColCount() {
    console.log('adjusting...');
    let width = document.getElementsByClassName('img-box-container')[0].offsetWidth;
    let col = Math.floor(width / COL_WIDTH);
    this.offset = width % COL_WIDTH / 2;
    this.colHeightArr = [];
    for (let i = 0; i < col; i++) {
      this.colHeightArr.push(0);
    }
  }

  /**
   * 将一个 imgboxDOMArr 数组中的元素在容器中以瀑布流布局
   * 说明： 按顺序插入最矮的一列
   */
  waterflow(imgboxDOMArr) {
    console.log('inserting...');
    let container = ReactDOM.findDOMNode(this.refs['img-box-container']);
    let h, minH, minHIdx, maxH;
    // 增量布局： 已经排好的不用再排
    for (let i = this.size; i < imgboxDOMArr.length; i++) {
      let item = imgboxDOMArr[i];
      h = item.offsetHeight;
      minH = Math.min.apply(null, this.colHeightArr);
      minHIdx = this.colHeightArr.indexOf(minH);
      this.colHeightArr[minHIdx] += h;
      maxH = Math.max.apply(null, this.colHeightArr);
      item.style.top = minH + 'px';
      item.style.left = this.offset + minHIdx * COL_WIDTH + 'px';
    }
    container.style.height = maxH + LOAD_MORE_BTN_HEIGHT + 10 + 'px';
  }


  /**
   * 全部重新布局
   */
  reflow() {
    clearTimeout(this.timerId);
    // 延迟 100 毫秒防止调用太频繁。 若 100 毫秒内还有 resize 事件则重新计时
    this.timerId = setTimeout(()=>{
      this.adjustColCount();
      let imgboxDOMArr = document.getElementsByClassName('img-box');
      let size = this.size;
      this.size = 0;
      this.waterflow(imgboxDOMArr);
      this.size = size;
    }, 100);
  }
}

AppComponent.defaultProps = {
};


export default AppComponent;
