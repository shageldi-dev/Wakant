import * as Yup from "yup";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Modal from "@mui/material/Modal";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import React, { useEffect, useState } from "react";
import { LoadingButton } from "@mui/lab";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { AxiosInstance } from "../../api/AxiosInstance.mjs";
import { Fonts } from "../../common/fonts.mjs";
import { colors } from "../../common/theme.mjs";
import { showError, showSuccess } from "../../component/Common/Alert";

import {
  Grid,
  Stack,
  Typography,
  Box,
  Button,
  Slider,
  TextField,
} from "@mui/material";
import {
  AppSelect,
  AppTextArea,
  AppTextField,
} from "../../component/Common/AppComponent";

export const yupStyle = {
  width: "100%",
  backgroundColor: `${colors.NOT_ACTIVE_BLUE}`,
  color: `${colors.TEXT_COLOR}`,
  outline: "none",
  fontSize: "18px",
  borderRadius: "5px",
  fontfamily: `${Fonts.REGULAR}`,
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const JobTimeType = {
  SATURDAY: "SATURDAY",
  SUNDAY: "SUNDAY",
  OTHER: "OTHER",
};

function valuetext(value) {
  return `${value} age`;
}

const NewCardAddJob = () => {
  const [profession, setProfession] = useState("");
  const [gender, setGender] = useState(0);
  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(0);
  const [workday_hours, setWorkdayHours] = useState("");
  const [saturday_hours, setSaturdayHours] = useState("");
  const [sunday_hours, setSundayHours] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [e_mail, setEmail] = useState("");
  const [conditions, setConditions] = useState("");
  const [conditionsRu, setConditionsRu] = useState("");
  const [experience, setExperience] = useState("");
  const [anotherExperienceText, setAnotherExperienceText] = useState("");
  const [registrationPlace, setRegistrationPlace] = useState("");
  const [about_employer, setAboutEmployer] = useState("");
  const [salary, setSalary] = useState();
  const [phone_number_visible, setPhoneNumberVisible] = useState(true);
  const [locationId, setLocationId] = useState(5);
  const [comments, setComments] = useState(true);
  const [categoryId, setCategoryId] = useState(48);
  const [agenstwoId, setAgenstwoId] = useState(null);
  const [agency, setAgency] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [experienceList, setExperienceList] = useState([]);
  const [addressList, setAddressList] = useState([]);
  const [genderList, setGenderList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const clearInput = () => {
    setWorkdayHours("");
    setSaturdayHours("");
    setSundayHours("");
    setPhoneNumber("");
    setAddress("");
    setEmail("");
    setConditions("");
    setConditionsRu("");
    setExperience("");
    setAboutEmployer("");
    setSalary("");
    setPhoneNumberVisible("");
    setLocationId("");
    setComments("");
    setCategoryId("");
    setStartTime("");
    setEndTime("");
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const fetchCategories = () => {
    AxiosInstance.get("public/categories")
      .then((response) => {
        setCategoryList(response.data.data);
        const categoList = response.data.data;
        console.log(categoList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchExperienceList = () => {
    AxiosInstance.get("public/get-params").then((response) => {
      setExperienceList(response.data.experienceList);
      setGenderList(response.data.genderList);
      setAddressList(response.data.addressList);
    });
  };

  const fetchAgencyList = () => {
    AxiosInstance.get("web/agencies").then((response) => {
      setAgency(response.data.data);
    });
  };

  useEffect(() => {
    fetchExperienceList();
    fetchAgencyList();
  }, []);

  function addData() {
    const body = {
      profession: profession,
      gender: gender,
      minAge: minAge,
      maxAge: maxAge,
      workday_hours: workday_hours,
      saturday_hours: saturday_hours,
      sunday_hours: sunday_hours,
      phone_number: phone_number,
      address: address,
      e_mail: e_mail,
      conditions: conditions,
      conditionsRu: conditionsRu,
      experience: experience,
      anotherExperienceText: anotherExperienceText,
      registrationPlace: registrationPlace,
      about_employer: about_employer,
      salary: salary,
      phone_number_visible: phone_number_visible,
      locationId: locationId,
      comments: comments,
      categoryId: categoryId,
      agenstwoId: agenstwoId,
    };
    AxiosInstance.post("users/jobs/add", body)
      .then((response) => {
        if (!response.data.error) {
          showSuccess("Successfully added  new job");
          clearInput();
        } else {
          showError("something went wrong");
        }
      })
      .catch((error) => {
        showError(error + "error");
      });
  }

  const handleButtonClick = () => {
    if (!isChecked) {
      // Checkbox not checked, do something (e.g., show an error message)
      showError("Please check the checkbox before clicking the button");
      return;
    }
    addData();
  };

  const { t, i18n } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const handleOpen = (type) => {
    setOpen(true);
    setJobTimeType(type);
  };
  const handleClose = () => setOpen(false);

  const [jobTimeType, setJobTimeType] = useState(JobTimeType.OTHER);

  function getJobTimeTitle() {
    if (jobTimeType === JobTimeType.OTHER) {
      return "job_hours";
    } else if (jobTimeType === JobTimeType.SATURDAY) {
      return "job_times_saturday";
    } else if (jobTimeType === JobTimeType.SUNDAY) {
      return "job_times_sunday";
    }
  }

  function splitHours(hours) {
    try {
      let splitted = hours.split("-");
      if (splitted.length === 1) {
        return {
          start: splitted[0],
          end: "00:00",
        };
      } else if (splitted.length > 1) {
        return {
          start: splitted[0],
          end: splitted[1],
        };
      } else {
        return {
          start: "00:00",
          end: "00:00",
        };
      }
    } catch (e) {
      return {
        start: "00:00",
        end: "00:00",
      };
    }
  }

  function getJobTimeValue() {
    if (jobTimeType === JobTimeType.OTHER) {
      return splitHours(workday_hours);
    } else if (jobTimeType === JobTimeType.SATURDAY) {
      return splitHours(saturday_hours);
    } else if (jobTimeType === JobTimeType.SUNDAY) {
      return splitHours(sunday_hours);
    }
  }

  const [value, setValue] = React.useState([20, 40]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setMinAge(newValue[0]);
    setMaxAge(newValue[1]);
  };

  //   Yup form
  const validationSchema = Yup.object({
    email: Yup.string().required("required"),
    password: Yup.string().required("required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema, // shorthand used here
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Grid
          container
          spacing={3}
          mt={12}
          mb={4}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            {i18n.language === "tm" ? (
              <>
                <AppSelect
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                >
                  {categoryList.map((item, i) => {
                    return (
                      <option
                        value={item.id}
                        key={`get_category_id_${i}`}
                      >
                        {item.name}
                      </option>
                    );
                  })}
                </AppSelect>
              </>
            ) : (
              <>
                <AppSelect
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                >
                  {categoryList.map((item, i) => {
                    return (
                      <option
                        value={item.id}
                        key={`get_category_id_${i}`}
                      >
                        {item.nameRu}
                      </option>
                    );
                  })}
                </AppSelect>
              </>
            )}
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <AppTextField
              value={saturday_hours}
              onChange={(e) => setSaturdayHours(e.target.value)}
              placeholder={t("job_times_saturday")}
              onClick={() => {
                handleOpen(JobTimeType.SATURDAY);
              }}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <AppTextField
              value={e_mail}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("job_mail")}
              type={"email"}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <AppTextField
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              placeholder={t("job_name_add")}
              type={"text"}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <AppTextField
              value={sunday_hours}
              onChange={(e) => setSundayHours(e.target.value)}
              placeholder={t("job_times_sunday")}
              onClick={() => {
                handleOpen(JobTimeType.SUNDAY);
              }}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            {i18n.language === "tm" ? (
              <AppSelect
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              >
                {experienceList.map((item, i) => {
                  return (
                    <option
                      value={item.id}
                      key={`experince_list_key${i}`}
                    >
                      {item.name}
                    </option>
                  );
                })}
              </AppSelect>
            ) : (
              <AppSelect
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              >
                {experienceList.map((item, i) => {
                  return (
                    <option
                      value={item.id}
                      key={`experince_list_key${i}`}
                    >
                      {item.nameRu}
                    </option>
                  );
                })}
              </AppSelect>
            )}
          </Grid>
          {/* ----------------------------------------------------------GEREK BOLUP BILER */}
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Typography>{t("job_age")}</Typography>
            <Slider
              getAriaLabel={() => t("job_age")}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            />
          </Grid>
          {/* ----------------------------------------------------------GEREK BOLUP BILER */}

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <AppTextField
              placeholder={t("job_phone")}
              value={phone_number}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type={"phone"}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            {i18n.language === "tm" ? (
              <AppSelect
                value={locationId}
                onChange={(e) => setLocationId(e.target.value)}
              >
                {addressList.map((item, i) => {
                  return (
                    <option
                      value={item.id}
                      key={`address_list_key${i}`}
                    >
                      {item.name}
                    </option>
                  );
                })}
              </AppSelect>
            ) : (
              <AppSelect
                value={locationId}
                onChange={(e) => setLocationId(e.target.value)}
              >
                {addressList.map((item, i) => {
                  return (
                    <option
                      value={item.id}
                      key={`address_list_key${i}`}
                    >
                      {item.nameRu}
                    </option>
                  );
                })}
              </AppSelect>
            )}
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <AppTextField
              value={workday_hours}
              onChange={(e) => setWorkdayHours(e.target.value)}
              placeholder={t("job_hours")}
              onClick={() => {
                handleOpen(JobTimeType.OTHER);
              }}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <AppTextField
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder={t("job_address")}
              type={"text"}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <AppTextField
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              type={"number"}
              placeholder={t("job_salary")}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <AppSelect
              value={agenstwoId}
              onChange={(e) => setAgenstwoId(e.target.value)}
            >
              <option value={null}>{t("no_selection")}</option>
              {agency.map((item, i) => {
                return (
                  <option
                    value={item.id}
                    key={`agency_list_key${i}`}
                  >
                    {i18n.language === "ru" ? item.nameRu : item.name}
                  </option>
                );
              })}
            </AppSelect>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            {i18n.language === "tm" ? (
              <AppTextArea
                value={conditions}
                onChange={(e) => setConditions(e.target.value)}
                style={{
                  maxWidth: "100%",
                  minWidth: "100%",
                  height: "150px",
                }}
                placeholder={t("job_condition")}
                type={"text"}
              />
            ) : (
              <AppTextArea
                value={conditionsRu}
                onChange={(e) => setConditionsRu(e.target.value)}
                style={{
                  maxWidth: "100%",
                  minWidth: "100%",
                  height: "150px",
                }}
                placeholder={t("job_condition")}
                type={"text"}
              />
            )}
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <AppTextArea
              value={about_employer}
              onChange={(e) => setAboutEmployer(e.target.value)}
              style={{
                maxWidth: "100%",
                minWidth: "100%",
                height: "150px",
              }}
              placeholder={t("job_about")}
              type={"text"}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <FormControl>
              <FormLabel
                id="demo-radio-buttons-group-label"
                sx={{ color: "primary.main" }}
              >
                {t("job_gender_add")}
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                onChange={(e) => setGender(e.target.value)}
              >
                {i18n.language === "tm" ? (
                  <>
                    {genderList.map((item, i) => {
                      return (
                        <FormControlLabel
                          key={`gender_lest_key${i}`}
                          value={item.id}
                          control={<Radio />}
                          label={
                            i18n.language === "ru" ? item.nameRu : item.name
                          }
                        />
                      );
                    })}
                  </>
                ) : (
                  <>
                    {genderList.map((item, i) => {
                      return (
                        <FormControlLabel
                          key={`gender_lest_key${i}`}
                          value={item.id}
                          control={<Radio />}
                          label={item.nameRu}
                        />
                      );
                    })}
                  </>
                )}
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked={false}
                  onChange={handleCheckboxChange}
                />
              }
              label={t("job_read_1")}
            />
            <FormControlLabel
              control={
                <Checkbox
                  value={phone_number_visible}
                  onChange={(e) => setPhoneNumberVisible(e.target.value)}
                  defaultChecked={false}
                />
              }
              label={t("job_read_2")}
            />
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked={false}
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                />
              }
              label={t("job_read_3")}
            />
          </Grid>
        </Grid>
        <LoadingButton
          fullWidth
          variant={"contained"}
          sx={{ color: "white", mt: 2, mb: 2 }}
          onClick={handleButtonClick}
        >
          {t("add_job_button")}
        </LoadingButton>

        <Stack sx={{ mb: 4 }}></Stack>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              {t(getJobTimeTitle())}
            </Typography>
            <Stack
              spacing={1}
              sx={{ mt: 2 }}
            >
              <Typography>{t("start_date")}</Typography>
              <AppTextField
                type={"time"}
                onChange={(e) => {
                  setStartTime(e.target.value);
                }}
              />
              <Typography>{t("end_date")}</Typography>
              <AppTextField
                type={"time"}
                onChange={(e) => {
                  setEndTime(e.target.value);
                }}
              />
            </Stack>
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked={false}
                  onChange={(e) => {
                    if (e.target.checked) {
                      if (jobTimeType === JobTimeType.SUNDAY) {
                        setSundayHours("Dync");
                      } else if (jobTimeType === JobTimeType.SATURDAY) {
                        setSaturdayHours("Dync");
                      } else if (jobTimeType === JobTimeType.OTHER) {
                        setWorkdayHours("Dync");
                      }
                      handleClose();
                    }
                  }}
                />
              }
              label={t("no_job")}
            />
            <Button
              fullWidth
              onClick={() => {
                if (jobTimeType === JobTimeType.SUNDAY) {
                  setSundayHours(`${startTime}-${endTime}`);
                } else if (jobTimeType === JobTimeType.SATURDAY) {
                  setSaturdayHours(`${startTime}-${endTime}`);
                } else if (jobTimeType === JobTimeType.OTHER) {
                  setWorkdayHours(`${startTime}-${endTime}`);
                }
                handleClose();
              }}
              variant={"contained"}
              sx={{ mt: 2, color: "white" }}
            >
              {t("ok")}
            </Button>
          </Box>
        </Modal>
      </form>
    </>
  );
};

export default NewCardAddJob;
