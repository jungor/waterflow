require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import update from 'react-addons-update';

const COL_NUM = 3;
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
  /**
   * 禁止已经加载的组件在加载更多的时候更新
   */
  shouldComponentUpdate() {
    return false;
  }

  render() {
    // console.log(this.props.src+' render!');
    return (
      <img
        className={['img-box', 'waiting'].join(' ')}
        src={this.props.src + '?' + Date.now()}
        title={this.props.title}
        alt={this.props.title}
        style={this.props.style}
        onLoad={this.props.resolvePms}
      />
    );
  }
}

class LoadMoreBtn extends React.Component {
  render() {
    return (
      <div
        className={'load-more-btn'}
        onClick={this.props.loadMoreImgs}
      >
        正在加载...
      </div>
    );
  }
}

/**
 * 主应用
 */
class AppComponent extends React.Component {
  constructor() {
    super();
    this.colHeightArr = [0, 0, 0];
    this.state = {imgBoxPropsArr: []};
    this.isLoading = false;
    this.size = 0;
  }

  /**
   * 生成闭包函数加载更多图片
   */
  genLoadMoreImgsFn() {
    /**
     * 加载更多，也就是在容器组件的 state 的 imgBoxPropsArr 数组添加元素以触发容器更新
     */
    return (event) => {
      if (!this.isLoading) {
        if (event) {
          event.target.textContent = '正在加载...';
          document.body.classList.add('waiting');
        }
        let newState = update(this.state, {
          imgBoxPropsArr: {
            $push: imgBoxPropsArr
          }
        });
        this.setState(newState);
      }
    }
  }

  /**
   * 容器要挂载时若 state 的 imgBoxPropsArr 数组为空需要加载一次
   */
  componentWillMount() {
    if (this.state.imgBoxPropsArr.length === 0) {
      this.genLoadMoreImgsFn()();
    }
  }

  /**
   * 将一个 imgboxDOMArr 数组中的元素在容器中以瀑布流布局
   * 说明： 按顺序插入最矮的一列
   */
  waterflow(imgboxDOMArr) {
    let container = ReactDOM.findDOMNode(this.refs['img-box-container']);
    let h, minH, minHIdx, maxH;
    for (let item of imgboxDOMArr) {
      h = item.offsetHeight;
      minH = Math.min.apply(null, this.colHeightArr);
      minHIdx = this.colHeightArr.indexOf(minH);
      this.colHeightArr[minHIdx] += h;
      maxH = Math.max.apply(null, this.colHeightArr);
      item.style.top = minH + 'px';
      item.style.left = minHIdx * COL_WIDTH + 'px';
    }
    container.style.height = maxH + LOAD_MORE_BTN_HEIGHT + 10 + 'px';
  }

  render() {
    let { imgBoxPropsArr } = this.state;
    let imgBoxArr = [];
    let pmsArr = imgBoxPropsArr.map((item, index) => {
      return new Promise(function(resolve, reject) { // 用 promise 来封装图片的 load
        imgBoxArr.push(
          <ImgBox
          key={index}
          ref={'imgBox'+index}
          classList={[]}
          src={item.src}
          resolvePms={(event)=>{
            console.log(item.src + ' load!');
            resolve(event.target); // load 完成时 resolve 这个 dom 本身
          }}
          ></ImgBox>
        );
      });
    });
    pmsArr = pmsArr.slice(this.size); // 除去已加载的
    this.isLoading = true;
    console.log(`Current size: ${this.size}, waiting ${pmsArr.length} promises...`);
    Promise.all(pmsArr).then((imgboxDOMArr) => {
      this.waterflow(imgboxDOMArr);
      imgboxDOMArr.forEach((item, index) => {
        item.classList.remove('waiting');
      });
      this.size += imgboxDOMArr.length;
      this.isLoading = false;
      let btn = document.getElementsByClassName('load-more-btn')[0];
      btn.textContent = '点击加载更多';
      document.body.classList.remove('waiting');

      // alert('OK!');
    })
    return (
      <div className='img-box-container' ref='img-box-container'>
        {imgBoxArr}
        <LoadMoreBtn
          loadMoreImgs={this.genLoadMoreImgsFn()}
        ></LoadMoreBtn>
      </div>
    );
  }


}

AppComponent.defaultProps = {
};


export default AppComponent;
