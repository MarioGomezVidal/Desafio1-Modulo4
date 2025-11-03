import React from 'react';

function Header(props) {
  return (
    <div className="p-5 mb-4 bg-light rounded-3 text-center">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default Header;