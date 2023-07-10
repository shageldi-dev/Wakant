import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "swiper/css";
import "../../style/Home/home.css";
import CategoryContainer from "../../container/Home/CategoryContainer";
import Comment from "../../component/Home/Comment";
import Divider from "@mui/material/Divider";
import Feature from "../../component/Home/Feature";
import Image from "mui-image";
import JobsContainer from "../../container/Home/JobsContainer";
import Loading from "../../component/State/Loading/Loading";
import OwlCarousel from "react-owl-carousel";
import Placeholder from "../../component/State/Loading/Placeholder";
import React, { useContext, useEffect, useRef, useState } from "react";
import SearchBox from "../../component/Home/SearchBox";
import Text, { Bold, Light, SemiBold } from "../../component/App/Text";
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { AppContext } from "../../App";
import { AxiosInstance } from "../../api/AxiosInstance.mjs";
import { Fonts } from "../../common/fonts.mjs";
import { colors, regularButton } from "../../common/theme.mjs";
import { getImageFullUrl } from "../../common/utils.mjs";

// import ImageLoading from "../../component/State/Loading/ImageLoading";

// Import Swiper styles

const inputStyle = {
  width: "100%",
  border: "none",
  outline: "none",
  backgroundColor: colors.NOT_ACTIVE_BLUE,
  fontSize: "18px",
  padding: "16px",
  borderRadius: "5px",
  fontFamily: Fonts.REGULAR,
};

const linkStyle = {
  cursor: "pointer",
  "&:hover": {
    color: colors.PRIMARY,
  },
};

const Home = (props) => {
  const top = 15;
  const bottom = 15;
  const { t, isMobile } = useContext(AppContext);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  function getData() {
    setLoading(true);
    AxiosInstance.get("web/get-home")
      .then((response) => {
        setLoading(false);
        setData(response.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  }
  useEffect(() => {
    getData();
  }, []);
  const tJobsRef = useRef();
  // const getImageSize = () => {
  //   try {
  //     let height = tJobsRef.current.height;
  //     let width = tJobsRef.current.width;
  //     return {
  //       width: width,
  //       height: height,
  //     };
  //   } catch (err) {
  //     return {
  //       width: "600px",
  //       height: "600px",
  //     };
  //   }
  // };
  return (
    <div>
      {loading ? (
        <Loading sx={{ height: "100vh" }} />
      ) : (
        <div>
          <Grid
            container
            alignItems={"flex-start"}
            justifyContent={"space-between"}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
            >
              <Stack
                spacing={4}
                direction={"column"}
                sx={{ mt: isMobile ? 5 : 8 }}
              >
                <Bold
                  value={t("home_title")}
                  sx={{ fontSize: "35px" }}
                />
                <Text
                  value={t("home_desc")}
                  sx={{ fontSize: "18px" }}
                />
                <Button
                  variant={"contained"}
                  sx={{
                    ...regularButton,
                    color: "custom.alwaysWhite",
                    width: 150,
                    fontSize: "16px",
                  }}
                >
                  {t("start")}
                </Button>

                <Typography
                  color={"custom.notActive"}
                  sx={{ fontSize: "16px" }}
                >
                  {t("sponsors")}
                </Typography>

                <Swiper
                  spaceBetween={50}
                  slidesPerView={4}
                  loop
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  {data
                    ? data.agencyList.map((item, i) => {
                        return (
                          <SwiperSlide key={`slide-agency-${i}`}>
                            <img
                              alt={"slide-imagee"}
                              src={getImageFullUrl(item.imageUrl)}
                              className={"sponsor-image"}
                            />
                          </SwiperSlide>
                        );
                      })
                    : null}
                </Swiper>
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
            >
              {isMobile ? null : (
                <div className="hearts_wrapper">
                  <div className="heart-cyrcle heart-cyrcle-1">
                    <img
                      src="/images/cyrcle.svg"
                      style={{ width: "50px", height: "50px" }}
                      alt="web design icon"
                    />
                  </div>
                  <div className="heart-cyrcle heart-cyrcle-2">
                    <img
                      src="/images/cyrcle.svg"
                      style={{ width: "150px", height: "150px" }}
                      alt="game design icon"
                    />
                  </div>
                  <div className="heart-cyrcle heart-cyrcle-3">
                    <img
                      src="/images/cyrcle.svg"
                      style={{ width: "200px", height: "200px" }}
                      alt="game dev icon"
                    />
                  </div>
                  <div className="heart-cyrcle heart-cyrcle-4">
                    <img
                      src="/images/cyrcle.svg"
                      style={{ width: "100px", height: "100px" }}
                      alt="ui-ux icon"
                    />
                  </div>

                  <div className="heart heart-1">
                    <img
                      src="/images/avatar/one.png"
                      alt="app icon"
                    />
                  </div>
                  <div className="heart heart-2">
                    <img
                      src="/images/avatar/two.png"
                      alt="blockchain icon"
                    />
                  </div>
                  <div className="heart heart-3">
                    <img
                      src="/images/avatar/three.png"
                      alt="ar-vr icon"
                    />
                  </div>
                  <div className="heart heart-4">
                    <img
                      src="/images/avatar/four.png"
                      alt="artificial intelligence icon"
                    />
                  </div>

                  <div className="center-logo">
                    <img
                      src="/images/avatar/main.png"
                      alt="logo"
                    />
                  </div>
                </div>
              )}
            </Grid>
          </Grid>
          {isMobile ? null : (
            <Paper
              elevation={2}
              sx={{
                borderRadius: "5px",
                padding: "20px",
                mt: 5,
                mb: 5,
                boxShadow: `0px 0px 30px rgba(192, 192, 192, 0.25)`,
              }}
            >
              <SearchBox />
            </Paper>
          )}
          {/* Category section */}
          <Box mt={top}>
            <Stack
              sx={{ width: "100%" }}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack
                sx={{ width: isMobile ? "50%" : "65%" }}
                direction={"row"}
                alignItems={"center"}
                justifyContent={isMobile ? "flex-start" : "flex-end"}
              >
                <Bold
                  sx={{ fontSize: isMobile ? "22px" : "30px" }}
                  value={t("search_by_category")}
                />
              </Stack>

              <Stack
                sx={{ width: isMobile ? "50%" : "35%" }}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"flex-end"}
              >
                <Button sx={{ ...regularButton, color: "primary" }}>
                  {t("see_all")}
                </Button>
              </Stack>
            </Stack>

            <CategoryContainer
              list={data ? (data.bigCategories ? data.bigCategories : []) : []}
            />
          </Box>
          {/* Category section */}
          {/* Jobs today section */}
          <Box
            mt={top}
            mb={bottom}
          >
            <Grid
              container
              alignItems={"flex-start"}
              spacing={4}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={5.5}
              >
                {isMobile ? null : (
                  <Image
                    style={{ width: "100%", borderRadius: "10px" }}
                    showLoading={<Placeholder />}
                    src={"/images/avatar/office_img.png"}
                  />
                )}
              </Grid>
              <Grid
                item
                ref={tJobsRef}
                xs={12}
                sm={12}
                md={6.5}
              >
                <Stack
                  sx={{ width: "100%" }}
                  justifyContent={"space-between"}
                >
                  <Stack>
                    <Bold
                      value={t("today_jobs")}
                      sx={{ fontSize: isMobile ? "25px" : "34px" }}
                    />
                    <JobsContainer
                      list={
                        data
                          ? data.submittedToday
                            ? data.submittedToday
                            : []
                          : []
                      }
                    />
                  </Stack>
                  <Button
                    variant={"contained"}
                    sx={{
                      ...regularButton,
                      color: "custom.alwaysWhite",
                      width: 150,
                      fontSize: "16px",
                      mt: 5,
                    }}
                  >
                    {t("more")}
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Box>
          {/*  Jobs today section  */}
          {/*  Apps section  */}
          <Box
            mt={top}
            mb={bottom}
          >
            <Grid
              container
              spacing={6}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
              >
                <Stack spacing={4}>
                  <Bold
                    value={t("app_title")}
                    sx={{
                      width: "100%",
                      fontSize: isMobile ? "22px" : "28px",
                      textAlign: "center",
                    }}
                  />
                  {isMobile ? (
                    <Image
                      style={{ width: "100%" }}
                      wrapperStyle={{ width: "100%" }}
                      fit={"fill"}
                      showLoading={<Placeholder />}
                      src={"/images/phones.png"}
                    />
                  ) : null}
                  <Text
                    value={t("app_desc")}
                    sx={{
                      width: "100%",
                      fontSize: isMobile ? "16px" : "22px",
                      textAlign: "center",
                    }}
                  />
                  <Divider color={colors.PRIMARY} />
                  <Stack
                    direction={"row"}
                    sx={{ width: "100%" }}
                    spacing={2}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Image
                      style={{ width: "160px" }}
                      wrapperStyle={{ width: "160px" }}
                      showLoading={<Placeholder />}
                      src={"/images/play_google.png"}
                    />
                    <Image
                      style={{ width: "160px" }}
                      showLoading={<Placeholder />}
                      wrapperStyle={{ width: "160px" }}
                      src={"/images/app_store.png"}
                    />
                  </Stack>
                </Stack>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
              >
                {isMobile ? null : (
                  <Image
                    style={{ width: "100%" }}
                    fit={"contain"}
                    wrapperStyle={{ width: "100%", paddingLeft: "0" }}
                    showLoading={<Placeholder />}
                    src={"/images/phones.png"}
                  />
                )}
              </Grid>
            </Grid>
          </Box>
          {/*  Apps section  */}
          {/* Jobs section */}
          <Box
            mt={top}
            mb={bottom}
          >
            <Grid
              container
              alignItems={"flex-start"}
              spacing={4}
            >
              <Grid
                item
                ref={tJobsRef}
                xs={12}
                sm={12}
                md={6.5}
              >
                <Stack
                  sx={{ width: "100%" }}
                  justifyContent={"space-between"}
                >
                  <Stack>
                    <Bold
                      value={t("immediately")}
                      sx={{ fontSize: isMobile ? "25px" : "34px" }}
                    />
                    <JobsContainer />
                  </Stack>
                  <Button
                    variant={"contained"}
                    sx={{
                      ...regularButton,
                      color: "custom.alwaysWhite",
                      width: 150,
                      fontSize: "16px",
                      mt: 5,
                    }}
                  >
                    {t("more")}
                  </Button>
                </Stack>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={5.5}
              >
                {isMobile ? null : (
                  <Image
                    style={{ width: "100%", borderRadius: "10px" }}
                    showLoading={<Placeholder />}
                    src={"/images/avatar/imm_jobs.png"}
                  />
                )}
              </Grid>
            </Grid>
          </Box>
          {/*  Jobs section  */}
          {/* Features */}
          {isMobile ? null : (
            <Box
              mt={top}
              mb={bottom}
            >
              <div>
                {/*<img src={'/images/line.svg'} alt={'line'} style={{*/}
                {/*    position:'absolute',maxWidth:'100%',zIndex:"-9",*/}
                {/*    width:''*/}
                {/*}}/>*/}
                <Stack
                  style={{ zIndex: 9 }}
                  sx={{
                    width: "100%",
                    backgroundImage: `url(/images/line.svg)`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "70%",
                    backgroundPosition: "60% 0%",
                    zIndex: "9",
                  }}
                  spacing={3}
                  direction={"row"}
                  justifyContent={"space-between"}
                >
                  <Feature
                    image={"/images/icon/state-1.svg"}
                    title={t("state_1_title")}
                    desc={t("state_1_desc")}
                  />
                  <Feature
                    image={"/images/icon/state-2.svg"}
                    title={t("state_2_title")}
                    desc={t("state_2_desc")}
                  />
                  <Feature
                    image={"/images/icon/state-3.svg"}
                    title={t("state_3_title")}
                    desc={t("state_3_desc")}
                  />
                </Stack>
              </div>
            </Box>
          )}
          {/* Features */}

          {/* Sponsered By ............................................................ */}
          {/* <Stack direction="row" justifyContent="center">
            <Stack spacing={2} alignItems="center">
              <Typography
                sx={{
                  textTransform: "uppercase",
                  color: colors.TEXT_COLOR,
                  fontFamily: Fonts.REGULAR,
                  fontWeight: "700",
                  fontSize: "36px",
                }}
              >
                sponsered by
              </Typography>
              <img
                src="/images/QED GROUP.png"
                style={{ width: "210px" }}
                alt="QED GROUP"
              />
            </Stack>
          </Stack>
          <br />
          <br />
          <Typography
            sx={{
              color: colors.TEXT_COLOR,
              fontFamily: Fonts.REGULAR,
              fontWeight: "400",
              lineHeight: "43px",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            {t("sponseredByText")}
          </Typography>*/}
          <br />
          <br />
          <br />
          <br />
          <br />

          {/*  Comments  */}
          <Box mb={bottom}>
            <Stack
              spacing={3}
              alignItems={"center"}
            >
              <Bold
                value={t("user_comment")}
                sx={{
                  width: "100%",
                  textAlign: "center",
                  fontSize: isMobile ? "25px" : "34px",
                }}
              />
              <Text
                sx={{
                  fontSize: "18px",
                  width: isMobile ? "100%" : "40%",
                  textAlign: "center",
                  color: "custom.notActive",
                }}
                value={t("user_comment_desc")}
              />
              <OwlCarousel
                className="owl-theme"
                margin={20}
                dotsClass={"owl-dots-class2"}
                dotClass={"slider-cat-item"}
                loop
                dots={true}
                items={isMobile ? 2 : 4}
                autoplay={true}
              >
                {new Array(16).fill(0).map((item, i) => {
                  return <Comment key={`comment-${i}`} />;
                })}
              </OwlCarousel>
            </Stack>
          </Box>
          {/*  Comments  */}
          {/*  Contact us  */}
          <Box
            mt={top}
            mb={bottom}
          >
            <Stack spacing={4}>
              <Bold
                value={t("contact")}
                sx={{ fontSize: isMobile ? "25px" : "34px" }}
              />
              <Text
                value={t("lorem ipsum")}
                sx={{
                  width: isMobile ? "100%" : "70%",
                  fontSize: isMobile ? "16px" : "20px",
                }}
              />

              <Grid
                container
                spacing={0}
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={7}
                >
                  <Grid
                    item
                    xs={12}
                  >
                    <Grid
                      container
                      spacing={2}
                    >
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                      >
                        <input
                          placeholder={t("fullname")}
                          type={"text"}
                          style={{ ...inputStyle }}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                      >
                        <input
                          placeholder={t("company")}
                          type={"text"}
                          style={{ ...inputStyle }}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                      >
                        <input
                          placeholder={t("email")}
                          type={"email"}
                          style={{ ...inputStyle }}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                      >
                        <input
                          placeholder={t("phone_number")}
                          type={"phone"}
                          style={{ ...inputStyle }}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                      >
                        <textarea
                          placeholder={t("your_message")}
                          type={"text"}
                          style={{
                            ...inputStyle,
                            maxWidth: "100%",
                            minWidth: "100%",
                            height: "320px  ",
                          }}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            color: "#FFFFFF",
                            fontFamily: Fonts.REGULAR,
                            fontSize: "18px",
                            textTransform: "none",
                          }}
                          fullWidth
                        >
                          {t("send")}
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={5}
                >
                  <Stack
                    spacing={6}
                    mt={isMobile ? 10 : 0}
                    sx={{ paddingLeft: isMobile ? "0" : "30px" }}
                  >
                    <Stack spacing={2}>
                      <SemiBold
                        value={t("our_address")}
                        sx={{ fontSize: "18px" }}
                      />
                      <Light
                        value={t("our_address_value")}
                        sx={{ fontSize: "16px", ...linkStyle }}
                      />
                    </Stack>

                    <Stack spacing={2}>
                      <SemiBold
                        value={t("our_email")}
                        sx={{ fontSize: "18px" }}
                      />
                      <Light
                        value={t("our_email_value")}
                        sx={{ fontSize: "16px", ...linkStyle }}
                      />
                    </Stack>

                    <Stack spacing={2}>
                      <SemiBold
                        value={t("number")}
                        sx={{ fontSize: "18px" }}
                      />
                      <Light
                        value={t("our_numbers").split(",")[0]}
                        sx={{ fontSize: "16px", ...linkStyle }}
                      />
                      <Light
                        value={t("our_numbers").split(",")[1]}
                        sx={{ fontSize: "16px", ...linkStyle }}
                      />
                    </Stack>
                    {isMobile ? null : (
                      <div>
                        <Stack
                          sx={{ width: "100%" }}
                          direction={"row"}
                          justifyContent={"flex-end"}
                        >
                          <img
                            alt={"cyrcle"}
                            src={"/images/cyrcle.svg"}
                            style={{ width: "100px", height: "100px" }}
                          />
                        </Stack>
                        <Image
                          src={"/images/cyrcle.svg"}
                          wrapperStyle={{ marginTop: "-20px" }}
                          style={{ width: "40px", height: "40px" }}
                        />
                        <div style={{ display: "flex" }}>
                          <Image
                            src={"/images/cyrcle.svg"}
                            style={{ width: "70px", height: "70px" }}
                          />
                          <Image
                            src={"/images/cyrcle.svg"}
                            style={{ width: "120px", height: "120px" }}
                          />
                          <Image
                            src={"/images/cyrcle.svg"}
                            wrapperStyle={{ marginLeft: "-70px" }}
                            style={{ width: "160px", height: "160px" }}
                          />
                        </div>
                      </div>
                    )}
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          </Box>
          {/*  Contact us  */}
        </div>
      )}
    </div>
  );
};

export default Home;
