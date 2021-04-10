import React from 'react';

function QuoteCard({ quote }) {
  return (
    quote && (
      <div className='QuoteCard'>
        <img src={quote.image} alt={quote.image} />
        <ul>
          <li>
            {quote.character} 
          </li>
          <li>
            {quote.quote}
          </li>
        </ul>
      </div>
    )
  );
}

export default QuoteCard;