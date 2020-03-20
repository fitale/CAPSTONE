const express = require("express");
const router = express.Router();
const uDataSchema = require("../../models/uDataSchema.js");

router.get("/", async (req, res) => {
  try {
    const university = await uDataSchema.find();
    res.json(university);
  } catch (err) {
    res.status(500).json({
      errorMessage: err.message
    });
  }
});

router.post("/", async (req, res) => {
  const university = new uDataSchema({
    id: req.body.id,
    lng: req.body.lng,
    lat: req.body.lat,
    college_of_institution_type: req.body.college_of_institution_type,
    campus: req.body.campus,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    county: req.body.county,
    institution_level: req.body.institution_level,
    institution_type: req.body.institution_type,
    enrollment_as_of: req.body.enrollment_as_of,
    undergrad_enrollment: req.body.undergrad_enrollment,
    graduate_enrollment: req.body.graduate_enrollment,
    program_1: req.body.program_1,
    program_2: req.body.program_2,
    program_3: req.body.program_3,
    program_4: req.body.program_4,
    program_5: req.body.program_5,
    campus_website: req.body.campus_website,
    tuition_in_state: req.body.tuition_in_state,
    tuition_out_state: req.body.tuition_out_state,
    total_enrollment: req.body.total_enrollment,
    full_time_undergrad_enrollment: req.body.full_time_undergrad_enrollment,
    full_time_undergrad_male: req.body.full_time_undergrad_male,
    full_time_undergrad_female: req.body.full_time_undergrad_female,
    applicants_total: req.body.applicants_total,
    applicants_male: req.body.applicants_male,
    applicants_female: req.body.applicants_female,
    admission_total: req.body.admission_total,
    admission_male: req.body.admission_male,
    admission_female: req.body.admission_female,
    SAT_reading_writing_25: req.body.SAT_reading_writing_25,
    SAT_reading_writing_75: req.body.SAT_reading_writing_75,
    SAT_math_25: req.body.SAT_math_25,
    SAT_math_75: req.body.SAT_math_75,
    ACT_25: req.body.ACT_25,
    ACT_75: req.body.ACT_75,
    application_fee: req.body.application_fee,
    student_to_faculty: req.body.student_to_faculty
  });
  try {
    const newUni = await university.save();
    res.status(201).json(newUni);
  } catch (err) {
    res.status(400).json({ errorMessage: err.message });
  }
});

// router.get("/:id", (req, res) => {
//   const found = university.some(uni => uni.id === req.params.id);
//   if (found) {
//     res.json(university.filter(uni => uni.id === req.params.id));
//     console.log(`university with id: ${req.params.id} found`);
//   } else {
//     res.status(404).json({
//       errorMessage: `The University you are searching for is not found`
//     });
//   }
// });

router.get("/_id", getUni, (req, res) => {
  res.json(res.university);
});

async function getUni(req, res, next) {
  try {
    university = await uDataSchema.findById(req.params.id);
    if (university == null) {
      return res.status(404).json({ errorMessage: "Cant find uni" });
    }
  } catch (err) {
    return res.status(500).json({ errorMessage: err.message });
  }
  res.university = university;
  next();
}

module.exports = router;

// const uDataFile = __dirname + "/../../models/udata.json";
// const university = require(uDataFile);
