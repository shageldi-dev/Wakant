import React, {useState, useEffect} from 'react';
import {Typography} from "@mui/material";
import {Fonts} from "../../common/fonts.mjs";

const Text = (props) => {
    return (
        <Typography
            onClick={props.onClick}
            color={
            typeof props.color==='undefined' || props.color==null || props.color===''?
                'custom.textColor':props.color
        } className={props.className} style={{...props.style}} sx={{fontFamily:Fonts.REGULAR,...props.sx}}>
            {props.value}
        </Typography>
    )
}

export const SemiBold = (props) => {
    return (
        <Typography
            onClick={props.onClick}
            color={
            typeof props.color==='undefined' || props.color==null || props.color===''?
                'custom.textColor':props.color
        } className={props.className} style={{...props.style}} sx={{fontFamily:Fonts.SEMI_BOLD,...props.sx}}>
            {props.value}
        </Typography>
    )
}

export const Bold = (props) => {
    return (
        <Typography
            onClick={props.onClick}
            sx={{fontFamily:Fonts.BOLD,...props.sx}} color={
            typeof props.color==='undefined' || props.color==null || props.color===''?
                'custom.textColor':props.color
        } className={props.className} style={{...props.style}}>
            {props.value}
        </Typography>
    )
}

export const Light = (props) => {
    return (
        <Typography
            onClick={props.onClick}
            sx={{fontFamily:Fonts.LIGHT,...props.sx}} color={
            typeof props.color==='undefined' || props.color==null || props.color===''?
                'custom.textColor':props.color
        } className={props.className} style={{...props.style}}>
            {props.value}
        </Typography>
    )
}

export const Italic = (props) => {
    return (
        <Typography
            onClick={props.onClick}
            sx={{fontFamily:Fonts.ITALIC,...props.sx}} color={
            typeof props.color==='undefined' || props.color==null || props.color===''?
                'custom.textColor':props.color
        } className={props.className} style={{...props.style}}>
            {props.value}
        </Typography>
    )
}

export const BoldItalic = (props) => {
    return (
        <Typography
            onClick={props.onClick}
            sx={{fontFamily:Fonts.BOLD_ITALIC,...props.sx}} color={
            typeof props.color==='undefined' || props.color==null || props.color===''?
                'custom.textColor':props.color
        } className={props.className} style={{...props.style}}>
            {props.value}
        </Typography>
    )
}

export default Text;