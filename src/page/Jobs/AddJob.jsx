import React from "react";
import { Stack, Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Fonts } from "../../common/fonts.mjs";
import { colors } from "../../common/theme.mjs";
import AddJobCard from "./AddJobCard";
import { useNavigate } from "react-router-dom";

export const yupStyle = {
  width: "100%",
  backgroundColor: `${colors.NOT_ACTIVE_BLUE}`,
  color: `${colors.TEXT_COLOR}`,
  outline: "none",
  fontSize: "18px",
  borderRadius: "5px",
  fontfamily: `${Fonts.REGULAR}`,
};

const AddJob = (props) => {
  const navigate = useNavigate();

  function changeRoute(path) {
    navigate(path);
  }
  return (
    <div>
      <Stack sx={{ mt: 12, mb: 4 }}></Stack>
      <Stack mb={3}>
        <AddJobCard />
      </Stack>

      <Stack direction="row" mt={3} justifyContent="flex-end">
        <Button
          onClick={() => changeRoute("/add-job-new-card")}
          variant="contained"
          sx={{
            textTransform: "none",
            fontFamily: Fonts.BOLD,
            position: "fixed",
            top: "70vh",
            zIndex: 10,
            color: "#fff",
          }}
          startIcon={<AddCircleOutlineIcon />}
        >
          Add job
        </Button>
      </Stack>
    </div>
  );
};

export default AddJob;
