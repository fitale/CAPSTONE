// initialize database
const mongoose = require("mongoose");

// define schema (key: datatype)
const uDataSchema = new mongoose.Schema({
  lng: Number,
  lat: Number,
  college_of_institution_type: String,
  campus: String,
  address: String,
  city: String,
  state: String,
  zip: Number,
  county: String,
  institution_level: String,
  institution_type: String,
  enrollment_as_of: String,
  undergrad_enrollment: Number,
  graduate_enrollment: Number,
  program_1: String,
  program_2: String,
  program_3: String,
  program_4: String,
  program_5: String,
  campus_website: String,
  tuition_in_state: Number,
  tuition_out_state: Number,
  total_enrollment: Number,
  full_time_undergrad_enrollment: Number,
  full_time_undergrad_male: Number,
  full_time_undergrad_female: Number,
  applicants_total: Number,
  applicants_male: Number,
  applicants_female: Number,
  admission_total: Number,
  admission_male: Number,
  admission_female: Number,
  SAT_reading_writing_25: Number,
  SAT_reading_writing_75: Number,
  SAT_math_25: Number,
  SAT_math_75: Number,
  ACT_25: Number,
  ACT_75: Number,
  application_fee: Number,
  student_to_faculty: Number
});

// export schema ('uData' is the name of database collection, 'uDataSchema' is the model above)
module.exports = mongoose.model("uData", uDataSchema);
