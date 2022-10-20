import React, {useState, useEffect, useContext} from 'react';
import {Stack} from "@mui/material";
import Image from "mui-image";
import Text, {SemiBold} from "../App/Text";
import {AppContext} from "../../App";

const Feature = (props) => {
    return (
        <Stack justifyContent={'center'} alignItems={'center'} spacing={2}>
            <Stack
                justifyContent={'center'}
                alignItems={'center'}
                sx={{
                    // backgroundImage: `url(/images/cyrcle.svg)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundColor:'#F4F7FD',
                    backgroundSize: 'cover',
                    borderRadius:'50%',
                    width: '110px',
                    height: '110px'
                }}>
                <Image src={props.image} fit={'fill'} style={{width: '39px'}} wrapperStyle={{width: '39px'}}/>
            </Stack>

            <SemiBold sx={{fontSize:'18px',textAlign:'center'}} value={props.title}/>
            <Text sx={{fontSize:'16px',textAlign:'center',color:'custom.notActive'}} value={props.desc}/>

        </Stack>
    )
}

export default Feature;