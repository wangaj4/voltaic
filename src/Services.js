import './main.css';
import './Services.css';

import React, {useState, useEffect, Fragment} from 'react';

function Services(){

    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: "instant"
        });
        setTimeout(()=>{
            document.getElementsByClassName("encompass")[0].classList.remove("fade");
        },200);
    },[])
    return (
        <div className={"encompass fade"}>

            <div className={"titleBanner2"}>
                <div className={"bannerTitle"} data-aos = "fade-up" data-aos-duration="800">
                    Our Services
                </div>
            </div>

            <div className={"contentBanner"}>
                <div className={"centerHeader"}>
                    THE BIG PICTURE
                </div>
                <div className={"separateBar"}/>
                <div className={"centerText"}>
                Based on
                actual energy use data, methods were
                developed to reduce peak electrical demand
                while satisfying water demand and needs.
                
                    <br/><br/>
                By paying attention to
                Time of Use electric rates, low-cost
                electricity can be used for the majority of
                pumping operations. This lowers peak
                demand during the most stressful operation
                of the California grid while saving pumping
                energy cost.
                </div>
                <div className='spacer2'/>
            </div>

            <div className='spacer2'/>
            <div className={"centerHeader"}>MORE ABOUT THE PROCESS</div>
            <div className={"separateBar"}/>

            <div className={"spacer"}/>
            <div className={"clearBanner"} data-aos = "fade-right">
                <div className={"sixty"}>
                    <div className={"centerHeader"}>Step 1 - Data Collection</div>
                    <div className={"separateBar"}/>
                    <div className={"leftText"} id = "team1">
                        Initially, our team will reach out to request the needed bills, data, and documents for our analysis. Throughout the process timeline,
                        we will maintain clear communication to ensure we have what we need to properly serve the district and reduce costs.
                        <br/>
                        
                        <div className={"spacer"}></div>
                    </div>
                </div>
                <div className={"forty"}>
                    <div class = "stepImage1"/>
                </div>
            </div>

            <div className={"spacer2"}/>
            <div className={"clearBanner reverse"} data-aos = "fade-left">
                <div className={"forty"}>
                    <div className={"stepImage2"}/>
                </div>
                <div className={"sixty"}>
                    <div className={"centerHeader"}>Step 2 - Data Analysis</div>
                    <div className={"separateBar"}/>
                    <div className={"leftText"} id = "team1">
                        Here, we begin our work and utilize our methods to find out the most efficient ways for the district to reduce operating costs.
                        The data-driven analysis methods we utilize have proven their reliability by cutting down electricity costs for every previous water district our team has worked with, so you won't have to worry about the 
                        effectiveness of our procedures.
                        <br/>
                        
                        <div className={"spacer"}></div>
                    </div>
                </div>
            </div>

            <div className={"spacer2"}/>
            <div className={"clearBanner reverse"} data-aos = "fade-left">
                <div className={"forty"}>
                    <div className={"stepImage25"}/>
                </div>
                <div className={"sixty"}>
                    <div className={"centerHeader"}>Step 2.5 - Data Cleaning, Clarification</div>
                    <div className={"separateBar"}/>
                    <div className={"leftText"} id = "team1">
                        Throughout the process, we will occasionally schedule meetings in order to clarify any unclear data, or to collect any additional
                        necessary information. By communicating through the duration of our work, we ensure our analysis is precise and accurate.
                        <br/>
                        
                        <div className={"spacer"}></div>
                    </div>
                </div>
            </div>

            <div className={"spacer2"}/>
            <div className={"clearBanner"} data-aos = "fade-right">
                <div className={"sixty"}>
                    <div className={"centerHeader"}>Step 3 - Presentation</div>
                    <div className={"separateBar"}/>
                    <div className={"leftText"} id = "team1">
                        When our analysis is completed, the main recommendations will be given via presentation through a scheduled meeting. A complete 
                        comprehensive list of our actionable insights and instructions will be provided as well. Proper communication with the
                        district is our top priority in this stage.
                        <br/>
                        
                        <div className={"spacer"}></div>
                    </div>
                </div>
                <div className={"forty"}>
                    <div className={"stepImage3"}/>

                </div>
            </div>

            <div className={"spacer2"}/>
            <div className={"clearBanner"} data-aos = "fade-right">
                <div className={"sixty"}>
                    <div className={"centerHeader"}>Step 4 - Maintenance/Upkeep</div>
                    <div className={"separateBar"}/>
                    <div className={"leftText"} id = "team1">
                        After our initial recommendations presentation and documents are received by the district, our team will continue to keep in contact,
                        ensuring the proper steps are taken with periodic checkups. Subsequent data from the district will be analyzed, comparing with 
                        our savings projections to make sure the district is following the correct actionable steps.
                        <br/>
                        
                        <div className={"spacer"}></div>
                    </div>
                </div>
                <div className={"forty"}>
                    <div className={"stepImage4"}/>

                </div>
            </div>

            <div className={"spacer2"}/>
            
        </div>



    );
}

export default Services;


