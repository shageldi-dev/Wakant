import Autocomplete from "@mui/material/Autocomplete";
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Loading from "../State/Loading/Loading";
import React, { useContext, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Grid, InputBase, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { AppContext } from "../../App";
import { AxiosInstance } from "../../api/AxiosInstance.mjs";
import { Fonts } from "../../common/fonts.mjs";
import { colors, regularButton } from "../../common/theme.mjs";
import { getImageFullUrl } from "../../common/utils.mjs";

const inputStyle = {
    fontFamily: Fonts.REGULAR, fontSize: '18px'
}

const selectStyle = {
    fontFamily: Fonts.REGULAR, fontSize: '18px',
    width: '100%',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    color: colors.NOT_ACTIVE
}



const SearchBox = (props) => {
    const { t, isMobile, appLanguage } = useContext(AppContext);
    const [params, setParams] = useState();
    const [category, setCategory] = useState();
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState(null);
    async function getData() {
        setLoading(true);
        await AxiosInstance.get('public/get-params')
            .then(response => {
                setParams(response.data);
            })
            .catch(err => { })
        await AxiosInstance.get('public/categories')
            .then(response => {
                setCategory(response.data);
                setLoading(false)
            })
            .catch(err => {
                setLoading(false);
            })
    }
    useEffect(() => {
        getData()
    }, [])
    const getDivider = () => {
        if (!isMobile) {
            return (
                <Divider orientation={'vertical'} color={colors.PRIMARY} flexItem
                />
            )
        }
        return null;
    }

    return (
        <div>
            {
                loading ?
                    <Loading />
                    :
                    <Grid container spacing={3} alignItems={'center'}>
                        <Grid item xs={12} sm={12} md={4}>
                            <Stack sx={{ width: '100%', p: 2, borderRadius: '5px', backgroundColor: isMobile ? 'custom.notActiveBlue' : 'transparent' }}
                                alignItems={'center'} direction={'row'} spacing={2}>
                                <img src={'/images/icon/category.svg'} alt={"category"} style={{ width: '26px' }} />
                                <InputBase
                                    sx={{ ...inputStyle }}
                                    color={'custom.notActive'}
                                    placeholder={t('job_name')}
                                />

                            </Stack>
                        </Grid>




                        <Grid item xs={12} sm={12} md={3}>
                            <Stack sx={{ width: '100%', p: 2, borderRadius: '5px', backgroundColor: isMobile ? 'custom.notActiveBlue' : 'transparent' }}
                                alignItems={'center'} direction={'row'} spacing={2}>
                                {
                                    getDivider()
                                }
                                <img src={'/images/icon/location.svg'} alt={"category"} style={{ width: '26px' }} />

                                <select style={{ ...selectStyle }}>
                                    <option>{t('location')}</option>
                                    {
                                        params.addressList.map((e, i) => {
                                            return (
                                                <option value={e.id} key={`region-${i}`}>{appLanguage === 'ru' ? e.nameRu : e.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </Stack>

                        </Grid>



                        <Grid item xs={12} sm={12} md={3}>
                            <Stack sx={{ width: '100%', p: 2, borderRadius: '5px', backgroundColor: isMobile ? 'custom.notActiveBlue' : 'transparent' }}
                                alignItems={'center'} direction={'row'} spacing={2}>
                                {
                                    getDivider()
                                }
                                <img src={selectedCategory == null ? '/images/icon/bag.svg' : getImageFullUrl(selectedCategory.image)} alt={"category"} style={{ width: '26px' }} />


                                <select style={{ ...selectStyle }} onChange={e => {
                                    setSelectedCategory(category.data.find(c => c.id == e.target.value))
                                }
                                }>
                                    {
                                        category.data.map((e, i) => {
                                            return (
                                                <option value={e.id} key={`category-${i}`}>{appLanguage === 'ru' ? e.nameRu : e.name}</option>
                                            )
                                        })
                                    }
                                </select>


                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={12} md={2}>
                            <Stack sx={{ width: '100%' }} alignItems={'flex-end'}>
                                <Button
                                    variant={'contained'}
                                    fullWidth
                                    startIcon={<SearchIcon />}
                                    sx={{
                                        ...regularButton,
                                        color: 'custom.alwaysWhite',
                                        height: 50,
                                        fontSize: '16px',
                                    }}>{t('search')}</Button>
                            </Stack>
                        </Grid>
                    </Grid>
            }
        </div>
    )
}


export default SearchBox;