import { css } from '@emotion/react';
import React from 'react';
import { Add } from '../Add/Add';

export const Find = () => {
  return (
    <div className="flex w-full bg-purple-900 justify-center p-5">
      <input
        type="text"
        placeholder="Введите текст..."
        className="input-bordered input w-full max-w-xs mr-4"
      />
      <select className="select w-25 max-w-xs h-auto mr-5" defaultValue={"Режим поиска"}>
        <option disabled selected >
          Режим поиска
        </option>
        <option >Автор</option>
        <option>Название</option>
        <option>Жанр</option>
        <option>Серия</option>
        <option>ID</option>
      </select>
      <button className="btn btn-secondary mr-9  hover:bg-indigo-400">Найти!</button>
      <Add></Add>
    </div>
  );
};
