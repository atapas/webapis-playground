import React, { useEffect } from 'react';
import { actionHandlers,hasSupport, initializingListeners, playVideo } from '@/modules/apis/media-session';
import { NotSupported } from 'components';

function mediaSession() {
    useEffect(() => {
        playVideo();
        initializingListeners();
      }, []);

    for (const [action, handler] of actionHandlers) {
        try {
            if(hasSupport()){
                navigator.mediaSession.setActionHandler(action as MediaSessionAction,handler as MediaSessionActionHandler);
            }
            else
             return <NotSupported />
        }
        catch(error){
            console.error("The performed action - not supported for the type" + action);
        }   
    }
    return (
        <div>
            <video
                id="js-picture--video"
                className="tw-w-full tw-mt-4 tw-rounded-lg"
                src="https://res.cloudinary.com/atapas/video/upload/v1620052733/demos/earth_rotating_g1xv0f.mp4"
                autoPlay
                loop
                title = ""
                controls
            />
            <br> 
            </br>
            <div>
                Event Logs:
                
                <table id="table_log" style={{width: "108vh" , border: "solid 1px"}}>
                    <thead>
                        <tr style={{ border: "solid 1px"}}>
                            <th style={{ border: "solid 1px"}}>
                                Selected Event
                            </th>
                            <th style={{ border: "solid 1px"}}>
                                Positional Update
                            </th>
                            <th style={{ border: "solid 1px"}}>
                                Current Track
                            </th>
                        </tr>
                    </thead>
                    <tbody id = "logger_events"> 
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default mediaSession;