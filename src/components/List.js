import React from 'react';
import './List.css';
import {connect} from 'react-redux';
import {removeEmailFromList, updateChecked} from '../store/actions/actions';

const List = (props) => {
	return (
			<table className="List">
				<thead>
					<tr>
						<th>isEnabled</th>
						<th>Email</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{
						props.emailList.map((item, index) => {
							return (
								<tr key={index}>
									<td><input type="checkbox" onChange={() => props.updateChecked(item.email, !item.checked)} checked={item.checked} /></td>
									<td>{item.email}</td>
									<td onClick={() => props.removeEmailFromList(item.email)}><i class="fa fa-trash" aria-hidden="true"></i></td>
								</tr>
							)
						})
					}
				</tbody>
			</table>
		)
}

const mapDispatchToProps = dispatch => {
    return {
        removeEmailFromList: (email) => dispatch(removeEmailFromList(email)),
        updateChecked: (email, value) => dispatch(updateChecked(email, value))
    }
}

export default connect(null,mapDispatchToProps)(List);