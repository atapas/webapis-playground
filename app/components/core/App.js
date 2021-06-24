
import React, {useEffect} from 'react';

// localstorage hook
import useLocalStorage from '../../hooks/use-local-storage';

// import data from json
import * as data from '../../data/demo-meta.json';

// Demo component
import { Demo } from '..';

const App = () => {
    
    const [demos, setDemos] = useLocalStorage('demos', []);

    useEffect(() =>{
        setDemos(data.demos);
    }, []);
    return (
        <>
            <div className="demo-list">
            {
                data.demos.map((demo, index) => (
                    <Demo demo={ demo } key={ index } />
                ))
            }
            </div>
        </> 
    )
}

export default App;