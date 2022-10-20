import {Fonts} from "./fonts.mjs";

export const colors={
    PRIMARY:"#2058D4",
    PRIMARY_LIGHT:"#6884ff",
    PRIMARY_DARK:"#0030a2",
    TEXT_COLOR:"#000000",
    BLACK:"#000000",
    GREEN_1:"#219653",
    GREEN_2:"#27AE60",
    GREEN_LIGHT:"#5bc880",
    DARK_GREEN:"#006729",
    WHITE:"#FFFFFF",
    SECOND_BLUE:"rgba(32, 88, 212, 0.7)",
    NOT_ACTIVE_BLUE:"rgba(32, 88, 212, 0.05)",
    NOT_ACTIVE:"rgba(0, 0, 0, 0.54)"
}

export const placeholderColors=[
    "#E6DFF8",
    "#E6DFF8",
    "#FFEE9F",
    "#F3D3FE",
    "#CBCCFF",
    "#FDC3BE",
    "#E0F5FE",
    "#BCF68C",
    "#EDDFC9",
    "#E9DFFE",
    "#A7F1B6"
];

export const regularButton={
    fontFamily:Fonts.REGULAR,
    color:'custom.notActive',
    textTransform:'none'
}

export const semiBoldButton={
    fontFamily:Fonts.SEMI_BOLD,
    color:'custom.notActive',
    textTransform:'capitalize'
}