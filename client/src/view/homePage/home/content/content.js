import { useState,useEffect } from 'react';
// import imageItems from '../../../../data/data';
import '../../../css/content.css';
import Carousel from './carousel'
import ContentPopup from './contentPopup'
import Items from './items'
import { galleryListHomePage } from '../../../../query/gallery/galleryListHomePage';
function Content(){
    const [selectedImage, setselectedImage] = useState(null);
    const [imageItems, setImageItems] = useState([]);
    useEffect(() => {
        loadGalleryList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const loadGalleryList = () =>{
        galleryListHomePage().then( (res) => {
            setImageItems(
                  res.data.map( (row) => (
                      {
                        image: row.picture,
                      })
                  ));
        }).catch( err => {
          console.log(err.response.data.msg)
        });
      }

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