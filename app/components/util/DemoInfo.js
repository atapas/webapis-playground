import React from 'react';

// Creator
import { Creator } from '..';

const DemoInfo = ({info}) => {
    console.log(info);
    return(
        <div className="flex-colums">
            <h1>{info.title}</h1>
            <Creator info={info.creator} size="md"/>
            <p style={{maxWidth: '500px', padding: '5px'}}>{info.desc}</p>
        </div>

    )
};

export default DemoInfo;