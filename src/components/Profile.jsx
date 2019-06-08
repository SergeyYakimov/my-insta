import React from 'react';
import User from './User.jsx';
import Palette from './Palette.jsx';

const Profile = () => {
	return (
		<div className="container profile">
		  <User 
		     src="https://avatars.mds.yandex.net/get-pdb/1350527/b2fec881-8b10-4c13-97a4-4c50a7c0eb13/s1200?webp=false"
		     alt="Man"
		     name='some_cool_man'/>

		     <Palette/>
		</div>
	)
}

export default Profile;