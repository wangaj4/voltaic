
import './Description.css';
import React, { useState, useEffect } from 'react';

import Traveling from './Traveling';

import amazonRainforest from './img/Description/amazonRainforestDescription.jpg'
import grandCanyon from './img/Description/grandCanyonDescription.jpg'
import haLongBay from './img/Description/haLongBayDescription.jpg'
import machuPicchu from './img/Description/machuPicchuDescription.jpg'
import northernLights from './img/Description/auroraBorealisDescription.jpg'
import santorini from './img/Description/santoriniDescription.jpg'
import victoriaFalls from './img/Description/victoriaFallsDescription.jpg'


const Introductions = [
    "A colossal, breathtaking chasm carved by the Colorado River, the Grand Canyon is known for " +
    "its stunning beauty and vibrant, layered rock formations.",

    "Nestled in northern Vietnam, Ha Long Bay welcomes explorers to its emerald embrace, a world of mystical limestone islets, " +
    "hidden caves, and a serene seascape that captivates the soul.",

    "In Norway's Arctic night, witness the celestial spectacle of the Aurora Borealis, where the vibrant dance of colors illuminates " +
    "the dark expanse like a mesmerizing cosmic painting.",

    "A picturesque jewel in the Aegean Sea, Santorini enchants with its iconic sunsets, unique and beautiful white-washed architecture, " +
    "and stunning seascapes.",

    "Hidden high in the Andes, Machu Picchu beckons with its ancient mystery, rich Incan history, " +
    "and awe-inspiring panoramic mountain vistas.",

    "Deep within the Amazon Rainforest's lush heart, a symphony of life unfolds, where dense jungle, mighty rivers, " +
    "and vibrant wildlife create a sanctuary of spectacular biodiversity.",

    "Nature's majesty in all its glory, Victoria Falls - the world's largest waterfall - astounds with its " +
    "immense water curtain and lush, misty rainforest surroundings."

];

const history = [
    "The Grand Canyon's history is a story of natural wonder and geological time. Over millions of years, " +
    "the Colorado River has skillfully carved this majestic chasm into the Earth's crust, exposing a stunning " +
    "tapestry of layers that reveal the planet's ancient past and deep history.",

    "Ha Long Bay's history is a testament to the enduring dance of nature and time. Over eons, the sea has " +
    "sculpted this ethereal seascape, crafting a mesmerizing ensemble of limestone islets. These mystical " +
    "formations, adorned with lush foliage, hold ancient secrets of Earth's geological legacy.",

    "The history of the Aurora Borealis is a cosmic tale that unfolds in Norway's Arctic skies. Across the ages, " +
    "these celestial lights have adorned the night canvas with their vivid hues, a result of interactions " +
    "between solar winds and Earth's magnetic field. This celestial dance has fascinated and inspired generations.",

    "Santorini's history is one of volcanic drama and mythic allure. Millennia ago, a cataclysmic eruption shaped " +
    "the island's crescent form, resulting in its stunning cliffs and vibrant sunsets. Steeped in ancient legends, " +
    "this enchanting jewel of the Aegean holds tales of lost civilizations and enduring beauty.",

    "Machu Picchu's history is an enigmatic journey into the heart of the Incan empire. Perched high in the Andes," +
    " this ancient citadel was built in the 15th century and remained hidden from the world for centuries. " +
    "Its purpose, shrouded in mystery, offers a glimpse into the architectural and cultural brilliance of its creators.",

    "The Amazon Rainforest's history is a testament to the resilience of life on Earth. Over millions of years, " +
    "it has evolved into the planet's most biodiverse ecosystem. With each passing era, this lush expanse has " +
    "witnessed the rise and fall of species, becoming a sanctuary for countless forms of life.",

    "Victoria Falls carries the legacy of untamed waters and natural grandeur. For millennia, the Zambezi River " +
    "has carved this colossal curtain of water into the Earth's crust. The result is a spectacle that inspires " +
    "wonder and reverence, nestled within a rainforest that teems with life."


]

const descriptionImg = [grandCanyon, haLongBay, northernLights, santorini, machuPicchu, amazonRainforest, victoriaFalls];

const events = [
    ["Creation", "~6 Million Years Ago", "Six million years ago, a remarkable transformation began deep within the Earth, giving birth to what we now know as the Grand Canyon. It was a time when the Colorado River's tireless flow, like an artist's brushstroke, began its patient work. Over the eons, this relentless force gradually sculpted and hewed away layer upon layer of rock.",
    "Exploration","1869","In 1869, John Wesley Powell led a historic expedition, navigating the treacherous Colorado River and revealing the Grand Canyon's rugged beauty. His journey kindled a spirit of exploration that continues to draw adventurers, scientists, and nature enthusiasts to the canyon's depths, where towering cliffs and geological marvels tell a timeless tale of Earth's ancient past.",
    "National Park","1919","In 1919, a monumental chapter in the Grand Canyon's history was written when it earned the distinguished title of a national park. After years of advocacy and appreciation for its unique beauty and geological significance, the U.S. Congress officially designated the Grand Canyon as a protected national treasure."],

    ["Ancient Humans", "Millenia Ago", "Ha Long Bay's history whispers tales of ancient civilizations, their roots entwined with the bay's mystique for millennia. With relics and echoes of times long past, the bay emerges as a storied tapestry where early communities found their livelihoods amidst its serene shores.",
    "Nguyen Dynasty","1800s","In the 19th century, during the Nguyen Dynasty, Ha Long Bay transcended into a realm of captivating legendry. Here, stories unfurled of celestial dragons descending from the heavens, guardians of the bay's secrets, leaving an indelible mark on its cultural tapestry.",
    "World Heritage","1994","In 1994, Ha Long Bay ascended to global prominence with its illustrious UNESCO World Heritage status. This accolade underscores the bay's extraordinary significance, where cultural and natural wonders converge. Ha Long Bay stands as an emblem of Vietnam's opulent heritage, captivating the world's imagination."],

    ["Ancient Mystique", "Millenia Ago", "The Aurora Borealis has graced the northern skies with its celestial dance for countless generations. Throughout human history, this breathtaking phenomenon has been viewed with wonder and reverence. Ancient cultures regarded it as a celestial spectacle, connecting it with myths, legends, and spiritual beliefs, making it an enduring symbol of mystique and awe.",
    "Scientific Enlightenment","1800s","In the 19th century, as scientific exploration gained momentum, researchers turned their attention to the Northern Lights. Pioneering scientists unraveled the mysteries behind this natural light show, revealing the scientific explanations behind its breathtaking displays. This era of enlightenment marked a shift from mysticism to understanding.",
    "Modern Tourism","Today","The 20th century witnessed the establishment of dedicated observatories and scientific research stations in prime Aurora Borealis regions. Simultaneously, the Northern Lights became a powerful draw for travelers seeking to witness this celestial spectacle firsthand. The combination of scientific discovery and tourism has elevated the Aurora Borealis to an iconic natural wonder."],

    ["Ancient Minoans","3000 BC","Santorini's history is intertwined with the ancient Minoan civilization, which thrived on the island during the Bronze Age. Known as Thera in antiquity, the island was a prosperous hub of culture and trade. However, a cataclysmic volcanic eruption reshaped the island's landscape.",
    "Venetian Influence","Middle Ages","Over the centuries, Santorini witnessed the ebb and flow of various civilizations, including the Byzantines and the Venetians. These influences left their mark on the island's architecture, culture, and heritage. The island's iconic white-washed buildings, characteristic of the Cycladic architecture, have their roots in this era.",
    "Iconic Sunsets","Today","In the 20th century, Santorini transformed into a world-renowned tourist destination, celebrated for its breathtaking sunsets over the caldera. Its picturesque villages, including Oia and Fira, have become icons of Mediterranean beauty. The island's ability to blend its rich history, stunning vistas, and vibrant culture has made it a coveted location for travelers. "],

    ["Construction","1400s","In the 15th century, during the height of the Inca Empire, the awe-inspiring city of Machu Picchu was constructed. This mountaintop citadel, nestled in the Andes, was a testament to Incan architectural brilliance and engineering. It served as a royal estate and ceremonial center, reflecting the cultural and historical significance of the Inca civilization.",
    "Forgotten Discovery","1911","Following the Spanish Conquest in the 16th century, Machu Picchu was abandoned and gradually forgotten by all but local indigenous communities who knew of its existence. It remained hidden from the outside world until its rediscovery by American explorer Hiram Bingham in 1911, marking a momentous event in archaeology, introducing the world to this lost city of the Incas.",
    "World Heritage","1983","In the 20th century, Machu Picchu earned recognition as a UNESCO World Heritage Site in 1983, solidifying its status as a global cultural treasure. Its archaeological significance, breathtaking scenery, and the enduring mystery of its purpose invites travelers to step back in time and experience the grandeur of Incan civilization."],

    ["Formation","Millenia Ago","The Amazon Rainforest's history spans millions of years, evolving into the planet's most diverse and complex ecosystem. Its lush, verdant expanse is a living testament to Earth's ancient past, where unique species and intricate ecological networks have flourished since time immemorial.",
    "Colonial Exploration","16th-19th Century","During the age of colonial exploration, the Amazon Rainforest became a focal point for European adventurers in search of riches and resources. Indigenous tribes, such as the Yanomami and Kayapó, fiercely defended their ancestral lands. This era marked a complex interplay of cultural exchange, conflict, and resilience, shaping the forest's history.",
    "Modern Conservation","Today","In the 20th century, the Amazon Rainforest garnered global attention for its vital role in climate regulation and biodiversity. Conservation efforts, research initiatives, and the establishment of protected areas became paramount. Scientific discoveries continue to unveil the rainforest's secrets, highlighting its significance in Earth's ecological health."],

    ["Discovery","1855","In 1855, the Scottish explorer David Livingstone became the first European to lay eyes on the awe-inspiring Victoria Falls. Struck by its breathtaking grandeur, he named it in honor of Queen Victoria. This event marked the introduction of the falls to the Western world, forever associating its name with one of the most iconic natural wonders on the African continent.",
    "Regional Development","1905","The construction of the Victoria Falls Bridge, completed in 1905, played a pivotal role in the region's development. The bridge connected modern-day Zambia and Zimbabwe and facilitated transportation and trade. Its construction brought increased accessibility to the falls and boosted tourism, underscoring the falls' cultural and economic significance.",
    "World Heritage","1989","In 1989, Victoria Falls earned recognition as a UNESCO World Heritage Site. This designation highlighted the falls' unique geological formation, ecological diversity, and cultural importance. It also underscored the need for its conservation. Victoria Falls continues to draw visitors from around the world, inviting them to witness the mighty Zambezi River cascading into the chasm below."],
]



function Description(props) {

    
    let container = null;
    
    const [yOffset, setYOffset] = useState(0);

    const [showNewInfo, setShowNewInfo] = useState(true);


    let scroll = document.querySelector('.scroll');


    useEffect(()=>{
        console.log("initial");
        
        setTimeout(() =>{
            container = document.getElementById('descriptionContainer');
            container.style.top = '90vh';
            
            const background = document.querySelector('.Location');
            background.classList.add('perhapsFixed');

        },100);
        
        
    }, []);



    const [currentEvent, setCurrentEvent] = useState(0);

    const changeTimeline = (i) =>{
        console.log("changing");
        if(i===currentEvent) return;
        const newContent = events[props.index][3 * i + 2];
        setShowNewInfo(false);

        setTimeout(() => {
            document.getElementById('currentInfo').textContent = newContent;

            document.querySelector('.event').textContent = events[props.index][3 * i];

            setCurrentEvent(i);

            setShowNewInfo(true);
        }, 300); 

    };



    let parallaxImage = document.querySelector('.Location');
    const [fromTop, setFromTop] = useState(0);
    
    window.addEventListener('scroll', () => {

        if(parallaxImage === null) parallaxImage = document.querySelector('.Location');

        const rect = parallaxImage.getBoundingClientRect();
        let yOffset = rect.top;

        setFromTop(yOffset);

        const parallaxPos = yOffset * 0.3 + 50;

        if (parallaxImage.style.backgroundAttachment != 'fixed') {
            parallaxImage.style.backgroundPositionY = `${parallaxPos}%`;
        }


        if(scroll === null) scroll = document.querySelector('.scroll');

        scroll.style.color = yOffset === 0 ? 'white' : 'transparent';

    }, {capture: true});




    const [revealed, setRevealed] = useState(false);
    useEffect(()=>{
        if(revealed) return;
        console.log(fromTop);
        if(fromTop < -700) {
            document.getElementById('historyDescription').classList.add('reveal');
        }
        if(fromTop < -1300) {
            document.getElementById('timeline').classList.add('reveal2');
            setTimeout(() => {
                document.getElementById('cultureInfo').classList.add('reveal2');
                const timelineContents = document.querySelectorAll('.timeline-content');
                let index = 0;
                timelineContents.forEach(element =>{
                    setTimeout(() =>{
                        element.classList.add('reveal');
                    }, 100 * index);
                    index++;
                    
                });
            }, 500);

        }
        if(fromTop < -2000) {
            document.getElementById('tipTitle').classList.add('reveal4');
            setRevealed(true);
        }
    }, [fromTop]);


    return (
        <div id = "descriptionContainer">
            <div className = "scroll">Scroll Down</div>
            <div className="main">
                {Introductions[props.index]}
            </div>
            
            <div className = "pair" id = "history">
                <div className = "left">
                    <img src ={descriptionImg[props.index]} priority={'true'}></img>
                </div>
                <div className = "right" id = "historyDescription">{history[props.index]}</div>
            </div>
            
            <div className = "culture">
                <div className = "timelineContainer" id = "timeline">
                    <div className="timeline">
                        <div className="bar"></div>
                        <div className="timeline-item">
                            <div className="timeline-circle"></div>
                            <div className="timeline-content" onClick={()=>changeTimeline(0)}>
                                <h3>{events[props.index][0]}</h3>
                                <p>{events[props.index][1]}</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-circle"></div>
                            <div className="timeline-content" onClick={()=>changeTimeline(1)}>
                                <h3>{events[props.index][3]}</h3>
                                <p>{events[props.index][4]}</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-circle"></div>
                            <div className="timeline-content" onClick={()=>changeTimeline(2)}>
                                <h3>{events[props.index][6]}</h3>
                                <p>{events[props.index][7]}</p>
                            </div>
                        </div>
                        <div className="bar"></div>
                    </div>
                </div>
                <div className = "cultureInfo" id = "cultureInfo">
                    <div className="event">
                        {events[props.index][0]}
                    </div>
                    <div id = "currentInfo" className={`new-info ${showNewInfo ? 'reveal3' : ''}`}>
                        {events[props.index][2]}
                    </div>
                </div>
            </div>
            
            <Traveling index ={props.index}/>
            
            <div className = "gallery">

            </div>

        </div>
    
    );
    
    


}

export default Description;
