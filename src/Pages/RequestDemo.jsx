import React from "react";
import Header from "./Header";
import styles from "../Stylesheets/requestDemo.module.scss";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Footer from "./Footer";
const courseItem = [
  {
    courseName: "abc",
    key: "1",
  },
  {
    courseName: "xyz",
    key: "2",
  },
];
export default function RequestDemo() {
  const [course, setCourse] = React.useState("");
  const handleChange = (event) => {
    setCourse(event.target.value);
  };

  const handleForm = (e) => {};

  return (
    <div className={styles["main-div"]}>
      <Header />
      <div className={styles["banner-wrapper"]}>
        <div className={styles["left-side-header"]}>
          <div className={styles["main-text"]}>Teach, Create & Earn</div>
          <div className={styles["sub-text"]}>
            Passionate about teaching? Looking for a platform where you can
            share your knowledge
          </div>
        </div>
        <div className={styles["right-side-header-wrapper"]}>
          <Card className={styles["card-form"]}>
            <div className={styles["form-header"]}>
              INTERESTED IN WORKING WITH US ?
            </div>
            <div className={styles["form-sub-header"]}>
              Please submit the form
            </div>
            <div className={styles["form-section"]}>
              <form onSubmit={handleForm}>
                <TextField
                  id="name"
                  label="Name"
                  variant="outlined"
                  className={styles["name-input"]}
                />

                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  className={styles["email-input"]}
                />
                <Box className={styles["course-input"]}>
                  <Select
                    id="courseName"
                    value={course}
                    onChange={handleChange}
                    sx={{ width: "342.78px", height: "52.85px" }}
                  >
                    {courseItem.map((item) => {
                      return (
                        <MenuItem value={item.courseName} key={item.key}>
                          {item.courseName}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </Box>

                <TextField
                  id="phno"
                  label="Phone Number"
                  variant="outlined"
                  className={styles["phno-input"]}
                />
                <Button type="submit" className={styles["submit-button"]}>
                  Request Demo
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </div>
      <div className={styles["info-wrapper"]}>
        <div className={styles["first-info"]}>
          <div className={styles["first-header"]}>
            You've come to the right place
          </div>
          <div className={styles["first-sub-text"]}>
            At Gritly our constant endeavour is to create a network of
            world-class trainers and industry-experts who, in turn, create
            high-quality courseware that resonates with professionals the world
            over, cutting across domains, especially Sales
            <br />
            <br /> Come join our bootcamp
          </div>
        </div>
        <div className={styles["second-info"]}>
          <div className={styles["second-header"]}>
            You've come to the right place
          </div>
          <div className={styles["second-sub-text"]}>
            At Gritly our constant endeavour is to create a network of
            world-class trainers and industry-experts who, in turn, create
            high-quality courseware that resonates with professionals the world
            over, cutting across domains, especially Sales
            <br />
            <br /> Come join our bootcamp
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
