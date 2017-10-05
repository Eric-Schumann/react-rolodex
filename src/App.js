import React from 'react'
import ItemList from './ItemList'
import DetailsView from './DetailsView'

class App extends React.Component {

	constructor(props) {
  	super(props)
    this.state = {
    	list: [
      	{ name: "Eric Schumann", phone: "417-209-8707", email: "eric.schumann82@gmail.com", photo: "http://placekitten.com/500/110"},
        { name: "Laura Schumann", phone: "417-763-0623", email: "laura.schumann83@gmail.com", photo:  "http://via.placeholder.com/500x110"},
        { name: "Spencer Schumann", phone: "417-209-8707", email: "spencer.schumann16@gmail.com", photo: "http://placekitten.com/500/110"},
        { name: "Jimmy Rainbolt", phone: "417-209-1233", email: "rainbolt.reptiles@gmail.com", photo: "http://via.placeholder.com/500x110"},
        { name: "Stacie Merritt", phone: "417-588-2300", email: "stacies.mom@gmail.com", photo: "http://placekitten.com/500/110"},
        { name: "Derek Jones", phone: "417-578-4216", email: "big.red@gmail.com", photo: "http://via.placeholder.com/500x110"},
				{ name: "Travis Washeck", phone: "900-Sik-Puppy", email: "me-no-likey@gmail.com", photo: "https://s-media-cache-ak0.pinimg.com/originals/fa/94/c2/fa94c2e10ff0d50a2018b024b0e0f4b3.jpg" }
      ],
      selectedItem: { name: "Eric Schumann", phone: "417-209-8707", email: "eric.schumann82@gmail.com", photo: "http://placekitten.com/500/110"}
    }
    this.setSelectedItem = this.setSelectedItem.bind(this)
  }

  setSelectedItem(item) {
  	this.setState({
    	selectedItem: item
    })
  }

  render() {
    return (
      <div>
        <h1 className="page-header">{"React.js"} Rolodex</h1>
        <div className="container">
      	 <ItemList list={this.state.list} setSelected={this.setSelectedItem} selected={ this.state.selectedItem }/>
          <DetailsView selected={this.state.selectedItem} />
          <div className="clearfix"></div>
        </div>
      </div>
    )
  }

}

export default App;
