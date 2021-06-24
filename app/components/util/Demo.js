import React from 'react';

// link
import Link from "next/link";

// icons
import { FiZap, FiGithub } from "react-icons/fi";

// Creator
import { Creator } from "..";

const Demo = ({demo}) => {
    // console.log(demo);
    
    return (
        <div className="demo">
            <h2>{demo.title}</h2>
            <Creator info={ demo.creator } size="sm"/>
            <p style={{height:'175px'}}>
                {demo.desc}
            </p>
            <Link href={`/demos/${demo.path}?id=${demo.id}`}>
                <button>Try It <FiZap /></button>
            </Link>

            <a target='_blank' href={`https://github.com/atapas/webapis-playground/tree/master/src/demos/${demo.path}/api.js`}>
                <button style={{backgroundColor:'#000000', color:'#FFFFFF', float: 'right'}}>See Code <FiGithub /></button>
            </a>
        </div>
    )
};

export default Demo;