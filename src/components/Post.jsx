import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
	render () {
		return (<div className="post">
			<User src="http://odnaonline.ru/wp-content/uploads/2017/01/kianu1.jpg" alt="Neo" name="Neo" min/>
			<img src={this.props.src} alt={this.props.alt}></img>
			<div className="post__name">
				some account
			</div>
			<div className="post__descr">
				some text...
			</div>
		</div>)
	}
}
