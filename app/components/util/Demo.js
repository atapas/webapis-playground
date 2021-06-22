import React from 'react';

// link
import Link from "next/link";

const Demo = ({demo}) => {
    console.log(demo);
    let avatarKey = demo.creator.email ? demo.creator.email : demo.creator.twitter;
    const creatorImage = `https://unavatar.vercel.app/${avatarKey}`;
    return (
        <div className="demo">
            <h2>{demo.title}</h2>
            <div className="creator">
                <img src={creatorImage} />
                <span>
                    <b>
                        <a 
                            href={`https://twitter.com/${demo.creator.twitter}`} target="_blank">{demo.creator.name}
                        </a>
                    </b>
                </span>`;
            </div>
            <p style={{height:'175px'}}>
                {demo.desc}
            </p>
            <Link href={`/demos/${demo.path}`}>
                <button>Try It</button>
            </Link>

            <a target='_blank' href={`https://github.com/atapas/webapis-playground/tree/master/src/demos/${demo.path}/api.js`}>
                <button style={{backgroundColor:'#000000', color:'#FFFFFF', float: 'right'}}>See Code</button>
            </a>
        </div>
    )
};

export default Demo;