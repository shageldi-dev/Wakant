import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
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
      <Box sx={{ maxWidth: 700 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          <Step>
            <StepLabel
            // optional={
            //   index === 2 ? (
            //     <Typography variant="caption">Last step</Typography>
            //   ) : null
            // }
            >
              {/* {step.label} */}
              <Typography>Sahsy maglumaty</Typography>
            </StepLabel>
            <StepContent>
              <Stack spacing={2}>
                <TextField
                  sx={{ ...yupStyle, "& fieldset": { border: "none" } }}
                  name="email"
                  label="Familiyanyz"
                  id="login"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  placeholder="Familiyanyz"
                  type={"text"}
                />
                <TextField
                  sx={{ ...yupStyle, "& fieldset": { border: "none" } }}
                  name="email"
                  label="Adynyz"
                  id="login"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  placeholder="Adynyz"
                  type={"text"}
                />
                <TextField
                  sx={{ ...yupStyle, "& fieldset": { border: "none" } }}
                  name="email"
                  label="Hunariniz ya-da kariniz"
                  id="login"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
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
                  name="email"
                  label="Doglan senaniz"
                  id="login"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  placeholder="Doglan senaniz"
                  type={"text"}
                />
              </Stack>
              {/* <Typography>{step.description}</Typography> */}
              <Box sx={{ mb: 2 }}>
                <div>
                  <Stack direction="row" justifyContent="flex-end">
                    <Button
                      // variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
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
              <Typography>Sahsy maglumaty</Typography>
            </StepLabel>
            <StepContent>
              <Stack spacing={2}>
                <TextField
                  sx={{ ...yupStyle, "& fieldset": { border: "none" } }}
                  name="email"
                  label="Familiyanyz"
                  id="login"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  placeholder="Familiyanyz"
                  type={"text"}
                />
                <TextField
                  sx={{ ...yupStyle, "& fieldset": { border: "none" } }}
                  name="email"
                  label="Adynyz"
                  id="login"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  placeholder="Adynyz"
                  type={"text"}
                />
                <TextField
                  sx={{ ...yupStyle, "& fieldset": { border: "none" } }}
                  name="email"
                  label="Hunariniz ya-da kariniz"
                  id="login"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  placeholder="Hunariniz ya-da kariniz"
                  type={"text"}
                />
              </Stack>
              {/* <Typography>{step.description}</Typography> */}
              <Box sx={{ mb: 2 }}>
                <div>
                  <Stack direction="row" justifyContent="flex-end">
                    <Button
                      // variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
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
              <Typography>Sahsy maglumaty</Typography>
            </StepLabel>
            <StepContent>
              <Stack spacing={2}>
                <AppTextArea
                  style={{
                    maxWidth: "100%",
                    minWidth: "100%",
                    height: "150px",
                  }}
                  placeholder={t("job_about")}
                  type={"number"}
                />
              </Stack>
              {/* <Typography>{step.description}</Typography> */}
              <Box sx={{ mb: 2 }}>
                <div>
                  <Stack direction="row" justifyContent="flex-end">
                    <Button
                      // variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
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
              <Typography>Sahsy maglumaty</Typography>
            </StepLabel>
            <StepContent>
              <Stack spacing={2} direction="row">
                <AppSelect>
                  <option>{t("job_place_document")}</option>
                  <option>{t("job_place_document")}</option>
                </AppSelect>
                <AppSelect>
                  <option>{t("job_place_document")}</option>
                  <option>{t("job_place_document")}</option>
                </AppSelect>
              </Stack>
              {/* <Typography>{step.description}</Typography> */}
              <Box sx={{ mb: 2 }}>
                <div>
                  <Stack direction="row" justifyContent="flex-end">
                    <Button
                      // variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
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
              <Typography>Sahsy maglumaty</Typography>
            </StepLabel>
            <StepContent>
              <Stack spacing={2}>
                <AppSelect>
                  <option>{t("job_place_document")}</option>
                  <option>{t("job_place_document")}</option>
                </AppSelect>
              </Stack>
              {/* <Typography>{step.description}</Typography> */}
              <Box sx={{ mb: 2 }}>
                <div>
                  <Stack direction="row" justifyContent="flex-end">
                    <Button
                      // variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
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
          {/* ))} */}
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
