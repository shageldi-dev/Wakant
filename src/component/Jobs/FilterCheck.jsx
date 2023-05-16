import React, { useEffect, useState } from "react";
import { Badge, Checkbox, FormControlLabel, Stack } from "@mui/material";
import { TypographyProps } from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Fonts } from "../../common/fonts.mjs";
import { colors } from "../../common/theme.mjs";

const FilterCheck = (props) => {
    return (
        <Stack sx={{ width: '100%' }} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <FormControlLabel control={<Checkbox
                onChange={e => props.onCheckedChange(e.target.checked)}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                checked={props.checked}
                size={'medium'} />} componentsProps={{
                    typography: { sx: { fontFamily: Fonts.REGULAR, fontSize: '18px', color: 'custom.textColor' } }
                }} label={props.label} />
            {
                props.count != 0 ?
                    <Box sx={{
                        color: "#FFFFFF",
                        backgroundColor: colors.SECOND_BLUE,
                        pl: 1, pr: 1,
                        fontFamily: Fonts.REGULAR, borderRadius: '5px', fontSize: '16px'
                    }}>
                        {props.count}
                    </Box>
                    :
                    null
            }
        </Stack>
    )
}

export default FilterCheck;