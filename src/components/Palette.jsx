import React, {Component} from 'react';
import ErrorMessage from './ErrorMessage.jsx';
import InstaService from '../services/instaservice.jsx';

export default class Palette extends Component {
	InstaService = new InstaService();
	state = {
		photos: [],
		error: false
	}

	updatePhotos() {
		this.InstaService.getAllPhotos()
		.then(this.onPhotosLoaded)
		.catch(this.onError)
	}

	componentDidMount() {
		this.updatePhotos()
	}

	

	onPhotosLoaded = (photos) => {
		this.setState({
			photos,
			error: false
		});
	};

	onError = (err) => {
		this.setState({
			error: true
		});
	};

	renderItems(arr) {
		return arr.map(item => {
			const {src, alt, id} = item;
			return (
				<img src={src} alt={alt} id={id}></img>
			)
		})
	}

	render() {
		const {error, photos} = this.state;
		if (error) {
			return <ErrorMessage/>
		}

		const items = this.renderItems(photos);

		return (
				<div className="palette">
					{items}
				</div>
			)
	}
}
