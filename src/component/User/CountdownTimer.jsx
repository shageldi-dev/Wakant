import React from 'react';
import {Stack, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import {useCountdown} from "../../common/countdown";

const CountdownTimer = ({ targetDate,click }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    const {t}=useTranslation();

    if (days + hours + minutes + seconds <= 0) {
        return <Stack alignItems={'center'} justifyContent={'center'}>
            <Typography onClick={click} sx={{
                textDecoration: 'underline',
                color: 'primary.main',
                fontSize: '16px'
            }}>{t('code_not_received')}</Typography>
        </Stack>;
    } else {
        return (
            <Stack alignItems={'center'} justifyContent={'center'}>
                <Typography sx={{color: 'error.main', fontSize: '16px'}}>{hours}:{minutes}:{seconds}</Typography>
            </Stack>
        );
    }
};

export default CountdownTimer;
