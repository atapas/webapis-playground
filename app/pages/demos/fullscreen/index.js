
import React from 'react';

// api
import { makeFullScreen } from './api';

const FullScreen = () => {

    return(
        <div className="flex-colums">
            <div id="fs-img-id" className="fs-img">
                <img 
                    src="https://res.cloudinary.com/atapas/image/upload/v1602226996/artists/Rock_oz3kq1.png" 
                    alt="Rock" 
                    width="200px" 
                    height="200px" />
            </div>
            
            <button onClick={makeFullScreen}>Make FullScreen</button>
        </div>
    )
}

export default FullScreen;