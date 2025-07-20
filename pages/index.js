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
    		markerData: {lng: "105.1", lat: "21.02"},
    		mechanics: [
    			{
    				name: "mechanic1",
    				salary: 10000,
    				rating: 8.9,
    				image: "mechanics1.png",
    				lng: 105.807818099821,
    				lat: 21.037807303285422
    			}, 
    			{
    				name: "mechanic2",
    				salary: 20000,
    				rating: 9.6,
    				image: "mechanic2.png",
    				lng: 105.81445656625824,
    				lat: 21.04189160475326
    			},
    			{
    				name: "mechanic3",
    				salary: 30000,
    				rating: 9.6,
    				image: "mechanics1.png",
    				lng: 105.81562090173601,
    				lat: 21.03776134023114
    			},
    			{
    				name: "mechanic4",
    				salary: 200000,
    				rating: 9.6,
    				image: "mechanic2.png",
    				lng: 105.81682796868223,
    				lat: 21.042008663852894
    			},
    			{
    				name: "mechanic5",
    				salary: 200000,
    				rating: 9.6,
    				image: "mechanic2.png",
    				lng: 105.81242449251258,
    				lat: 21.020319692267066
    			},
    			{
    				name: "mechanic6",
    				salary: 200000,
    				rating: 9.6,
    				image: "mechanics1.png",
    				lng: 105.8129709220123,
    				lat: 21.02751950787956,
    			},
    			{
    				name: "mechanic7",
    				salary: 200000,
    				rating: 9.6,
    				image: "mechanics1.png",
    				lng: 105.81719190969132,
    				lat: 21.03375096621898,
    			},
    			{
    				name: "mechanic11",
    				salary: 200000,
    				rating: 9.6,
    				image: "mechanics1.png",
    				lng: 105.80973804649545,
    				lat: 21.035345418723324,
    			},
    			{
    				name: "mechanic8",
    				salary: 200000,
    				rating: 9.6,
    				image: "mechanics1.png",
    				lng: 105.80785248813795,
    				lat: 21.03277572653985,
    			},
    			{
    				name: "mechanic9",
    				salary: 200000,
    				rating: 9.6,
    				image: "mechanics1.png",
    				lng: 105.81957607180475,
    				lat: 21.030444994601307,
    			},
    			{
    				name: "mechanic10",
    				salary: 200000,
    				rating: 9.6,
    				image: "mechanics1.png",
    				lng: 105.80687904967057,
    				lat: 21.02824590896404,
    			}
    			 
    		]
    	}
	}

	componentDidMount(){

	}

	render(){
		return (
			<div className={styles.container}>
				<div className={styles.topNavBar}>
					<div className={styles.logoContainer}>
						<img src="BRUM.svg" />
					</div>
					<div className={styles.brandName}>
						BRUM 
					</div>
					<div className={styles.actionButtons}>
						<div className={styles.listShop}>
							List Shop
						</div>
						<div className={styles.findShop}>
							Find Shop
						</div>
					</div>
				</div> 
				<div className={styles.mainSection}>
					<div className={styles.mechanicTable}>
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
					<div className={styles.mechanicMap}>
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
				</div>
			</div>
		)
	}
}