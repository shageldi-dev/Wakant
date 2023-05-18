import React, { useState, useEffect, useContext, useRef } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Fonts } from "../../common/fonts.mjs";
import Text, { Bold, SemiBold } from "../../component/App/Text";
import PaidIcon from "@mui/icons-material/Paid";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import Divider from "@mui/material/Divider";
import { colors } from "../../common/theme.mjs";
import { AppContext } from "../../App";
import Image from "mui-image";
import Skeleton from "@mui/material/Skeleton";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate, useParams } from "react-router-dom";
import Comment from "../../component/Home/Comment";
import OwlCarousel from "react-owl-carousel";
import MainItemMobile from "../../component/App/MainItemMobile";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { AxiosInstance } from "../../api/AxiosInstance.mjs";
import Loading from "../../component/State/Loading/Loading";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import {
  convertTimeStampToDate,
  getImageFullUrl,
} from "../../common/utils.mjs";
import JobComment from "./JobComment.jsx";

const ViewJob = (props) => {
  const { t, isMobile, appLanguage } = useContext(AppContext);
  const carousel = useRef();
  const navigate = useNavigate();
  const { uuid } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const [showComment, setShowComment] = useState(false);

  const handleButtonClick = () => {
    setShowComment(true);
  };

  function getData() {
    setLoading(true);
    AxiosInstance.get(`/web/jobs/get/${uuid}`)
      .then((response) => {
        setData(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  function changeRoute(path) {
    navigate(path);
  }

  const getRandomItem = (i) => {
    return {
      id: i,
      title: `Job-${i}`,
      location: "Ashgabat",
      category: "Web programming",
      time: `Job-${i}`,
      image: `https://picsum.photos/id/${parseInt(
        Math.random() * 400 * i
      )}/200/300`,
      date: new Date(),
      desc: "Лорем ипсум долор сит амет, ин еос м...",
      price: `${parseInt(Math.random() * 400 * i)} TMT`,
    };
  };
  const breadcrumbs = [
    <Link
      underline="hover"
      key="2"
      color="primary"
      sx={{ fontFamily: Fonts.REGULAR, fontSize: "18px", cursor: "pointer" }}
      onClick={() => changeRoute("/jobs")}
    >
      Jobs
    </Link>,
    <Typography sx={{ fontSize: "18px" }} key="3" color="custom.textColor">
      UI/UX Designer
    </Typography>,
  ];
  return (
    <Box sx={{ pt: 3, pb: 3, maxWidth: "100%", width: "100%" }}>
      {loading ? (
        <Stack
          sx={{ width: "100%", height: "70vh" }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Loading />
        </Stack>
      ) : (
        <div>
          <Grid container alignItems={"center"}>
            <Grid item xs={12} sm={12} md={8}>
              <Breadcrumbs
                separator="›"
                color={"primary"}
                aria-label="breadcrumb"
              >
                {breadcrumbs}
              </Breadcrumbs>
              <Bold
                value={
                  appLanguage === "ru" ? data.professionRu : data.profession
                }
                sx={{ fontSize: "32px" }}
              />
              <Stack direction={"row"} mt={1} spacing={3} alignItems={"center"}>
                <Stack direction={"row"} spacing={1} alignItems={"center"}>
                  <PaidIcon sx={{ width: "22px", color: "custom.notActive" }} />
                  <Text
                    value={`${data.salary} TMT`}
                    sx={{ fontSize: "16px", color: "custom.notActive" }}
                  />
                </Stack>

                <Stack direction={"row"} spacing={1} alignItems={"center"}>
                  <AccessTimeFilledIcon
                    sx={{ width: "22px", color: "custom.notActive" }}
                  />
                  <Text
                    value={convertTimeStampToDate(data.createdAt)}
                    sx={{ fontSize: "16px", color: "custom.notActive" }}
                  />
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Stack
                direction={"row"}
                justifyContent={isMobile ? "space-between" : "flex-end"}
                alignItems={"center"}
                spacing={3}
                sx={{ mt: isMobile ? 3 : 0, width: "100%" }}
              >
                <Button
                  variant={"contained"}
                  sx={{
                    fontFamily: Fonts.REGULAR,
                    fontSize: "18px",
                    color: colors.WHITE,
                    textTransform: "none",
                  }}
                >
                  {t("one_bt")}
                </Button>
                <Button
                  variant={"contained"}
                  sx={{
                    width: isMobile ? "100%" : "auto",
                    fontFamily: Fonts.REGULAR,
                    fontSize: "18px",
                    color: colors.WHITE,
                    textTransform: "none",
                  }}
                >
                  {t("submit_job")}
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <Divider color={colors.PRIMARY} sx={{ mt: 2 }} />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={8}>
              <Box
                sx={{
                  backgroundColor: "custom.notActiveBlue",
                  borderRadius: "5px",
                  p: 3,
                  mt: 3,
                }}
              >
                <SemiBold value={t("about_job")} sx={{ fontSize: "25px" }} />
                <Divider color={colors.PRIMARY} sx={{ mt: 2 }} />

                <Grid container mt={1} spacing={3}>
                  <Grid item xs={12} sm={12} md={6}>
                    <Grid
                      container
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Grid xs={6}>
                        <Text
                          value={t("title_category")}
                          sx={{ fontSize: "18px", color: "primary.main" }}
                        />
                      </Grid>
                      <Grid xs={6}>
                        <Text
                          value={
                            appLanguage === "ru"
                              ? data.category.nameRu
                              : data.category.name
                          }
                          sx={{
                            fontSize: "18px",
                            textAlign: "end",
                            wordWrap: "break-word",
                            whiteSpace: "-moz-pre-wrap",
                            whitespace: "pre-wrap",
                          }}
                        />
                      </Grid>
                    </Grid>

                    <Grid
                      mt={2}
                      container
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Grid xs={6}>
                        <Text
                          value={t("title_job_req")}
                          sx={{ fontSize: "18px", color: "primary.main" }}
                        />
                      </Grid>
                      <Grid xs={6}>
                        <Text
                          value={"Мужской женский"}
                          sx={{
                            fontSize: "18px",
                            textAlign: "end",
                            wordWrap: "break-word",
                            whiteSpace: "-moz-pre-wrap",
                            whitespace: "pre-wrap",
                          }}
                        />
                      </Grid>
                    </Grid>

                    <Grid
                      mt={2}
                      container
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Grid xs={6}>
                        <Text
                          value={t("title_submit")}
                          sx={{ fontSize: "18px", color: "primary.main" }}
                        />
                      </Grid>
                      <Grid xs={6}>
                        <Text
                          value={`${data.minAge} - ${data.maxAge}`}
                          sx={{
                            fontSize: "18px",
                            textAlign: "end",
                            wordWrap: "break-word",
                            whiteSpace: "-moz-pre-wrap",
                            whitespace: "pre-wrap",
                          }}
                        />
                      </Grid>
                    </Grid>

                    <Grid
                      mt={2}
                      container
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Grid xs={6}>
                        <Text
                          value={t("title_time")}
                          sx={{ fontSize: "18px", color: "primary.main" }}
                        />
                      </Grid>
                      <Grid xs={6}>
                        <Text
                          value={`${data.workday_hours}, ${t(
                            "job_times_saturday"
                          )} ${
                            data.saturday_hours == null
                              ? "---"
                              : data.saturday_hours
                          }, ${t("job_times_sunday")} ${
                            data.sunday_hours == null
                              ? "---"
                              : data.sunday_hours
                          }`}
                          sx={{
                            fontSize: "18px",
                            textAlign: "end",
                            wordWrap: "break-word",
                            whiteSpace: "-moz-pre-wrap",
                            whitespace: "pre-wrap",
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} sx={{ maxWidth: "100%" }}>
                    <Grid
                      container
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Grid xs={6}>
                        <Text
                          value={t("title_number")}
                          sx={{ fontSize: "18px", color: "primary.main" }}
                        />
                      </Grid>
                      <Grid xs={6}>
                        <Text
                          value={`+993 ${data.phone_number}`}
                          sx={{
                            fontSize: "18px",
                            textAlign: "end",
                            wordWrap: "break-word",
                            whiteSpace: "-moz-pre-wrap",
                            whitespace: "pre-wrap",
                          }}
                        />
                      </Grid>
                    </Grid>

                    <Grid
                      mt={2}
                      container
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Grid xs={6}>
                        <Text
                          value={t("title_address")}
                          sx={{ fontSize: "18px", color: "primary.main" }}
                        />
                      </Grid>
                      <Grid xs={6}>
                        <Text
                          value={"Ашхабад"}
                          sx={{
                            fontSize: "18px",
                            textAlign: "end",
                            wordWrap: "break-word",
                            whiteSpace: "-moz-pre-wrap",
                            whitespace: "pre-wrap",
                          }}
                        />
                      </Grid>
                    </Grid>

                    <Grid
                      mt={2}
                      container
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Grid xs={6}>
                        <Text
                          value={t("title_email")}
                          sx={{ fontSize: "18px", color: "primary.main" }}
                        />
                      </Grid>
                      <Grid xs={6}>
                        <Text
                          value={data.e_mail}
                          sx={{
                            fontSize: "18px",
                            textAlign: "end",
                            wordWrap: "break-word",
                            whiteSpace: "-moz-pre-wrap",
                            whitespace: "pre-wrap",
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Divider color={colors.PRIMARY} sx={{ mt: 2 }} />
                <Text
                  value={
                    appLanguage === "ru" ? data.conditionsRu : data.conditions
                  }
                  sx={{
                    mt: 2,
                    fontSize: "18px",
                    textAlign: "start",
                    wordWrap: "break-word",
                    whiteSpace: "-moz-pre-wrap",
                    whitespace: "pre-wrap",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Bold value={t("owner")} sx={{ fontSize: "24px", mt: 3 }} />
              <Box
                sx={{
                  backgroundColor: "custom.notActiveBlue",
                  borderRadius: "5px",
                  p: 3,
                  mt: 3,
                }}
              >
                <Stack spacing={3}>
                  <Grid container sx={{ width: "100%" }}>
                    <Grid item xs={2.5}>
                      <Image
                        showLoading={
                          <Skeleton
                            sx={{ width: "52px", height: "52px" }}
                            variant={"rounded"}
                            animation={"wave"}
                          />
                        }
                        src={getImageFullUrl(data.imageUrl)}
                        fit={"cover"}
                        style={{
                          width: "52px",
                          height: "52px",
                          borderRadius: "6px",
                        }}
                        wrapperStyle={{ height: "52px", width: "52px" }}
                      />
                    </Grid>
                    <Grid item xs={9.5}>
                      <SemiBold
                        value={
                          appLanguage === "ru"
                            ? data.agenstwo.nameRu
                            : data.agenstwo.name
                        }
                        sx={{ fontSize: "18px" }}
                      />
                      <Stack
                        direction={"row"}
                        spacing={1}
                        alignItems={"center"}
                      >
                        <LocationOnIcon
                          sx={{ width: "18px", color: "custom.notActive" }}
                        />
                        <Text
                          value={"Ашхабадский велаят"}
                          sx={{ fontSize: "16px", color: "custom.notActive" }}
                        />
                      </Stack>
                    </Grid>
                  </Grid>

                  <Divider color={colors.PRIMARY} sx={{ mt: 2 }} />

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25180.571186993187!2d58.35082411766056!3d37.91707964980214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f70020b1b15c45f%3A0x41bd73daa974168!2zwqtCYWd0ecO9YXJseWvCuyBzw7Z3ZGEtZHluw6cgYWx5xZ8gbWVya2V6aQ!5e0!3m2!1sen!2s!4v1666470040031!5m2!1sen!2s"
                    width="100%"
                    height="155"
                    style={{
                      border: "1px solid rgba(32, 88, 212, 0.7)",
                      borderRadius: "5px",
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>

                  <ul>
                    <li>
                      <Text
                        value={
                          "Адрес: Ашхабад, Копетдагский этрап, улица Сейитназара Сейди, улица Сейитназара Сейди, 4/2."
                        }
                        sx={{ fontSize: "16px" }}
                      />
                    </li>
                    <li>
                      <Text
                        value={`Телефон: ${data.agenstwo.phone_number}`}
                        sx={{ fontSize: "16px" }}
                      />
                    </li>
                  </ul>
                </Stack>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={8}>
              <Stack direction="row" justifyContent="flex-end" spacing={2}>
                <Button
                  onClick={handleButtonClick}
                  sx={{ textTransform: "none", color: "#2058D4" }}
                >
                  Teswirler
                </Button>
                <IconButton
                  sx={{
                    color: "custom.textColor",
                    backgroundColor: "custom.notActiveBlue",
                  }}
                >
                  <ArrowDownwardIcon />
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
          {showComment && <JobComment />}
          <Stack
            direction={"row"}
            sx={{ mb: 3 }}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Bold value={t("similar")} sx={{ fontSize: "32px" }} />
            <Stack direction={"row"} spacing={2}>
              <IconButton
                onClick={() => {
                  carousel.current.prev();
                }}
                sx={{
                  color: "custom.textColor",
                  backgroundColor: "custom.notActiveBlue",
                }}
              >
                <ArrowBackIcon />
              </IconButton>
              <IconButton
                onClick={() => {
                  carousel.current.next();
                }}
                sx={{
                  color: "custom.textColor",
                  backgroundColor: "custom.notActiveBlue",
                }}
              >
                <ArrowForwardIcon />
              </IconButton>
            </Stack>
          </Stack>

          <OwlCarousel
            ref={carousel}
            className="owl-theme"
            margin={20}
            dotsClass={"owl-dots-class2"}
            dotClass={"slider-cat-item"}
            loop
            dots={true}
            items={isMobile ? 1 : 4}
            autoplay={true}
          >
            {new Array(16).fill(0).map((item, i) => {
              return (
                <MainItemMobile
                  isSlider={true}
                  key={`similar-job-${i}`}
                  item={getRandomItem(i)}
                />
              );
            })}
          </OwlCarousel>
        </div>
      )}
    </Box>
  );
};

export default ViewJob;
