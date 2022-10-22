import React, {useState, useEffect, useContext} from 'react';
import {
    Box,
    Button,
    Card,
    CardActionArea,
    Container, Drawer, IconButton,
    Menu,
    MenuItem,
    Paper,
    Stack,
    useMediaQuery,
    useTheme
} from "@mui/material";
import Image from 'mui-image'
import ImageLoading from "../State/Loading/ImageLoading";
import Text from "../App/Text";
import {AppContext} from "../../App";
import {Fonts} from "../../common/fonts.mjs";
import '../../style/Navbar/navbar.css';
import {colors, regularButton} from "../../common/theme.mjs";
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {useLocation, useNavigate} from "react-router-dom";
import MobileDrawer from "./MobileDrawer";

export const activeNavStyle = {
    fontFamily: Fonts.BOLD,
    fontSize: '16px',
    textDecoration: 'underline',
    textUnderlineOffset: '27px',
    cursor: 'pointer',
    textDecorationThickness: '2px',
};

export const passiveNavStyle = {
    fontFamily: Fonts.REGULAR,
    fontSize: '16px',
    cursor: 'pointer',
    transition: '0.3s',
    "&:hover": {
        color: colors.PRIMARY
    }
};

const navs = [
    {
        id: 0,
        link: '/',
        title: 'home_page'
    },
    {
        id: 2,
        link: '/jobs',
        title: 'find_jobs'
    },
    {
        id: 3,
        link: '/workers',
        title: 'find_worker'
    }
]


const Navbar = (props) => {
    const {t,changeLanguage} = useContext(AppContext);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const {isMobile} = useContext(AppContext);


    const matches = useMediaQuery('(min-width:1100px)');

    const location = useLocation();

    useEffect(() => {

    }, [location]);

    function getStyle(link) {
        return link === location.pathname ? activeNavStyle : passiveNavStyle;
    }

    const navigate = useNavigate();

    function changeRouter(path) {
        navigate(path);
    }


    function changeLang(ln){
        changeLanguage(ln);
        handleClose();
    }



    return (
        <Paper elevation={4} sx={{position:'fixed',top:0,width:'100%',zIndex:5}}>
            <Container sx={{paddingTop: '16px'}}>
                {
                    isMobile ?
                        <Stack direction={'row'} alignItems={'center'}
                               sx={{width: "100%",paddingBottom:'12px',paddingTop:'12px'}}
                               justifyContent={'space-between'} spacing={4}>
                            <Image src="/images/logo.svg"
                                   style={{width: matches ? '137px' : '100px'}}
                                   wrapperStyle={{width: 'auto', height: 'auto', marginBottom: '10px'}}
                                   showLoading={<ImageLoading
                                       sx={{height: "50px", width: matches ? '137px' : '100px'}}/>}/>

                            <Stack direction={'row'} alignItems={'center'} spacing={2} justifyContent={'flex-end'}>
                                <Button variant={'contained'} color={'button'} sx={{
                                    color: 'custom.alwaysWhite',
                                    fontSize: '18px', padding: "6px 20px",
                                    fontFamily: Fonts.REGULAR, textTransform: "capitalize"
                                }}>
                                    {t('sign_in')}
                                </Button>


                                <MobileDrawer/>
                            </Stack>
                        </Stack>

                        :
                        <Stack direction={'row'} alignItems={'center'} sx={{width: "100%"}} spacing={4}>
                            <Image src="/images/logo.svg"
                                   style={{width: matches ? '137px' : '100px'}}
                                   wrapperStyle={{width: 'auto', height: 'auto', marginBottom: '10px'}}
                                   showLoading={<ImageLoading
                                       sx={{height: "50px", width: matches ? '137px' : '100px'}}/>}/>

                            <div style={{whiteSpace: 'nowrap', width: '100%'}}>
                                <Stack direction={'row'}
                                       spacing={4}
                                       sx={{

                                           lineClamp: 1,
                                           WebkitLineClamp: 1,
                                           my: 1,
                                           width: '100%'
                                       }} alignItems={'flex-end'} justifyContent={'space-evenly'}>

                                    {
                                        navs.map((item, i) => {
                                            return (
                                                <Text key={`nav-item-${i}`} onClick={() => changeRouter(item.link)}
                                                      value={t(item.title)}
                                                      color={item.link === location.pathname ? 'primary' : ''} sx={{
                                                    ...getStyle(item.link), fontSize: matches ? '16px' : '12px',
                                                    textUnderlineOffset: matches ? '27px' : '20px'
                                                }} className={`nav-item`}/>
                                            )
                                        })
                                    }


                                </Stack>
                            </div>

                            <Divider orientation={'vertical'} color={colors.PRIMARY} flexItem
                                     style={{marginBottom: '12px', marginTop: '12px'}}/>

                            <Stack direction={'row'}
                                   spacing={4}
                                   sx={{width:'auto'}}
                                   alignItems={'center'} justifyContent={'flex-end'}>
                                <Text onClick={() => changeRouter('/add-job')}
                                      value={t('add_job')}
                                      color={'/add-job' === location.pathname ? 'primary' : ''} sx={{
                                    ...getStyle('/add-job'), fontSize: matches ? '16px' : '12px',
                                    textUnderlineOffset: matches ? '27px' : '20px',
                                    width:'100%'
                                }} className={`nav-item`}/>

                                <Button variant={'contained'} color={'button'} sx={{
                                    color: 'custom.alwaysWhite',
                                    fontSize: matches ? '16px' : '12px', padding: "6px 20px",
                                    fontFamily: Fonts.REGULAR, textTransform: "capitalize",
                                    height:'40px',
                                    width:'100px'
                                }}>
                                    {t('sign_in')}
                                </Button>

                                <Button
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    sx={{...regularButton, fontSize: matches ? '16px' : '12px'}}
                                    endIcon={<KeyboardArrowDownIcon/>}
                                >
                                    {t('ru')}
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    disableRipple={true}
                                    disableScrollLock={true}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem sx={{...regularButton}} onClick={()=>changeLang('tm')}>{t('tm')}</MenuItem>
                                    <MenuItem sx={{...regularButton}} onClick={()=>changeLang('ru')}>{t('ru')}</MenuItem>
                                </Menu>


                            </Stack>


                        </Stack>
                }
            </Container>
        </Paper>
    )
}

export default Navbar;