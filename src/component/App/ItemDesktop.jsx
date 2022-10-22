import React, {useState, useEffect} from 'react';
import {colors, regularButton} from "../../common/theme.mjs";
import {useContext} from "react";
import {AppContext} from "../../App";
import {Button, Card, CardContent, Grid, Stack} from "@mui/material";
import Image from "mui-image";
import Skeleton from "@mui/material/Skeleton";
import Text, {Bold, SemiBold} from "./Text";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import {convertTimeStampToDate} from "../../common/utils.mjs";
import {useNavigate} from "react-router-dom";


const ItemDesktop = (props) => {
    const {isMobile, t} = useContext(AppContext);
    const {item} = props;
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const cardStyle = {
        backgroundColor: isHover?colors.WHITE:colors.NOT_ACTIVE_BLUE,
        cursor: 'pointer',
        padding:'16px',
        borderRadius:'10px',
        transition:'0.5s',
        boxShadow: isHover?`0px 0px 20px rgba(192, 192, 192, 0.25)`:''
    }

    const navigate=useNavigate();
    function changeRoute(path){
        navigate(path);
    }

    return (
        <div style={{...cardStyle}} onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave} onClick={()=>changeRoute('/view-job')}>
                <Stack spacing={2}>
                    <Grid container sx={{width: '100%'}}>
                        <Grid item xs={1}>
                            <Image
                                showLoading={<Skeleton sx={{width: '52px', height: '52px'}} variant={'rounded'}
                                                       animation={'wave'}/>}
                                src={item.image}
                                fit={'cover'}
                                style={{width: '52px', height: '52px', borderRadius: '6px'}}
                                wrapperStyle={{height: '52px', width: '52px'}}/>
                        </Grid>
                        <Grid item xs={11}>
                            <SemiBold value={item.title} sx={{fontSize: '18px'}}/>
                            <Stack direction={'row'} spacing={1} alignItems={'center'}>
                                <LocationOnIcon sx={{width: '18px', color: 'custom.notActive'}}/>
                                <Text value={item.location} sx={{fontSize: '16px', color: 'custom.notActive'}}/>
                            </Stack>
                        </Grid>
                    </Grid>

                    <Bold value={item.category} sx={{mt: 2, fontSize: '30px'}}/>

                    <Stack direction={'row'} alignItems={'center'} spacing={4}>
                        <Stack direction={'row'} spacing={1} alignItems={'center'}>
                            <BusinessCenterIcon sx={{width: '18px', color: 'custom.notActive'}}/>
                            <Text value={item.time} sx={{fontSize: '16px', color: 'custom.notActive'}}/>
                        </Stack>

                        <Stack direction={'row'} spacing={1} alignItems={'center'}>
                            <AccessTimeFilledIcon sx={{width: '18px', color: 'custom.notActive'}}/>
                            <Text value={convertTimeStampToDate(item.date)}
                                  sx={{fontSize: '16px', color: 'custom.notActive'}}/>
                        </Stack>
                    </Stack>

                    <Text value={item.desc} sx={{fontSize: '16px', color: 'custom.notActive', height: '10px'}}/>

                    <br/>
                    <Stack
                        direction={'row'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                        sx={{
                            width: '100%',mt:2
                        }}>
                        <SemiBold value={item.price} sx={{fontSize: '20px', color: 'primary.main'}}/>
                        <Button variant={'contained'} sx={{
                            ...regularButton,
                            color:'#FFFFFF'
                        }}>
                            {t('submit_job')}
                        </Button>
                    </Stack>
                </Stack>

        </div>
    )
}

export default ItemDesktop;