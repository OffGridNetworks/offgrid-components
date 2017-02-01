'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

require('./OGNCardChatBubble.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * OffGrid Components
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Copyright (c) 2017 OffGrid Networks. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * SEE LICENSE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var OGNCardChatBubble = function (_React$Component) {
	_inherits(OGNCardChatBubble, _React$Component);

	function OGNCardChatBubble() {
		_classCallCheck(this, OGNCardChatBubble);

		return _possibleConstructorReturn(this, (OGNCardChatBubble.__proto__ || Object.getPrototypeOf(OGNCardChatBubble)).apply(this, arguments));
	}

	_createClass(OGNCardChatBubble, [{
		key: 'render',
		value: function render() {

			var item = this.props.item;
			var text = item["urn:consumer:message:text"];
			var senderid = item["urn:consumer:id"];

			if (senderid !== "ai:offgrid") {
				return _react2.default.createElement(
					'div',
					{ className: 'my-chat-bubble' },
					text
				);
			} else {
				return _react2.default.createElement(
					'div',
					{ className: 'receiver-chat-bubble' },
					text
				);
			}
		}
	}]);

	return OGNCardChatBubble;
}(_react2.default.Component);

OGNCardChatBubble.propTypes = {
	item: _react2.default.PropTypes.object.isRequired
};
exports.default = (0, _mobxReact.inject)('store')((0, _mobxReact.observer)(OGNCardChatBubble));