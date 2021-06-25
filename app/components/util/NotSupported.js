

// link
import Link from "next/link";

const NotSupported = ({canIUseURL}) => {

    return(
        <div className="not-supported flex-colums">
            <h1>OOPS!!!</h1>
            <h3>
                It seems your browser doesn't support this feature. Please check out {' '}
                <a href={canIUseURL} target="_blank">Can I Use</a> for more details.
            </h3>
        </div>
    )
};

export default NotSupported;