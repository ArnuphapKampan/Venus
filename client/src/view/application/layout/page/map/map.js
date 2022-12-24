import React, { useEffect } from 'react'
//active menu
import { activeMenu } from '../../../../../reducer/userReducer';
import { useDispatch } from 'react-redux';
import { longdo, map, LongdoMap } from './longdo-map/LongdoMap';
//replace a LongdoMap.js file
const Map = () => {
    const mapKey = process.env.REACT_APP_MAP_API;
    //active menu
    const dispatch = useDispatch();
    const activePath = "map";
    useEffect(() => {
        dispatch(activeMenu(activePath));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch]);
    //active menu

    const initMap = () => {
      map.location({ lon:100.6534494, lat:13.764398 }, true);
      map.zoom(6, true);
      const locationList = [{ lon:101.2,
                              lat:12.8,
                              title:'Marker1',
                              detail:'My Home',
                              image:'https://www.w3schools.com/html/pic_trulli.jpg',
                            },
                            { lon:100.6534494,
                              lat:13.764398,
                              title:'Marker2',
                              detail:'My Home',
                              image:'https://www.w3schools.com/html/img_chania.jpg',
                             }
                           ]

      map.Layers.setBase(longdo.Layers.NORMAL);
      map.language('th')

      navigator.geolocation.getCurrentPosition((position) => {
        map.Tags.add(function(tile, zoom) {
            for (var i = 0; i < locationList.length; ++i) {
              var marker = new longdo.Marker({ lon:`${locationList[i].lon}`, lat:`${locationList[i].lat}` },
                {
                  title: `${locationList[i].title}`,
                  icon: {
                    html: '<h1><i class="fas fa-map-marker-alt text-danger"></i></h1>',
                    offset: { x: 12, y: 45 }
                  },
                  visibleRange: { min: 6, max: 100 },
                  size: { width: 250, height: 250 },
                  detail: `พิกัด: ${locationList[i].lat} , ${locationList[i].lon}</br>
                          </br>
                          <a target="_blank" href="https://www.google.co.th/maps/dir/${position.coords.latitude},${position.coords.longitude}/${locationList[i].lat},${locationList[i].lon}/@${locationList[i].lat},${locationList[i].lon},20z/" ><button style="font-size:10px;" class="btn btn-outline-info ">Let's Go <i class="fas fa-plane-departure"></i></button></a>
                          </br>
                          </br>
                          <img style="width: 100%; height: 100%; object-fit: scale-down;" src="${locationList[i].image} " alt="Girl in a jacket">`,
                  draggable: false,
                  weight: longdo.OverlayWeight.Top,
                });
              map.Overlays.add(marker);
            }
        });
      });
    }
    

    
    return (
      <div className="h-100 d-inline-block">
        <LongdoMap id="longdo-map" mapKey={mapKey} callback={initMap} />
      </div>
    );
}

export default Map