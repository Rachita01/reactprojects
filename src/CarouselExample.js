import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Opening from "./image/openingpage.jpg";
import Taj from "./image/tajmahal.jpg";
import Petra from "./image/petra.jpg";
import Giza from "./image/pyramidofgiza.jpg";
import Jenerio from "./image/riodejenerio.jpg";
import Liberty from "./image/statueofliberty.jpg";
import Coleosseum from "./image/romancoleosseum.jpg";
import Eiffel from "./image/eiffeltower.jpg";

let styles={
    margin:'auto',
    width:'500px',
};

function CarouselExample()
{
    return(
        <div style={styles}>
            <h2>Seven Wonders of World</h2>
            <Carousel>
            <div>
                    <img src={Opening} alt="Wonders"/>
                    <p className="legend">7 wonders of world</p>
                </div>
                <div>
                    <img src={Taj} alt="Taj"/>
                    <p className="legend">Taj Mahal</p>
                </div>
                <div>
                    <img src={Petra} alt="Petra"/>
                    <p className="legend">Petra</p>
                </div>
                <div>
                    <img src={Giza} alt="Giza"/>
                    <p className="legend">Pyramid of Giza</p>
                </div>
                <div>
                    <img src={Jenerio} alt="Jenerio"/>
                    <p className="legend">Rio De Jenerio</p>
                </div>
                <div>
                    <img src={Liberty} alt="Liberty"/>
                    <p className="legend">Staue of Liberty</p>
                </div>
                <div>
                    <img src={Coleosseum} alt="Coleosseum"/>
                    <p className="legend">Roman Coleosseum</p>
                </div>
                <div>
                    <img src={Eiffel} alt="Eiffel"/>
                    <p className="legend">Eiffel Tower</p>
                </div>
            </Carousel>

        </div>
    );
}

export default CarouselExample;