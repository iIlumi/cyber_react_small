import React from 'react';

export default function HandleEventRFC() {
  const handleClick = () => {
    alert('rfc handle');
  };
  return (
    <div>
      <h1 className="text-success">RFC event handle</h1>
      <button onClick={handleClick}>Click me</button>
      <button data-toggle="modal" data-target="#modelCarStore">
        Test modal SPA
      </button>
    </div>
  );
}
