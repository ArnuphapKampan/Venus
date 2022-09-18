import { useState } from 'react';
import imageItems from '../../data/data';
import '../css/content.css';
import Carousel from './carousel'
import ContentPopup from './contentPopup'
import Items from './items'

function Content(){
    const [selectedImage, setselectedImage] = useState(null);

    function onPopUp(val){
        setselectedImage(val)
    }

    function offPopUp(){
        setselectedImage(null)
    }

    const showItem = imageItems.map((val,index)=>{
        return <Items key={index} image={val} onPopUp={onPopUp} />
    });

    let imagepopup = null;
    if(!!selectedImage){
        imagepopup = <ContentPopup image={selectedImage} offPopUp={offPopUp}/>
    }

    return(
        <>
        <Carousel val={imageItems} />
        <div className="content" id="content">
            {showItem}
        </div>
        {imagepopup}
        </>
    );
}

export default Content;