import React, { useEffect, useState } from "react";
import { TiEdit } from "react-icons/ti";
import { LuUpload } from "react-icons/lu";
import { IoCalendarOutline, IoAdd } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { MdAddBox } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa";
import { PiBagFill } from "react-icons/pi";
import { HiLightBulb } from "react-icons/hi";
import { MdAppRegistration } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";
import { RiNotificationBadgeFill } from "react-icons/ri";
import DashboardNavbar from "../components/Navbar/DashboardNavbar";
import { VideoJS } from "../components/VideoJS/Video";
import { LuPlus } from "react-icons/lu";

const Profile = () => {
  const professionalPageDashboardMenu = ["Home", "Learning", "Community"];
  const [file, setFile] = useState({});

  const handleResumeUpload = (e) => {
    console.log(e.target.files[0])
  }
  return (
    <>
      <DashboardNavbar
        profileImage="https://bootdey.com/img/Content/avatar/avatar1.png"
        profileName="George Martin"
        dashboadMenus={professionalPageDashboardMenu}
      />
      <section className="profile-bg">
        <div className="container-fluid mb-3">
          <div className="p-2 p-lg-5">

            <div className="row g-3">

              <div className="col-lg-3">
                <div className="card border-0 h-100 rounded-4">
                  <div className="card-body d-flex align-items-center justify-content-center">
                    <div className="w-100">
                      <div className="text-center position-relative">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="avatar-xxl rounded-4"
                          alt=""
                          width={150}
                          height={150}
                        />
                        <div className="img-upload-plus-icon">
                          <LuPlus />
                        </div>
                      </div>

                      <div className="text-center pt-4">
                        <h5 className="text-dark font-size-20">
                          Geogrge Martin
                        </h5>
                      </div>

                      <div className="p-3 pb-0">
                        <div className="progress" style={{ height: "1.2rem" }}>
                          <div
                            className="progress-bar progress-bar-color"
                            role="progressbar"
                            style={{ width: "75%"}}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            75%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-5">
                <div className="card border-0 h-100 rounded-4">
                  <div className="card-body">
                    <table cellPadding="15px" className="w-100 text-start">
                      <tbody>
                        <tr>
                          <td>
                            <label className="profile-side-headers">
                              <FaUserTie className="me-4 brand-color" />
                              Personal details
                            </label>
                          </td>
                          <td className="text-end">
                            <button type="button" className="btn btn-brand-color px-3 me-2">
                              <TiEdit /> Edit
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Date of Birth</td>
                          <td>
                            : <span className="ms-3">11/12/1990</span>
                          </td>
                        </tr>

                        <tr>
                          <td>Mail</td>
                          <td>
                            : <span className="ms-3">georgemartin@gmail.com</span>
                          </td>
                        </tr>

                        <tr>
                          <td>Phone</td>
                          <td>
                            : <span className="ms-3"> +1 297 456 895</span>
                          </td>
                        </tr>

                        <tr>
                          <td>Address</td>
                          <td>
                            : <span className="ms-3">San franciso, 22201</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card border-0 h-100 rounded-4">
                  <div className="card-body d-flex align-items-center justify-content-center">
                    <div
                      className="border rounded-5 py-5"
                      onClick={() =>
                        document.getElementById("input-file").click()
                      }
                    >
                      <input
                        type="file"
                        className="form-control"
                        id="input-file"
                        hidden
                        accept=".doc, .docx,.pdf, .txt"
                        onChange={handleResumeUpload}
                      />
                      <div className="text-center">
                        <div className="fs-2">
                          <LuUpload />
                        </div>
                        <p className="px-5 m-0 pt-5">Drag and drop or click here to upload resume</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="card mt-3 border-0 shadow-sm rounded-4">
              <div className="card-body">
                <div className="d-flex justify-content-between ms-1">
                  <label className="profile-side-headers">
                    <FaUserTie className="me-4 brand-color" />
                    About
                  </label>
                  <button type="button" className="btn btn-brand-color px-3 me-2">
                    <TiEdit /> Edit
                  </button>
                </div>
                <p className="ms-5 mt-3 profile-descriptions">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt a ipsum vitae assumenda iure sequi? Dicta saepe
                  asperiores blanditiis natus quo repellat, eius, soluta sed
                  architecto accusantium eum veritatis at voluptas rem odit
                  corrupti earum! Minima itaque sunt a quos culpa laudantium
                  totam reiciendis. Laudantium quae aspernatur quas cupiditate
                  debitis expedita placeat iusto esse culpa tenetur aliquam
                  recusandae quaerat repellendus fugiat voluptates laborum
                  dolores, facere eveniet impedit sit. Asperiores, distinctio?
                </p>
              </div>
            </div>
            <div className="card mt-3 border-0 shadow-sm rounded-4">
              <div className="card-body">
                <div className="d-flex justify-content-between ms-1">
                  <label className="profile-side-headers">
                    <PiBagFill className="me-4 brand-color" />
                    Experience
                  </label>
                  <button type="button" className="btn btn-brand-color px-3 me-2">
                    <MdAddBox /> Add
                  </button>
                </div>
                <div className="ms-5">
                  <div className="d-flex justify-content-between  mt-3">
                    <label className="profile-inner-headers">
                      UI Designer | Market Studios
                    </label>
                    <button
                      type="button"
                      className="btn btn-outline-warning text-dark me-2 px-3"
                    >
                      <TiEdit /> Edit
                    </button>
                  </div>

                  <label className="profile-descriptions">
                    <IoCalendarOutline /> Oct 2012 - Sep 2015
                    <span>
                      <IoLocationOutline /> Los Angels
                    </span>
                  </label>
                  <p className="mt-1 profile-descriptions">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor, recusandae iste quos placeat enim cum facere
                    accusantium nemo deserunt voluptas quisquam doloremque
                    officiis. Adipisci, odio!
                  </p>
                  <hr className="" />
                </div>
                <div className="ms-5">
                  <div className="d-flex justify-content-between  mt-3">
                    <label className="profile-inner-headers">
                      UI Designer | Market Studios
                    </label>
                    <button
                      type="button"
                      className="btn btn-outline-warning text-dark me-2 px-3"
                    >
                      <TiEdit /> Edit
                    </button>
                  </div>

                  <label className=" profile-descriptions">
                    <IoCalendarOutline /> Oct 2012 - Sep 2015
                    <span>
                      <IoLocationOutline /> Los Angels
                    </span>
                  </label>
                  <p className="mt-1 profile-descriptions">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor, recusandae iste quos placeat enim cum facere
                    accusantium nemo deserunt voluptas quisquam doloremque
                    officiis. Adipisci, odio!
                  </p>
                  <hr />
                </div>
                <div className="ms-5">
                  <div className="d-flex justify-content-between  mt-3">
                    <label className="profile-inner-headers">
                      UI Designer | Market Studios
                    </label>
                    <button
                      type="button"
                      className="btn btn-outline-warning text-dark me-2 px-3"
                    >
                      <TiEdit /> Edit
                    </button>
                  </div>

                  <label className=" profile-descriptions">
                    <IoCalendarOutline /> Oct 2012 - Sep 2015
                    <span>
                      <IoLocationOutline /> Los Angels
                    </span>
                  </label>
                  <p className="mt-1 profile-descriptions">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor, recusandae iste quos placeat enim cum facere
                    accusantium nemo deserunt voluptas quisquam doloremque
                    officiis. Adipisci, odio!
                  </p>
                  <hr className="" />
                </div>
                <div className="ms-5">
                  <div className="d-flex justify-content-between  mt-3">
                    <label className="profile-inner-headers">
                      UI Designer | Market Studios
                    </label>
                    <button
                      type="button"
                      className="btn btn-outline-warning text-dark me-2 px-3"
                    >
                      <TiEdit /> Edit
                    </button>
                  </div>

                  <label className=" profile-descriptions">
                    <IoCalendarOutline /> Oct 2012 - Sep 2015
                    <span>
                      <IoLocationOutline /> Los Angels
                    </span>
                  </label>
                  <p className="mt-1 profile-descriptions">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor, recusandae iste quos placeat enim cum facere
                    accusantium nemo deserunt voluptas quisquam doloremque
                    officiis. Adipisci, odio!
                  </p>
                </div>
              </div>
            </div>

            <div className="card mt-3 border-0 shadow-sm rounded-4">
              <div className="card-body">
                <div className="d-flex justify-content-between ms-1">
                  <label className="profile-side-headers">
                    <FaGraduationCap className="me-4 brand-color" />
                    Education
                  </label>
                  <button type="button" className="btn btn-brand-color px-3 me-2">
                    <MdAddBox /> Add
                  </button>
                </div>
                <div className="ms-5">
                  <div className="d-flex justify-content-between  mt-3">
                    <label className="profile-inner-headers">Los Angels</label>
                    <button
                      type="button"
                      className="btn btn-outline-warning text-dark me-2 px-3"
                    >
                      <TiEdit /> Edit
                    </button>
                  </div>

                  <label className="profile-descriptions">
                    <IoCalendarOutline /> Oct 2012 - Sep 2015
                    <div className="vr ms-3"></div>
                    <span>
                      <IoLocationOutline /> Los Angels
                    </span>
                  </label>
                  <p className="mt-1 profile-descriptions">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor, recusandae iste quos placeat enim cum facere
                    accusantium nemo deserunt voluptas quisquam doloremque
                    officiis. Adipisci, odio!
                  </p>
                  <hr />
                </div>
              </div>
            </div>

            <div className="card mt-3 border-0 shadow-sm rounded-4">
              <div className="card-body">
                <div className="d-flex  profile-side-headers">
                  <div className="flex-grow-1">
                    <label className="profile-side-headers">
                      <HiLightBulb className="me-4 brand-color" />
                      Skills
                    </label>
                  </div>
                  <div className="p-1">
                    <button type="button" className="btn btn-brand-color px-3 me-2">
                      <MdAddBox /> Add
                    </button>
                  </div>
                  <div className="p-1">
                    <button
                      type="button"
                      className="btn btn-outline-warning text-dark px-3 me-2"
                    >
                      <TiEdit /> Edit
                    </button>
                  </div>
                </div>

                <div className="row row-cols-auto ms-5 profile-descriptions">
                  <div className="col border rounded-2 p-2 fw-bold">
                    Python - <span className="fw-normal">Expert</span>
                  </div>
                  <div className="col border p-2 fw-bold ms-3">
                    Python - <span className="fw-normal">Expert</span>
                  </div>
                  <div className="col border p-2 fw-bold ms-3">
                    Python - <span className="fw-normal">Expert</span>
                  </div>
                  <div className="col border p-2 fw-bold ms-3">
                    Python - <span className="fw-normal">Expert</span>
                  </div>
                  <div className="col border p-2 fw-bold ms-3">
                    Python - <span className="fw-normal">Expert</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-3 border-0 shadow-sm rounded-4">
              <div className="card-body">
                <div className="d-flex justify-content-between ms-1">
                  <label className="profile-side-headers">
                    <MdAppRegistration className="me-4 brand-color" />
                    Preferences
                  </label>
                  <button type="button" className="btn btn-brand-color px-3 me-2">
                    <TiEdit /> Edit
                  </button>
                </div>
                <p className="ms-5 mt-3 profile-descriptions">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt a ipsum vitae assumenda iure sequi? Dicta saepe
                  asperiores blanditiis natus quo repellat, eius, soluta sed
                  architecto accusantium eum veritatis at voluptas rem odit
                  corrupti earum! Minima itaque sunt a quos culpa laudantium
                  totam reiciendis. Laudantium quae aspernatur quas cupiditate
                  debitis expedita placeat iusto esse culpa tenetur aliquam
                  recusandae quaerat repellendus fugiat voluptates laborum
                  dolores, facere eveniet impedit sit. Asperiores, distinctio?
                </p>
              </div>
            </div>

            <div className="row mt-3 ">
              <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card h-100 border-0 shadow-sm rounded-4">
                  <div className="card-body ">
                    <div className="d-flex justify-content-between ms-1">
                      <label className="profile-side-headers">
                        <FaUserTie className="me-4 brand-color" />
                        Video
                      </label>
                      <button
                        type="button"
                        className="btn btn-brand-color px-3 me-2"
                      >
                        <TiEdit /> Edit
                      </button>
                    </div>
                    <div className="p-3">
                      <VideoJS />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card h-100 border-0 shadow-sm rounded-4">
                  <div className="card-body">
                    <div className="d-flex  profile-side-headers">
                      <div className="flex-grow-1">
                        <label className="profile-side-headers">
                          <IoLanguage className="me-4 brand-color" />
                          Languages
                        </label>
                      </div>
                      <div className="p-1">
                        <button
                          type="button"
                          className="btn btn-brand-color px-3 me-2"
                        >
                          <MdAddBox /> Add
                        </button>
                      </div>
                      <div className="p-1">
                        <button
                          type="button"
                          className="btn btn-outline-warning text-dark px-3 me-2"
                        >
                          <TiEdit /> Edit
                        </button>
                      </div>
                    </div>
                    <div className="ms-5">
                      <label className="profile-inner-headers">French</label>
                      <p className="mt-1 profile-descriptions">
                        Professional Working Efficiency
                      </p>
                      <hr />
                      <label className="profile-inner-headers">French</label>
                      <p className="mt-1 profile-descriptions">
                        Professional Working Efficiency
                      </p>
                      <hr />
                      <label className="profile-inner-headers">French</label>
                      <p className="mt-1 profile-descriptions">
                        Professional Working Efficiency
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mt-3 border-0 shadow-sm rounded-4">
              <div className="card-body ">
                <div className="d-flex justify-content-between ms-1">
                  <label className="profile-side-headers">
                    <FaUserTie className="me-4 brand-color" />
                    Additional Informations
                  </label>
                  <button type="button" className="btn btn-brand-color px-3 me-2">
                    <TiEdit /> Edit
                  </button>
                </div>

                <div className="ms-5 mt-3">
                  <label className="profile-inner-headers">Certificates</label>
                  <ul className="mt-1 profile-descriptions">
                    <li>
                      Raleigh Jaycee of the Year 2008 (Junior Chamber of
                      Commence)
                    </li>
                    <li>
                      Wake County Schools Healthy Kids Advisory Board (2008 -
                      Present)
                    </li>
                  </ul>
                  <label className="profile-inner-headers">Certificates</label>
                  <ul className="mt-1 profile-descriptions">
                    <li>
                      Raleigh Jaycee of the Year 2008 (Junior Chamber of
                      Commence)
                    </li>
                    <li>
                      Wake County Schools Healthy Kids Advisory Board (2008 -
                      Present)
                    </li>
                  </ul>
                  <label className="profile-inner-headers">Certificates</label>
                  <ul className="mt-1 profile-descriptions">
                    <li>
                      Raleigh Jaycee of the Year 2008 (Junior Chamber of
                      Commence)
                    </li>
                    <li>
                      Wake County Schools Healthy Kids Advisory Board (2008 -
                      Present)
                    </li>
                  </ul>
                  <label className="profile-inner-headers">Certificates</label>
                  <ul className="mt-1 profile-descriptions">
                    <li>
                      Raleigh Jaycee of the Year 2008 (Junior Chamber of
                      Commence)
                    </li>
                    <li>
                      Wake County Schools Healthy Kids Advisory Board (2008 -
                      Present)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card mt-3 border-0 shadow-sm rounded-4">
              <div className="card-body">
                <div className="d-flex  profile-side-headers">
                  <div className="flex-grow-1">
                    <label className="profile-side-headers">
                      <IoShareSocialSharp className="me-4 brand-color" />
                      Social Links
                    </label>
                  </div>
                  <div className="p-1">
                    <button type="button" className="btn btn-brand-color px-3 me-2">
                      <MdAddBox /> Add
                    </button>
                  </div>
                  <div className="p-1">
                    <button
                      type="button"
                      className="btn btn-outline-warning text-dark px-3 me-2"
                    >
                      <TiEdit /> Edit
                    </button>
                  </div>
                </div>
                <div className="ms-5">
                  <label className="profile-inner-headers">Linkedin</label>
                  <p className="mt-1 profile-descriptions">
                    <a href="#">https://www.linkedin.com/54124626</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="card mt-3 border-0 shadow-sm rounded-4">
              <div className="card-body">
                <div className="d-flex justify-content-between ms-1">
                  <label className="profile-side-headers">
                    <RiNotificationBadgeFill className="me-4 brand-color" />
                    Expert Notes
                  </label>
                </div>
                <p className="ms-5 mt-3 profile-descriptions">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt a ipsum vitae assumenda iure sequi? Dicta saepe
                  asperiores blanditiis natus quo repellat, eius, soluta sed
                  architecto accusantium eum veritatis at voluptas rem odit
                  corrupti earum! Minima itaque sunt a quos culpa laudantium
                  totam reiciendis. Laudantium quae aspernatur quas cupiditate
                  debitis expedita placeat iusto esse culpa tenetur aliquam
                  recusandae quaerat repellendus fugiat voluptates laborum
                  dolores, facere eveniet impedit sit. Asperiores, distinctio?
                </p>
                <div className="form-check ms-5">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    I provide consent to 2nd Careers to market the expert notes
                    and my profile to potential employees
                  </label>
                </div>
                <button className="btn btn-brand-color mt-3 ms-5">
                  Approve
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
