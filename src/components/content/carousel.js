import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../css/carousel.css';

class Gallery extends React.Component {
    render() {
        return (
            <div className="gallery-items">
                <Carousel autoPlay interval="2000" transitionTime="1000" infiniteLoop>
                    <div>
                        <img src="https://cdn.pixabay.com/photo/2022/07/18/11/12/statue-7329573_960_720.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://cdn.pixabay.com/photo/2022/08/14/13/01/top-7385857_960_720.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://cdn.pixabay.com/photo/2022/08/12/09/31/night-7381236_960_720.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://cdn.pixabay.com/photo/2022/09/01/09/08/road-7425079_960_720.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://cdn.pixabay.com/photo/2022/09/07/10/01/landscape-7438429_960_720.jpg" alt="" />
                    </div>
                </Carousel>
            </div>
        )
    };
}
export default Gallery