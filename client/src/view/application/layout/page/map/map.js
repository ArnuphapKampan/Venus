import React, { useEffect } from 'react'
//active menu
import { activeMenu } from '../../../../../reducer/userReducer';
import { useDispatch } from 'react-redux';
//replace a LongdoMap.js file
import { longdo, map, LongdoMap } from './longdo-map/LongdoMap';
import { loadMarker } from '../../../../../query/map/loadMarker';

const Map = () => {
    const mapKey = process.env.REACT_APP_MAP_API;
    const authtoken = localStorage.getItem('token')
    //active menu
    const dispatch = useDispatch();
    const activePath = "map";
    useEffect(() => {
        dispatch(activeMenu(activePath));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch]);
    //active menu

    const initMap = () => {

        loadMarker(authtoken).then( (res) => {
            var menuGetLocation = new longdo.MenuBar({ button: [
              { label: 'location', type: longdo.ButtonType.Push }
            ], change: getLocation });
            map.Ui.add(menuGetLocation);
      
            map.location({ lon:101.00501239299774, lat:14.595213593451897 }, true);
            map.zoom(6, true);
            const locationList = res.data
      
            map.Layers.setBase(longdo.Layers.NORMAL);
            map.language('th')
      
            navigator.geolocation.getCurrentPosition((position) => {
              map.Tags.add(function(tile, zoom) {
                  for (var i = 0; i < locationList.length; ++i) {
                    let markerIcon = JSON.parse(locationList[i].setting_marker)
                    var marker = new longdo.Marker({ lon:`${locationList[i].longitude}`, lat:`${locationList[i].latitude}` },
                      {
                        title: `${locationList[i].location_title}`,
                        icon: {
                          html: `<h1><i class="${markerIcon.icon} ${markerIcon.class}" style="color:${markerIcon.color}; font-size:${markerIcon.size}px;"></i></h1>`,
                          offset: { x: 12, y: 45 }
                        },
                        visibleRange: { min: 6, max: 100 },
                        size: { width: 300 },
                        detail: `
                                ${locationList[i].location_detail}</br>
                                พิกัด: ${locationList[i].latitude} , ${locationList[i].longitude}</br>
                                </br>
                                <a class="shadow-none" target="_blank" href="https://www.google.co.th/maps/dir/${position.coords.latitude},${position.coords.longitude}/${locationList[i].latitude},${locationList[i].longitude}/@${locationList[i].latitude},${locationList[i].longitude},20z/" ><button style="font-size:10px;" class="btn btn-outline-info shadow-none">Let's Go <i class="fas fa-plane-departure"></i></button></a>
                                </br>
                                </br>
                                ${(locationList[i].image !== null)?`<img style="width: 100%; height: 100%; object-fit: scale-down;" src="${locationList[i].image}" alt="Girl in a jacket">`:''}`,
                        draggable: false,
                        weight: longdo.OverlayWeight.Top,
                      });
                    map.Overlays.add(marker);
                  }
              });
            });
        }).catch( err => {
          console.log(err.response.data.msg)
        });


      
    }
    
    const getLocation = () => {
      var result = map.location();
      alert("lat: "+result.lat+" lon: "+result.lon)
    }

    
    return (
      <div className="shadow-none h-100 d-inline-block">
        <LongdoMap id="longdo-map" mapKey={mapKey} callback={initMap} />
      </div>
    );
}

export default Map