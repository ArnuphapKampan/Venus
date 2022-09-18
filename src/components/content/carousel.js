import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../css/carousel.css';

class Gallery extends React.Component {
    render() {
        const showItemCarousel = this.props.val.map((val,index)=>{
            return <img key={index} src={val.image} alt="" />
        });
        return (
            <div className="gallery-items">
                <Carousel autoPlay interval="2000" transitionTime="1000" infiniteLoop>
                    {showItemCarousel}
                </Carousel>
            </div>
        )
    };
}
export default Gallery