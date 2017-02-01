'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

require('./OGNConversationRowHeader.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * OffGrid Components
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Copyright (c) 2017 OffGrid Networks. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * SEE LICENSE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var OGNConversationRowHeader = function (_React$Component) {
	_inherits(OGNConversationRowHeader, _React$Component);

	function OGNConversationRowHeader() {
		_classCallCheck(this, OGNConversationRowHeader);

		return _possibleConstructorReturn(this, (OGNConversationRowHeader.__proto__ || Object.getPrototypeOf(OGNConversationRowHeader)).apply(this, arguments));
	}

	_createClass(OGNConversationRowHeader, [{
		key: 'render',
		value: function render() {
			//this.props.sender
			if ((this.props.date - this.props.prevDate) / (1000 * 60) > 10) return _react2.default.createElement(
				'h6',
				{ className: 'ogn-conversation-row-header text-center' },
				(0, _moment2.default)(this.props.date).fromNow(),
				' (',
				this.props.sender,
				')'
			);else return null;
		}
	}]);

	return OGNConversationRowHeader;
}(_react2.default.Component);

exports.default = (0, _mobxReact.inject)('store')((0, _mobxReact.observer)(OGNConversationRowHeader));