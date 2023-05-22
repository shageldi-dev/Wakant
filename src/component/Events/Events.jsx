import React, { useState } from "react";
import { colors } from "../../common/theme.mjs";
import {
  Box,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Fonts } from "../../common/fonts.mjs";
import SearchIcon from "@mui/icons-material/Search";
import EventsCard from "./EventsCard.jsx";

const searchContainer = {
  background: "#fff",
  boxShadow: "0px 0px 30px rgba(192, 192, 192, 0.25)",
  borderRadius: "150px",
  p: 2,
  width: "90%",
  height: "50px",
  display: "flex",
  alignItems: "center",
};

const Events = () => {
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
    <>
      <Stack mt={5}></Stack>
      <div
        style={{ ...cardStyle }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="center"
          mt={2}
        >
          <Typography
            sx={{
              color: "#2058D4",
              fontWeight: "700",
              fontFamily: Fonts.REGULAR,
              fontSize: "18px",
            }}
          >
            16 teklip
          </Typography>
          <Typography
            sx={{
              color: colors.TEXT_COLOR,
              fontWeight: "700",
              fontFamily: Fonts.REGULAR,
              fontSize: "18px",
            }}
          >
            bildirenleriň anketalary
          </Typography>
        </Stack>
        <Stack alignItems="center" mt={1}>
          <Typography
            sx={{
              color: colors.TEXT_COLOR,
              fontWeight: "400",
              fontFamily: Fonts.REGULAR,
              width: { md: "50%", sm: "70%", xs: "90%" },
              textAlign: "center",
            }}
          >
            Her gün dürli ulgamlardaky Hususy Kärhanalar we iş beriji
            Telekeçiler ajaýyp işleri ýerine ýetirmek üçin bu ýere ýygnanýarlar.
          </Typography>
        </Stack>
        <Stack
          direction="row"
          width="100%"
          justifyContent="space-between"
          mt={10}
          alignItems="center"
          spacing={5}
        >
          <Box sx={{ width: "170px" }}>
            <img
              style={{ width: "100%" }}
              src="/images/dfa1erc1uncnl1po7l2v7yawd 1.png"
              alt="dfa1erc1uncnl1po7l2v7yawd 1.png"
            />
          </Box>
          <Box
            sx={{
              ...searchContainer,
              display: { md: "flex", sm: "none", xs: "none" },
            }}
          >
            <TextField
              sx={{ "& fieldset": { border: "none" } }}
              variant="outlined"
              placeholder="Şu ýerde gözle"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box sx={{ width: "235px" }}>
            <img
              style={{ width: "100%" }}
              src="/images/dxf91zhqd2z6b0bwg85ktm5s4 1.png"
              alt="dxf91zhqd2z6b0bwg85ktm5s4 1.png"
            />
          </Box>
        </Stack>
        <Box
          sx={{
            ...searchContainer,
            display: { md: "none", sm: "flex", xs: "flex" },
            mb: 3,
          }}
        >
          <TextField
            sx={{ "& fieldset": { border: "none" } }}
            variant="outlined"
            placeholder="Şu ýerde gözle"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </div>
      <Stack mt={2} mb={2} spacing={1}>
        <Typography
          sx={{
            color: colors.TEXT_COLOR,
            fontFamily: Fonts.REGULAR,
            fontWeight: "400",
            mt: 3,
          }}
        >
          Sahypalar 1-89 jemi 944 hünärmenler
        </Typography>
        <img src="/images/Rectangle 331.png" alt="Rectangle 331.png" />
      </Stack>
      <EventsCard />
    </>
  );
};

export default Events;
