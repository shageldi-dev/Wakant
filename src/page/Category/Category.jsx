import React, {useState, useEffect, useContext} from 'react';
import {Button, Card, CardContent, Grid, Stack} from "@mui/material";
import {cardStyle} from "../../component/Home/Category";
import {AxiosInstance} from "../../api/AxiosInstance.mjs";
import {getImageFullUrl} from "../../common/utils.mjs";
import {Bold} from "../../component/App/Text";
import {regularButton} from "../../common/theme.mjs";
import {useTranslation} from "react-i18next";
import {AppContext} from "../../App";
import {RegularTypography} from "../../component/Common/MuiComponent";
import NorthEastIcon from '@mui/icons-material/NorthEast';

export const SubCategoryItem=(props)=>{
    const {item} = props;
    const {appLanguage} = useContext(AppContext);
    return(
        <Card sx={{...cardStyle,}} elevation={0}>
            <CardContent>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <img src={getImageFullUrl(item.image)} style={{width:'65px',height:'65px',objectFit:'contain'}} alt={'category'}/>
                    <RegularTypography>{appLanguage==='ru'?item.nameRu:item.name} {`(${item.job_count===null?0:item.job_count})`}</RegularTypography>
                    <Stack sx={{height:'65px'}} alignItems={'flex-end'} justifyContent={'flex-start'}>
                        <NorthEastIcon sx={{color:'custom.notActive'}}/>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}

const Category = (props) => {
    const {t} = useTranslation();
    const {isMobile} = useContext(AppContext);
    const [list,setList] = useState([]);
    const [loading,setLoading] = useState(true);
    function getData(){
        setLoading(true);
        AxiosInstance.get('/public/categories')
            .then((response)=>{
                setList(response.data.data);
                setLoading(false);
            })
            .catch((error)=>{
                setLoading(false);
            })
    }

    useEffect(()=>{
        getData();
    },[])
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <Stack
                sx={{width: '100%',mb:4}}
                direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <Stack
                    sx={{width: '100%'}}
                    direction={'row'} alignItems={'center'} justifyContent={'center'}>
                    <Bold
                        sx={{fontSize: isMobile ? '22px' : '30px'}}
                        value={t('categories')}/>
                </Stack>
            </Stack>
            <Grid container spacing={2} sx={{mb:8}}>
                {
                    list.map((category,i)=>{
                        return(
                            <Grid item key={`cat-item-${i}`} xs={12} sm={12} md={4}>
                                <SubCategoryItem item={category}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}

export default Category;