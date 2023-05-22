import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import React, { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import { Stack, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AppContext } from "../../App";
import { Fonts } from "../../common/fonts.mjs";
import { colors } from "../../common/theme.mjs";

const selectStyle = {
    fontFamily: Fonts.REGULAR, fontSize: '18px',
    width: '100%',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    color: colors.NOT_ACTIVE
}

const MobTopSec = (props) => {
    const { isMobile, t, appLanguage } = useContext(AppContext);
    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <Stack sx={{ width: '100%', p: 2, borderRadius: '5px', backgroundColor: 'custom.notActiveBlue' }}
                alignItems={'center'} direction={'row'} spacing={2}>
                <img src={'/images/icon/location.svg'} alt={"category"} style={{ width: '26px' }} />

                <select style={{ ...selectStyle }} onChange={e => props.onSelectChange(e.target.value)}>
                    <option value={0}>{t('location')}</option>
                    {
                        props.params ? props.params.addressList.map((e, i) => {
                            return (
                                <option value={e.id} key={`region-${i}`}>{appLanguage === 'ru' ? e.nameRu : e.name}</option>
                            )
                        }) : null
                    }
                </select>
            </Stack>

            {/*<Stack sx={{mt:2,width:'100%',p:2,borderRadius:'5px',backgroundColor:'custom.notActiveBlue'}}*/}
            {/*       alignItems={'center'} direction={'row'} spacing={2}  className="date-input">*/}
            {/*    <LocalizationProvider disableScrollLock={true} dateAdapter={AdapterDayjs}>*/}
            {/*    <MobileDatePicker*/}
            {/*        label="Date mobile"*/}
            {/*        inputFormat="MM/DD/YYYY"*/}
            {/*        value={value}*/}
            {/*        disableScrollLock={true}*/}
            {/*        onChange={handleChange}*/}
            {/*        renderInput={(params) => <input {...params.inputProps} style={{...selectStyle}}/>}*/}
            {/*    />*/}
            {/*    </LocalizationProvider>*/}
            {/*    <img src={'/images/icon/calendar.svg'} alt={"category"} style={{width:'26px'}}/>*/}
            {/*</Stack>*/}
        </div>
    )
}

export default MobTopSec;