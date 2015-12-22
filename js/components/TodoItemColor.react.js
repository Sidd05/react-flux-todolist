'use strict';

import React, {Component} from 'react';
import classnames from 'classnames';

type State = {
  showColorList: boolean,
};

export default class TodoItemColor extends Component<{}, Props, State> {

	state = {
		showColorList : false
	}

	render(): ?ReactElement {

		const colors = ['red','green'];

		let colorListItems = colors.map((color) => {
			return <li 
				className={color} 
				data-color={color} 
				key={color}
				onClick={this._onChangeColor} />
		})

		let colorList =
			<ul className={classnames(
					'color-list',{
		         'show': this.state.showColorList,
		       })}>
				{colorListItems}
			</ul>;

		return (
			<div className="color-selector">
				{colorList}
				<div 
					className="color-button"
					onClick={this._toggle}/>
			</div>
		);
	}

	_toggle = () => {
		this.setState({showColorList:!this.state.showColorList});
	}

	_onChangeColor = (e) => {
		this.props.onChangeColor(e.target.dataset.color);
		this._toggle();
	}

}