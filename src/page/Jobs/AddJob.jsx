import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddJobCard from "./AddJobCard";
import ItemDesktop from "../../component/App/ItemDesktop";
import MainItemMobile from "../../component/App/MainItemMobile";
import React, { useContext, useEffect, useState } from "react";
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import { AxiosInstance } from "../../api/AxiosInstance.mjs";
import { Fonts } from "../../common/fonts.mjs";
import { colors } from "../../common/theme.mjs";

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
  const [jobs, setJobs] = useState();
  const { isMobile } = useContext(AppContext);

  function changeRoute(path) {
    navigate(path);
  }
  function getMyJobs() {
    AxiosInstance.get('users/jobs/my-jobs')
      .then(response => {
        setJobs(response.data)
      })
      .catch(err => {

      })
  }

  useEffect(() => {
    getMyJobs()
  }, [])

  function checkArray(arr) {
    try {
      const it = arr[0];
      return arr;
    } catch (err) {
      return []
    }
  }
  return (
    <div>
      <Stack sx={{ mt: 12, mb: 4 }}></Stack>

      <Stack direction="row" mt={3} justifyContent="flex-end">
        <Button
          onClick={() => changeRoute("/add-job-new-card")}
          variant="contained"
          sx={{
            textTransform: "none",
            fontFamily: Fonts.BOLD,
            zIndex: 10,
            color: "#fff",
          }}
          startIcon={<AddCircleOutlineIcon />}
        >
          Add job
        </Button>
      </Stack>

      <Stack spacing={4} sx={{ mt: 3 }}>
        {
          checkArray(jobs).map((item, i) => {
            return (
              isMobile ?
                <MainItemMobile key={`job-mobile-${i}`} item={item} />
                :
                <ItemDesktop key={`job-desktop-${i}`} item={item} />
            )
          })
        }
      </Stack>


    </div>
  );
};

export default AddJob;
