import React, {Component} from 'react';
import '../style/style.css';

class App extends Component{
	render(){
		return(
			<div className="wrapper">
				<div className="navbar">
					<div className="content">
						<div className="header">
							<img src={require('../images/logo.png')} alt=""/>
						</div>
						<div className="navbar-right">
							<ul>
								<li>Promo</li>
								<li>Paket & ADD-ON</li>
								<li>Pusat Bantuan</li>
								<li>Info Terkini</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="content template">
					<div className="kotak">
						<center>
							<b>
								Berlangganan IndiHome bisa dapat internet cepat, nelpon rumah sepuasnya dan nonton beragam konten terbaik di layar TV interaktif
							</b>
						</center>
					</div>
					<div className="row">
						<div className="sideKiri">
							<img src={require('../images/Home-Page.jpg')} alt=""/>
						</div>
						<div className="sideKanan">
							<div className="kotakBanner">
								<div className="up">
									<img src={require('../images/mini-banner-1.png')} alt=""/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App;