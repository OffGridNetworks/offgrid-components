'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

require('./OGNSideBar.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * OffGrid Components
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Copyright (c) 2017 OffGrid Networks. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * SEE LICENSE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var OGSideBar = function (_React$Component) {
    _inherits(OGSideBar, _React$Component);

    function OGSideBar() {
        _classCallCheck(this, OGSideBar);

        var _this = _possibleConstructorReturn(this, (OGSideBar.__proto__ || Object.getPrototypeOf(OGSideBar)).call(this));

        _this.state = {
            sidebaropen: false
        };
        return _this;
    }

    _createClass(OGSideBar, [{
        key: 'handleClose',
        value: function handleClose() {
            this.setState({ sidebaropen: !this.state.sidebaropen });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'hamburger' + this.props.store.uistate.screenSize.width },
                _react2.default.createElement('input', { type: 'checkbox', id: 'ogn-sidebar-hamburger', className: 'ogn-sidebar-hamburger', onChange: this.handleClose.bind(this), checked: this.state.sidebaropen }),
                _react2.default.createElement('label', { htmlFor: 'ogn-sidebar-hamburger' }),
                _react2.default.createElement(
                    'div',
                    { className: 'ogn-sidebar' },
                    _react2.default.createElement('a', { href: '#', className: 'ogn-sidebar-close', onClick: this.handleClose.bind(this) }),
                    _react2.default.createElement(
                        'div',
                        { className: 'ogn-sidebar-content' },
                        this.props.children
                    )
                )
            );
        }
    }]);

    return OGSideBar;
}(_react2.default.Component);

exports.default = (0, _mobxReact.inject)('store')((0, _mobxReact.observer)(OGSideBar));