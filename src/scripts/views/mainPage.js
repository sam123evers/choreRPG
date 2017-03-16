import React from 'react'

var RPGWindow = React.createClass({
 	getInitialState: function(){
		return {
			strength: 0,
			knowledge: 0,
			cleaned: 0,
			vitality: 0,
			choresdone: 0
		}
	},

	_addStrength: function() {
		console.log('add strength function')
		this.setState({
			strength: this.state.strength + 1,
			choresdone: this.state.choresdone + 1
		})

	},

	_addKnowledge: function() {
		this.setState({
			knowledge: this.state.knowledge + 1,
			choresdone: this.state.choresdone + 1
		})
	},

	_addHygiene: function() {
		this.setState({
			cleaned: this.state.cleaned + 1,
			choresdone: this.state.choresdone + 1
		})
	},

	_addGutBacteria: function() {
		this.setState({
			vitality: this.state.vitality + 1,
			choresdone: this.state.choresdone + 1
		})
	},

	_reset: function() {
		this.setState({
			
				strength: 0,
				knowledge: 0,
				cleaned: 0,
				vitality: 0,
				choresdone: 0
			
		})
	},



	render: function() {
		return(
			<div className="main-page">
				<div className="buttons">
					<div className="button-div" onClick={this._addStrength}>90 second L-sit hang</div>
					<div className="button-div" onClick={this._addKnowledge}>read a book</div>
					<div className="button-div" onClick={this._addHygiene}>clean a dish</div>
					<div className="button-div" onClick={this._addGutBacteria}>ingest probiotics</div>
					<div className="button-div" onClick={this._reset}>go on a bender</div>

				</div>
				<div className="stats">
					<p>strength:{this.state.strength}</p>
					<p>knowledge:{this.state.knowledge}</p>
					<p>dishes cleaned:{this.state.cleaned}</p>
					<p>vitality:{this.state.vitality}</p>
					<p>chores done:{this.state.choresdone}</p>
				</div>
			</div>
		)
	}
})





	


export default RPGWindow