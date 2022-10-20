import React, {useState, useEffect} from 'react';
import Skeleton from "@mui/material/Skeleton";

const ImageLoading = (props) => {
    return (
        <div>
            <Skeleton sx={{ ...props.sx }} animation="wave" variant="rounded" />
        </div>
    )
}

export default ImageLoading;