import axios from "axios"
import Head from 'next/head'
import Image from 'next/image'
import {Component} from "react"
import styles from '../styles/Home.module.css'

export default class Home extends Component {
	constructor(props){
    	super(props)

    	this.state = {
    		mechanics: [
    			{
    				name: "mechanic1",
    				salary: 100,
    				rating: 8.9,
    				image: "mechanics1.png"
    			}, 
    			{
    				name: "mechanic2",
    				salary: 200,
    				rating: 9.6,
    				image: "mechanic2.png"
    			},
    			{
    				name: "mechanic3",
    				salary: 300,
    				rating: 9.6,
    				image: "mechanics1.png"
    			},
    			{
    				name: "mechanic4",
    				salary: 200,
    				rating: 9.6,
    				image: "mechanic2.png"
    			},
    			{
    				name: "mechanic5",
    				salary: 200,
    				rating: 9.6,
    				image: "mechanic2.png"
    			},
    			{
    				name: "mechanic6",
    				salary: 200,
    				rating: 9.6,
    				image: "mechanics1.png"
    			},
    			{
    				name: "mechanic7",
    				salary: 200,
    				rating: 9.6,
    				image: "mechanic2.png"
    			},
    			{
    				name: "mechanic8",
    				salary: 200,
    				rating: 9.6,
    				image: "mechanics1.png"
    			},
    			{
    				name: "mechanic9",
    				salary: 200,
    				rating: 9.6,
    				image: "mechanic2.png"
    			},
    			{
    				name: "mechanic10",
    				salary: 200,
    				rating: 9.6,
    				image: "mechanics1.png"
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
														{mechanic.salary} k/h
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
						<div className={styles.theMap}>
							Map
						</div>
					</div>
				</div>
			</div>
		)
	}
}