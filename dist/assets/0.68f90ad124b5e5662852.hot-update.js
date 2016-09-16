webpackHotUpdate(0,{

/***/ 294:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(155); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(155);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(208);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _reactAddonsUpdate = __webpack_require__(295);\n\nvar _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n__webpack_require__(297);\n__webpack_require__(301);\n\nvar COL_NUM = 3;\nvar COL_WIDTH = 360;\nvar LOAD_MORE_BTN_HEIGHT = 30;\n\nvar imgBoxPropsArr = __webpack_require__(303);\nvar _iteratorNormalCompletion = true;\nvar _didIteratorError = false;\nvar _iteratorError = undefined;\n\ntry {\n  for (var _iterator = imgBoxPropsArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n    var item = _step.value;\n\n    item.src = __webpack_require__(304)(\"./\" + item.fileName);\n  }\n\n  /**\n   * 图片元素组件\n   */\n} catch (err) {\n  _didIteratorError = true;\n  _iteratorError = err;\n} finally {\n  try {\n    if (!_iteratorNormalCompletion && _iterator.return) {\n      _iterator.return();\n    }\n  } finally {\n    if (_didIteratorError) {\n      throw _iteratorError;\n    }\n  }\n}\n\nvar ImgBox = function (_React$Component) {\n  _inherits(ImgBox, _React$Component);\n\n  function ImgBox() {\n    _classCallCheck(this, ImgBox);\n\n    return _possibleConstructorReturn(this, (ImgBox.__proto__ || Object.getPrototypeOf(ImgBox)).apply(this, arguments));\n  }\n\n  _createClass(ImgBox, [{\n    key: 'shouldComponentUpdate',\n\n    /**\n     * 禁止已经加载的组件在加载更多的时候更新\n     */\n    value: function shouldComponentUpdate() {\n      return false;\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      // console.log(this.props.src+' render!');\n      return _react2.default.createElement('img', {\n        className: ['img-box', 'waiting'].join(' '),\n        src: this.props.src + '?' + Date.now(),\n        title: this.props.title,\n        alt: this.props.title,\n        style: this.props.style,\n        onLoad: this.props.resolvePms\n      });\n    }\n  }]);\n\n  return ImgBox;\n}(_react2.default.Component);\n\nvar LoadMoreBtn = function (_React$Component2) {\n  _inherits(LoadMoreBtn, _React$Component2);\n\n  function LoadMoreBtn() {\n    _classCallCheck(this, LoadMoreBtn);\n\n    return _possibleConstructorReturn(this, (LoadMoreBtn.__proto__ || Object.getPrototypeOf(LoadMoreBtn)).apply(this, arguments));\n  }\n\n  _createClass(LoadMoreBtn, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        {\n          className: 'load-more-btn',\n          onClick: this.props.loadMoreImgs\n        },\n        '点击加载更多'\n      );\n    }\n  }]);\n\n  return LoadMoreBtn;\n}(_react2.default.Component);\n\n/**\n * 主应用\n */\n\n\nvar AppComponent = function (_React$Component3) {\n  _inherits(AppComponent, _React$Component3);\n\n  function AppComponent() {\n    _classCallCheck(this, AppComponent);\n\n    var _this3 = _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).call(this));\n\n    _this3.colHeightArr = [0, 0, 0];\n    _this3.state = { imgBoxPropsArr: [] };\n    _this3.isLoading = false;\n    _this3.size = 0;\n    return _this3;\n  }\n\n  /**\n   * 生成闭包函数加载更多图片\n   */\n\n\n  _createClass(AppComponent, [{\n    key: 'genLoadMoreImgsFn',\n    value: function genLoadMoreImgsFn() {\n      var _this4 = this;\n\n      /**\n       * 加载更多，也就是在容器组件的 state 的 imgBoxPropsArr 数组添加元素以触发容器更新\n       */\n      return function (event) {\n        if (!_this4.isLoading) {\n          var newState = (0, _reactAddonsUpdate2.default)(_this4.state, {\n            imgBoxPropsArr: {\n              $push: imgBoxPropsArr\n            }\n          });\n          _this4.setState(newState);\n        }\n      };\n    }\n\n    /**\n     * 容器要挂载时若 state 的 imgBoxPropsArr 数组为空需要加载一次\n     */\n\n  }, {\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      if (this.state.imgBoxPropsArr.length === 0) {\n        this.genLoadMoreImgsFn()();\n      }\n    }\n\n    /**\n     * 将一个 imgboxDOMArr 数组中的元素在容器中以瀑布流布局\n     * 说明： 按顺序插入最矮的一列\n     */\n\n  }, {\n    key: 'waterflow',\n    value: function waterflow(imgboxDOMArr) {\n      var container = _reactDom2.default.findDOMNode(this.refs['img-box-container']);\n      var h = void 0,\n          minH = void 0,\n          minHIdx = void 0,\n          maxH = void 0;\n      var _iteratorNormalCompletion2 = true;\n      var _didIteratorError2 = false;\n      var _iteratorError2 = undefined;\n\n      try {\n        for (var _iterator2 = imgboxDOMArr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n          var item = _step2.value;\n\n          h = item.offsetHeight;\n          minH = Math.min.apply(null, this.colHeightArr);\n          minHIdx = this.colHeightArr.indexOf(minH);\n          this.colHeightArr[minHIdx] += h;\n          maxH = Math.max.apply(null, this.colHeightArr);\n          item.style.top = minH + 'px';\n          item.style.left = minHIdx * COL_WIDTH + 'px';\n        }\n      } catch (err) {\n        _didIteratorError2 = true;\n        _iteratorError2 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion2 && _iterator2.return) {\n            _iterator2.return();\n          }\n        } finally {\n          if (_didIteratorError2) {\n            throw _iteratorError2;\n          }\n        }\n      }\n\n      container.style.height = maxH + LOAD_MORE_BTN_HEIGHT + 10 + 'px';\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this5 = this;\n\n      var imgBoxPropsArr = this.state.imgBoxPropsArr;\n\n      var imgBoxArr = [];\n      var pmsArr = imgBoxPropsArr.map(function (item, index) {\n        return new Promise(function (resolve, reject) {\n          // 用 promise 来封装图片的 load\n          imgBoxArr.push(_react2.default.createElement(ImgBox, {\n            key: index,\n            ref: 'imgBox' + index,\n            classList: [],\n            src: item.src,\n            resolvePms: function resolvePms(event) {\n              console.log(item.src + ' load!');\n              resolve(event.target); // load 完成时 resolve 这个 dom 本身\n            }\n          }));\n        });\n      });\n      pmsArr = pmsArr.slice(this.size); // 除去已加载的\n      this.isLoading = true;\n      console.log('Current size: ' + this.size + ', waiting ' + pmsArr.length + ' promises...');\n      Promise.all(pmsArr).then(function (imgboxDOMArr) {\n        _this5.waterflow(imgboxDOMArr);\n        imgboxDOMArr.forEach(function (item, index) {\n          item.classList.remove('waiting');\n        });\n        _this5.size += imgboxDOMArr.length;\n        _this5.isLoading = false;\n        // alert('OK!');\n      });\n      return _react2.default.createElement(\n        'div',\n        { className: 'img-box-container', ref: 'img-box-container' },\n        imgBoxArr,\n        _react2.default.createElement(LoadMoreBtn, {\n          loadMoreImgs: this.genLoadMoreImgsFn()\n        })\n      );\n    }\n  }]);\n\n  return AppComponent;\n}(_react2.default.Component);\n\nAppComponent.defaultProps = {};\n\nexports.default = AppComponent;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(314); if (makeExportsHot(module, __webpack_require__(155))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"Main.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluLmpzPzdjZDQiXSwibmFtZXMiOlsicmVxdWlyZSIsIkNPTF9OVU0iLCJDT0xfV0lEVEgiLCJMT0FEX01PUkVfQlROX0hFSUdIVCIsImltZ0JveFByb3BzQXJyIiwiaXRlbSIsInNyYyIsImZpbGVOYW1lIiwiSW1nQm94Iiwiam9pbiIsInByb3BzIiwiRGF0ZSIsIm5vdyIsInRpdGxlIiwic3R5bGUiLCJyZXNvbHZlUG1zIiwiQ29tcG9uZW50IiwiTG9hZE1vcmVCdG4iLCJsb2FkTW9yZUltZ3MiLCJBcHBDb21wb25lbnQiLCJjb2xIZWlnaHRBcnIiLCJzdGF0ZSIsImlzTG9hZGluZyIsInNpemUiLCJldmVudCIsIm5ld1N0YXRlIiwiJHB1c2giLCJzZXRTdGF0ZSIsImxlbmd0aCIsImdlbkxvYWRNb3JlSW1nc0ZuIiwiaW1nYm94RE9NQXJyIiwiY29udGFpbmVyIiwiZmluZERPTU5vZGUiLCJyZWZzIiwiaCIsIm1pbkgiLCJtaW5ISWR4IiwibWF4SCIsIm9mZnNldEhlaWdodCIsIk1hdGgiLCJtaW4iLCJhcHBseSIsImluZGV4T2YiLCJtYXgiLCJ0b3AiLCJsZWZ0IiwiaGVpZ2h0IiwiaW1nQm94QXJyIiwicG1zQXJyIiwibWFwIiwiaW5kZXgiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0Iiwic2xpY2UiLCJhbGwiLCJ0aGVuIiwid2F0ZXJmbG93IiwiZm9yRWFjaCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBTEEsbUJBQUFBLENBQVEsR0FBUjtBQUNBLG1CQUFBQSxDQUFRLEdBQVI7O0FBTUEsSUFBTUMsVUFBVSxDQUFoQjtBQUNBLElBQU1DLFlBQVksR0FBbEI7QUFDQSxJQUFNQyx1QkFBdUIsRUFBN0I7O0FB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QUN6QyxlQUFLK0IsU0FBTCxDQUFlL0IsWUFBZjtBQUNBQSxxQkFBYWdDLE9BQWIsQ0FBcUIsVUFBQ3pELElBQUQsRUFBTzZDLEtBQVAsRUFBaUI7QUFDcEM3QyxlQUFLMEQsU0FBTCxDQUFlQyxNQUFmLENBQXNCLFNBQXRCO0FBQ0QsU0FGRDtBQUdBLGVBQUt6QyxJQUFMLElBQWFPLGFBQWFGLE1BQTFCO0FBQ0EsZUFBS04sU0FBTCxHQUFpQixLQUFqQjtBQUNBO0FBQ0QsT0FSRDtBQVNBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxtQkFBZixFQUFtQyxLQUFJLG1CQUF2QztBQUNHeUIsaUJBREg7QUFFRSxzQ0FBQyxXQUFEO0FBQ0Usd0JBQWMsS0FBS2xCLGlCQUFMO0FBRGhCO0FBRkYsT0FERjtBQVFEOzs7O0VBL0Z3QixnQkFBTWIsUzs7QUFvR2pDRyxhQUFhOEMsWUFBYixHQUE0QixFQUE1Qjs7a0JBSWU5QyxZIiwiZmlsZSI6IjI5NC5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcycpO1xucmVxdWlyZSgnc3R5bGVzL0FwcC5zY3NzJyk7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB1cGRhdGUgZnJvbSAncmVhY3QtYWRkb25zLXVwZGF0ZSc7XG5cbmNvbnN0IENPTF9OVU0gPSAzO1xuY29uc3QgQ09MX1dJRFRIID0gMzYwO1xuY29uc3QgTE9BRF9NT1JFX0JUTl9IRUlHSFQgPSAzMDtcblxubGV0IGltZ0JveFByb3BzQXJyID0gcmVxdWlyZSgnLi4vZGF0YS9pbWFnZURhdGFzLmpzb24nKTtcbmZvciAobGV0IGl0ZW0gb2YgaW1nQm94UHJvcHNBcnIpIHtcbiAgaXRlbS5zcmMgPSByZXF1aXJlKCcuLi9pbWFnZXMvJyArIGl0ZW0uZmlsZU5hbWUpO1xufVxuXG5cbi8qKlxuICog5Zu+54mH5YWD57Sg57uE5Lu2XG4gKi9cbmNsYXNzIEltZ0JveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiDnpoHmraLlt7Lnu4/liqDovb3nmoTnu4Tku7blnKjliqDovb3mm7TlpJrnmoTml7blgJnmm7TmlrBcbiAgICovXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9wcy5zcmMrJyByZW5kZXIhJyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxpbWdcbiAgICAgICAgY2xhc3NOYW1lPXtbJ2ltZy1ib3gnLCAnd2FpdGluZyddLmpvaW4oJyAnKX1cbiAgICAgICAgc3JjPXt0aGlzLnByb3BzLnNyYyArICc/JyArIERhdGUubm93KCl9XG4gICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfVxuICAgICAgICBhbHQ9e3RoaXMucHJvcHMudGl0bGV9XG4gICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfVxuICAgICAgICBvbkxvYWQ9e3RoaXMucHJvcHMucmVzb2x2ZVBtc31cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBMb2FkTW9yZUJ0biBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9eydsb2FkLW1vcmUtYnRuJ31cbiAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5sb2FkTW9yZUltZ3N9XG4gICAgICA+XG4gICAgICAgIOeCueWHu+WKoOi9veabtOWkmlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIOS4u+W6lOeUqFxuICovXG5jbGFzcyBBcHBDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY29sSGVpZ2h0QXJyID0gWzAsIDAsIDBdO1xuICAgIHRoaXMuc3RhdGUgPSB7aW1nQm94UHJvcHNBcnI6IFtdfTtcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuc2l6ZSA9IDA7XG4gIH1cblxuICAvKipcbiAgICog55Sf5oiQ6Zet5YyF5Ye95pWw5Yqg6L295pu05aSa5Zu+54mHXG4gICAqL1xuICBnZW5Mb2FkTW9yZUltZ3NGbigpIHtcbiAgICAvKipcbiAgICAgKiDliqDovb3mm7TlpJrvvIzkuZ/lsLHmmK/lnKjlrrnlmajnu4Tku7bnmoQgc3RhdGUg55qEIGltZ0JveFByb3BzQXJyIOaVsOe7hOa3u+WKoOWFg+e0oOS7peinpuWPkeWuueWZqOabtOaWsFxuICAgICAqL1xuICAgIHJldHVybiAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc0xvYWRpbmcpIHtcbiAgICAgICAgbGV0IG5ld1N0YXRlID0gdXBkYXRlKHRoaXMuc3RhdGUsIHtcbiAgICAgICAgICBpbWdCb3hQcm9wc0Fycjoge1xuICAgICAgICAgICAgJHB1c2g6IGltZ0JveFByb3BzQXJyXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOWuueWZqOimgeaMgui9veaXtuiLpSBzdGF0ZSDnmoQgaW1nQm94UHJvcHNBcnIg5pWw57uE5Li656m66ZyA6KaB5Yqg6L295LiA5qyhXG4gICAqL1xuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaW1nQm94UHJvcHNBcnIubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmdlbkxvYWRNb3JlSW1nc0ZuKCkoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5bCG5LiA5LiqIGltZ2JveERPTUFyciDmlbDnu4TkuK3nmoTlhYPntKDlnKjlrrnlmajkuK3ku6XngJHluIPmtYHluIPlsYBcbiAgICog6K+05piO77yaIOaMiemhuuW6j+aPkuWFpeacgOefrueahOS4gOWIl1xuICAgKi9cbiAgd2F0ZXJmbG93KGltZ2JveERPTUFycikge1xuICAgIGxldCBjb250YWluZXIgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnNbJ2ltZy1ib3gtY29udGFpbmVyJ10pO1xuICAgIGxldCBoLCBtaW5ILCBtaW5ISWR4LCBtYXhIO1xuICAgIGZvciAobGV0IGl0ZW0gb2YgaW1nYm94RE9NQXJyKSB7XG4gICAgICBoID0gaXRlbS5vZmZzZXRIZWlnaHQ7XG4gICAgICBtaW5IID0gTWF0aC5taW4uYXBwbHkobnVsbCwgdGhpcy5jb2xIZWlnaHRBcnIpO1xuICAgICAgbWluSElkeCA9IHRoaXMuY29sSGVpZ2h0QXJyLmluZGV4T2YobWluSCk7XG4gICAgICB0aGlzLmNvbEhlaWdodEFyclttaW5ISWR4XSArPSBoO1xuICAgICAgbWF4SCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIHRoaXMuY29sSGVpZ2h0QXJyKTtcbiAgICAgIGl0ZW0uc3R5bGUudG9wID0gbWluSCArICdweCc7XG4gICAgICBpdGVtLnN0eWxlLmxlZnQgPSBtaW5ISWR4ICogQ09MX1dJRFRIICsgJ3B4JztcbiAgICB9XG4gICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IG1heEggKyBMT0FEX01PUkVfQlROX0hFSUdIVCArIDEwICsgJ3B4JztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBpbWdCb3hQcm9wc0FyciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgaW1nQm94QXJyID0gW107XG4gICAgbGV0IHBtc0FyciA9IGltZ0JveFByb3BzQXJyLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHsgLy8g55SoIHByb21pc2Ug5p2l5bCB6KOF5Zu+54mH55qEIGxvYWRcbiAgICAgICAgaW1nQm94QXJyLnB1c2goXG4gICAgICAgICAgPEltZ0JveFxuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgcmVmPXsnaW1nQm94JytpbmRleH1cbiAgICAgICAgICBjbGFzc0xpc3Q9e1tdfVxuICAgICAgICAgIHNyYz17aXRlbS5zcmN9XG4gICAgICAgICAgcmVzb2x2ZVBtcz17KGV2ZW50KT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbS5zcmMgKyAnIGxvYWQhJyk7XG4gICAgICAgICAgICByZXNvbHZlKGV2ZW50LnRhcmdldCk7IC8vIGxvYWQg5a6M5oiQ5pe2IHJlc29sdmUg6L+Z5LiqIGRvbSDmnKzouqtcbiAgICAgICAgICB9fVxuICAgICAgICAgID48L0ltZ0JveD5cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHBtc0FyciA9IHBtc0Fyci5zbGljZSh0aGlzLnNpemUpOyAvLyDpmaTljrvlt7LliqDovb3nmoRcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgY29uc29sZS5sb2coYEN1cnJlbnQgc2l6ZTogJHt0aGlzLnNpemV9LCB3YWl0aW5nICR7cG1zQXJyLmxlbmd0aH0gcHJvbWlzZXMuLi5gKTtcbiAgICBQcm9taXNlLmFsbChwbXNBcnIpLnRoZW4oKGltZ2JveERPTUFycikgPT4ge1xuICAgICAgdGhpcy53YXRlcmZsb3coaW1nYm94RE9NQXJyKTtcbiAgICAgIGltZ2JveERPTUFyci5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3dhaXRpbmcnKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zaXplICs9IGltZ2JveERPTUFyci5sZW5ndGg7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgLy8gYWxlcnQoJ09LIScpO1xuICAgIH0pXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbWctYm94LWNvbnRhaW5lcicgcmVmPSdpbWctYm94LWNvbnRhaW5lcic+XG4gICAgICAgIHtpbWdCb3hBcnJ9XG4gICAgICAgIDxMb2FkTW9yZUJ0blxuICAgICAgICAgIGxvYWRNb3JlSW1ncz17dGhpcy5nZW5Mb2FkTW9yZUltZ3NGbigpfVxuICAgICAgICA+PC9Mb2FkTW9yZUJ0bj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuXG59XG5cbkFwcENvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSB7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IEFwcENvbXBvbmVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTWFpbi5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})