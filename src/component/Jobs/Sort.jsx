import React, {useState, useEffect, useContext} from 'react';
import {FormControlLabel, Radio, RadioGroup, Stack} from "@mui/material";
import {Fonts} from "../../common/fonts.mjs";
import {AppContext} from "../../App";
import {colors} from "../../common/theme.mjs";
import Divider from "@mui/material/Divider";

const Sort = (props) => {
    const {t} = useContext(AppContext);
    return (
        <Stack sx={{width: '100%', mt: 3, pr: 2, pl: 1}}>
            <RadioGroup
                row={false}
                aria-labelledby="demo-form-control-label-placement"
                name="position"
                defaultValue="top"
                sx={{width: '100%'}}
            >
                <FormControlLabel
                    value="all"
                    control={<Radio sx={{p: 0, m: 0}}/>}
                    label={t('all')}
                    componentsProps={{
                        typography: {
                            sx: {
                                width: '100%',
                                fontFamily: Fonts.REGULAR,
                                fontSize: '18px',
                                color: 'custom.textColor',
                                m: 0,
                                p: 0
                            }
                        }
                    }}
                    labelPlacement="start"
                    sx={{
                        width: '100%', p: 0, m: 0
                    }}
                />
                <Divider color={colors.PRIMARY} sx={{mt: 1.5,mb:3}}/>

                <FormControlLabel
                    value="price_asc"
                    control={<Radio sx={{p: 0, m: 0}}/>}
                    label={t('price_asc')}
                    componentsProps={{
                        typography: {
                            sx: {
                                width: '100%',
                                fontFamily: Fonts.REGULAR,
                                fontSize: '18px',
                                color: 'custom.textColor',
                                m: 0,
                                p: 0
                            }
                        }
                    }}
                    labelPlacement="start"
                    sx={{
                        width: '100%', p: 0, m: 0
                    }}
                />
                <Divider color={colors.PRIMARY} sx={{mt: 1.5,mb:3}}/>

                <FormControlLabel
                    value="price_desc"
                    control={<Radio sx={{p: 0, m: 0}}/>}
                    label={t('price_desc')}
                    componentsProps={{
                        typography: {
                            sx: {
                                width: '100%',
                                fontFamily: Fonts.REGULAR,
                                fontSize: '18px',
                                color: 'custom.textColor',
                                m: 0,
                                p: 0
                            }
                        }
                    }}
                    labelPlacement="start"
                    sx={{
                        width: '100%', p: 0, m: 0
                    }}
                />
                <Divider color={colors.PRIMARY} sx={{mt: 1.5,mb:3}}/>

                <FormControlLabel
                    value="newest_first"
                    control={<Radio sx={{p: 0, m: 0}}/>}
                    label={t('newest_first')}
                    componentsProps={{
                        typography: {
                            sx: {
                                width: '100%',
                                fontFamily: Fonts.REGULAR,
                                fontSize: '18px',
                                color: 'custom.textColor',
                                m: 0,
                                p: 0
                            }
                        }
                    }}
                    labelPlacement="start"
                    sx={{
                        width: '100%', p: 0, m: 0
                    }}
                />
                <Divider color={colors.PRIMARY} sx={{mt: 1.5,mb:3}}/>

                <FormControlLabel
                    value="oldest_first"
                    control={<Radio sx={{p: 0, m: 0}}/>}
                    label={t('oldest_first')}
                    componentsProps={{
                        typography: {
                            sx: {
                                width: '100%',
                                fontFamily: Fonts.REGULAR,
                                fontSize: '18px',
                                color: 'custom.textColor',
                                m: 0,
                                p: 0
                            }
                        }
                    }}
                    labelPlacement="start"
                    sx={{
                        width: '100%', p: 0, m: 0
                    }}
                />
                <Divider color={colors.PRIMARY} sx={{mt: 1.5,mb:3}}/>
            </RadioGroup>
        </Stack>
    )
}

export default Sort;