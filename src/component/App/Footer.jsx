import ImageLoading from "./../State/Loading/ImageLoading";
import Placeholder from "./../State/Loading/Placeholder";
import React, { useContext } from "react";
import Text, { Light, SemiBold } from "./Text.jsx";
import { Image } from "mui-image";
import { colors } from "../../common/theme.mjs";
import { AppContext } from "./../../App";
import { Container, Divider, Grid, Stack } from "@mui/material";

const Footer = () => {
    const { t, isMobile } = useContext(AppContext);
    return (
        <>
            {
                isMobile ?
                    <div style={{ backgroundColor: colors.SECOND_BLUE }}>
                        <Container fixed sx={{ paddingTop: '22px', paddingBottom: '22px' }}>
                            <Grid container alignItems={'center'}>
                                <Grid item xs={7}>
                                    <Text value={t('our_email_value')} sx={{ fontSize: '18px', color: '#FFFFFF' }} />
                                </Grid>
                                <Grid item xs={5}>
                                    <Stack direction={'row'} sx={{ width: '100%' }} justifyContent={'flex-end'}>
                                        <Image src="/images/white_logo.svg"
                                            style={{ width: '100px' }}
                                            wrapperStyle={{ width: '100px' }}
                                            showLoading={<ImageLoading
                                                sx={{ height: "50px", width: '100px' }} />} />
                                    </Stack>
                                </Grid>
                            </Grid>

                            <Divider color="#FFFFFF" sx={{ mt: 2 }} />
                            <Text value={t('all_rights')} sx={{ color: '#FFFFFF', fontSize: '18px', mt: 2 }} />
                        </Container>
                    </div>
                    :
                    <div style={{ backgroundColor: colors.SECOND_BLUE }}>
                        <Container fixed sx={{ paddingTop: '22px', paddingBottom: '22px' }}>
                            <Image src="/images/white_logo.svg"
                                style={{ width: '137px' }}
                                wrapperStyle={{ width: '137px' }}
                                showLoading={<ImageLoading
                                    sx={{ height: "50px", width: '137px' }} />} />
                            <Grid container spacing={6}>
                                <Grid item xs={12} sm={12} md={4}>
                                    <Stack spacing={2}>

                                        <SemiBold value={t('docs')} sx={{ fontSize: '18px', color: '#FFFFFF' }} />

                                        <ul>
                                            <li style={{ color: '#FFFFFF' }}>
                                                <Text value={t('terms_of_use')} sx={{ fontSize: '16px', color: '#FFFFFF' }} />
                                            </li>
                                            <li style={{ color: '#FFFFFF' }}>
                                                <Text value={t('privacy_policy')} sx={{ fontSize: '16px', color: '#FFFFFF' }} />
                                            </li>
                                            <li style={{ color: '#FFFFFF' }}>
                                                <Text value={t('terms_of_comment')} sx={{ fontSize: '16px', color: '#FFFFFF' }} />
                                            </li>
                                        </ul>

                                    </Stack>
                                </Grid>
                                <Grid item xs={12} sm={12} md={2}>
                                    <SemiBold value={t('number')} sx={{ fontSize: '18px', color: '#FFFFFF' }} />
                                    <Light value={t('our_numbers').split(',')[0]} sx={{ fontSize: '16px', color: '#FFFFFF' }} />
                                    <Light value={t('our_numbers').split(',')[1]} sx={{ fontSize: '16px', color: '#FFFFFF' }} />

                                </Grid>
                                <Grid item xs={12} sm={12} md={3}>
                                    <SemiBold value={t('our_email')} sx={{ fontSize: '18px', color: '#FFFFFF' }} />
                                    <Light value={t('our_email_value')} sx={{ fontSize: '16px', color: '#FFFFFF' }} />
                                </Grid>
                                <Grid item xs={12} sm={12} md={3}>
                                    <SemiBold value={t('mobile_apps')} sx={{ fontSize: '18px', color: '#FFFFFF', ml: 1 }} />
                                    <Stack direction={'row'} sx={{ width: '100%' }} spacing={2}>
                                        <Image
                                            style={{ width: '120px' }}
                                            wrapperStyle={{ width: '120px' }}
                                            showLoading={<Placeholder />}
                                            src={"/images/play_google.png"} />
                                        <Image
                                            style={{ width: '120px' }}
                                            showLoading={<Placeholder />}
                                            wrapperStyle={{ width: '120px' }}
                                            src={"/images/app_store.png"} />
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Container>
                        <div style={{ backgroundColor: colors.PRIMARY, paddingTop: '5px', paddingBottom: '5px' }}>
                            <Container fixed>
                                <Text value={t('all_rights')} sx={{ color: '#FFFFFF' }} />
                            </Container>
                        </div>
                    </div>
            }
        </>
    )
}

export default Footer