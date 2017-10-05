import React from 'react'

const DetailsView = ({ selected }) => {
  	return (
      	<div className="details-view">
        	<div><strong>Name:</strong> { selected.name }</div>
        	<div><strong>Phone:</strong> { selected.phone }</div>
        	<div><strong>Email:</strong> { selected.email }</div>
          <div className="photo-container">
        		<img src={ selected.photo } alt={ selected.name }/>
        	</div>
      	</div>
	  )
}

export default DetailsView
