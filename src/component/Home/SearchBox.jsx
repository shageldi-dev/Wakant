import React, {useState, useEffect, useContext} from 'react';
import {Button, Grid, InputBase, InputLabel, MenuItem, Select, Stack, TextField, Typography} from "@mui/material";
import {AppContext} from "../../App";
import SearchIcon from '@mui/icons-material/Search';
import {Fonts} from "../../common/fonts.mjs";
import Divider from "@mui/material/Divider";
import {colors, regularButton} from "../../common/theme.mjs";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from '@mui/material/InputAdornment';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';
import { styled } from '@mui/system';

const inputStyle={
    fontFamily:Fonts.REGULAR,fontSize:'18px'
}

const selectStyle={
    fontFamily:Fonts.REGULAR,fontSize:'18px',
    width:'100%',
    border:'none',
    outline:'none',
    background:'transparent',
    color:colors.NOT_ACTIVE
}



const SearchBox = (props) => {
    const {t,isMobile}=useContext(AppContext);

    const getDivider=()=>{
        if(!isMobile){
            return(
                <Divider orientation={'vertical'} color={colors.PRIMARY} flexItem
                        />
            )
        }
        return null;
    }

    return (
        <div>
            <Grid container spacing={3} alignItems={'center'}>
                <Grid item xs={12} sm={12} md={4}>
                    <Stack sx={{width:'100%',p:2,borderRadius:'5px',backgroundColor:isMobile?'custom.notActiveBlue':'transparent'}}
                           alignItems={'center'} direction={'row'} spacing={2}>
                        <img src={'/images/icon/category.svg'} alt={"category"} style={{width:'26px'}}/>
                        <InputBase
                            sx={{...inputStyle}}
                            color={'custom.notActive'}
                            placeholder={t('job_name')}
                        />

                    </Stack>
                </Grid>




                <Grid item xs={12} sm={12} md={3}>
                    <Stack sx={{width:'100%',p:2,borderRadius:'5px',backgroundColor:isMobile?'custom.notActiveBlue':'transparent'}}
                           alignItems={'center'} direction={'row'} spacing={2}>
                        {
                            getDivider()
                        }
                        <img src={'/images/icon/location.svg'} alt={"category"} style={{width:'26px'}}/>

                        <select style={{...selectStyle}}>
                            <option>{t('location')}</option>
                            <option>Ashgabat</option>
                            <option>Mary</option>
                            <option>Dashoguz</option>
                            <option>Balkan</option>
                            <option>Lebap</option>
                        </select>
                    </Stack>

                </Grid>



                <Grid item xs={12} sm={12} md={3}>
                    <Stack sx={{width:'100%',p:2,borderRadius:'5px',backgroundColor:isMobile?'custom.notActiveBlue':'transparent'}}
                           alignItems={'center'} direction={'row'} spacing={2}>
                        {
                            getDivider()
                        }
                        <img src={'/images/icon/bag.svg'} alt={"category"} style={{width:'26px'}}/>


                        <select style={{...selectStyle}}>
                            <option>Финансы</option>
                        </select>


                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={2}>
                    <Stack sx={{width:'100%'}} alignItems={'flex-end'}>
                        <Button
                            variant={'contained'}
                            fullWidth
                            startIcon={<SearchIcon/>}
                            sx={{
                                ...regularButton,
                                color: 'custom.alwaysWhite',
                                height:50,
                                fontSize:'16px',
                            }}>{t('search')}</Button>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    )
}


export default SearchBox;