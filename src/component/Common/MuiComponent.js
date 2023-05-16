import { styled } from '@mui/material/styles';
import {Typography} from "@mui/material";
import {Fonts} from "../../common/fonts.mjs";


export const BoldTypography = styled(Typography)(
    ({ theme }) => ({
        color: theme.palette.custom.textColor,
        fontFamily: Fonts.SEMI_BOLD
    })
)

export const RegularTypography = styled(Typography)(
    ({ theme }) => ({
        color: theme.palette.custom.textColor,
        fontFamily: Fonts.REGULAR
    })
)

export const FontSizes = {
    title: {
        xs: '18px',
        sm: '22px',
        md: '24px',
        lg: '28px'
    },
    button: {
        xs: '14px',
        sm: '16px',
        md: '18px',
        lg: '18px'
    },
    body: {
        xs: '10px',
        sm: '12px',
        md: '14px',
        lg: '16px'
    }
}