import {Component} from 'react'
import Styles from "./map.module.css"
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from '!mapbox-gl';
import React from 'react'

mapboxgl.accessToken = 'pk.eyJ1IjoiaGlsbG9kZXNpZ24iLCJhIjoiY2w1aXhxcm5pMGIxMTNsa21ldjRkanV4ZyJ9.ztk5_j48dkFtce1sTx0uWw';

export default class SearchMap extends Component {
	constructor(props){
		super(props)
		this.state = {}
	}

	componentDidMount(){

	}

	render(){
		return (
			<div></div>
		)
	}
}