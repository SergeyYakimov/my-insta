import React from 'react';
import User from './User';

export default function Users() {
	return (
		<div className="right">
			<User src="http://odnaonline.ru/wp-content/uploads/2017/01/kianu1.jpg" alt="Neo" name="Neo"/>
			<div className="users__block">
				<User src="http://odnaonline.ru/wp-content/uploads/2017/01/kianu1.jpg" alt="Neo" name="Neo" min/>
				<User src="http://odnaonline.ru/wp-content/uploads/2017/01/kianu1.jpg" alt="Neo" name="Neo" min/>
				<User src="http://odnaonline.ru/wp-content/uploads/2017/01/kianu1.jpg" alt="Neo" name="Neo" min/>
				<User src="http://odnaonline.ru/wp-content/uploads/2017/01/kianu1.jpg" alt="Neo" name="Neo" min/>
			</div>

		</div>

		)
}