import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
	render () {
		return (
				<div className="left">
					<Post alt="nature" src="https://images.wallpaperscraft.ru/image/gory_ozero_vershiny_129263_3840x2160.jpg"/>
					<Post alt="nature" src="https://avatars.mds.yandex.net/get-pdb/1544563/c6b168f0-1002-480d-b1a2-bfe58d3fe5f6/s1200?webp=false"/>
				</div>
			)
	}
}