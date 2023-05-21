import React, { useContext, useRef } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import { yupStyle } from "../Jobs/AddJob";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { AppSelect, AppTextArea } from "../../component/Common/AppComponent";
import { Fonts } from "../../common/fonts.mjs";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { colors } from "../../common/theme.mjs";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

const stepTitle = {
  color: "rgba(0, 0, 0, 0.54)",
  fontFamily: Fonts.REGULAR,
  fontWeight: "700",
  fontSize: "20px",
};

const nextButton = {
  textTransform: "none",
  fontFamily: Fonts.REGULAR,
  fontWeight: "400",
  color: "#2058D4",
};
const againAddBtn = {
  textTransform: "none",
  fontFamily: Fonts.Regular,
  fontWeight: "400",
  background: "rgba(0, 0, 0, 0.23)",
  color: "#fff",

  "&:hover": {
    background: "rgba(0, 0, 0, 0.23)",
  },
};

const steps = [
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

const ProfileStepper = () => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  //   Yup form
  const validationSchema = Yup.object({
    lastName: Yup.string().required("required"),
    email: Yup.string().required("required"),
    password: Yup.string().required("required"),
    name: Yup.string().required("required"),
    yourJob: Yup.string().required("required"),
    birthDate: Yup.string().required("required"),
    phoneNumber: Yup.string().required("required"),
    adress: Yup.string().required("required"),
    location: Yup.string().required("required"),
    startDate: Yup.string().required("required"),
    endDate: Yup.string().required("required"),
    nameWork: Yup.string().required("required"),
    jobStatus: Yup.string().required("required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      lastName: "",
      name: "",
      yourJob: "",
      birthDate: "",
      phoneNumber: "",
      adress: "",
      location: "",
      startDate: "",
      endDate: "",
      nameWork: "",
      jobStatus: "",
    },
    validationSchema, // shorthand used here
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const files = e.target.files;
    // Handle the selected files here
    console.log(files);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <Box sx={{ maxWidth: 700 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          <Step sx={{ maxWidth: 450 }}>
            <StepLabel>
              <Typography sx={stepTitle}>Sahsy maglumaty</Typography>
            </StepLabel>
            <StepContent>
              <Stack spacing={2}>
                <TextField
                  sx={{ ...yupStyle, "& fieldset": { border: "none" } }}
                  name="lastName"
                  label="Familiyanyz"
                  id="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                  placeholder="Familiyanyz"
                  type={"text"}
                />
                <TextField
                  sx={{ ...yupStyle, "& fieldset": { border: "none" } }}
                  name="name"
                  label="Adynyz"
                  id="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  placeholder="Adynyz"
                  type={"text"}
                />
                <TextField
                  sx={{ ...yupStyle, "& fieldset": { border: "none" } }}
                  name="yourJob"
                  label="Hunariniz ya-da kariniz"
                  id="yourJob"
                  value={formik.values.yourJob}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.yourJob && Boolean(formik.errors.yourJob)
                  }
                  helperText={formik.touched.yourJob && formik.errors.yourJob}
                  placeholder="Hunariniz ya-da kariniz"
                  type={"text"}
                />
                <FormControl>
                  <FormLabel
                    id="demo-radio-buttons-group-label"
                    sx={{ color: "primary.main" }}
                  >
                    Jynsynyz
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                  </RadioGroup>
                </FormControl>
                <TextField
                  sx={{ ...yupStyle, "& fieldset": { border: "none" } }}
                  name="birthDate"
                  label="Doglan senaniz"
                  id="birthDate"
                  value={formik.values.birthDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.birthDate && Boolean(formik.errors.birthDate)
                  }
                  helperText={
                    formik.touched.birthDate && formik.errors.birthDate
                  }
                  placeholder="Doglan senaniz"
                  type={"text"}
                />
              </Stack>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Stack direction="row" justifyContent="flex-end">
                    <Button
                      onClick={handleNext}
                      sx={{ ...nextButton, mt: 1, mr: 1 }}
                      endIcon={<ArrowForwardIosIcon sx={{ width: "10px" }} />}
                    >
                      Indiki
                      {/* {index === steps.length - 1 ? "Finish" : "Continue"} */}
                    </Button>
                  </Stack>
                  {/* <Button
                    // disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button> */}
                </div>
              </Box>
            </StepContent>
          </Step>
          <Step sx={{ maxWidth: 450 }}>
            <StepLabel>
              <Typography sx={stepTitle}>Habarlasmak</Typography>
            </StepLabel>
            <StepContent>
              <Stack spacing={2}>
                <TextField
                  sx={{ ...yupStyle, "& fieldset": { border: "none" } }}
                  name="phoneNumber"
                  label="Telefon belginiz"
                  id="phoneNumber"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.phoneNumber &&
                    Boolean(formik.errors.phoneNumber)
                  }
                  helperText={
                    formik.touched.phoneNumber && formik.errors.phoneNumber
                  }
                  placeholder="Telefon belginiz"
                  type={"text"}
                />
                <TextField
                  sx={{ ...yupStyle, "& fieldset": { border: "none" } }}
                  name="adress"
                  label="Adress"
                  id="adress"
                  value={formik.values.adress}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.adress && Boolean(formik.errors.adress)}
                  helperText={formik.touched.adress && formik.errors.adress}
                  placeholder="Adress"
                  type={"text"}
                />
                <TextField
                  sx={{ ...yupStyle, "& fieldset": { border: "none" } }}
                  name="email"
                  label="Mail adresiniz"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  placeholder="Mail adresiniz"
                  type={"text"}
                />
              </Stack>
              {/* <Typography>{step.description}</Typography> */}
              <Box sx={{ mb: 2 }}>
                <div>
                  <Stack direction="row" justifyContent="flex-end">
                    <Button
                      onClick={handleNext}
                      sx={{ ...nextButton, mt: 1, mr: 1 }}
                      endIcon={<ArrowForwardIosIcon sx={{ width: "10px" }} />}
                    >
                      Indiki
                      {/* {index === steps.length - 1 ? "Finish" : "Continue"} */}
                    </Button>
                  </Stack>
                  {/* <Button
                    // disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button> */}
                </div>
              </Box>
            </StepContent>
          </Step>
          <Step sx={{ maxWidth: 450 }}>
            <StepLabel
            // optional={
            //   index === 2 ? (
            //     <Typography variant="caption">Last step</Typography>
            //   ) : null
            // }
            >
              {/* {step.label} */}
              <Typography sx={stepTitle}>Gosmaca</Typography>
            </StepLabel>
            <StepContent>
              <Stack spacing={2}>
                <TextField
                  // id="outlined-multiline-static"
                  // label="Multiline"
                  multiline
                  rows={5}
                  sx={{ ...yupStyle, "& fieldset": { border: "none" } }}
                  name="lastName"
                  // label="Ish beriji hakynda"
                  id="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                  // placeholder="Ish beriji hakynda"
                  type={"text"}
                />
              </Stack>
              {/* <Typography>{step.description}</Typography> */}
              <Box sx={{ mb: 2 }}>
                <div>
                  <Stack direction="row" justifyContent="flex-end">
                    <Button
                      onClick={handleNext}
                      sx={{ ...nextButton, mt: 1, mr: 1 }}
                      endIcon={<ArrowForwardIosIcon sx={{ width: "10px" }} />}
                    >
                      Indiki
                      {/* {index === steps.length - 1 ? "Finish" : "Continue"} */}
                    </Button>
                  </Stack>
                  {/* <Button
                    // disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button> */}
                </div>
              </Box>
            </StepContent>
          </Step>
          <Step>
            <StepLabel
            // optional={
            //   index === 2 ? (
            //     <Typography variant="caption">Last step</Typography>
            //   ) : null
            // }
            >
              {/* {step.label} */}
              <Typography sx={stepTitle}>Dasary yurt dilleri</Typography>
            </StepLabel>
            <StepContent>
              <Stack spacing={2} direction="row">
                <AppSelect>
                  <option>Ispan dili</option>
                  <option>Rus dili</option>
                  <option>Turk dili</option>
                  <option>Inlis dili dili</option>
                  <option>Hytay dili</option>
                </AppSelect>
                <AppSelect>
                  <option>Saylanan</option>
                  <option>Saylanmadyk</option>
                  <option>Kanagatlanarly</option>
                  <option>Gowy</option>
                  <option>Oran gowy</option>
                  <option>Ene dili</option>
                </AppSelect>
              </Stack>
              {/* <Typography>{step.description}</Typography> */}
              <Box sx={{ mb: 2 }}>
                <div>
                  <Stack direction="row" justifyContent="flex-end">
                    <Button
                      onClick={handleNext}
                      sx={{ ...nextButton, mt: 1, mr: 1 }}
                      endIcon={<ArrowForwardIosIcon sx={{ width: "10px" }} />}
                    >
                      Indiki
                      {/* {index === steps.length - 1 ? "Finish" : "Continue"} */}
                    </Button>
                  </Stack>
                  {/* <Button
                    // disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button> */}
                </div>
              </Box>
            </StepContent>
          </Step>
          <Step sx={{ maxWidth: 700 }}>
            <StepLabel
            // optional={
            //   index === 2 ? (
            //     <Typography variant="caption">Last step</Typography>
            //   ) : null
            // }
            >
              {/* {step.label} */}
              <Typography sx={stepTitle}>Bilim</Typography>
            </StepLabel>
            <StepContent>
              <Stack direction="row" spacing={4}>
                <Stack spacing={2} width="100%">
                  <AppSelect>
                    <option>Derejaniz</option>
                    <option>Orta</option>
                    <option>Yorite orta</option>
                    <option>Yokary</option>
                  </AppSelect>
                  <TextField
                    sx={{ ...yupStyle, "& fieldset": { border: "none" } }}
                    name="yourJob"
                    label="Hunariniz"
                    id="yourJob"
                    value={formik.values.yourJob}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.yourJob && Boolean(formik.errors.yourJob)
                    }
                    helperText={formik.touched.yourJob && formik.errors.yourJob}
                    placeholder="Hunariniz"
                  />
                  <TextField
                    sx={{ ...yupStyle, "& fieldset": { border: "none" } }}
                    name="location"
                    label="Yerlesyan yeri"
                    id="location"
                    value={formik.values.location}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.location && Boolean(formik.errors.location)
                    }
                    helperText={
                      formik.touched.location && formik.errors.location
                    }
                    placeholder="Yerlesyan yeri"
                    type={"text"}
                  />
                  <Stack direction="row" spacing={1}>
                    <TextField
                      sx={{ ...yupStyle, "& fieldset": { border: "none" } }}
                      name="startDate"
                      label="Okuwa baslanynyz"
                      id="startDate"
                      value={formik.values.startDate}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.startDate &&
                        Boolean(formik.errors.startDate)
                      }
                      helperText={
                        formik.touched.startDate && formik.errors.startDate
                      }
                      placeholder="Okuwa baslanynyz"
                      type={"text"}
                    />
                    <TextField
                      sx={{ ...yupStyle, "& fieldset": { border: "none" } }}
                      name="endDate"
                      label="Okuwy tamamlanynyz"
                      id="endDate"
                      value={formik.values.endDate}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.endDate && Boolean(formik.errors.endDate)
                      }
                      helperText={
                        formik.touched.endDate && formik.errors.endDate
                      }
                      placeholder="Okuwy tamamlanynyz"
                      type={"text"}
                    />
                  </Stack>
                  <Button sx={againAddBtn} variant="contained">
                    Yene gosmak
                  </Button>
                </Stack>
                <Stack width="100%">
                  <TextField
                    // id="outlined-multiline-static"
                    // label="Multiline"
                    multiline
                    rows={5}
                    sx={{ ...yupStyle, "& fieldset": { border: "none" } }}
                    name="lastName"
                    label="Okuw jayynyn ady"
                    id="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.lastName && Boolean(formik.errors.lastName)
                    }
                    helperText={
                      formik.touched.lastName && formik.errors.lastName
                    }
                    placeholder="Okuw jayynyn ady"
                    type={"text"}
                  />
                </Stack>
              </Stack>
              {/* <Typography>{step.description}</Typography> */}
              <Box sx={{ mb: 2 }}>
                <div>
                  <Stack direction="row" justifyContent="flex-end">
                    <Button
                      onClick={handleNext}
                      sx={{ ...nextButton, mt: 1, mr: 1 }}
                      endIcon={<ArrowForwardIosIcon sx={{ width: "10px" }} />}
                    >
                      Indiki
                      {/* {index === steps.length - 1 ? "Finish" : "Continue"} */}
                    </Button>
                  </Stack>
                  {/* <Button
                    // disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button> */}
                </div>
              </Box>
            </StepContent>
          </Step>
          <Step sx={{ maxWidth: 450 }}>
            <StepLabel
            // optional={
            //   index === 2 ? (
            //     <Typography variant="caption">Last step</Typography>
            //   ) : null
            // }
            >
              {/* {step.label} */}
              <Typography sx={stepTitle}>Is tejribe</Typography>
            </StepLabel>
            <StepContent>
              <Stack spacing={2}>
                <TextField
                  sx={{ ...yupStyle, "& fieldset": { border: "none" } }}
                  name="nameWork"
                  label="Karhananyn ady"
                  id="nameWork"
                  value={formik.values.nameWork}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.nameWork && Boolean(formik.errors.nameWork)
                  }
                  helperText={formik.touched.nameWork && formik.errors.nameWork}
                  placeholder="Karhananyn ady"
                  type={"text"}
                />
                <TextField
                  sx={{ ...yupStyle, "& fieldset": { border: "none" } }}
                  name="jobStatus"
                  label="Wezipaniz"
                  id="jobStatus"
                  value={formik.values.jobStatus}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.jobStatus && Boolean(formik.errors.jobStatus)
                  }
                  helperText={
                    formik.touched.jobStatus && formik.errors.jobStatus
                  }
                  placeholder="Wezipaniz"
                  type={"text"}
                />
                <TextField
                  sx={{ ...yupStyle, "& fieldset": { border: "none" } }}
                  name="location"
                  label="Yerlesyan yeri"
                  id="location"
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.location && Boolean(formik.errors.location)
                  }
                  helperText={formik.touched.location && formik.errors.location}
                  placeholder="Yerlesyan yeri"
                  type={"text"}
                />
                <Stack direction="row" spacing={1}>
                  <TextField
                    sx={{ ...yupStyle, "& fieldset": { border: "none" } }}
                    name="startDate"
                    label="Ise baslanynyz"
                    id="startDate"
                    value={formik.values.startDate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.startDate &&
                      Boolean(formik.errors.startDate)
                    }
                    helperText={
                      formik.touched.startDate && formik.errors.startDate
                    }
                    placeholder="Ise baslanynyz"
                    type={"text"}
                  />
                  <TextField
                    sx={{ ...yupStyle, "& fieldset": { border: "none" } }}
                    name="endDate"
                    label="isden cykanynyz"
                    id="endDate"
                    value={formik.values.endDate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.endDate && Boolean(formik.errors.endDate)
                    }
                    helperText={formik.touched.endDate && formik.errors.endDate}
                    placeholder="Isden cykanynyz"
                    type={"text"}
                  />
                </Stack>
                <Button sx={againAddBtn} variant="contained">
                  Yene gosmak
                </Button>
              </Stack>
              {/* <Typography>{step.description}</Typography> */}
              <Box sx={{ mb: 2 }}>
                <div>
                  <Stack direction="row" justifyContent="flex-end">
                    <Button
                      onClick={handleNext}
                      sx={{ ...nextButton, mt: 1, mr: 1 }}
                      endIcon={<ArrowForwardIosIcon sx={{ width: "10px" }} />}
                    >
                      Indiki
                      {/* {index === steps.length - 1 ? "Finish" : "Continue"} */}
                    </Button>
                  </Stack>
                  {/* <Button
                    // disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button> */}
                </div>
              </Box>
            </StepContent>
          </Step>
          <Step sx={{ maxWidth: 450 }}>
            <StepLabel
            // optional={
            //   index === 2 ? (
            //     <Typography variant="caption">Last step</Typography>
            //   ) : null
            // }
            >
              {/* {step.label} */}
              <Typography sx={stepTitle}>Diplom sertifikat we s.m</Typography>
            </StepLabel>
            <StepContent>
              <Stack spacing={2} mt={3}>
                <Box
                  p={1}
                  pl={2}
                  pr={2}
                  sx={{
                    background: "rgba(32, 88, 212, 0.05)",
                    boxShadow: "0px 0px 4px #000000",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={handleClick}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleFileUpload}
                    />
                    <IconButton>
                      <AddAPhotoIcon />
                    </IconButton>
                    <Button
                      variant="contained"
                      sx={{
                        background: "rgba(32, 88, 212, 0.05)",
                        textTransform: "none",
                        boxShadow: "0px 0px 4px #000000",
                        color: "#007AFF",
                        borderRadius: "90px",
                        p: 0,
                        pl: 1,
                        pr: 1,
                        fontWeight: "600",

                        "&:hover": {
                          background: "rgba(32, 88, 212, 0.05)",
                        },
                      }}
                    >
                      Saýlamak
                    </Button>
                  </Stack>
                </Box>
                <Box
                  p={1}
                  pl={2}
                  pr={2}
                  sx={{
                    background: "rgba(32, 88, 212, 0.05)",
                    boxShadow: "0px 0px 4px #000000",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={handleClick}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleFileUpload}
                    />
                    <IconButton>
                      <AddAPhotoIcon />
                    </IconButton>
                    <Button
                      variant="contained"
                      sx={{
                        background: "rgba(32, 88, 212, 0.05)",
                        textTransform: "none",
                        boxShadow: "0px 0px 4px #000000",
                        color: "#007AFF",
                        borderRadius: "90px",
                        p: 0,
                        pl: 1,
                        pr: 1,
                        fontWeight: "600",

                        "&:hover": {
                          background: "rgba(32, 88, 212, 0.05)",
                        },
                      }}
                    >
                      Saýlamak
                    </Button>
                  </Stack>
                </Box>
                <Box
                  p={1}
                  pl={2}
                  pr={2}
                  sx={{
                    background: "rgba(32, 88, 212, 0.05)",
                    boxShadow: "0px 0px 4px #000000",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={handleClick}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleFileUpload}
                    />
                    <IconButton>
                      <AddAPhotoIcon />
                    </IconButton>
                    <Button
                      variant="contained"
                      sx={{
                        background: "rgba(32, 88, 212, 0.05)",
                        textTransform: "none",
                        boxShadow: "0px 0px 4px #000000",
                        color: "#007AFF",
                        borderRadius: "90px",
                        p: 0,
                        pl: 1,
                        pr: 1,
                        fontWeight: "600",

                        "&:hover": {
                          background: "rgba(32, 88, 212, 0.05)",
                        },
                      }}
                    >
                      Saýlamak
                    </Button>
                  </Stack>
                </Box>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    sx={{
                      fontFamily: Fonts.REGULAR,
                      fontWeight: "400",
                      color: colors.TEXT_COLOR,
                    }}
                  >
                    Duzgunnamany okadym we kabul etdim
                  </Typography>
                  <Checkbox />
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    sx={{
                      fontFamily: Fonts.REGULAR,
                      fontWeight: "400",
                      color: colors.TEXT_COLOR,
                    }}
                  >
                    Maglumatlarym gaytadan islenip bilner
                  </Typography>
                  <Checkbox />
                </Stack>
              </Stack>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Stack mt={3}>
                    <Button
                      variant="contained"
                      sx={{
                        background: " rgba(32, 88, 212, 0.7)",
                        color: "#fff",
                      }}
                    >
                      ANKETA DÖRETMEK
                    </Button>
                  </Stack>
                </div>
              </Box>
            </StepContent>
          </Step>
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </Box>
    </>
  );
};

export default ProfileStepper;
