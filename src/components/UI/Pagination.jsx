import React from 'react';
import './Pagination.scss';

const Pagination = ({ charactersPerPage, totalCharacters, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <section className='pagination_section'>
      <nav>
        <ul className='pagination'>
          {pageNumbers.map(number => (
            <li key={number} className='page-item'>
              <a onClick={() => paginate(number)} className='page-link'>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Pagination;