import Divider from "@mui/material/Divider";
import FilterCheck from "./FilterCheck";
import Loading from "../State/Loading/Loading";
import MobTopSec from "./MobTopSec";
import React, { useEffect, useState } from "react";
import Text, { Bold } from "../App/Text";
import { Slider, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { AppContext } from "../../App";
import { AxiosInstance } from "../../api/AxiosInstance.mjs";
import { Fonts } from "../../common/fonts.mjs";
import { colors } from "../../common/theme.mjs";

const Filters = (props) => {
    const { isMobile, t, appLanguage } = useContext(AppContext);
    const [params, setParams] = useState();
    const [category, setCategory] = useState();
    const [agents, setAgents] = useState();
    const [loading, setLoading] = useState(true);
    async function getData() {
        setLoading(true);
        await AxiosInstance.get('public/get-params')
            .then(response => {
                setParams(response.data);
            })
            .catch(err => { })
        await AxiosInstance.get('web/agencies')
            .then(response => {
                setAgents(response.data.data);
            })
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
    }, []);

    function addFilter(id, item, isEmpty = false) {
        try {
            if (props.filterJob[item] && !props.filterJob[item].includes(id)) {
                let ids = [];
                if (isEmpty) {
                    ids = [
                        id
                    ];
                } else {
                    ids = [
                        ...props.filterJob[item],
                        id
                    ];
                }
                let filter = props.filterJob;
                filter[item] = ids;
                props.setFilterJob(filter);
                props.getData(filter);
                // console.log(filter);
            }
        } catch (err) {

        }
    }

    function removeFilter(id, item) {
        try {
            if (props.filterJob[item] && props.filterJob[item].includes(id)) {
                let ids = props.filterJob[item].filter(it => it !== id);
                let filter = props.filterJob;
                filter[item] = ids;
                props.setFilterJob(filter);
                props.getData(filter);
                // console.log(filter);
            }
        } catch (err) {

        }
    }

    function isChecked(id, item) {
        try {
            return props.filterJob[item].includes(id);
        } catch (err) {
            return false;
        }
    }

    function isEmpty(item) {
        try {
            return props.filterJob[item].length === 0;
        } catch (err) {
            return true;
        }
    }

    return (
        loading ? <Loading /> :
            <Stack spacing={3} sx={{ position: 'sticky', top: 100 }}>

                {
                    isMobile ? null : <div>
                        <Bold value={t('per_filter')}
                            sx={{
                                fontSize: '24px',
                                mb: 1
                            }} />
                        <Divider color={colors.PRIMARY} />
                    </div>
                }


                {
                    isMobile ? null : <MobTopSec value={props.filterJob['locationIds'][0]} params={params} />
                }

                <Bold value={t('category')}
                    sx={{
                        fontSize: '24px',
                        mb: 1
                    }} />

                <Stack spacing={1}>
                    <FilterCheck count={0} label={t('all')} checked={isEmpty('categoryIds')} onCheckedChange={checked => {
                        if (checked) {
                            let f = props.filterJob;
                            f['categoryIds'] = [];
                            props.setFilterJob(f);
                            props.getData(f);
                        }
                    }} />
                    {
                        category.data.map((category, i) => {
                            return (
                                <FilterCheck onCheckedChange={checked => {
                                    if (checked) {
                                        addFilter(category.id, 'categoryIds', true)
                                    } else {
                                        removeFilter(category.id, 'categoryIds')
                                    }
                                }} checked={isChecked(category.id, 'categoryIds')} key={`filter-${i}`} count={0} label={
                                    appLanguage === 'ru' ? category.nameRu : category.name
                                } />
                            )
                        })
                    }

                </Stack>

                {/*<Divider color={colors.PRIMARY}/>*/}

                {/*<Bold value={t('job_price')}*/}
                {/*      sx={{*/}
                {/*          fontSize: '24px',*/}
                {/*          mb: 1*/}
                {/*      }}/>*/}

                {/*<Stack spacing={2} sx={{width: '100%'}} direction={'row'} alignItems={'center'}*/}
                {/*       justifyContent={'space-between'}>*/}
                {/*    <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto"/>*/}
                {/*    <input*/}
                {/*        value={'4000'}*/}
                {/*        placeholder={'0'}*/}
                {/*        style={{*/}
                {/*            width: '30%',*/}
                {/*            borderRadius: '5px',*/}
                {/*            border: '1px solid rgba(0, 0, 0, 0.23)',*/}
                {/*            padding: '5px',*/}
                {/*            fontFamily: Fonts.REGULAR,*/}
                {/*            color: colors.TEXT_COLOR,*/}
                {/*            textAlign: 'center',*/}
                {/*            fontSize: '16px'*/}
                {/*        }}/>*/}
                {/*</Stack>*/}

                {/*<Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>*/}
                {/*    <Text value={'0 manat'} sx={{fontSize: '18px'}}/>*/}
                {/*    <Text value={'10000 manat'} sx={{fontSize: '18px'}}/>*/}
                {/*</Stack>*/}

                {/*<Divider color={colors.PRIMARY}/>*/}

                {/*<Stack spacing={1}>*/}
                {/*    <FilterCheck count={99} label={t('all')}/>*/}
                {/*    <FilterCheck count={10} label={'0m - 200m'}/>*/}
                {/*    <FilterCheck count={5} label={'200m - 500m'}/>*/}
                {/*    <FilterCheck count={7} label={'500m - 1,000m'}/>*/}
                {/*    <FilterCheck count={55} label={'1,000m - 2,000m'}/>*/}
                {/*    <FilterCheck count={55} label={'2,000m - 4,000m'}/>*/}
                {/*</Stack>*/}

                <Bold value={t('job_gender')}
                    sx={{
                        fontSize: '24px',
                        mb: 1
                    }} />

                <Stack spacing={1}>
                    {
                        params.genderList.map((gender, i) => {
                            return (
                                <FilterCheck
                                    checked={isChecked(gender.id, 'genders')}
                                    onCheckedChange={checked => {
                                        if (checked) {
                                            addFilter(gender.id, 'genders')
                                        } else {
                                            removeFilter(gender.id, 'genders')
                                        }
                                    }}
                                    key={`gender-${i}`} count={0} label={appLanguage === 'ru' ? gender.nameRu : gender.name} />
                            )
                        })
                    }

                </Stack>

                <Divider color={colors.PRIMARY} />

                <Bold value={t('job_firm')}
                    sx={{
                        fontSize: '24px',
                        mb: 1
                    }} />

                <Stack spacing={1}>
                    <FilterCheck count={0} label={t('all')} checked={isEmpty('agenstwoIds')} onCheckedChange={checked => {
                        if (checked) {
                            let f = props.filterJob;
                            f['agenstwoIds'] = [];
                            props.setFilterJob(f);
                            props.getData(f);
                        }
                    }} />
                    {
                        agents.map((agent, i) => {
                            return (
                                <FilterCheck
                                    checked={isChecked(agent.id, 'agenstwoIds')}
                                    onCheckedChange={checked => {
                                        if (checked) {
                                            addFilter(agent.id, 'agenstwoIds')
                                        } else {
                                            removeFilter(agent.id, 'agenstwoIds')
                                        }
                                    }}
                                    key={`agent-${i}`} count={0} label={appLanguage === 'ru' ? agent.nameRu : agent.name} />
                            )
                        })
                    }
                </Stack>

            </Stack>
    )
}

export default Filters;