import React from 'react'

const Item = ({ item, setSelected, selected }) => {
	return (
  	<div className={"item " + (item.name === selected.name ? "selected" : "") } onClick={() => { setSelected(item) }}>
    	{ item.name }
    </div>
  )
}

export default Item
