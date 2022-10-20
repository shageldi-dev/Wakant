import React, {useState, useEffect, useContext} from 'react';
import {Grid} from "@mui/material";
import Category from "../../component/Home/Category";
import OwlCarousel from "react-owl-carousel";
import {AppContext} from "../../App";
const l=[
    {
        id:1,
        title:"UI UX-дизайнер",
        desc:"Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum",
        job_count:20
    },
    {
        id:1,
        title:"Веб-разработка",
        desc:"Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum",
        job_count:20
    },
    {
        id:1,
        title:"Цифровой маркетинг",
        desc:"Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum",
        job_count:20
    },
    {
        id:1,
        title:"Бизнес-группа",
        desc:"Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum",
        job_count:20
    },
    {
        id:1,
        title:"Медицина и здоровье",
        desc:"Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum",
        job_count:20
    },
    {
        id:1,
        title:"Частные репетиторы",
        desc:"Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum",
        job_count:20
    },
    {
        id:1,
        title:"1",
        desc:"Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum",
        job_count:20
    },
    {
        id:1,
        title:"2",
        desc:"Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum",
        job_count:20
    },
    {
        id:1,
        title:"3",
        desc:"Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum",
        job_count:20
    },
    {
        id:1,
        title:"4",
        desc:"Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum",
        job_count:20
    },
    {
        id:1,
        title:"5",
        desc:"Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum",
        job_count:20
    },
    {
        id:1,
        title:"6",
        desc:"Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum",
        job_count:20
    }
];
const CategoryContainer = (props) => {

    const [list,setList]=useState(l);
    const {isMobile}=useContext(AppContext);



    return (
        <>
            {
                isMobile?
                    <OwlCarousel className='owl-theme' margin={20} dotsClass={'owl-dots-class'} dotClass={'slider-cat-item'} loop dots={true} items={1} autoplay={true}>
                        {
                            new Array(parseInt(Math.ceil(list.length/4))).fill(0).map((it,index)=>{
                                let k=index+1;
                                return(
                                    <Grid key={`cat-con-${index}`} container mt={3} mb={5} spacing={2}>
                                        {
                                            list.slice((k*4-4),k*4).map((item,i)=>{
                                                return(
                                                    <Grid key={`cat-${i}`} item xs={6} sm={6} md={4}>
                                                        <Category item={item}/>
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </Grid>
                                )
                            })
                        }
                    </OwlCarousel>:
                    <OwlCarousel className='owl-theme' margin={20} dotsClass={'owl-dots-class'} dotClass={'slider-cat-item'} loop dots={true} items={1} autoplay={true}>
                        {
                            new Array(parseInt(Math.ceil(list.length/6))).fill(0).map((it,index)=>{
                                let k=index+1;
                                return(
                                    <Grid key={`cat-con-${index}`} container mt={3} mb={5} spacing={2}>
                                        {
                                            list.slice((k*6-6),k*6).map((item,i)=>{
                                                return(
                                                    <Grid key={`cat-${i}`} item xs={6} sm={6} md={4}>
                                                        <Category item={item}/>
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </Grid>
                                )
                            })
                        }
                    </OwlCarousel>
            }
        </>
    )
}

export default CategoryContainer;