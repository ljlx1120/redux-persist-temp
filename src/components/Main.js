import React from 'react';

export const Main = (props) => {
  return (
    <div>
    <h3>Main Page</h3>
      <button className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" onClick={props.changeUsername}>Change</button>
      <button className="bg-purple hover:bg-purple-dark text-white py-2 px-4 rounded" onClick={props.logout}>Log Out</button>
  </div>
  );
}
