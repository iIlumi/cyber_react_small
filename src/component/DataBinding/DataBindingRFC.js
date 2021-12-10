/**
 * Đối với functional, practice là với các biến ko tham gia vào binding nên đê ngoài function !
 * Cơ bản thì đặt ở vị trí nào cũng ok
 */

import React from 'react';

const job = 'jedi';

const character2 = {
  name: 'Yoda',
  charClass: 'teacher',
};

export default function DataBindingRFC() {
  const bindingStyle = 'functional';

//   Đối với rfc khi gọi thì ko có this
  const renderInfoVirusFunc = () => {
    const virus = {
      id: 'covid-19',
      name: 'corona',
      img: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      alias: 'SARS-CoV-2',
    };
    return (
      <div className="card text-white bg-primary w-25 h-25">
        <img className="card-img-top" src={virus.img} alt={virus.id} />
        <div className="card-body">
          <h4 className="card-title">{virus.name}</h4>
          <p className="card-text">{virus.alias}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h1>
        Data Binding RFC - <span className="text-danger">{bindingStyle}</span>
      </h1>
      <h2>
        {character2.charClass} - {character2.name} is also a {job}
      </h2>
      {renderInfoVirusFunc()}
    </div>
  );
}
