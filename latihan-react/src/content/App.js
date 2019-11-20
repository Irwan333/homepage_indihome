import React, {Component} from 'react';
import '../style/style.css';

class App extends Component{
render(){
return(
<div className="wrapper">
    <div className="navbar">
        <div className="content">
            <div className="header">
                <img src={require('../images/logo.png')} alt="" />
            </div>
            <div className="navbar-right">
                <ul>
                    <li>Promo</li>
                    <li>Paket & ADD-ON</li>
                    <li>Pusat Bantuan</li>
                    <li>Info Terkini</li>
                    <li className="pojok">
                    	<span className="nav-user">myIndiHome</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div className="content template">
        <div className="kotak">
            <center>
                <b>
                    Berlangganan IndiHome bisa dapat internet cepat, nelpon rumah sepuasnya dan nonton beragam konten
                    terbaik di layar TV interaktif
                </b>
            </center>
        </div>
        <div className="row">
            <div className="sideKiri">
                <img src={require('../images/Home-Page.jpg')} alt="" />
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
                <li>
                	<div className="card">
					  <img src={require('../images/001.jpg')} />
					  <div className="container">
					    <h4><b>Hooq</b></h4> 
					    <p>Lihat</p> 
					  </div>
					</div>
                </li>
                <li>
                	<div className="card">
					  <img src={require('../images/002.jpg')} />
					  <div className="container">
					    <h4><b>iflix</b></h4> 
					    <p>Lihat</p> 
					  </div>
					</div>
                </li>
                <li>
                	<div className="card">
					  <img src={require('../images/003.jpg')} />
					  <div className="container">
					    <h4><b>EduKids</b></h4> 
					    <p>Lihat</p> 
					  </div>
					</div>
                </li>
                <li>
                	<div className="card">
					  <img src={require('../images/004.jpg')} />
					  <div className="container">
					    <h4><b>Catchplay</b></h4> 
					    <p>Lihat</p> 
					  </div>
					</div>
                </li>
            </ul>
        </div>
    </div>

    <div id="langganan">
        <div className="top">
            <h3>Berlangganan IndiHome dan nikmati konten terbaik di dalam layar TV Anda</h3>
            <div>
                <ul>
                    <li><img src={require('../logo/0001.png')} height="30" /></li>
                    <li><img src={require('../logo/0002.png')} height="30" /></li>
                    <li><img src={require('../logo/0003.png')} height="30" /></li>
                </ul>
            </div>
        </div>

        <div className="bottom content">
            <div className="img">
                <img src={require('../images/0001.jpg')}/> <h2>LOMBA EPG</h2>
                <b>IndiHome TV</b>
            </div>
            <div className="img">
                <img src={require('../images/0002.jpg')}/> <h2>UseeSports 2 - BWF</h2>
                <b>IndiHome TV</b>
            </div>
            <div className="img">
                <img src={require('../images/0003.jpg')}/> <h2>FX - Ray Donovan Season 7</h2>
                <b>IndiHome TV</b>
            </div>
            <div className="img">
                <img src={require('../images/0004.jpg')}/> <h2>Boomerang - Taffy</h2>
                <b>IndiHome TV</b>
            </div>
        </div>
    </div>

    <div id="footer" className="content">
        <div className="top_">
            <div className="left_">
                <ul>
                    <li><img src={require('../images/img1.png')}/> <br /><span>IndiHome</span></li>
                    <li><img src={require('../images/img2.png')}/> <br /><span>IndiHome</span></li>
                    <li><img src={require('../images/img3.png')}/> <br /><span>IndiHome</span></li>
                    <li><img src={require('../images/img4.png')}/> <br /><span>Contact Center 147</span></li>
                </ul>
            </div>
            <div className="right_">
                <span className="label">Berlangganan newsletter sekarang</span><input type="text"
                    placeholder="Enter Your E-mail" />
            </div>
        </div>
        <br />
        <hr />
        <div className="bottom_">
            <div className="bottom_1">
                <b>Temui kemudahan mengatur IndiHome dalam genggaman Anda.</b>
                <br />
                <br />
                <img src={require('../images/00001.png')}/> <img src={require('../images/00002.png')}/> </div> <div
                    className="bottom_2">
                <ul>
                    <li className="hitam">Kenali IndiHome</li>
                    <li>Apa itu IndiHome?</li>
                    <li>Aplikasi myIndiHome</li>
                    <li>Triple Play</li>
                    <li>Dual Play</li>
                    <li>Singgle Play</li>
                    <li>Add-on</li>
                    <li>Pusat Bantuan</li>
                </ul>
            </div>
            <div className="bottom_3">
                <ul>
                    <li className="hitam">IndiHome</li>
                    <li>Syarat & Kententuan</li>
                    <li>Announcents</li>
                    <li>Tutorial</li>
                </ul>
            </div>
            <div className="bottom_4">
                <img src={require('../images/00003.png')}/> <p>Copyright 2019 PT Telekomunikasi Indonesia (Persero) Tbk
                All Right Reserved.</p>
            </div>
        </div>
        <div className="asisten">
      		<img src={require('../images/asisten.png')} />
      	</div>
    </div>

</div>
)
}
}

export default App;