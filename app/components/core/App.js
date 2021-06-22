
import React, { useState } from 'react';

import * as data from '../../data/demo-meta.json';

import { Demo } from '..';

const App = () => {
    const [demos, setDemos] = useState(data.demos);

    

    return (
        <div className="demo-list">
         {
            demos.map((demo, index) => (
                <Demo demo={ demo } key={ index } />
            ))
         }
            
        </div>

    )

}

export default App;