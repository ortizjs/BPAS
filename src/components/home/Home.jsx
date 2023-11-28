import React from 'react'
import Carousel from '../carousel/Carousel'
import RightSideInfo from '../Info/RightSideInfo'
import carLogos from './../../assets/images/carlogos.png'
import './Home.css'
const Home = () => {
    
    return (
        <div className="home-page-container">
            <div className='home-page-left-side'>
                <Carousel/>
                <span className="splash-home-welcome-span">
                    <span style={{fontSize:"24px"}}>
                        <strong>Welcome to </strong>
                    </span>
                    <span style={{fontSize:"18px"}}>
                        <em>
                            <strong>
                                <span style={{color:'#ff0000', fontSize:'24px'}}>Bimmers</span>
                            </strong>
                            <span style={{fonSize:"24px"}}>
                                <strong> </strong>
                            </span>
                            <strong>
                                <span style={{color:'#0000ff', fontSize:'24px'}}>Performance</span>
                            </strong>
                            <span style={{fontSize:"24px"}}>
                                <strong> </strong>
                            </span>
                            <strong>
                                <span style={{color:"#ff0000", fontSize:"24px"}}>Auto Service</span>
                            </strong>
                        </em>
                    </span>
                </span>

                <p>
                    &nbsp;
                    <span className="splash-home-business-intro">
                        Bimmers Performance Auto Service has been providing superior automotive repair and maintenance services in 
                        East Bay area for over 20 years
                        &nbsp;
                    </span>
                    <span className="splash-home-business-intro-2">
                        specializing in BMW and Mercedes Benz vehicle repairs.
                    </span>
                </p>
                <p>
                    &nbsp;
                    <span className="splash-home-business-intro-2">
                        Our specialty is in BMW and Mercedes Benz vehicle repairs and we also provide full service general repairs and 
                        &nbsp;proudly service all other types of vehicles; foreign or domestic. Our technicians are highly trained and 
                        &nbsp;experienced, with the knowledge and skills necessary to handle all of your auto repairs and needs.
                    </span>
                </p>
                <p>
                    &nbsp;
                    <span className="splash-home-business-intro-2">
                        Our team is dedicated to providing you and your vehicle with professional service and exceptional customer care. THANK YOU for choosing
                        &nbsp;
                    </span>
                    <span className="splash-home-business-intro">
                        Bimmers Performance Auto Service
                    </span>
                   
                    <span className="splash-home-business-intro">
                        as your go-to Auto Center!
                        &nbsp;
                    </span>
                </p>
                <div className='home-logos-img-container'>
                    <img alt="car_logos" src={carLogos} className="cars-logo-centered"></img>
                
                </div>
            </div>
            <div className='home-page-right-side'>
                <RightSideInfo/>
            </div>
        </div>
    )
}

export default Home
