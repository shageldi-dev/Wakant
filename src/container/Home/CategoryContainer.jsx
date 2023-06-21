import Category from "../../component/Home/Category";
import OwlCarousel from "react-owl-carousel";
import React, { useContext, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { AppContext } from "../../App";

const CategoryContainer = (props) => {

    const { isMobile } = useContext(AppContext);



    return (
        <>
            {
                isMobile ?
                    <OwlCarousel className='owl-theme' margin={20} dotsClass={'owl-dots-class'} dotClass={'slider-cat-item'} loop dots={true} items={1} autoplay={true}>
                        {
                            new Array(parseInt(Math.ceil(props.list.length / 4))).fill(0).map((it, index) => {
                                let k = index + 1;
                                return (
                                    <Grid key={`cat-con-${index}`} container mt={3} mb={5} spacing={2}>
                                        {
                                            props.list.slice((k * 4 - 4), k * 4).map((item, i) => {
                                                return (
                                                    <Grid key={`cat-${i}`} item xs={6} sm={6} md={4}>
                                                        <Category item={item} />
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </Grid>
                                )
                            })
                        }
                    </OwlCarousel> :
                    <OwlCarousel className='owl-theme' margin={20} dotsClass={'owl-dots-class'} dotClass={'slider-cat-item'} loop dots={true} items={1} autoplay={true}>
                        {
                            new Array(parseInt(Math.ceil(props.list.length / 6))).fill(0).map((it, index) => {
                                let k = index + 1;
                                return (
                                    <Grid key={`cat-con-${index}`} container mt={3} mb={5} spacing={2}>
                                        {
                                            props.list.slice((k * 6 - 6), k * 6).map((item, i) => {
                                                return (
                                                    <Grid key={`cat-${i}`} item xs={6} sm={6} md={4}>
                                                        <Category item={item} />
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