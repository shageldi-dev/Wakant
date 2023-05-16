
import {TextField} from "@mui/material";
import {colors} from "../../common/theme.mjs";
import styled from "styled-components";
import {Fonts} from "../../common/fonts.mjs";



export const AppTextField = styled('input')`
  width:100%;
  background-color: ${colors.NOT_ACTIVE_BLUE};
  color:${colors.TEXT_COLOR};
  outline:none;
  border: none;
  padding: 12px;
  font-size:18px;
  border-radius: 5px;
  font-family:${Fonts.REGULAR};
  ::placeholder { /* Most modern browsers support this now. */
    color: ${colors.NOT_ACTIVE};
  }
`;

export const AppTextArea = styled('textarea')`
  width:100%;
  background-color: ${colors.NOT_ACTIVE_BLUE};
  color:${colors.TEXT_COLOR};
  outline:none;
  border: none;
  padding: 12px;
  font-size:18px;
  border-radius: 5px;
  font-family:${Fonts.REGULAR};
  ::placeholder { /* Most modern browsers support this now. */
    color: ${colors.NOT_ACTIVE};
  }
`;

export const AppSelect = styled.select`
  width:100%;
  background-color: ${colors.NOT_ACTIVE_BLUE};
  color:${colors.NOT_ACTIVE};
  outline:none;
  border: none;
  padding: 12px;
  font-size:18px;
  border-radius: 5px;
  font-family:${Fonts.REGULAR};
       option:not(:checked) {
         color: ${colors.NOT_ACTIVE};
         background: ${colors.NOT_ACTIVE_BLUE};
         display: flex;
         white-space: pre;
         height: 40px;
         padding: 12px;
         font-family:${Fonts.REGULAR};
       }
`;