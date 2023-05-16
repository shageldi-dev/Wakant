import React, {useState, useEffect, useContext} from 'react';
import {Avatar, Button, Card, CardActionArea, CardContent, Stack} from "@mui/material";
import {colors} from "../../common/theme.mjs";
import Text, {Bold} from "../App/Text";
import {AppContext} from "../../App";
import {Fonts} from "../../common/fonts.mjs";
import {getImageFullUrl} from "../../common/utils.mjs";

export const cardStyle={
    background:colors.NOT_ACTIVE_BLUE,
    cursor:'pointer',
    "&:hover":{
        background: colors.WHITE,
        boxShadow:`0px 0px 20px rgba(192, 192, 192, 0.25)`
    }
}
const Category = (props) => {
    const {isMobile,t,appLanguage}=useContext(AppContext);
    const [title,setTitle]=useState(appLanguage==='ru'?props.item.nameRu:props.item.name);
    return (
        <Card sx={{...cardStyle,}} elevation={0}>
                <CardContent>
                    <Stack spacing={isMobile?2:4}>
                        <Stack direction={'row'} alignItems={'center'} spacing={2}>
                            <Avatar alt={title} src={getImageFullUrl(props.item.imageUrl)} />
                            <Bold value={title} sx={{fontSize:isMobile?'18px':'22px'}}/>
                        </Stack>
                        <Text value={appLanguage==='ru'?props.item.descriptionRu:props.item.description} sx={{fontSize:isMobile?'14px':'16px'}}/>
                        <Button
                            sx={{color:'custom.alwaysWhite',
                                fontSize:isMobile?'12px':'14px',
                                fontFamily:Fonts.REGULAR,
                                textTransform:'none'}}
                            variant={'contained'}>{`${t('see_more')}`}</Button>
                    </Stack>
                </CardContent>
        </Card>
    )
}

export default Category;