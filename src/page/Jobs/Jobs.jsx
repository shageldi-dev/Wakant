import React, {useContext, useState} from 'react';
import TopSection from "../../component/Jobs/TopSection";
import {Box, Button, Grid, IconButton, Stack} from "@mui/material";
import {AppContext} from "../../App";
import MobTopSec from "../../component/Jobs/MobTopSec";
import '../../style/Jobs/jobs.css'
import {Fonts} from "../../common/fonts.mjs";
import {colors} from "../../common/theme.mjs";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import Text, {SemiBold} from "../../component/App/Text";
import Divider from "@mui/material/Divider";
import Filters from "../../component/Jobs/Filters";
import ItemDesktop from "../../component/App/ItemDesktop";
import MainItemMobile from "../../component/App/MainItemMobile";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {ExpandableBottomSheet} from "material-ui-bottom-sheet-webeetle/lib/components/ExpandableBottomSheet";
import Sort from "../../component/Jobs/Sort";

const Jobs = (props) => {
    const {isMobile, t} = useContext(AppContext);
    const [open, setOpen] = useState(false)
    const [bottomSheetType, setType] = useState('filter')
    const bottomSheetClose = () => {
        setOpen(false)
    }
    const getRandomItem = (i) => {
        return {
            id: i,
            title: `Job-${i}`,
            location: 'Ashgabat',
            category: 'Web programming',
            time: `Job-${i}`,
            image: `https://picsum.photos/id/${parseInt(Math.random() * 400 * i)}/200/300`,
            date: new Date(),
            desc: 'Лорем ипсум долор сит амет, ин еос м...',
            price: `${parseInt(Math.random() * 400 * i)} TMT`
        }
    }
    return (
        <Box sx={{paddingTop: '40px', paddingBottom: '40px'}}>
            {
                isMobile ?
                    <Stack spacing={3}>
                        <MobTopSec/>
                        <Stack direction={'row'} spacing={2}>
                            <Button
                                onClick={() => {
                                    setType('filter')
                                    setOpen(true)
                                }}
                                startIcon={<FilterAltOutlinedIcon/>}
                                fullWidth={true}
                                variant={'contained'} sx={{
                                fontFamily: Fonts.REGULAR,
                                fontSize: '18px',
                                color: colors.WHITE,
                                textTransform: 'none'
                            }}>{t('filter')}</Button>
                            <Button
                                startIcon={<img src={'/images/icon/sort.svg'} alt={'sort'}/>}
                                fullWidth={true}
                                onClick={() => {
                                    setType('sort')
                                    setOpen(true)
                                }}
                                variant={'contained'} sx={{
                                fontFamily: Fonts.REGULAR,
                                fontSize: '18px',
                                color: colors.WHITE,
                                textTransform: 'none'
                            }}>{t('sort')}</Button>
                        </Stack>
                    </Stack>
                    :
                    <TopSection/>
            }

            <Grid container mt={5} spacing={3}>
                <Grid item xs={12} sm={12} md={3}>
                    {
                        isMobile ? null :
                            <Filters/>
                    }
                </Grid>
                <Grid item xs={12} sm={12} md={9}>
                    <div>
                        <Text value={'Страницы 1-89 и есть 944 вакансии'}
                              sx={{
                                  fontSize: '18px', mt: 1, mb: 1.1
                              }}
                        />
                        <Divider color={colors.PRIMARY}/>

                        <Stack spacing={4} sx={{mt: 3}}>
                            {
                                new Array(10).fill(0).map((item, i) => {
                                    let it = getRandomItem(i);
                                    return (
                                        isMobile ?
                                            <MainItemMobile key={`job-mobile-${i}`} item={it}/>
                                            :
                                            <ItemDesktop key={`job-desktop-${i}`} item={it}/>
                                    )
                                })
                            }
                        </Stack>
                    </div>
                </Grid>
            </Grid>

            <ExpandableBottomSheet
                onRequestClose={bottomSheetClose}
                open={open}
            >
                <Stack
                    spacing={3}
                    sx={{
                        p: 2
                    }}>

                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                        <SemiBold sx={{
                            width: '100%', textAlign: 'center',
                            fontSize: '20px'
                        }} value={t(bottomSheetType)}/>
                        <IconButton onClick={bottomSheetClose} color={'primary'}>
                            <CloseOutlinedIcon/>
                        </IconButton>
                    </Stack>

                    {
                        bottomSheetType==='filter'?<Filters/>:<Sort/>
                    }

                </Stack>
            </ExpandableBottomSheet>


        </Box>
    )
}

export default Jobs;