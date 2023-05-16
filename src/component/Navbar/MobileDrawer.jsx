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
import {Menu, MenuItem, Stack, useMediaQuery} from "@mui/material";
import ImageLoading from "../State/Loading/ImageLoading";
import Image from "mui-image";
import ClearIcon from '@mui/icons-material/Clear';
import {useContext} from "react";
import {AppContext} from "../../App";
import {regularButton} from "../../common/theme.mjs";
import Text from "../App/Text";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {activeNavStyle, navs, passiveNavStyle} from "./Navbar";
import MenuIcon from "../Icon/MenuIcon";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});




export default function MobileDrawer(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const {t} = useContext(AppContext);

    const {isMobile,isLogin} = useContext(AppContext);


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


    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const open2 = Boolean(anchorEl2);
    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };

    return (
        <div>
            <IconButton color={'primary'} onClick={handleClickOpen}>
                <img src={'/images/icon/menu.svg'} alt={'menu-icon'}/>
            </IconButton>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >

                <Box sx={{position: "absolute", overflowY: "scroll", maxHeight: "80%",p:3}}>
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

                        <IconButton   id="basic-button2"
                                      aria-controls={open2 ? 'basic-menu2' : undefined}
                                      aria-haspopup="true"
                                      aria-expanded={open2 ? 'true' : undefined}
                                      onClick={handleClick2}>
                            <MenuIcon/>
                        </IconButton>

                        <Menu
                            id="basic-menu2"
                            anchorEl={anchorEl2}
                            open={open2}
                            disableRipple={true}
                            disableScrollLock={true}
                            onClose={handleClose2}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button2',
                            }}
                        >
                            {
                                isLogin?null:<MenuItem onClick={props.click}>{t('sign_in')}</MenuItem>
                            }
                            <MenuItem onClick={handleClose2}>{t('events')}</MenuItem>
                            <MenuItem onClick={handleClose2}>{t('favs')}</MenuItem>
                        </Menu>

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
                    {
                        isLogin?
                            <Text onClick={() => changeRouter('/add-job')}
                                  value={t('add_job')}
                                  color={'/add-job' === location.pathname ? 'primary' : ''} sx={{
                                ...getStyle('/add-job'), fontSize: '22px',
                                textUnderlineOffset: matches ? '27px' : '20px'
                            }} className={`nav-item`}/>
                            :
                            null
                    }

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
