import React, {useState, useEffect} from 'react';
import {Badge, Checkbox, FormControlLabel, Stack} from "@mui/material";
import {TypographyProps} from "@mui/material/Typography";
import {Fonts} from "../../common/fonts.mjs";
import {Box} from "@mui/system";
import {colors} from "../../common/theme.mjs";

const FilterCheck = (props) => {
    return (
        <Stack sx={{width:'100%'}} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <FormControlLabel control={<Checkbox
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                size={'medium'} />} componentsProps={{
                typography:{sx:{fontFamily:Fonts.REGULAR,fontSize:'18px',color:'custom.textColor'}}
            }} label={props.label} />
            <Box sx={{color:"#FFFFFF",
                backgroundColor:colors.SECOND_BLUE,
                pl:1,pr:1,
                fontFamily:Fonts.REGULAR,borderRadius:'5px',fontSize:'16px'}}>
                {props.count}
            </Box>
        </Stack>
    )
}

export default FilterCheck;