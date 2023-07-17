import "../../style/Jobs/jobs.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Divider from "@mui/material/Divider";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import Filters from "../../component/Jobs/Filters";
import ItemDesktop from "../../component/App/ItemDesktop";
import Loading from "../../component/State/Loading/Loading";
import MainItemMobile from "../../component/App/MainItemMobile";
import MobTopSec from "../../component/Jobs/MobTopSec";
import React, { useContext, useEffect, useState } from "react";
import Sort from "../../component/Jobs/Sort";
import Text, { SemiBold } from "../../component/App/Text";
import TopSection from "../../component/Jobs/TopSection";
import { Box, Button, Grid, IconButton, Stack } from "@mui/material";
import { ExpandableBottomSheet } from "material-ui-bottom-sheet-webeetle/lib/components/ExpandableBottomSheet";
import { AppContext } from "../../App";
import { AxiosInstance } from "../../api/AxiosInstance.mjs";
import { Fonts } from "../../common/fonts.mjs";
import { colors } from "../../common/theme.mjs";

const Jobs = (props) => {
  const { isMobile, t } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [bottomSheetType, setType] = useState("filter");
  const [jobs, setJobs] = useState();
  const [filterJob, setFilterJob] = useState({
    genders: [],
    locationIds: [],
    categoryIds: [],
    agenstwoIds: [],
    categoryId: null,
    mainCategoryId: null,
  });
  const [loadings, setLoadings] = useState(true);
  const bottomSheetClose = () => {
    setOpen(false);
  };

  function getData(fl) {
    let url = `public/jobs?`;
    if (fl) {
      if (fl.genders.length > 0) {
        url += `genders=${fl.genders.join("&genders=")}`;
      }
      if (fl.locationIds.length > 0) {
        if (!url.endsWith("?")) {
          url += "&";
        }
        url += `locationIds=${fl.locationIds.join("&locationIds=")}`;
      }
      if (fl.categoryIds.length > 0) {
        if (!url.endsWith("?")) {
          url += "&";
        }
        url += `categoryId=${fl.categoryIds.join("&categoryId=")}`;
      }
      if (fl.agenstwoIds.length > 0) {
        if (!url.endsWith("?")) {
          url += "&";
        }
        url += `agenstwoIds=${fl.agenstwoIds.join("&agenstwoIds=")}`;
      }
    }
    // console.log(url);
    window.scrollTo({ top: 0, behavior: "smooth" });
    AxiosInstance.get(url)
      .then((result) => {
        setJobs(result.data.data);
        setLoadings(false);
      })
      .catch((err) => {
        setLoadings(false);
      });
  }

  useEffect(() => {
    getData(filterJob);
  }, []);

  const getRandomItem = (i) => {
    return {
      id: i,
      title: `Job-${i}`,
      location: "Ashgabat",
      category: "Web programming",
      time: `Job-${i}`,
      image: `https://picsum.photos/id/${parseInt(
        Math.random() * 400 * i,
      )}/200/300`,
      date: new Date(),
      desc: "Лорем ипсум долор сит амет, ин еос м...",
      price: `${parseInt(Math.random() * 400 * i)} TMT`,
    };
  };
  return (
    <div>
      {loadings ? (
        <Stack
          sx={{ width: "100%", height: "50vh" }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Loading />
        </Stack>
      ) : (
        <Box sx={{ paddingTop: "40px", paddingBottom: "40px" }}>
          {isMobile ? (
            <Stack spacing={3}>
              <MobTopSec />
              <Stack
                direction={"row"}
                spacing={2}
              >
                <Button
                  onClick={() => {
                    setType("filter");
                    setOpen(true);
                  }}
                  startIcon={<FilterAltOutlinedIcon />}
                  fullWidth={true}
                  variant={"contained"}
                  sx={{
                    fontFamily: Fonts.REGULAR,
                    fontSize: "18px",
                    color: colors.WHITE,
                    textTransform: "none",
                  }}
                >
                  {t("filter")}
                </Button>
                <Button
                  startIcon={
                    <img
                      src={"/images/icon/sort.svg"}
                      alt={"sort"}
                    />
                  }
                  fullWidth={true}
                  onClick={() => {
                    setType("sort");
                    setOpen(true);
                  }}
                  variant={"contained"}
                  sx={{
                    fontFamily: Fonts.REGULAR,
                    fontSize: "18px",
                    color: colors.WHITE,
                    textTransform: "none",
                  }}
                >
                  {t("sort")}
                </Button>
              </Stack>
            </Stack>
          ) : (
            <TopSection />
          )}

          <Grid
            container
            mt={5}
            spacing={3}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
            >
              {isMobile ? null : (
                <Filters
                  filterJob={filterJob}
                  getData={getData}
                  setFilterJob={setFilterJob}
                />
              )}
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={9}
            >
              <div>
                <Text
                  value={`${t("jobs_count")} ${jobs.length}`}
                  sx={{
                    fontSize: "18px",
                    mt: 1,
                    mb: 1.1,
                  }}
                />
                <Divider color={colors.PRIMARY} />

                <Stack
                  spacing={4}
                  sx={{ mt: 3 }}
                >
                  {jobs.map((item, i) => {
                    return isMobile ? (
                      <MainItemMobile
                        key={`job-mobile-${i}`}
                        item={item}
                      />
                    ) : (
                      <ItemDesktop
                        key={`job-desktop-${i}`}
                        item={item}
                      />
                    );
                  })}
                </Stack>
              </div>
            </Grid>
          </Grid>

          <ExpandableBottomSheet
            onRequestClose={bottomSheetClose}
            open={open}
          >
            <Stack
              spacing={3}
              sx={{
                p: 2,
              }}
            >
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <SemiBold
                  sx={{
                    width: "100%",
                    textAlign: "center",
                    fontSize: "20px",
                  }}
                  value={t(bottomSheetType)}
                />
                <IconButton
                  onClick={bottomSheetClose}
                  color={"primary"}
                >
                  <CloseOutlinedIcon />
                </IconButton>
              </Stack>

              {bottomSheetType === "filter" ? <Filters /> : <Sort />}
            </Stack>
          </ExpandableBottomSheet>
        </Box>
      )}
    </div>
  );
};

export default Jobs;
