'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ogn_logo = require('./ogn_logo.svg');

var _ogn_logo2 = _interopRequireDefault(_ogn_logo);

require('./OGNAppBar.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { className: 'ogn-app-bar' },
    _react2.default.createElement('img', { src: _ogn_logo2.default, className: 'ogn-app-bar-logo', alt: 'logo' })
  );
}; /*
   * OffGrid Components
   *
   * Copyright (c) 2017 OffGrid Networks. All Rights Reserved.
   * SEE LICENSE
   */