import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import {Box} from "@mui/system";
import SyncIcon from '@mui/icons-material/Sync';
import SearchBox from "../Home/SearchBox";
import {Stack, useMediaQuery} from "@mui/material";
import ImageLoading from "../State/Loading/ImageLoading";
import Image from "mui-image";
import ClearIcon from '@mui/icons-material/Clear';
import {useContext} from "react";
import {AppContext} from "../../App";
import {regularButton} from "../../common/theme.mjs";
import Text from "../App/Text";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {activeNavStyle, passiveNavStyle} from "./Navbar";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

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


export default function MobileDrawer() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const {t} = useContext(AppContext);

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
        handleClose()
    }

    return (
        <div>
            <IconButton color={'primary'} onClick={handleClickOpen}>
                <img src={'/images/icon/menu.svg'} alt={'menu-icon'}/>
            </IconButton>
            <Dialog
                fullScreen
                sx={{zIndex:6000}}
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >

                <Box sx={{p:3}}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{mb:4}}>
                        <Image src="/images/logo.svg"
                               style={{width: '100px'}}
                               duration={0}
                               wrapperStyle={{width: 'auto', height: 'auto', marginBottom: '10px'}}
                               showLoading={<ImageLoading
                                   sx={{height: "50px", width:'100px'}}/>}/>

                        <IconButton  color={'primary'} onClick={handleClose}>
                            <ClearIcon sx={{fontSize:'35px'}}/>
                        </IconButton>
                    </Stack>

                    <Stack direction={'column'}
                           spacing={4}
                           sx={{

                               lineClamp: 1,
                               WebkitLineClamp: 1,
                               my: 1,
                               width: '100%'
                           }} alignItems={'flex-start'} justifyContent={'flex-end'}>

                        {
                            navs.map((item, i) => {
                                return (
                                    <Text key={`nav-item-${i}`} onClick={() => changeRouter(item.link)}
                                          value={t(item.title)}
                                          color={item.link === location.pathname ? 'primary' : ''} sx={{
                                        ...getStyle(item.link), fontSize: '22px',
                                        textUnderlineOffset: matches ? '27px' : '20px'
                                    }} className={`nav-item`}/>
                                )
                            })
                        }


                    </Stack>
                    <br/>
                    <br/>
                    <Text value={t("Регистрация")} color={''}
                          sx={{...passiveNavStyle, fontSize: '22px'}}
                          className={'nav-item'}/>

                    <br/>
                    <br/>
                    <br/>
                    <SearchBox/>

                    <br/>
                    <br/>
                    <br/>

                    <Stack sx={{position:'fixed',bottom:0,paddingTop:'12px',width:'100%',marginLeft:'-10%',backgroundColor:'custom.light'}} spacing={1} mb={2} direction={'row'} alignItems={'center'} justifyContent={'flex-end'}>
                        <Button sx={{...regularButton,color:'custom.textColor'}}>
                            TM
                        </Button>
                        <Button variant={'contained'} sx={{...regularButton,color:'custom.alwaysWhite'}}>
                            RU
                        </Button>
                    </Stack>
                </Box>
            </Dialog>
        </div>
    );
}
