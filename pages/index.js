import axios from "axios"
import Head from 'next/head'
import Image from 'next/image'
import {Component} from "react"
import styles from '../styles/Home.module.css'

export default class Home extends Component {
	constructor(props){
    	super(props)
    	this.state = {
    		mechanics: ['mechanic0','mechanic1', 'mechanic2', 'mechanic3', 'mechanic4', 'mechanic5', 'mechanic6', 'mechanic7', 'mechanic8', 'mechanic9', 'mechanic10']
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
											<img className={styles.cardImage} src="mechanic2.png" />
											<div className={styles.cardDetail}>
												<div className={styles.cardTitle}>
													{mechanic}
												</div>
												<div className={styles.cardStats}>
													<div className={styles.pricing}>
														100k/h
													</div>
													<div className={styles.rating}>
														<img src="Rating.svg" /> 8.9
													</div>
												</div>
											</div>
										</div>
									)
								})
							}
						</div>
					</div>
					<div className={styles.mechanicMap}></div>
				</div>
			</div>
		)
	}
}