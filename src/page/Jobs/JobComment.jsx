import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { colors } from "../../common/theme.mjs";
import { Fonts } from "../../common/fonts.mjs";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const JobComment = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const [addComment, setAddComment] = useState(false);

  const handleClick = () => {
    setAddComment(!addComment);
  };

  const handleButtonClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "custom.notActiveBlue",
          borderRadius: "5px",
          p: 3,
          mt: 3,
        }}
      >
        <Stack direction="row" justifyContent="space-between" mt={3}>
          <Typography
            sx={{
              color: colors.BLACK,
              fontFamily: Fonts.BOLD,
              fontWeight: "600",
            }}
          >
            123 teswir
          </Typography>
          <Button
            onClick={handleClick}
            sx={{
              textTransform: "none",
              fontFamily: Fonts.REGULAR,
              fontWeight: "600",
              color: "#fff",
            }}
            variant="contained"
          >
            Teswir gosmak
          </Button>
        </Stack>
        {addComment && (
          <>
            <Stack width="50%" mt={2} mb={2}>
              <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Teswir gosmak"
                multiline
                rows={4}
              />
              <Stack
                direction="row"
                mt={2}
                spacing={2}
                justifyContent="flex-end"
              >
                <Button
                  onClick={handleClick}
                  sx={{
                    textTransform: "none",
                    fontFamily: Fonts.REGULAR,
                    fontWeight: "600",
                    color: colors.TEXT_COLOR,
                  }}
                  variant="outlined"
                >
                  Yatyrmak
                </Button>
                <Button
                  sx={{
                    textTransform: "none",
                    fontFamily: Fonts.REGULAR,
                    fontWeight: "600",
                    color: "#fff",
                  }}
                  variant="contained"
                >
                  Gosmak
                </Button>
              </Stack>
            </Stack>
          </>
        )}
        <Divider sx={{ marginBottom: "30px", marginTop: "5px" }} />
        <Stack direction="row" spacing={4}>
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUNhsanZkJgCLmoyeX9auEbmxDcq0olt5xw&usqp=CAU" />
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography
              sx={{
                color: colors.BLACK,
                fontFamily: Fonts.BOLD,
                fontWeight: "600",
              }}
            >
              Shagen Alyyev
            </Typography>
            <Typography
              sx={{
                fontFamily: Fonts.REGULAR,
                fontWeight: "400",
                color: colors.TEXT_COLOR,
                fontSize: "14px",
              }}
            >
              7 gun on
            </Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} mt={3} mb={7}>
          <Typography>
            This is amazing. I am incredibly grateful for the effort you placed
            into this project. Almost 3 hours in and have already learned a lot.
            It's so good I just bought the extended edition. Keep it up bro!!.
            Greetings from Costa Rica.
          </Typography>
          <Stack direction="row" alignItems="center">
            <IconButton>
              <ThumbUpIcon />
            </IconButton>
            <Typography>77</Typography>
            <IconButton>
              <ThumbDownIcon />
            </IconButton>
            <Button
              sx={{
                textTransform: "none",
                fontFamily: Fonts.REGULAR,
                fontWeight: "600",
                marginLeft: "30px",
              }}
            >
              Jogaplamak
            </Button>
          </Stack>
          <Button
            onClick={handleButtonClick}
            sx={{
              width: "100px",
              textTransform: "none",
              fontFamily: Fonts.REGULAR,
              fontWeight: "600",
              marginLeft: "30px",
            }}
            startIcon={
              showAnswer === false ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowUpIcon />
              )
            }
          >
            1 Jogap
          </Button>
          {showAnswer && (
            <>
              <Stack direction="row" spacing={2}>
                <Avatar
                  sx={{ width: "30px", height: "30px" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUNhsanZkJgCLmoyeX9auEbmxDcq0olt5xw&usqp=CAU"
                />
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography
                    sx={{
                      color: colors.BLACK,
                      fontFamily: Fonts.BOLD,
                      fontWeight: "600",
                    }}
                  >
                    Halil Gayypov
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: Fonts.REGULAR,
                      fontWeight: "400",
                      color: colors.TEXT_COLOR,
                      fontSize: "14px",
                    }}
                  >
                    7 gun on
                  </Typography>
                </Stack>
              </Stack>
              <Stack spacing={2} mt={3}>
                <Typography>
                  This is amazing. I am incredibly grateful for the effort you
                  placed into this project.
                </Typography>
                <Stack direction="row" alignItems="center">
                  <IconButton>
                    <ThumbUpIcon />
                  </IconButton>
                  <Typography>7</Typography>
                  <IconButton>
                    <ThumbDownIcon />
                  </IconButton>
                  <Button
                    sx={{
                      textTransform: "none",
                      fontFamily: Fonts.REGULAR,
                      fontWeight: "600",
                      marginLeft: "30px",
                    }}
                  >
                    Jogaplamak
                  </Button>
                </Stack>
              </Stack>
            </>
          )}
        </Stack>
      </Box>
    </>
  );
};

export default JobComment;
