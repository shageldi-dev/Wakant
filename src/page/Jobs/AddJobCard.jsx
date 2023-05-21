import React, { useContext, useState } from "react";
import { colors, regularButton } from "../../common/theme.mjs";
import { Button, Grid, Skeleton, Stack } from "@mui/material";
import Image from "mui-image";
import Text, { Bold, SemiBold } from "../../component/App/Text.jsx";
import { AppContext } from "../../App.js";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

const AddJobCard = () => {
  const { t, appLanguage } = useContext(AppContext);
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
  };
  return (
    <div
      style={{ ...cardStyle }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Stack spacing={2}>
        <Grid container sx={{ width: "100%" }}>
          <Grid item xs={1}>
            <Image
              showLoading={
                <Skeleton
                  sx={{ width: "52px", height: "52px" }}
                  variant={"rounded"}
                  animation={"wave"}
                />
              }
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH0AfQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQIDBQYHBP/EADsQAAEDAgQDBQUHAgcBAAAAAAEAAgMEEQUGITESQVETImFxgQcyQpGhFCRygrHB0SNiNFKSk7Ph8RX/xAAYAQEAAwEAAAAAAAAAAAAAAAAAAQIDBP/EACoRAAICAQMCBAYDAAAAAAAAAAABAhEDEiExIkFRcZHBMlJhYoGhBBMU/9oADAMBAAIRAxEAPwDyJEVuGzSXadFUsVREQBEVrhou2xP6ICHAtNioTmiAKWtLjYBQiAsXACzDvuVVEQBEsbXtoiAkuJAHRQiICWkA3IuoJJNyiIAiKxAaNdXfogKoi6HKeT8TzRP90aIKRptJVSjutPQD4j4D1IUSkoq2SlfBzyAEmwXr9Xlf2f5RY1uOVwq622rJXue7/aj2H4vmtFXY9kU9ylwZgG3GKFg/7WDz/LFsuoJ8s8+IsSAbqF1LoMuYjLwU7hA4+7a8f0OhWuxfL1VhzDOz+vTDUvaLFv4h+6tHPFuns/qTLE0rW5p1LW33OihFsZEudpZuyhEQBFNja/JQgCIiAlruEHxRjXSPaxurnEAXNtSoV4oHziXs28XZsL3Dnwjfztv5XQk2GA4ZHiGMxUNZJ2DeIiQE8Ljb4Rf4l2ebM7Ow2EYFlrhpmQt4JZohbgt8DOniflqtBQNpMyU7aesd2WJQtAZON5Gja/Uj581rMYwSvwqxqoS6In/EMu5jvXl62XK9OTKtfK7e5rTjDp9TVuJc4ucS5zjdznG5J6koi6PKmTMTzLxSwAU9Ew2dVSAkE9Gj4j9B15LplJRVyexklfBzi6LLWYZKOQU1c/jpDpxO1Mf8jwXWVPs+wqhis91RUvA1e+Thv6NsuaxrC8JoKYue2dhLrMbG/iJP5lyf6MObo5N1iyQ6j5834GzDZmVdGPuc7rWG0bt7eRG3kueXc5dcMbytV4ZMbyQjgYTuNLsPoRb0XCi5GoIPQrXBJ7wlyimRLaS7kqzQLXJ25dVVFuZEucXKERAW9z8X6KqIgCzUNXLQ1kNXTkdpE7iAOx6g+BBI9VhAJNgiNXsDqa7Bo66mGLZauI3HikpWnvwv5hv8fLktjlrPLaf7rjsRcz3XTNZf0ez+Pktbh9FX4fhUOO4LJ2sJYRWU7teEt0dpzHPqL8191NV4BmN4bXxinqXaXLuF1/B+x9fkuDJTVSWpePdHVH7dn+mdYMlZRzTGajCKhsEhN3OoZWloNtnRm4b5CyyDJWeMHpGQYBmmKSkjFo4Zo+HgHSxa8LnR7M53SCfCMY7J3wdq0tc387T+yzYwPaDlLC/ts+PsdRte2MN7ftnEk6WD2X/8UY2pLTGd+aKTTTtqjNW4d7RuEtqK6hP9wEd/+NcTmalxOjnhZitW2eV4LgG7N+gXseUqjEMVynSV2LyCSpqON9wwN7nEQ3QeAv6ryT2gVLanM9Qxhu2na2HwuLk/U29FH8eUnmcKW3gi00v67s+r2dvLa6sF9DGw/U/yubq2AVtVyYJpAP8AUV02TuGhw+sxCXRmpF+jQf3K5J73SvL3+843PmV0498035FJ7QiiERF0GIVmhhHeJB8FVEARouQERAWJDQWt35lUUogOpyHjcdBVSYfVuApas3aXbMktbXwIsPQL481Zefg9U58LCaKR3cO/B/af2Wi4eIHpzW+hzFiNRhZwks+0SS2jjkOrwDyPXz5LnljlHJrh35NVJOOmX4Og9k765+KTh1VUfYYYbdiXks4idLDYWAOy2Gd6qfOWa8Pyrhb7xU7y6okbs159535G39XELRUGJS4TRNwTL/3jE53HtZotQwncg+GgvsLX8F2OXmYR7OsIfW4pOJMQqRd/Bq+S3wMHS+5PPU8rc0nWV5K3eyXuaV0afU6nOeJUeT8sB0DWjso209FB/mcG2aPIAXPgF4Pg+E1uPVz+DjLeLiqKgjRt9dTzJ6L0Glwuqz5O7M+c6gYdgMIIpYjIIw5t+Tj8O13buO1ha3xZmzphdBSHCsoQsbG3T7Q1tmN8Wg6uP9x+qvFSx9MFcny+yM1UviexzuZ6qOkiGEUhAay3aAHYDZvnfUrmlLnFzi5zi4k3JJuSfNQuvHBQjRWc9TsK9g0d7UnYKrSWm4UK5QIiICXAA6G6hEQBS0Au1NlC6XAoqJmWayrqmUQlbWtiZLVU7pdDHfhAbsb632VZy0qy0VbObc64sBYLJTmIP/ryTMYdD2IBcQdxqRp8/JbjK1PTzQ17qhlMSwwNY6pYXNbxPIO3XZMMpaWTN7aV1Nam7aRvYTNvYBriAR8lV5Fuq4JUdk/ExwZgdh8bo8GpmUlxYyuPHI712+llqqiolqp3T1Mr5ZXe9JI7iJ+a3cMFPUZuwyJ0UDqaSspo3sbSugY8F7Q4cDteZB6rJm2Kljx6GClhpo4Wv4S2GhdTj37WPEe/p8Q0UR0p7LkSbfc0FTUTVcgkqp5Z3tFg6V5eQOgvsFjXo2dsKomQ5mIwOmw5mF1ULKCpgiMQnD3BrmHk+wubjay0WHU0UGAYXUU+Ew4hLW1UkdS+SIydmGuADBb3SQb3R5UldEKNs5ZCLb7rdikpKXMlRThgmpony8DHd4ENBIv5WWWpw+CmwqvLmtknLhJE8jVkZeA23mLqXlV0WUG1Zz6Ii0MwASrgtboRxHmqAkbc90QBS1vEfDmVClzr2sLeXNAQbX02VxNIITAJHdiXcZjv3S61r262VEQGSLtHMkiY4hjwONl7B1jpfrqVnD6qOf7U6eQTNBIl4+9ppvv4L41Oyhok+93/ANGpqY6l08jp2OHBI6Q8TSO8LE9OSyVIxWvljfV1MtTIwWY6WfiLedgSdOq1dh0CEA7i6UDZ1lRi2Kk/ba6preyaHDtagyAAjQi56KtOcTomPbS1M0LJbcTYpS0HTnbwXwFoDbm1zysq2HQfJK2oGQ9pBJo4tfbdruRQzzFpaZXlpaGkFx2Gw9FRFNCwNTYIRY2KuSGaN36qiEBERAEREAVmjm46fqqqXHiNygIO+iIiAKWkDW1zyUIgBJJuUREARWc3haDe5KqgCIjRdwHUoCWtLjYKFZ/dJYNhv4qqA//Z"
              fit={"cover"}
              style={{ width: "52px", height: "52px", borderRadius: "6px" }}
              wrapperStyle={{ height: "52px", width: "52px" }}
            />
          </Grid>
          <Grid item xs={11}>
            <SemiBold
              value={appLanguage === "ru" ? "nameRu" : "nameTm"}
              sx={{ fontSize: "18px" }}
            />
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <LocationOnIcon
                sx={{ width: "18px", color: "custom.notActive" }}
              />
              <Text
                value={"Adress"}
                sx={{ fontSize: "16px", color: "custom.notActive" }}
              />
            </Stack>
          </Grid>
        </Grid>
        <Bold
          value={appLanguage === "ru" ? "Name RU" : "Name TM"}
          sx={{ mt: 2, fontSize: "30px" }}
        />

        <Stack direction={"row"} alignItems={"center"} spacing={4}>
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <BusinessCenterIcon
              sx={{ width: "18px", color: "custom.notActive" }}
            />
            <Text
              //   value={item.workday_hours}
              value={"09:00-18:00"}
              sx={{ fontSize: "16px", color: "custom.notActive" }}
            />
          </Stack>

          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <AccessTimeFilledIcon
              sx={{ width: "18px", color: "custom.notActive" }}
            />
            <Text
              //   value={convertTimeStampToDate(item.createdAt)}
              value={"2023-5-20"}
              sx={{ fontSize: "16px", color: "custom.notActive" }}
            />
          </Stack>
        </Stack>

        <Text
          //   value={item.conditions}
          value={
            "Dizayner (interyer, eksteryer), 3d Max, Photoshop, Coral Draw, Autocad Programmalaryny bilmeli"
          }
          sx={{ fontSize: "16px", color: "custom.notActive", height: "10px" }}
        />

        <br />
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{
            width: "100%",
            mt: 2,
          }}
        >
          <SemiBold
            // value={item.salary}
            value={"5000"}
            sx={{ fontSize: "20px", color: "primary.main" }}
          />
          <Button
            variant={"contained"}
            sx={{
              ...regularButton,
              color: "#FFFFFF",
            }}
          >
            {t("submit_job")}
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};

export default AddJobCard;
