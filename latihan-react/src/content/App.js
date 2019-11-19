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
									<h4>
										<b>Berlangganan IndiHome Paket Premium
										</b>
									</h4>
									<div className="button">
										Lihat Detail
									</div>
								</div>
								<div className="down">
									<h4>
										<b>Berlangganan IndiHome Paket Gamer!
										</b>
									</h4>
									<div className="button">
										Lihat Detail
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="content unggulan">
					<h2>Add-on Unggulan</h2>
					<div className="list-img">
						<ul>
							<li><img src={require('../images/001.jpg')} height="130"/></li>
							<li><img src={require('../images/002.jpg')} height="130"/></li>
							<li><img src={require('../images/003.jpg')} height="130"/></li>
							<li><img src={require('../images/004.jpg')} height="130"/></li>
						</ul>
					</div>
	      		</div>

	      		<div id="langganan">
		      		<div className="top">
		      			<h3>Berlangganan IndiHome dan nikmati konten terbaik di dalam layar TV Anda</h3>
		      			<div>
		      				<ul>
								<li><img src={require('../logo/0001.png')} height="30"/></li>
								<li><img src={require('../logo/0002.png')} height="30"/></li>
								<li><img src={require('../logo/0003.png')} height="30"/></li>
							</ul>
		      			</div>
		      		</div>

		      		<div className="bottom"> 
		      			<div className="img">
		      				<img src={require('../images/0001.jpg')}/>
		      				<h2>LOMBA EPG</h2>
		      				<b>IndiHome TV</b>
		      			</div>
		      			<div className="img">
		      				<img src={require('../images/0002.jpg')}/>
		      				<h2>LOMBA EPG</h2>
		      				<b>IndiHome TV</b>
		      			</div>
		      			<div className="img">
		      				<img src={require('../images/0003.jpg')}/>
		      				<h2>LOMBA EPG</h2>
		      				<b>IndiHome TV</b>
		      			</div>
		      			<div className="img">
		      				<img src={require('../images/0004.jpg')}/>
		      				<h2>LOMBA EPG</h2>
		      				<b>IndiHome TV</b>
		      			</div>
		      		</div>
		      	</div>

		      	
			</div>
		)
	}
}

export default App;