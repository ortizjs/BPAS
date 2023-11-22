import React from 'react'
import LocationMap from '../location/LocationMap'
import './RightSideInfo.css'
const RightSideInfo = () => {

    return (
        <div className="hours-location-container">
                <ul className="hours-ul">
                    <li id="text-7" className="widget-container widget_text">
                        <h3 className="widget-title" style={{fontWeight: 'bold'}}>Our Address:</h3>
                        <div className="textwidget">
                            <hr className="hours-location-hr" />
                            <strong className="splash-right-textwidget-strong" >1090 D Detroit Ave
                                <br />
                                <strong className="splash-right-textwidget-strong" >Concord, CA 94518</strong>
                            </strong>
                        </div>
                        <strong className="splash-right-textwidget-strong" >
                        </strong>
                    </li>
                    <li id="text-10" className="widget-container widget_text">
                        <h3 className="widget-title">
                            <strong className="splash-right-textwidget-strong" >Contact Us:</strong>
                        </h3>
                        <strong className="splash-right-textwidget-strong" >
                            <div className="textwidget">
                                <hr className="hours-location-hr" />
                                <strong className="splash-right-textwidget-strong" >Call Us: (925) 682-3232
                                    <br />
                                    <strong className="splash-right-textwidget-strong" >Email Us at:  </strong>
                                    <a href="mailto:saulortiz40@gmail.com>?Subject=Thank%20you%20for%20emailing%20us" target="_top">Bimmers Support</a>
                                </strong>
                            </div>
                            <strong className="splash-right-textwidget-strong" >
                            </strong>
                        </strong>
                    </li>
                    <li id="text-5" className="widget-container widget_text">
                        <h3 className="widget-title">
                            <strong className="splash-right-textwidget-strong" >
                                <strong className="splash-right-textwidget-strong" >Hours of Operation:</strong>
                            </strong>
                        </h3>
                        <strong className="splash-right-textwidget-strong" >

                        </strong>
                        <strong className="splash-right-textwidget-strong" >
                        </strong>
                        <div className="textwidget">
                            <hr className="hours-location-hr" />
                            <strong className="splash-right-textwidget-strong-days" >Monday: 8:30 AM - 6:00 PM</strong>
                            <br />
                            <strong className="splash-right-textwidget-strong-days" >Tuesday: 8:30 AM - 6:00 PM</strong>
                            <br />
                            <strong className="splash-right-textwidget-strong-days" >Wednesday: 8:30 AM - 6:00 PM</strong>
                            <br />
                            <strong className="splash-right-textwidget-strong-days" >Thursday: 8:30 AM - 6:00 PM</strong>
                            <br />
                            <strong className="splash-right-textwidget-strong-days" >Friday: 8:30 AM - 6:00 PM</strong>
                            <br />
                            <strong className="splash-right-textwidget-strong-days" >Saturday: Closed</strong>
                            <br />
                            <strong className="splash-right-textwidget-strong-days" >Sunday: Closed</strong>
                        </div>
                    </li>
                    <li id="text-8" className="widget-container widget_text location">
                        <h3 className="widget-title">
                            <strong className="splash-right-textwidget-strong">
                                <strong className="splash-right-textwidget-strong">Our Location:</strong>
                            </strong>
                        </h3>
                        <strong className="splash-right-textwidget-strong">
                            <strong className="splash-right-textwidget-strong">			
                                <div className="textwidget">
                                    <hr className="hours-location-hr"/>
                                </div>
                            </strong>
                        </strong>
                    </li>
                    {/* <LocationMap/> */}
                     <div className='home-map-container'>
                        <LocationMap/>
                     </div>
                </ul>
            </div>
    )
}

export default RightSideInfo
