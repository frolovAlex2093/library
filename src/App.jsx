import logo from './assets/images/logo.svg';
import { Add, Find, Header, Sort, Table } from './components';
import React, { useEffect, useState } from 'react';




function App() {
  
  const [buttons, setButtons] = useState([
    {
      id: 0,
      name: 'По ID',
      active: false,
      direction: false
    },
    {
      id: 1,
      name: 'По автору',
      active: false,
      direction: false
    },
    {
      id: 2,
      name: 'По названию',
      active: false,
      direction: false
    },
    {
      id: 3,
      name: 'По жанру',
      active: false,
      direction: false
    },
    {
      id: 4,
      name: 'По серии',
      active: false,
      direction: false
    }
  ]);

  const onClickButtons = id => {
    setButtons(
      buttons.map(button => {
        if (button.id === id) {
          if(button.active)
            button.direction = !button.direction
          else
            button.active = !button.active;
        } else {
          button.active = false;
        }
        return button;
      })
    );
    console.table(buttons)
  };

  return (
    <div className="app">
      <Header></Header>
      <Find></Find>
      <div className="px-20 pt-10">
        <Sort buttons={buttons} onClickButtons={onClickButtons}></Sort>
        <Table></Table>
      </div>
    </div>
  );
}

export default App;
