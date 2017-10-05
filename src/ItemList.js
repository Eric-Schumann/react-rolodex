import React from 'react'
import Item from './Item'

const ItemList = ({ list, setSelected, selected }) => {

	this.renderList = () => {
  	return ( list.map(item => { return <Item key={item.name + Math.random()}
    																				 item={ item }
                                             setSelected={ setSelected }
                                             selected={ selected }/>}))
  }

	return (
  	<div className="item-list">
    	{ this.renderList() }
    </div>
  )
}

export default ItemList
