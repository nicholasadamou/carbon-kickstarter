import React from 'react';

import './Card.scss';

const Card  = ({ children }) => (
	<div className="card">
	  <div className="face">{children}
	  <br />
	  </div>
	</div>
)

export default Card;
