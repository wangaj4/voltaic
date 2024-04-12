import React, {useState, useEffect, Fragment} from 'react';
import westernlogo from './../img/westernlogo.png';
import westerngraph1 from './../img/westerngraph1.png';
import westerngraph2 from './../img/westerngraph2.png';
import westerngraph3 from './../img/westerngraph3.png';
import westerngraph4 from './../img/westerngraph4.png';
import westernportfoliopic1 from './../img/westernportfoliopic1.png';


function Western(){
    return (
        <Fragment>
            <div className={"clearBanner noBottom"}>
                <div className={"fifty"}>
                    <img src = {westernlogo} className = 'districtLogo'/>
                    <div className={"columnHeader"}>Overview Test</div>
                    <div className={"columnText"}>
                    Western Municipal Water District's mission
                    is to provide water supply, wastewater
                    disposal, and water resource management to
                    the public in a safe, reliable, environmentally
                    sensitive, and financially responsible manner.
                    Alongside a vision to enhance WMWD
                    leadership role by integrating the
                    best-in-business processes and business
                    systems while developing a leading-edge
                    workforce that continuously creates greater
                    efficiency and value for our customers. While
                    maintaining values related to Efficiency and
                    Innovation.
                    </div>
                    <div className={"columnHeader"}>Pumping Stations</div>
                    <div className={"columnText"}>
                    One of the largest pumping stations in their
                    system is Holcomb PS which has 3 electric
                    and 5 gas pumps. By utilizing these
                    diversified energy sources and paying
                    attention to TOU rates, this location alone
                    was able to save monthly electricity cost
                    significantly as shown below in Figure 1.
                    </div>
                </div>
                <div className={"fifty"}>
                    <img src = {westernportfoliopic1} className = 'widePic'/>
                    <div className={"columnHeader"}>Help from UCR CE-CERT</div>
                    <div className={"columnText"}>
                        Below is an excerpt from a Western Municipal newsletter:
                        <br/><br/>
                        We were contacted by engineering
                        researchers at the University of California
                        Riverside, Center for Environmental
                        Research and Technology (CE-CERT).
                        <br/><br/>
                        <b>New Approach</b> They approached us with
                        new innovative ideas for running both gas
                        and electric pumps efficiently. Based on
                        actual energy use data, methods were
                        developed to reduce peak electrical demand
                        while satisfying water demand and needs.
                        <br/><br/>
                        <b>Time of Use (TOU)</b> By paying attention to
                        Time of Use electric rates, low-cost
                        electricity can be used for the majority of
                        pumping operations. This lowers peak
                        demand during the most stressful operation
                        of the California grid while saving pumping
                        energy cost. Undergraduate Students were
                        able to contribute to the project by analyzing
                        energy use in water system operations and
                        15 min interval Supervision Control and Data
                        Acquisition (SCADA) data.

                    </div>
                </div>
            </div>

            <div className={"centerSubheader"}>Figure 1</div>
            <img src = {westerngraph1} className = 'widePic'/>

            <div className={"clearBanner noBottom"}>
                <div className={"fifty"}>
                    <div className={"columnHeader"}>Total Cost Gas and Electricity</div>
                    <div className={"columnText"}>
                        The total electric and gas cost pre-and-post implementation is shown on the right in Figure 2.
                    </div>
                    <div className={"columnHeader"}>Total Net Savings</div>
                    <div className={"columnText"}>
                        While the total energy bill for the 12-month
                        period before implementation was $382,320
                        following in 2021-22 it dropped to $204.030
                        after energy saving implementation,
                        resulting in a net dollar saving of $177,989 as
                        shown in Figure 3.
                    </div>
                    
                    <div className={"columnText"}>
                        These actual pumping operational
                        results were based on intelligent
                        data analytics using time of use
                        rate flexibility. These business and
                        cost awareness allows operators
                        the freedom to choose most
                        optimal operations for satisfying
                        water demand at minimum energy
                        cost.
                    </div>
                </div>
                <div className={"fifty"}>
                    <div className={"centerSubheader"}>
                        Figure 2
                    </div>
                    <img src = {westerngraph2} className = 'widePic'/>
                    <div className={"centerSubheader"}>
                        Figure 3
                    </div>
                    <img src = {westerngraph3} className = 'widePic'/>
                </div>
                
            </div>

            <div className={"centerSubheader"}>
                        Figure 4
            </div>
            <img src = {westerngraph4} className = 'widePic'/>

        </Fragment>
    );
};

export default Western;