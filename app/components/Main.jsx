var React = require('react');
var Navigation = require('Navigation');

var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <Navigation/>
          <p>Main!</p>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;