// Node require's
const electron = window.require('electron');

// Browserify includes
window.React = require('react');
window.jQuery = require('../../node_modules/jquery/dist/jquery');
require('../../node_modules/bootstrap/dist/js/bootstrap');

const ReactDOM = require('react-dom');
const Index = require('./components/index');

// Initialize settings
require('./init.js')();

// Listen for events
require('./upload.js')();

// Initialize react code
ReactDOM.render(
  <Index />,
  document.getElementById('content')
);
