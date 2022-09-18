import '../css/content.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faImages } from '@fortawesome/free-solid-svg-icons'
function Items(props) {
    const { image,onPopUp } = props; 
    return(
        <>
            <div className="item">
                <img src={image.image} alt="" onClick={() => {onPopUp(image)}}></img>
                <div className="view-bar"><div className="object-view"><FontAwesomeIcon icon={faEye} /> Views 25</div><div className="object-loadMore" ><FontAwesomeIcon icon={faImages}  onClick={() => {onPopUp(image)}} /></div></div>
            </div>
        </>
    );
}

export default Items;