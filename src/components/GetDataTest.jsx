import React from 'react';

function GetDataTest({ resoure }) {
  const data = resoure.read();
  console.log('>>>data', data);

  return <div>getDataTest</div>;
}

export default GetDataTest;
