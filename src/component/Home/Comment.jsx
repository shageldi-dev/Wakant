import React, {useState, useEffect} from 'react';
import {colors} from "../../common/theme.mjs";
import {Avatar, Card, CardContent, Stack} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import Text, {Bold} from "../App/Text";
import Divider from "@mui/material/Divider";
import {Rating} from "@mui/lab";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const cardStyle={
    background:colors.NOT_ACTIVE_BLUE,
    cursor:'pointer',
    width:'100%',
    mt:'-35px',
    paddingTop:'35px',
    "&:hover":{
        background: colors.WHITE,
        boxShadow:`0px 0px 20px rgba(192, 192, 192, 0.25)`
    }
}
const Comment = (props) => {
    return (
        <Stack alignItems={'center'}>
            <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
                sx={{ width: '70px', height: '70px',bgcolor:'#DDDDDD' }}
            >
                <PersonIcon sx={{width:'50px'}}/>
            </Avatar>
            <Card sx={{...cardStyle}} elevation={0}>
                <CardContent>
                    <Stack spacing={3}>
                        <Bold sx={{width:'100%',textAlign:'center',fontSize:'18px'}} value={'Annayev M'}/>
                        <Divider color={colors.PRIMARY}/>
                        <Rating
                            readOnly
                            name="half-rating"
                            defaultValue={4.5}
                            icon={<StarIcon sx={{color:"#FB8200"}}/>}
                            emptyIcon={<StarBorderIcon sx={{color:"#FB8200"}}/>}
                            precision={0.5} />
                        <Text sx={{width:'100%',fontSize:'16px'}} value={'Я также получил свою работу через Vacant. Я думаю, что ваши услуги по поиску работы выделяются среди остальных. Я благодарю вас и ваших партнеров.'}/>
                    </Stack>
                </CardContent>
            </Card>
        </Stack>
    )
}

export default Comment;