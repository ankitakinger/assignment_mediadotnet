import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addEmailToList} from '../store/actions/actions';
import List from './List';

class Display extends Component{

	state = {
	    enabled: false,
	    searched: ''
	}

	toggleEnabled = () => {
		this.setState({
		  enabled: !this.state.enabled
		});
	}

	updateSearch = () => {
		this.setState({
			searched: document.getElementById('search').value
		})
	}

	render(){
		let enabledList = this.props.emailList;
		if(this.state.enabled){
			enabledList = this.props.emailList.filter((item) => {
				if(item.checked){
					return item;
				}
				else{
					return
				}
			})
		}

		if(this.state.searched){
			let searchedList = [];
			for(let item in this.props.emailList){
				let text = this.props.emailList[item].email;
				if(text.includes(this.state.searched)){
					searchedList.push(this.props.emailList[item]);
				}
			}
			enabledList = searchedList;
		}

		return (
			<div className="Form">
				{
					this.props.emailList.length!==0 &&
					<div>
						<div className="search-container">
							<button className="search-btn" disabled>Search</button>
							<input className="searchBox" type="text" name="search" id="search"/>
							<button onClick={this.updateSearch}>Go</button>
						</div>
						<input className="enabled" type="checkbox" name="show_enabled" onChange={this.toggleEnabled} checked={this.state.enabled}/> Show only enabled
						<List emailList={enabledList} />
					
					</div>
				}
	        </div>
		);
	}
}

const mapStateToProps = state => {
  return {
      emailList: state.emailList
  }
}

const mapDispatchToProps = dispatch => {
    return {
        addEmailToList: (email) => dispatch(addEmailToList(email))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Display);