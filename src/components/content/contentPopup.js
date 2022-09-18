import '../css/contentPopup.css'

function ContentPopup(props){
    const { image,offPopUp } = props;
    return(
        <div className="content-popup">
            <div className="content-popup-bg" onClick={offPopUp}></div>
            <div className="content-popup-image">
               <img src={image.image} alt="" />
            </div>
        </div>
    )
}

export default ContentPopup