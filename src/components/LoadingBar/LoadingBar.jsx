import React from 'react'
import LoadingBar from "react-top-loading-bar";
import { useLoadingBarStore } from '../../store';

const LoadingBarComponent = () => {
    const store = useLoadingBarStore();
    return (
        <LoadingBar
            progress={store.progress}
            height={3}
            color="red"
            onLoaderFinished={() => store.setProgress(0)}
        />
    )
}

export default LoadingBarComponent