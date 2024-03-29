import '../css/content.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faImages } from '@fortawesome/free-solid-svg-icons'
function items(){
    return(
        <div className="content" id="content">
                <div className="item" data-background="https://cdn.pixabay.com/photo/2022/09/06/07/49/cat-7436051_960_720.jpg">
                    <img src="https://cdn.pixabay.com/photo/2022/09/06/07/49/cat-7436051_960_720.jpg" alt="Avatar" ></img>
                    <div className="view-bar"><div className="object-view"><FontAwesomeIcon icon={faEye} /> Views 25</div><div className="object-loadMore"><FontAwesomeIcon icon={faImages} /></div></div>
                </div>
                <div className="item" data-background="https://cdn.pixabay.com/photo/2021/05/01/13/10/leaf-6220977_960_720.jpg">
                    <img src="https://cdn.pixabay.com/photo/2021/05/01/13/10/leaf-6220977_960_720.jpg" alt="Avatar" ></img>
                    <div className="view-bar"><div className="object-view"><FontAwesomeIcon icon={faEye} /> Views 25</div><div className="object-loadMore"><FontAwesomeIcon icon={faImages} /></div></div>
                </div>
                <div className="item" data-background="https://cdn.pixabay.com/photo/2022/08/14/13/01/top-7385857_960_720.jpg">
                    <img src="https://cdn.pixabay.com/photo/2022/08/14/13/01/top-7385857_960_720.jpg" alt="Avatar" ></img>
                    <div className="view-bar"><div className="object-view"><FontAwesomeIcon icon={faEye} /> Views 25</div><div className="object-loadMore"><FontAwesomeIcon icon={faImages} /></div></div>
                </div>
                <div className="item" data-background="https://cdn.pixabay.com/photo/2022/07/18/11/12/statue-7329573_960_720.jp">
                    <img src="https://cdn.pixabay.com/photo/2022/07/18/11/12/statue-7329573_960_720.jpg" alt="Avatar" ></img>
                    <div className="view-bar"><div className="object-view"><FontAwesomeIcon icon={faEye} /> Views 25</div><div className="object-loadMore"><FontAwesomeIcon icon={faImages} /></div></div>
                </div>
                <div className="item" data-background="https://cdn.pixabay.com/photo/2022/08/12/09/31/night-7381236_960_720.jpg">
                    <img src="https://cdn.pixabay.com/photo/2022/08/12/09/31/night-7381236_960_720.jpg" alt="Avatar" ></img>
                    <div className="view-bar"><div className="object-view"><FontAwesomeIcon icon={faEye} /> Views 25</div><div className="object-loadMore"><FontAwesomeIcon icon={faImages} /></div></div>
                </div>
                <div className="item" data-background="https://cdn.pixabay.com/photo/2022/08/21/17/47/color-7401750_960_720.jpg">
                    <img src="https://cdn.pixabay.com/photo/2022/08/21/17/47/color-7401750_960_720.jpg" alt="Avatar" ></img>
                    <div className="view-bar"><div className="object-view"><FontAwesomeIcon icon={faEye} /> Views 25</div><div className="object-loadMore"><FontAwesomeIcon icon={faImages} /></div></div>
                </div>
                <div className="item" data-background="https://cdn.pixabay.com/photo/2022/09/01/09/08/road-7425079_960_720.jpg">
                    <img src="https://cdn.pixabay.com/photo/2022/09/01/09/08/road-7425079_960_720.jpg" alt="Avatar" ></img>
                    <div className="view-bar"><div className="object-view"><FontAwesomeIcon icon={faEye} /> Views 25</div><div className="object-loadMore"><FontAwesomeIcon icon={faImages} /></div></div>
                </div>
                <div className="item" data-background="https://cdn.pixabay.com/photo/2022/09/07/10/01/landscape-7438429_960_720.jpg">
                    <img src="https://cdn.pixabay.com/photo/2022/09/07/10/01/landscape-7438429_960_720.jpg" alt="Avatar" ></img>
                    <div className="view-bar"><div className="object-view"><FontAwesomeIcon icon={faEye} /> Views 25</div><div className="object-loadMore"><FontAwesomeIcon icon={faImages} /></div></div>
                </div>
        </div>
    );
}

export default items;