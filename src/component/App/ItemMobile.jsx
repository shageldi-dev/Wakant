import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Image from "mui-image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React, { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import Text, { Bold, SemiBold } from "./Text";
import { Card, CardContent, Grid, Stack } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../App";
import { colors } from "../../common/theme.mjs";
import {
  convertTimeStampToDate,
  getImageFullUrl,
  setMaxLengthLines,
} from "../../common/utils.mjs";
import { AxiosInstance } from "../../api/AxiosInstance.mjs";
import { useNavigate } from "react-router-dom";

const cardStyle = {
  background: colors.NOT_ACTIVE_BLUE,
  cursor: "pointer",
  "&:hover": {
    background: colors.WHITE,
    boxShadow: `0px 0px 20px rgba(192, 192, 192, 0.25)`,
  },
};
const ItemMobile = (props) => {
  const { isMobile, t, appLanguage, getAddressById } = useContext(AppContext);
  const { item } = props;
  const navigate = useNavigate();


  function changeRoute(path) {
    navigate(path);
  }

  return (
    <Card
      sx={{ ...cardStyle }}
      elevation={0}
    >
      <CardContent>
        <Stack spacing={1}>
          <Grid
            container
            sx={{ width: "200%" }}
          >
            <Grid
              item
              xs={1.5}
            >
              <Image
                showLoading={
                  <Skeleton
                    sx={{ width: "52px", height: "52px" }}
                    variant={"rounded"}
                    animation={"wave"}
                  />
                }
                src={getImageFullUrl(item.imageUrl)}
                fit={"cover"}
                style={{ width: "52px", height: "52px", borderRadius: "6px" }}
                wrapperStyle={{ height: "52px", width: "52px" }}
              />
            </Grid>
            <Grid
              item
              xs={10.5}
            >
              <SemiBold
                value={
                  appLanguage === "ru" ? item.professionRu : item.profession
                }
                sx={{ fontSize: "18px" }}
              />
              <Stack
                direction={"row"}
                spacing={1}
                alignItems={"center"}
                justifyContent={"flex-start"}
              >
                <LocationOnIcon
                  sx={{ width: "18px", color: "custom.notActive" }}
                />
                <Text
                  value={getAddressById(item.locationId)}
                  sx={{ fontSize: "16px", color: "custom.notActive" }}
                />
              </Stack>
            </Grid>
          </Grid>

          <SemiBold
            value={
              appLanguage === "ru" ? item.category.nameRu : item.category.name
            }
            sx={{ mt: 2, fontSize: "18px" }}
          />

          <Stack
            direction={"row"}
            spacing={1}
            alignItems={"center"}
          >
            <BusinessCenterIcon
              sx={{ width: "18px", color: "custom.notActive" }}
            />
            <Text
              value={item.workday_hours}
              sx={{ fontSize: "16px", color: "custom.notActive" }}
            />
          </Stack>

          <Stack
            direction={"row"}
            spacing={1}
            alignItems={"center"}
          >
            <AccessTimeFilledIcon
              sx={{ width: "18px", color: "custom.notActive" }}
            />
            <Text
              value={convertTimeStampToDate(item.createdAt)}
              sx={{ fontSize: "16px", color: "custom.notActive" }}
            />
          </Stack>

          <Text
            value={appLanguage === "ru" ? item.conditionsRu : item.conditions}
            sx={{
              fontSize: "16px",
              color: "custom.notActive",
              height: "5px",
              //   ...setMaxLengthLines(1),
            }}
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ItemMobile;
