import React, {useState, useEffect} from 'react';
import {CircularProgress, Stack} from "@mui/material";

const Loading = (props) => {
    return (
        <Stack justifyContent={'center'} alignItems={'center'} sx={{...props.sx,width:'100%'}}>
            <CircularProgress/>
        </Stack>
    )
}

export default Loading;