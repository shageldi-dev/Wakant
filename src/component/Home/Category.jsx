import React, {useState, useEffect, useContext} from 'react';
import {Button, Card, CardActionArea, CardContent, Stack} from "@mui/material";
import {colors} from "../../common/theme.mjs";
import Text, {Bold} from "../App/Text";
import {AppContext} from "../../App";
import {Fonts} from "../../common/fonts.mjs";

const cardStyle={
    background:colors.NOT_ACTIVE_BLUE,
    cursor:'pointer',
    "&:hover":{
        background: colors.WHITE,
        boxShadow:`0px 0px 20px rgba(192, 192, 192, 0.25)`
    }
}
const Category = (props) => {
    const {isMobile,t}=useContext(AppContext);
    return (
        <Card sx={{...cardStyle}} elevation={0}>
                <CardContent>
                    <Stack spacing={isMobile?2:4}>
                        <Bold value={props.item.title} sx={{fontSize:isMobile?'18px':'22px'}}/>
                        <Text value={props.item.desc} sx={{fontSize:isMobile?'14px':'16px'}}/>
                        <Button
                            sx={{color:'custom.alwaysWhite',
                                fontSize:isMobile?'12px':'14px',
                                fontFamily:Fonts.REGULAR,
                                textTransform:'none'}}
                            variant={'contained'}>{`${t('see_more')} (${props.item.job_count})`}</Button>
                    </Stack>
                </CardContent>
        </Card>
    )
}

export default Category;