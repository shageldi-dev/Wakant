import Footer from "./../../component/App/Footer";
import Navbar from "../../component/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Container, Typography } from "@mui/material";

const Index = (props) => {
    const location=useLocation();
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[location])
    return (
        <div>
            <Navbar />
            <Container sx={{ mt: 10 }}>
                <Outlet />
            </Container>
            <Footer />
        </div>
    )
}

export default Index;