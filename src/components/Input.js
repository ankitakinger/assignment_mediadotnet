import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addEmailToList} from '../store/actions/actions';

class Input extends Component{

	state = {
		message: ''
	}

	resetMessage = () => {
	    this.setState({
	      message: ''
	    })
	  }

	 validateEmail = (email) => {
	    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	    let check = false;
	    for(let item in this.props.emailList){
	    	if((this.props.emailList[item].email).includes(email)){
	    		check = true;
	    	}
	    }

	    if(reg.test(email)){
	      if(check){
	        this.setState({
	          message: 'This email is already on the list!'
	        })
	      }
	      else{
	        this.props.addEmailToList(email);
	        this.resetMessage();
	      }
	    }
	    else{
	      this.setState({
	        message: 'You have entered an invalid email!!'
	      })
	    }
	  }

	render(){
		return (
			<div className="Input">
				<div className="em-add">Email Address</div>
				<input className="email" type="email" name="email" id="email" onChange={this.resetMessage}/>
				<button onClick={() => this.validateEmail(document.getElementById('email').value)}>Add</button>
				<div className="message">{this.state.message}</div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Input);