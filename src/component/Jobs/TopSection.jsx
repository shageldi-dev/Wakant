import React, {useState, useEffect, useContext, useRef} from 'react';
import {Box, Paper, Stack} from "@mui/material";
import Text, {Bold} from "../App/Text";
import {AppContext} from "../../App";
import SearchBox from "../Home/SearchBox";

const TopSection = (props) => {
    const {t} = useContext(AppContext);
    const ref=useRef();
    return (
        <Box  ref={ref} sx={{
            backgroundColor:'custom.notActiveBlue',
            backgroundImage:`url(/images/illustartion/ill-group.png)`,
            backgroundPosition:'bottom',
            backgroundRepeat:'no-repeat',
            backgroundSize:'99% 70%',
            p:4,
            borderRadius:'5px',width:'100%'
        }}>
           <Stack spacing={3}>
               <Stack direction={'row'} spacing={1} alignItems={'center'} justifyContent={'center'}>
                   <Bold value={'22'} sx={{fontSize:'24px',color:'primary.main'}}/>
                   <Bold value={t('jobb')} sx={{fontSize:'24px',color:'primary.main'}}/>
                   <Bold value={t('av_jobs')} sx={{fontSize:'24px'}}/>
               </Stack>

               <Text value={t('lorem ipsum')} sx={{width:'100%',fontSize:'14px',textAlign:'center',paddingLeft:'10%',paddingRight:'10%'}}/>

               <center>
                   <Paper sx={{
                       width:'90%',
                       pt:1,pb:1,pl:2,pr:2,
                       boxShadow:'0px 0px 30px rgba(192, 192, 192, 0.25)'
                   }}>
                       <SearchBox/>
                   </Paper>
               </center>
           </Stack>


        </Box>
    )
}

export default TopSection;