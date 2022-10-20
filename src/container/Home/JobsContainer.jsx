import React, {useState, useEffect, useContext} from 'react';
import ItemMobile from "../../component/App/ItemMobile";
import OwlCarousel from "react-owl-carousel";
import {Grid} from "@mui/material";
import Category from "../../component/Home/Category";
import {AppContext} from "../../App";

const JobsContainer = (props) => {
    const {isMobile}=useContext(AppContext);
    let listLength=20;
    const getRandomItem=(i)=>{
        return{
                id:i,
                title:`Job-${i}`,
                location:'Ashgabat',
                category:'Web programming',
                time:`Job-${i}`,
                image:`https://picsum.photos/id/${parseInt(Math.random()*400*i)}/200/300`,
                date:new Date(),
                desc:'Лорем ипсум долор сит амет, ин еос м...'
        }
    }
    return (
        <>
            {
                isMobile?
                    <OwlCarousel className='owl-theme' margin={20} dotsClass={'owl-dots-class'} dotClass={'slider-cat-item'} loop dots={true} items={1} autoplay={true}>
                        {
                            new Array(parseInt(Math.ceil(listLength/2))).fill(0).map((it,index)=>{
                                let k=index+1;
                                return(
                                    <Grid key={`today-job-con-${index}`} container mt={3} mb={5} spacing={2}>
                                        {
                                            new Array(listLength).fill(0).slice((k*2-2),k*2).map((item,i)=>{
                                                return(
                                                    <Grid key={`cat-${i}`} item xs={12} sm={12} md={6}>
                                                        <ItemMobile item={getRandomItem(i)}/>
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
                            new Array(parseInt(Math.ceil(listLength/4))).fill(0).map((it,index)=>{
                                let k=index+1;
                                return(
                                    <Grid key={`today-job-con-${index}`} container mt={3} mb={5} spacing={2}>
                                        {
                                            new Array(listLength).fill(0).slice((k*4-4),k*4).map((item,i)=>{
                                                return(
                                                    <Grid key={`cat-${i}`} item xs={12} sm={12} md={6}>
                                                        <ItemMobile item={getRandomItem(i)}/>
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

export default JobsContainer;