import { axiosPrivate } from "./axios";

// Home Page API Routes
export const getHospitals = async () => {
  let res = await axiosPrivate.get("/hospital/get_hospital");
  return res.data;
};

export const getHositalAbout = async () => {
  let res = await axiosPrivate.get("/hospital/get_hospitalabout");
  return res.data;
};

export const getDoctorsByHospitalId = async (hospId) => {
  let res = await axiosPrivate.get(`/doctor/get_doctorbyhospital/${hospId}`);
  return res.data;
};


export const getDeptFAQ = async (dname) => {
  let res = await axiosPrivate.get(`/departmentfaqbydepartmentname/${dname}`);
  return res.data;
};

export const getTreatmentFAQ = async (tname) => {
  let res = await axiosPrivate.get(`/faqbysubdepartmentname/${tname}`);
  return res.data;
};

// Doctors
export const getAllDoctors = async () => {
  let res = await axiosPrivate.get(`/doctor/verifieddoctor`);
  return res.data;
};

export const getSchedule = async () => {
  let res = await axiosPrivate.get(`/schedule/get_schedule`);
  return res.data;
};
export const getScheduleByDoctorId = async (docId) => {
  let res = await axiosPrivate.get(`/doctorschedule/${docId}`);
  return res.data;
};

//Medidocs in Numbers -

export const getMedidocsNumber = async () => {
  let res = await axiosPrivate.get(`/getmedidocsnumber`);
  return res.data;
};

//Our Services -

export const getOurServices = async () => {
  let res = await axiosPrivate.get(`/getourservice`);
  return res.data;
};

//Meet Our Specialists -
export const getOurSpecialists = async () => {
  let res = await axiosPrivate.get(`/getourspecialist`);
  return res.data;
};

// Specialities -
export const getourspecialities = async () => {
  let res = await axiosPrivate.get(`/department/get_department`);
  return res.data;
};

export const editSpecialityHeadingAndDesc = async () => {
  let res = await axiosPrivate.get(`/getourspecialities`);
  return res.data;
};

// Treatments by departmentId -
export const getTreatmentsByDepartmentId = async (id) => {
  let res = await axiosPrivate.get(`/subdepartments/${id}`);
  return res.data;
};

// Get Testimoniels -
export const gettestinomal = async () => {
  let res = await axiosPrivate.get(`/gettestinomal`);
  return res.data;
};

//Get getpatientvideo -
export const getpatientvideo = async () => {
  let res = await axiosPrivate.get(`/getpatientvideo`);
  return res.data;
};

// Get technologyvideo -
export const gettechnologyvideo = async () => {
  let res = await axiosPrivate.get("/gettechnologyvideo");
  return res.data;
};

// Get Hospital Network -
export const gethospitalnetwork = async () => {
  let res = await axiosPrivate.get(`/gethospitalnetwork`);
  return res.data;
};

// Get Banner -
export const getBanner = async () => {
  let res = await axiosPrivate.get(`/getbanner`);
  return res.data;
};

// Get Single Banner
export const getSingleBanner = async () => {
  let res = await axiosPrivate.get(`/bannersingle`);
  return res.data;
};

// Contact us
export const contactUsBannerandLocation = async () => {
  const res = await axiosPrivate.get(`/getcontact`);
  return res.data;
};

export const contactUsForm = async (data) => {
  const res = await axiosPrivate.post(`/contactform/add_contactform`, data);
  return res.data;
};

// get Health Cards -
export const getHealthCards = async () => {
  let res = await axiosPrivate.get(`/gethealthcard`);
  return res.data;
};

// get About Card -
export const getAboutHealthCard = async () => {
  let res = await axiosPrivate.get(`/getaboutcard`);
  return res.data;
};

//get medidocs card - (Servicecard)
export const getMedidocsCardHome = async () => {
  let res = await axiosPrivate.get(`/getservicecard`);
  return res.data;
};

// get Advertise -
export const getAdvertiseHome = async () => {
  let res = await axiosPrivate.get(`/advertise/get_advertise`);
  return res.data;
};

// get FAQ's Home -
export const getFAQHome = async () => {
  let res = await axiosPrivate.get(`/homepage/get_faq`);
  return res.data;
};

// get News -
export const getNewsForHomePage = async () => {
  let res = await axiosPrivate.get(`/news/get_news`);
  return res.data;
};

// get our partners -
export const getPartners = async () => {
  let res = await axiosPrivate.get(`/getourpartners`);
  return res.data;
};

// medidocs healthcard Home Page -
export const getHealthCardHomePage = async () => {
  let res = await axiosPrivate.get(`/medidocscard/get_medidocscard`);
  return res.data;
};

// medidocs singleDoctor Profile -
export const getDoctorProfile = async (docname) => {
  let res = await axiosPrivate.get(`/doctor/get_doctorone/${docname}`);
  return res.data;
};
export const getDoctorProfileById = async (docid) => {
  let res = await axiosPrivate.get(`/doctor/get_doctor/${docid}`);
  return res.data;
};

export const getDoctorProfileByName = async (name) => {
  let res = await axiosPrivate.get(`/doctor/get_doctorone/${name}`);
  return res.data;
};

// medidocs healthcard banner -
export const getHealthCardBanner = async () => {
  let res = await axiosPrivate.get(`/getbannercard`);
  return res.data;
};

// get More about Us
export const getMoreAboutUs = async () => {
  let res = await axiosPrivate.get(`/getabout`);
  return res.data;
};

// export const patientRegister = async (data) => {
//   let res = await axiosPrivate.post("/register/create_register", data);
//   return res.data;
// };
export const patientRegister = async (data) => {
  try {
    let res = await axiosPrivate.post("/register/create_register", data);
    return res.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw error.response.data;
    } else {
      throw { message: "Network Error" };
    }
  }
};

export const patientRegisterOtpVerify = async (registerId, otp) => {
  let res = await axiosPrivate.post("/register/otp_verify/" + registerId, otp);
  return res.data;
};

export const patientLogin = async (data) => {
  let res = await axiosPrivate.post("/patient_login", data);
  return res.data;
};

export const getHospitalNetwork = async () => {
  let res = await axiosPrivate.get("/gethospitalnetwork");
  return res.data;
};

export const getPatientById = async (pid) => {
  let res = await axiosPrivate.get("/register/get_register/" + pid);
  return res.data;
};

export const getAppointmentsbyPatientId = async (pid) => {
  let res = await axiosPrivate.get(
    `${import.meta.env.VITE_API}/consultant_online_appointment/` + pid
  );
};

export const userDashAppointments = async (pid) => {
  let res = await axiosPrivate.get("/consultant_appointment/" + pid);
  return res.data;
};

export const createOnlineAppointment = async (data) => {
  let res = await axiosPrivate.post(
    "/offlineappointment/add_offlineappointment",
    data
  );
  return res.data;
};

export const createCardPurchase = async (data) => {
  let res = await axiosPrivate.post("/cardpurchase/create_cardpurchase", data);
  return res.data;
};

export const userDashBanner = async () => {
  let res = await axiosPrivate.get("/getuserbanner");
  return res.data;
};

// ------------------------ ----------------- Lab API's --------------------------
// ---- Lab Home API's ----
export const getLabHomeBanner = async () => {
  let res = await axiosPrivate.get(`/labbanner/get_labbanner`);
  return res.data;
};

export const getLabHelpUs = async () => {
  let res = await axiosPrivate.get(`/labhelpus/get_labhelpus`);
  return res.data;
};

export const getCallUs = async () => {
  let res = await axiosPrivate.get(`/labcallus/get_labcallus`);
  return res.data;
};

export const getHealthAndAwareness = async () => {
  let res = await axiosPrivate.get(`/healthbanner/get_healthbanner`);
  return res.data;
};

export const getXrayBanner = async () => {
  let res = await axiosPrivate.get(`/xraybanner/get_xraybanner`);
  return res.data;
};

export const getCertificateBanner = async () => {
  let res = await axiosPrivate.get(`/certificatebanner/get_certificatebanner`);
  return res.data;
};

export const getFAQ = async () => {
  let res = await axiosPrivate.get(`/labfaq/get_labfaq`);
  return res.data;
};

export const getBookLabwithUs = async () => {
  let res = await axiosPrivate.get(`/getbooklabtestwithus`);
  return res.data;
};

// ------------------------------------------------------------

export const getOneHealthPackage = async (slug) => {
  let res = await axiosPrivate.get(`/getonehealthpackages/${slug}`);
  return res.data;
};

export const getVitalOrgansCategory = async () => {
  let res = await axiosPrivate.get(
    `/vitalorgancategory/get_vitalorgancategory`
  );
  return res.data;
};

export const getGeneralCategory = async () => {
  let res = await axiosPrivate.get(`/labcategory/get_labcategory`);
  return res.data;
};

export const getTestsByGeneralCategoriesId = async (categoryId) => {
  let res = await axiosPrivate.get("/labtestbycategory/" + categoryId);
  return res.data;
};

export const getPopularHealthPackages = async () => {
  let res = await axiosPrivate.get("/gethealthpackages");
  return res.data;
};

export const getsingleLabtest = async (slug) => {
  let res = await axiosPrivate.get(`/labtest/getonelabtestt/${slug}`);
  return res.data;
};

export const getRegionsForLab = async () => {
  let res = await axiosPrivate.get(`/labregion/get_labregion`);
  return res.data;
};

export const createLabBookingHospital = async (data) => {
  let res = await axiosPrivate.post(
    "/labbookinghospital/add_labbookinghospital",
    data
  );
  return res.data;
};

export const getRecentBlogs = async () => {
  let res = await axiosPrivate.get("/blog/recentblog");
  return res.data;
};

export const getTestByVitalOrganSlug = async (slug) => {
  let res = await axiosPrivate.get(
    "/labtestbyhealthpackagecategoryBySlug/" + slug
  );
  return res.data;
};

export const getFrequentlyBookedTests = async () => {
  let res = await axiosPrivate.get("/frequentlybookedlabtest");
  return res.data;
};

export const getTopBookedLabTests = async () => {
  let res = await axiosPrivate.get("/topbookedlabtest");
  return res.data;
};

export const getLabBookingByUserId = async (userId) => {
  let res = await axiosPrivate.get(`/getlabbookingbyuser/${userId}`);
  return res.data;
};

export const getbooklabtestwithus = async () => {
  let res = await axiosPrivate.get(`/getbooklabtestwithus`);
  return res.data;
};

export const gettitleAndDescription = async () => {
  let res = await axiosPrivate.get(`/homepage/get_homepage`);
  return res.data;
};

export const getOfferSliderForDoctorPage = async () => {
  let res = await axiosPrivate.get(`/offerslider/get_offerslider`);
  return res.data;
};

export const getAllCardDetails = async () => {
  let res = await axiosPrivate.get(`/getcardpurchase`);
  return res.data;
};

export const createOfferForOtp = async (data) => {
  let res = await axiosPrivate.post(`/usercard/add_usercard`, data);
  return res.data;
};

export const verifyOtp = async (cardid, otp) => {
  try {
    const response = await axiosPrivate.post(
      `/usercardotpverify/${cardid}`,
      otp
    );
    if (response.data.message === "OTP verified successfully.") {
      return { success: true, message: response.data.message };
    } else {
      return {
        success: false,
        message: response.data.message || "OTP verification failed",
      };
    }
  } catch (error) {
    console.error("Error during OTP verification:", error);
    const errorMessage =
      error.response?.data?.error ||
      "An error occurred during OTP verification.";
    return { success: false, message: errorMessage };
  }
};

export const getAllBlogs = async () => {
  try {
    let res = await axiosPrivate.get(`/getallblogs`);
    return res.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
};

export const getVerifiedDoctorsWithPagination = async (page = 1) => {
  let res = await axiosPrivate.get(
    `/doctor/verifieddoctorwithpagination?page=${page}`
  );
  return res.data;
};

// Razorpay Integration

export const createOrder = async (amount) => {
  let res = await axiosPrivate.post(`/payment_order`, amount);
  return res.data;
};

export const verifyPayment = async (data) => {
  let res = await axiosPrivate.post(`/payment_success`, data);
  return res.data;
};

export const getFabloRegions = async () => {
  let res = await axiosPrivate.get(`/fabloregion/get_fabloregion`);
  return res.data;
};

export const createRazorPay = async (data) => {
  let res = await axiosPrivate.post(`/addrazorpaypayment`, data);
  return res.data;
};

export const getTransactionHistoryByUserId = async (userId) => {
  let res = await axiosPrivate.get(`/getusertransaction/${userId}`);
  return res.data;
};

export const updateHealthcardPurchased = async (cardid, putdata) => {
  let res = await axiosPrivate.put(
    `/cardpurchase/update_cardpurchase/${cardid}`,
    putdata
  );
  return res.data;
};

export const createServiceAppointment = async (data) => {
  let res = await axiosPrivate.post(`/servicepage/add_servicepage`, data);
  return res.data;
};

export const getTags = async () => {
  let res = await axiosPrivate.get(`/tag/get_tag`);
  return res.data;
};

export const emailVerify = async (emailobject) => {
  let res = await axiosPrivate.post(
    "/user_forgotpasswordemailverify",
    emailobject
  );
  return res;
};

export const verifyForgotPasswardOtp = async (object) => {
  let res = await axiosPrivate.post(`/user_forgotpasswordotpverify`, object);
  return res;
};

export const resetpassword = async (object) => {
  let res = await axiosPrivate.post(`/user_forgotpasswordotpset`, object);
  return res;
};



export const UpdateUser = async (userId, data) => {
  try {
    const res = await axiosPrivate.put(
      `/update_user/${userId}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error("Error updating user profile picture:", error);
    throw error;
  }
};


export const getJobcategory = async () => {
  let res = await axiosPrivate.get(`/jobcategory/get_jobcategory`);
  return res.data;
};