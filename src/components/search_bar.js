import React, {Component} from 'react';

class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state = {term:''};
	}
	render(){
		return ( <div className="search-bar"><input focus=true  placeholder="Search" value={this.state.term} onChange= {event => this.onSearchChange(event.target.value)} />
			
			</div>);
	}
	onSearchChange(term){
		this.setState({term});
		this.props.onSearchBarChange(term);
	}
}

export default SearchBar;