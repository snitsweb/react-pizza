import ContentLoader from "react-content-loader";
import React from "react";

const LoadingBlock = () => {
    return (
        <ContentLoader
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="0" rx="10" ry="10" width="260" height="260" />
            <rect x="0" y="270" rx="10" ry="10" width="280" height="25" />
            <rect x="0" y="305" rx="10" ry="10" width="280" height="84" />
            <rect x="0" y="400" rx="10" ry="10" width="90" height="27" />
            <rect x="165" y="400" rx="10" ry="10" width="120" height="45" />
        </ContentLoader>
    )
}

export default LoadingBlock