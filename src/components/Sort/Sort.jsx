//import React from 'react';
import React, { useEffect, useState } from 'react';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Sort = ({ buttons, onClickButtons }) => {
  return (
    <div className="btn-group mb-10">
      {buttons.map(button => {
        return (
          <button
            onClick={() => onClickButtons(button.id)}
            className={
              button.active
                ? 'btn-active btn flex'
                : 'btn flex border-2 border-solid border-violet-950'
            }
            key={button.id}
          >
            {button.name}
            {button.direction ? (
              <FontAwesomeIcon className="ml-3" icon={faArrowUp} />
            ) : (
              <FontAwesomeIcon className="ml-3" icon={faArrowDown} />
            )}
          </button>
        );
      })}
      {/* <button className="btn-active btn">По ID</button>
      <button className="btn">По автору</button>
      <button className="btn">По названию</button>
      <button className="btn">По жанру</button>
      <button className="btn">По серии</button> */}
    </div>
  );
};
