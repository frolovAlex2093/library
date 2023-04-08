import React from 'react';
import {  faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Add = () => {
  return (
    <>
      {/* The button to open modal */}

        <label htmlFor="my-modal" className="btn">
          Добавить книгу
          <FontAwesomeIcon className='ml-3' icon={faBookOpen} />
        </label>
        
     
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="mb-4 text-lg font-bold">Книга!</h3>

          <input
            type="text"
            placeholder="Название"
            className="input-bordered input-primary input mb-4 w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Автор"
            className="input-bordered input-accent input mb-4 w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Жанр"
            className="input-bordered input-info input mb-4 w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Серия"
            className="input-bordered input-success input w-full max-w-xs"
          />

          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Создать!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
