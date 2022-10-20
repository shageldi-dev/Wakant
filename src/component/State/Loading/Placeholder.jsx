import React, {useState, useEffect} from 'react';
import {Card, CardContent} from "@mui/material";

const Placeholder = (props) => {
    return (
        <Card sx={{width:'100%',height:'auto',...props.sx}} elevation={0}>
            <CardContent>
                <img src={'/images/logo.svg'} style={{filter:'grayscale(100%)',width:'100%'}}/>
            </CardContent>
        </Card>
    )
}

export default Placeholder;