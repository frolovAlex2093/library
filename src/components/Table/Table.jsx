import React from 'react';
import {  faPaw } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full p-9">
        {/* head */}
        <thead>
          <tr>
            <th>id</th>
            <th>Автор</th>
            <th>Название</th>
            <th>Жанр</th>
            <th>Серия</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td></td>
            <td><button><FontAwesomeIcon icon={faPaw} className='transition ease-in-out delay-150 hover:text-amber-500'/></button></td>
          </tr>
          {/* row 2 */}
          <tr className="active">
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
            <td>qwerty</td>
            <td><button><FontAwesomeIcon icon={faPaw} className='hover:text-amber-500'/></button></td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
            <td></td>
            <td><button><FontAwesomeIcon icon={faPaw} className='hover:text-amber-500'/></button></td>
          </tr>
           {/* row 2 */}
           <tr className="active">
            <th>4</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
            <td></td>
            <td><button><FontAwesomeIcon icon={faPaw} className='hover:text-amber-500'/></button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
