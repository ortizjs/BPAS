import React from 'react'
import RightSideInfo from '../Info/RightSideInfo'
import './Services.css'

const Services = () => {

    return (
        <div className='services-container'>
            <div className='services-page-left-side'>
                <h1 className="entry-title">Services</h1>
                <div className="entry-content">
                    <p>
                        <strong>
                            <span style={{color:"#ff0000"}}>Bimmers </span>
                        </strong>  
                        <strong>
                            <span style={{ color: "#0000ff" }}>Performance </span>
                        </strong> 
                        will&nbsp;
                        <span className="splash-service-span-1">perform Diagnosis, and Service &amp; Repair on your BMW and Mercedes Automobile, SUV or Light Truck.</span>
                    </p>

                    <p>
                        <strong>
                            <span className="splash-service-span-2">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our Services Include, But Are Not Limited To:</span>
                            </strong>
                    </p>
                </div >
                <div className='tables-container'>
                    <table border="1" cellSpacing="2" cellPadding="2" style={{width:"600px", marginBottom: "20px"}}>
                        <tbody>
                            <tr>
                                <td width="200px" align="center">
                                    <span className="splash-service-span-3">
                                        <strong>Standard Maintenance Services</strong>
                                    </span>
                                </td>
                                <td width="162px" align="center"> 
                                    <span className="splash-service-span-3">
                                        <strong>Transmission</strong>
                                    </span>
                                </td>
                                <td width="162px" align="center"> 
                                    <span className="splash-service-span-3">
                                        <strong>Engine Services</strong>
                                    </span>
                                </td>
                                <td width="162px" align="center" style={{borderRight: "none"}}> 
                                    <span className="splash-service-span-3">
                                        <strong>Heating &amp; Air Conditioner Repair</strong>
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <td className="splash-services-td">
                                    <ul>
                                        <li>BMW Flex Services</li>
                                        <li>BMW Inspection I, II and CBS (Condition Based Services)</li>
                                        <li>30/60/90/120 Mile Services</li>
                                        <li>Computer Diagnostics</li>
                                        <li>Oil Changes</li>
                                        <li>Tune Ups</li>
                                        <li>Safety Inspections</li>
                                        <li>Windshield Wiper Blades</li>
                                        <li>Fluid Services</li>
                                        <li>Maintenance Inspections</li>
                                        <li>Check Engine Light Diagnostics &amp; Repair</li>
                                        <li>Brake Services</li>
                                        <li>Shocks &amp; Struts Replacement</li>
                                        <li>Suspension &amp; Steering Services</li>
                                    </ul>
                                </td>
                                
                                <td className="splash-services-td">
                                    <ul>
                                        <li>Transmission Repair &amp; Service</li>
                                        <li>Transmission Replacement</li>
                                        <li>Driveline Repair &amp; Maintenance</li>
                                        <li>Axle Repair &amp; Replacement</li>
                                        <li>Clutch Repair &amp; Replacement</li>
                                        <li>Transmission Fluid Service</li>
                                        <li>Driveshaft &amp; U-Joint Repair</li>
                                        <li>Differential Diagnosis</li>
                                    </ul>
                                </td>
                                <td className="splash-services-td">
                                    <ul>
                                        <li>Engine Replacement</li>
                                        <li>Engine Performance Check</li>
                                        <li>Drive Belts Replacement</li>
                                        <li>Hose Replacement</li>
                                        <li>Cooling System Repair</li>
                                        <li>Radiator  Replacement</li>
                                        <li>Water Pump Repair &amp; Replacement</li>
                                        <li>Drivability Diagnostics &amp; Repair</li>
                                        <li>Fuel Injection Repair &amp; Service</li>
                                        <li>Fuel System Repair &amp; Maintenance</li>
                                        <li>Ignition System Repair &amp; Maintenance</li>
                                    </ul>
                                </td>
                                <td className="splash-services-td" style={{ borderRight: "none" }}>
                                    <ul>
                                        <li>Heating &amp; Cooling System Diagnostics</li>
                                        <li>Auto Air Conditioning Repair &amp; Service</li>
                                        <li>Heating System Repair &amp; Service</li>
                                        <li>AC Compressor Replacement</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody >
                    </table >

                    <table border="1" cellSpacing="2" cellPadding="2" style={{ width:"600px"}}>
                        <tbody>
                            <tr>
                                <td width="200px" align="center" > 
                                    <span className="splash-service-span-3">
                                        <strong>Auto Electrical Services</strong>
                                    </span>
                                </td>
                                <td width="162px" align="center"> 
                                    <span className="splash-service-span-3">
                                        <strong>Tire Services</strong>
                                    </span>
                                </td>
                                <td width="162px" align="center"> 
                                    <span className="splash-service-span-3">
                                        <strong>Exhaust Services</strong>
                                    </span>
                                </td>
                                <td width="162px" align="center" style={{ borderRight: "none" }}>
                                    <span className="splash-service-span-3">
                                        <strong>Other Services</strong>
                                    </span>
                                </td >
                            </tr >
                            <tr>
                                <td className="splash-services-td">
                                    <ul>
                                        <li>Electrical System Diagnostics &amp; Repair</li>
                                        <li>Alternator Repair &amp; Replacement</li>
                                        <li>Starter Repair &amp; Replacement</li>
                                        <li>Windshield Wiper Repair</li>
                                        <li>Power Lock Repairv</li>
                                        <li>Power Window Repair</li>
                                        <li>Power Accessory Repair</li>
                                        <li>Light Repair &amp; Bulb Replacement</li>
                                    </ul>
                                </td>
                                <td className="splash-services-td">
                                    <ul>
                                        <li>Tire Rotation</li>
                                        <li>Tire Air Pressure Checks</li>
                                    </ul>
                                </td>
                                <td className="splash-services-td">
                                    <ul>
                                        <li>Catalytic Converter Replacement</li>
                                        <li>Exhaust Manifold Replacement</li>
                                    </ul>
                                </td>
                                <td className="splash-services-td" style={{ borderRight: "none" }}>
                                    <ul>
                                        <li>Factory Scheduled Maintenance</li>
                                        <li>Preventive Maintenance</li>
                                        <li>Pre-Purchase Inspections</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody >
                    </table >
                </div>
            </div>
            <div className='services-page-right-side'>
                <RightSideInfo/>
            </div>
        </div>
    )
}

export default Services
