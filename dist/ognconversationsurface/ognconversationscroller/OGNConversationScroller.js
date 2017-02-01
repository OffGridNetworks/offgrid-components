'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _OGNComponents = require('./../../OGNComponents');

var _mobxReact = require('mobx-react');

require('./OGNConversationScroller.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * OffGrid Components
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Copyright (c) 2017 OffGrid Networks. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * SEE LICENSE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var OGNConversationScroller = function (_React$Component) {
  _inherits(OGNConversationScroller, _React$Component);

  function OGNConversationScroller() {
    _classCallCheck(this, OGNConversationScroller);

    return _possibleConstructorReturn(this, (OGNConversationScroller.__proto__ || Object.getPrototypeOf(OGNConversationScroller)).apply(this, arguments));
  }

  _createClass(OGNConversationScroller, [{
    key: 'scrollWindow',
    value: function scrollWindow() {
      console.log("RESIZE");
      window.scrollTo(0, document.body.scrollHeight);
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.scrollWindow();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener("resize", this.scrollWindow);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.scrollWindow);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.scrollWindow();
    }
  }, {
    key: 'render',
    value: function render() {
      var lastDate = new Date(0);
      var listItems = this.props.store.messages.items.map(function (item, index) {
        var itemDate = new Date(item["urn:consumer:timestamp"] || null);
        var sender = item["urn:consumer:id"];
        var prevDate = lastDate;
        lastDate = itemDate;
        return _react2.default.createElement(
          'div',
          { key: index },
          _react2.default.createElement(_OGNComponents.OGNConversationRowHeader, { sender: sender, date: itemDate, prevDate: prevDate }),
          _react2.default.createElement(_OGNComponents.OGNCard, { item: item })
        );
      });
      return _react2.default.createElement(
        'div',
        { className: 'ogn-conversation-scroller', ref: 'scrollView' },
        listItems
      );
    }
  }]);

  return OGNConversationScroller;
}(_react2.default.Component);

exports.default = (0, _mobxReact.inject)('store')((0, _mobxReact.observer)(OGNConversationScroller));