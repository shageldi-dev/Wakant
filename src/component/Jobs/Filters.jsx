import React, {useState, useEffect} from 'react';
import Text, {Bold} from "../App/Text";
import Divider from "@mui/material/Divider";
import {colors} from "../../common/theme.mjs";
import MobTopSec from "./MobTopSec";
import {Slider, Stack} from "@mui/material";
import {useContext} from "react";
import {AppContext} from "../../App";
import FilterCheck from "./FilterCheck";
import {Box} from "@mui/system";
import {Fonts} from "../../common/fonts.mjs";

const Filters = (props) => {
    const {isMobile, t} = useContext(AppContext);
    return (
        <Stack spacing={3}>

            {
                isMobile ? null : <div>
                    <Bold value={t('per_filter')}
                          sx={{
                              fontSize: '24px',
                              mb: 1
                          }}/>
                    <Divider color={colors.PRIMARY}/>
                </div>
            }


            {
                isMobile ? null : <MobTopSec/>
            }

            <Bold value={t('category')}
                  sx={{
                      fontSize: '24px',
                      mb: 1
                  }}/>

            <Stack spacing={1}>
                <FilterCheck count={99} label={t('all')}/>
                <FilterCheck count={10} label={'Программное обеспечения'}/>
                <FilterCheck count={5} label={'Финансы'}/>
                <FilterCheck count={7} label={'Рекрутинг'}/>
                <FilterCheck count={55} label={'Управление'}/>
            </Stack>

            <Divider color={colors.PRIMARY}/>

            <Bold value={t('job_price')}
                  sx={{
                      fontSize: '24px',
                      mb: 1
                  }}/>

            <Stack spacing={2} sx={{width: '100%'}} direction={'row'} alignItems={'center'}
                   justifyContent={'space-between'}>
                <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto"/>
                <input
                    value={'4000'}
                    placeholder={'0'}
                    style={{
                        width: '30%',
                        borderRadius: '5px',
                        border: '1px solid rgba(0, 0, 0, 0.23)',
                        padding: '5px',
                        fontFamily: Fonts.REGULAR,
                        color: colors.TEXT_COLOR,
                        textAlign: 'center',
                        fontSize: '16px'
                    }}/>
            </Stack>

            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <Text value={'0 manat'} sx={{fontSize: '18px'}}/>
                <Text value={'10000 manat'} sx={{fontSize: '18px'}}/>
            </Stack>

            <Divider color={colors.PRIMARY}/>

            <Stack spacing={1}>
                <FilterCheck count={99} label={t('all')}/>
                <FilterCheck count={10} label={'0m - 200m'}/>
                <FilterCheck count={5} label={'200m - 500m'}/>
                <FilterCheck count={7} label={'500m - 1,000m'}/>
                <FilterCheck count={55} label={'1,000m - 2,000m'}/>
                <FilterCheck count={55} label={'2,000m - 4,000m'}/>
            </Stack>

            <Bold value={t('job_gender')}
                  sx={{
                      fontSize: '24px',
                      mb: 1
                  }}/>

            <Stack spacing={1}>
                <FilterCheck count={99} label={t('man_women')}/>
                <FilterCheck count={99} label={t('man')}/>
                <FilterCheck count={99} label={t('women')}/>
            </Stack>

            <Divider color={colors.PRIMARY}/>

            <Bold value={t('job_firm')}
                  sx={{
                      fontSize: '24px',
                      mb: 1
                  }}/>

            <Stack spacing={1}>
                <FilterCheck count={99} label={t('all')}/>
                <FilterCheck count={99} label={'Орлан'}/>
                <FilterCheck count={99} label={'Разработка'}/>
                <FilterCheck count={99} label={'Азия'}/>
                <FilterCheck count={99} label={'Шанс'}/>
            </Stack>

        </Stack>
    )
}

export default Filters;