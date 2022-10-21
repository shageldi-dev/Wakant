import React, {useState, useEffect, useContext} from 'react';
import TopSection from "../../component/Jobs/TopSection";
import {Box} from "@mui/material";
import {AppContext} from "../../App";
import MobTopSec from "../../component/Jobs/MobTopSec";
import '../../style/Jobs/jobs.css'

const Jobs = (props) => {
    const {isMobile}=useContext(AppContext);
    return (
        <Box sx={{paddingTop:'40px',paddingBottom:'40px'}}>
            {
                isMobile?
                    <MobTopSec/>
                    :
                    <TopSection/>
            }


        </Box>
    )
}

export default Jobs;