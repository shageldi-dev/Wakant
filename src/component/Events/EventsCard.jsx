import React, { useState } from "react";
import { colors } from "../../common/theme.mjs";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import { Fonts } from "../../common/fonts.mjs";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MaleIcon from "@mui/icons-material/Male";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const privateButton = {
  background: "rgba(229, 229, 229, 0.69)",
  borderRadius: "5px",
  textTransform: "none",
  color: colors.NOT_ACTIVE,
  fontFamily: Fonts.REGULAR,
  fontWeight: "400",
  fontSize: "14px",

  "&:hover": {
    background: "rgba(229, 229, 229, 0.69)",
  },
};

const EventsCard = () => {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const cardStyle = {
    backgroundColor: isHover ? colors.WHITE : colors.NOT_ACTIVE_BLUE,
    cursor: "pointer",
    padding: "16px",
    borderRadius: "10px",
    transition: "0.5s",
    boxShadow: isHover ? `0px 0px 20px rgba(192, 192, 192, 0.25)` : "",
    marginTop: "20px",
    paddingBottom: 0,
  };
  return (
    <div
      style={{ ...cardStyle }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Stack direction="row" justifyContent="space-between">
        <Stack spacing={1}>
          <Typography
            sx={{
              color: colors.TEXT_COLOR,
              fontFamily: Fonts.REGULAR,
              fontWeight: "700",
              fontSize: "26px",
            }}
          >
            Programmist
          </Typography>
          <Typography
            sx={{
              color: colors.TEXT_COLOR,
              fontFamily: Fonts.REGULAR,
              fontWeight: "600",
            }}
          >
            Myrat Annaýew
          </Typography>
          <Stack direction="row" pt={1} spacing={1} alignItems="center">
            <LocationOnIcon sx={{ color: colors.NOT_ACTIVE }} />
            <Typography
              sx={{
                color: colors.NOT_ACTIVE,
                fontFamily: Fonts.REGULAR,
                fontWeight: "400",
                fontSize: "14px",
              }}
            >
              Aşgabat
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <img src="/images/Frame 3183614.png" alt="Frame 3183614.png" />
        </Stack>
      </Stack>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={1} alignItems="center">
          <MaleIcon sx={{ color: colors.NOT_ACTIVE }} />
          <Typography
            sx={{
              color: colors.NOT_ACTIVE,
              fontFamily: Fonts.REGULAR,
              fontWeight: "400",
              fontSize: "14px",
            }}
          >
            Erkek
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <CalendarMonthIcon sx={{ color: colors.NOT_ACTIVE }} />
          <Typography
            sx={{
              color: colors.NOT_ACTIVE,
              fontFamily: Fonts.REGULAR,
              fontWeight: "400",
              fontSize: "14px",
            }}
          >
            24.04.2000
          </Typography>
        </Stack>
        <Typography
          pr={{ md: 50, xs: 0 }}
          sx={{
            color: "#2058D4",
            fontFamily: Fonts.REGULAR,
            fontWeight: "600",
            fontSize: "14px",
            display: { md: "block", xs: "none" },
          }}
        >
          Ýörite-orta bilimli
        </Typography>
        <Stack pr={5}>
          <IconButton sx={{ color: colors.GREEN_2 }}>
            <ThumbUpAltIcon />
          </IconButton>
        </Stack>
      </Stack>
      <Typography
        pr={{ md: 50, xs: 0 }}
        sx={{
          color: "#2058D4",
          fontFamily: Fonts.REGULAR,
          fontWeight: "600",
          fontSize: "14px",
          marginTop: 1,
          display: { md: "none", xs: "block" },
        }}
      >
        Ýörite-orta bilimli
      </Typography>
      <Typography
        pt={2}
        sx={{
          color: colors.NOT_ACTIVE,
          fontFamily: Fonts.REGULAR,
          fontWeight: "400",
          fontSize: "14px",
        }}
      >
        Лорем ипсум долор сит амет, ин еос мелиус бонорум молестиае, еос ан
        деленити цонституам.
      </Typography>
      <Stack
        mt={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
        pb={3}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <AccessTimeIcon sx={{ color: colors.NOT_ACTIVE }} />
          <Typography
            sx={{
              color: colors.NOT_ACTIVE,
              fontFamily: Fonts.REGULAR,
              fontWeight: "400",
              fontSize: "14px",
            }}
          >
            şu wagt
          </Typography>
        </Stack>
        <Button sx={privateButton} variant="contained">
          Işe çagyryldy
        </Button>
      </Stack>
    </div>
  );
};

export default EventsCard;
