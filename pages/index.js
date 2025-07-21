import axios from "axios"
import Head from 'next/head'
import Image from 'next/image'
import {Component} from "react"
import styles from '../styles/Home.module.css'

import Map from "../components/Map"

export default class Home extends Component {
	constructor(props){
    	super(props)

    	this.state = {
    		addingShop: false,
    		findingShop: false,
    		markerData: {lng: "105.1", lat: "21.02"},
    		mechanics: [
    			{
    				name: "mechanic1",
    				salary: 10000,
    				rating: 3,
    				image: "mechanics1.png",
    				lng: 105.807818099821,
    				lat: 21.037807303285422
    			}, 
    			{
    				name: "mechanic2",
    				salary: 20000,
    				rating: 4,
    				image: "mechanic2.png",
    				lng: 105.81445656625824,
    				lat: 21.04189160475326
    			},
    			{
    				name: "mechanic3",
    				salary: 30000,
    				rating: 5,
    				image: "mechanics1.png",
    				lng: 105.81562090173601,
    				lat: 21.03776134023114
    			},
    			{
    				name: "mechanic4",
    				salary: 200000,
    				rating: 4,
    				image: "mechanic2.png",
    				lng: 105.81682796868223,
    				lat: 21.042008663852894
    			},
    			{
    				name: "mechanic5",
    				salary: 200000,
    				rating: 3,
    				image: "mechanic2.png",
    				lng: 105.81242449251258,
    				lat: 21.020319692267066
    			},
    			{
    				name: "mechanic6",
    				salary: 200000,
    				rating: 2,
    				image: "mechanics1.png",
    				lng: 105.8129709220123,
    				lat: 21.02751950787956,
    			},
    			{
    				name: "mechanic7",
    				salary: 200000,
    				rating: 1,
    				image: "mechanics1.png",
    				lng: 105.81719190969132,
    				lat: 21.03375096621898,
    			},
    			{
    				name: "mechanic11",
    				salary: 200000,
    				rating: 2,
    				image: "mechanics1.png",
    				lng: 105.80973804649545,
    				lat: 21.035345418723324,
    			},
    			{
    				name: "mechanic8",
    				salary: 200000,
    				rating: 3,
    				image: "mechanics1.png",
    				lng: 105.80785248813795,
    				lat: 21.03277572653985,
    			},
    			{
    				name: "mechanic9",
    				salary: 200000,
    				rating: 4,
    				image: "mechanics1.png",
    				lng: 105.81957607180475,
    				lat: 21.030444994601307,
    			},
    			{
    				name: "mechanic10",
    				salary: 200000,
    				rating: 5,
    				image: "mechanics1.png",
    				lng: 105.80687904967057,
    				lat: 21.02824590896404,
    			}
    		],
    		filteredMechanics: [],
    		queryArea: [
    			{
    				name: "mechanic1",
    				salary: 10000,
    				rating: 8.9,
    				image: "mechanics1.png",
    				lng: 105.807818099821,
    				lat: 21.037807303285422
    			}
    		],
    		newMechanicName: 'Hoang Do',
    		newMechanicSalary: 100000,
    		newMechanicRating: 9.01,
    		newMechanicImage: 'hoangdo.png',
    		newShopLongitude: '105.81846399096837',
    		newShopLatitude: '21.030607392553065',
    	}

    	this.listShop = this.listShop.bind(this)
    	this.addNewShop = this.addNewShop.bind(this)
    	this.addMechanicName = this.addMechanicName.bind(this)
    	this.addMechanicSalary = this.addMechanicSalary.bind(this)
    	this.addMechanicRating = this.addMechanicRating.bind(this)
    	this.addMechanicImage = this.addMechanicImage.bind(this)
    	this.addShopLatitude = this.addShopLatitude.bind(this)
    	this.addShopLongitude = this.addShopLongitude.bind(this)

    	this.cancelShopListing = this.cancelShopListing.bind(this)

    	this.findShop = this.findShop.bind(this)

    	this.filterBySalary = this.filterBySalary.bind(this)
    	this.filterByRating = this.filterByRating.bind(this)
	}

	async listShop(){
		console.log("Listing Shop")
		this.setState({
			addingShop: true
		})
	}

	async addMechanicName(event){
		console.log(event.target.value)
		this.setState({
			newMechanicName: event.target.value
		})
	}

	async addMechanicSalary(event){
		this.setState({
			newMechanicSalary: event.target.value
		})
	}

	async addMechanicRating(event){
		this.setState({
			newMechanicRating: event.target.value
		})
	}

	async addMechanicImage(){
		this.setState({
			newMechanicImage: event.target.value
		})
	}

	async addShopLatitude(){
		this.setState({
			newShopLatitude: event.target.value
		})
	}

	async addShopLongitude(){
		this.setState({
			newShopLatitude: event.target.value
		})
	}

	async addNewShop(){
		let mechanicList = this.state.mechanics
		mechanicList.push({
			name: this.state.newMechanicName,
			salary: this.state.newMechanicSalary,	
			rating: this.state.newMechanicRating,
    		image: this.state.newMechanicImage,
    		lng: this.state.newShopLongitude,
    		lat: this.state.newShopLatitude,
		})

		this.setState({
			addingShop: false,
			findingShop: false,
			mechanics: mechanicList
		})

		// window.location.reload()
	}

	async cancelShopListing(){
		this.setState({
			addingShop: false
		})
	}

	async findShop(){
		let allMechanics = this.state.mechanics
		this.setState({
			findingShop: true,
			filteredMechanics: allMechanics
		})

		console.log("Finding Shop ", this.state.findingShop)
		// window.location.reload()
	}

	async filterBySalary(event){
		let salary = event.target.value
		let allMechanics = this.state.mechanics

		let filteredMechanics = allMechanics.filter(mechanic => mechanic.salary < salary)
		this.setState({
			filteredMechanics: filteredMechanics
		})
	}

	async filterByRating(event){
		let rating = event.target.value
		let allMechanics = this.state.mechanics

		let filteredMechanics = allMechanics.filter(mechanic => mechanic.rating > rating)
		this.setState({
			filteredMechanics: filteredMechanics
		})
	}

	componentDidMount(){
	}

	render(){
		return (
			<div className={styles.container}>
				<div className={styles.topNavBar}>
					<div className={styles.logoContainer}>
						<a href="/"><img src="BRUM.svg" /></a>
					</div>
					<div className={styles.brandName}>
						<a href="/">BRUM </a>
					</div>
					<div className={styles.actionButtons}>
						<div
							onClick={this.listShop} 
							className={styles.listShop}
						>
							List Shop
						</div>
						<div 
							className={styles.findShop}
							onClick={this.findShop}
						>
							Find Shop
						</div>
					</div>
				</div> 
				{
					this.state.addingShop 
					?   <div className={styles.submitShopContainer}>
							<input 
								className={styles.mechanicName} 
								placeholder="Mechanic Name"
								onChange={this.addMechanicName}
							/>

							<input 
								className={styles.mechanicSalary} 
								placeholder="Mechanic Salary"
								onChange={this.addMechanicSalary}
							/>

							<input 
								className={styles.mechanicRating} 
								placeholder="Mechanic Rating"
								onChange={this.addMechanicRating}
							/>

							<input 
								className={styles.mechanicImage} 
								placeholder="Mechanic Image"
								onChange={this.addMechanicImage}
							/>
							<input 
								className={styles.shopLng} 
								placeholder="Shop Longitude"
								onChange={this.addShopLongitude}
							/>
							<input 
								className={styles.shopLat} 
								placeholder="Shop Latitude"
								onChange={this.addShopLatitude}
							/>

							<div 
								className={styles.submitShop}
								onClick={this.addNewShop}
							>
								Submit Shop
							</div>
							<div 
								className={styles.cancelShopListing}
								onClick={this.cancelShopListing}
							>
								Cancel
							</div>
						</div>
					:   <div className={styles.mainSection}>
							{
								this.state.findingShop 
								?   <div></div>
								:   <div className={styles.mechanicTable}>
										<div className={styles.mechanicCount}>
											{this.state.mechanics.length} Mechanics
										</div>
										<div className={styles.mechanicCards}>
											{	this.state.mechanics.map(mechanic => {
													return (
														<div className={styles.mechanicCard}>
															<img className={styles.cardImage} src={mechanic.image} />
															<div className={styles.cardDetail}>
																<div className={styles.cardTitle}>
																	{mechanic.name}
																</div>
																<div className={styles.cardStats}>
																	<div className={styles.pricing}>
																		{mechanic.salary/1000} k/h
																	</div>
																	<div className={styles.rating}>
																		{mechanic.rating}
																		<img src="Rating.svg" />
																	</div>
																</div>
															</div>
														</div>
													)
												})
											}
										</div>
									</div>
							}

							{
								this.state.findingShop
								?   <div className={styles.findingShopContainer}>
										<div className={styles.filterContainer}>
											<input className={styles.shopSearchBox} placeholder="Enter Address"/>
											<div className={styles.filterSelector}>
												<div>Hourly Rate</div>
												<select 
													name="salary" 
													className={styles.salaryFilter}
													onChange={this.filterBySalary}
												>
													<option value="100000">100000</option>
													<option value="200000">200000</option>
													<option value="300000">300000</option>
												</select>
											</div>
											<div className={styles.filterSelector}>
												<div>Average Rating</div>
												<select 
													name="rating" 
													className={styles.ratingFilter}
													onChange={this.filterByRating}
												>
													<option value="1">1</option>
													<option value="2">2</option>
													<option value="3">3</option>
													<option value="3">4</option>
													<option value="3">5</option>
												</select>
											</div>
										</div>
										<Map 
						                    width='96vw'
						                    height="88vh"
						                    styles={styles.mapBox}
						                    data={this.state.filteredMechanics}
						                    zoom="10" 
						                    lng="105.81916940872755"
						                    lat="21.027974501469437"
						                    zoom="13"
						                    className={styles.theMap}
						                />
									</div>
								:   <div className={styles.mechanicMap}>
										<Map 
						                    width='33vw'
						                    height="88vh"
						                    styles={styles.mapBox}
						                    data={this.state.mechanics}
						                    zoom="10" 
						                    lng="105.81916940872755"
						                    lat="21.027974501469437"
						                    zoom="13"
						                    className={styles.theMap}
						                />
									</div>
							}
							
							
						</div>
				}
			</div>
		)
	}
}