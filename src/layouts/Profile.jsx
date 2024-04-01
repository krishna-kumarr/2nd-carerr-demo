import React from "react";
import { TiEdit } from "react-icons/ti";
import { FaCalendarAlt, FaLanguage, FaUser } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
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

import upload from "../assets/images/uploadResume.png";
import DashboardNavbar from "../components/Navbar/DashboardNavbar";
import { VideoJS } from "../components/VideoJS/Video";

const Profile = () => {
  const professionalPageDashboardMenu = ['Home', 'Learning', 'Community']

  return (
    <>
      <DashboardNavbar profileImage="https://github.com/mdo.png" profileName="George Martin" dashboadMenus={professionalPageDashboardMenu} />
      <section className="profile-bg">
        <div className="container-fluid mb-3">
          <div className="p-5">
            <div class="card border-0 shadow-sm rounded-4">
              <div class="card-body">
                <div class="row align-items-center">
                  <div class="col-md-3">
                    <div class="text-center border-end">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        class="img-fluid avatar-xxl rounded-circle"
                        alt=""
                        width={150}
                        height={150}
                      />
                      <h4 class="text-dark font-size-20 mt-3 mb-2">
                        Geogrge Martin
                      </h4>
                    </div>
                    <div className="p-3">
                      <div class="progress">
                        <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: "75%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="container overflow-hidden text-center">
                      <div class="row gy-5">
                        <div class="col-6">
                          <div class="p-3">
                            <span className="profile-header">Date of Birth</span> :
                            11/12/1990
                          </div>
                        </div>
                        <div class="col-6">
                          <div class="p-3">
                            <span className="profile-header">Mail</span> :
                            georgemartin@gmail.com
                          </div>
                        </div>
                        <div class="col-6">
                          <div class="p-3">
                            <span className="profile-header">Phone</span> : +1 297
                            456 895
                          </div>
                        </div>
                        <div class="col-6">
                          <div class="p-3">
                            <span className="profile-header">Address</span> : San
                            franciso, 22201
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div class="card">
                      <div class="card-body">
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <img
                              src={upload}
                              className="img-responsive"
                              width={80}
                              height={80}
                              alt="..."
                            />
                          </div>
                          <div class="flex-grow-1 ms-3 text-center">
                            <b>
                              Drag and Drop your Resume or <a href="#">Browse</a>
                            </b>
                            <label>Supported format pdf, docs</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div class="card mt-3 border-0 shadow-sm rounded-4">
              <div class="card-body">
                <div class="d-flex justify-content-between ms-1">
                  <label className="profile-side-headers">
                    <FaUserTie className="me-4 brand-color"/>
                    About
                  </label>
                  <button type="button" class="btn btn-brand-color px-3 me-2">
                    <TiEdit /> Edit
                  </button>
                </div>
                <p className="ms-5 mt-3 profile-descriptions">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                  a ipsum vitae assumenda iure sequi? Dicta saepe asperiores
                  blanditiis natus quo repellat, eius, soluta sed architecto
                  accusantium eum veritatis at voluptas rem odit corrupti earum!
                  Minima itaque sunt a quos culpa laudantium totam reiciendis.
                  Laudantium quae aspernatur quas cupiditate debitis expedita
                  placeat iusto esse culpa tenetur aliquam recusandae quaerat
                  repellendus fugiat voluptates laborum dolores, facere eveniet
                  impedit sit. Asperiores, distinctio?
                </p>
              </div>
            </div>
            <div class="card mt-3 border-0 shadow-sm rounded-4">
              <div class="card-body">
                <div class="d-flex justify-content-between ms-1">
                  <label className="profile-side-headers">
                    <PiBagFill className="me-4 brand-color" />
                    Experience
                  </label>
                  <button type="button" class="btn btn-brand-color px-3 me-2">
                    <MdAddBox /> Add
                  </button>
                </div>
                <div className="ms-5">
                  <div class="d-flex justify-content-between  mt-3">
                    <label className="profile-inner-headers">
                      UI Designer | Market Studios
                    </label>
                    <button
                      type="button"
                      class="btn btn-outline-warning text-dark me-2 px-3"
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                    recusandae iste quos placeat enim cum facere accusantium nemo
                    deserunt voluptas quisquam doloremque officiis. Adipisci, odio!
                  </p>
                  <hr className="" />
                </div>
                <div className="ms-5">
                  <div class="d-flex justify-content-between  mt-3">
                    <label className="profile-inner-headers">
                      UI Designer | Market Studios
                    </label>
                    <button
                      type="button"
                      class="btn btn-outline-warning text-dark me-2 px-3"
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                    recusandae iste quos placeat enim cum facere accusantium nemo
                    deserunt voluptas quisquam doloremque officiis. Adipisci, odio!
                  </p>
                  <hr />
                </div>
                <div className="ms-5">
                  <div class="d-flex justify-content-between  mt-3">
                    <label className="profile-inner-headers">
                      UI Designer | Market Studios
                    </label>
                    <button
                      type="button"
                      class="btn btn-outline-warning text-dark me-2 px-3"
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                    recusandae iste quos placeat enim cum facere accusantium nemo
                    deserunt voluptas quisquam doloremque officiis. Adipisci, odio!
                  </p>
                  <hr className="" />
                </div>
                <div className="ms-5">
                  <div class="d-flex justify-content-between  mt-3">
                    <label className="profile-inner-headers">
                      UI Designer | Market Studios
                    </label>
                    <button
                      type="button"
                      class="btn btn-outline-warning text-dark me-2 px-3"
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                    recusandae iste quos placeat enim cum facere accusantium nemo
                    deserunt voluptas quisquam doloremque officiis. Adipisci, odio!
                  </p>
                </div>
              </div>
            </div>

            <div class="card mt-3 border-0 shadow-sm rounded-4">
              <div class="card-body">
                <div class="d-flex justify-content-between ms-1">
                  <label className="profile-side-headers">
                    <FaGraduationCap className="me-4 brand-color" />
                    Education
                  </label>
                  <button type="button" class="btn btn-brand-color px-3 me-2">
                    <MdAddBox /> Add
                  </button>
                </div>
                <div className="ms-5">
                  <div class="d-flex justify-content-between  mt-3">
                    <label className="profile-inner-headers">Los Angels</label>
                    <button
                      type="button"
                      class="btn btn-outline-warning text-dark me-2 px-3"
                    >
                      <TiEdit /> Edit
                    </button>
                  </div>

                  <label className="profile-descriptions">
                    <IoCalendarOutline /> Oct 2012 - Sep 2015
                    <div class="vr ms-3"></div>
                    <span>
                      <IoLocationOutline /> Los Angels
                    </span>
                  </label>
                  <p className="mt-1 profile-descriptions">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                    recusandae iste quos placeat enim cum facere accusantium nemo
                    deserunt voluptas quisquam doloremque officiis. Adipisci, odio!
                  </p>
                  <hr />
                </div>
              </div>
            </div>

            <div class="card mt-3 border-0 shadow-sm rounded-4">
              <div class="card-body">
                <div class="d-flex  profile-side-headers">
                  <div class="flex-grow-1">
                    <label className="profile-side-headers">
                      <HiLightBulb className="me-4 brand-color" />
                      Skills
                    </label>
                  </div>
                  <div class="p-1">
                    <button type="button" class="btn btn-brand-color px-3 me-2">
                      <MdAddBox /> Add
                    </button>
                  </div>
                  <div class="p-1">
                    <button
                      type="button"
                      class="btn btn-outline-warning text-dark px-3 me-2"
                    >
                      <TiEdit /> Edit
                    </button>
                  </div>
                </div>

                <div class="row row-cols-auto ms-5 profile-descriptions">
                  <div class="col border rounded-2 p-2 fw-bold">
                    Python - <span className="fw-normal">Expert</span>
                  </div>
                  <div class="col border p-2 fw-bold ms-3">
                    Python - <span className="fw-normal">Expert</span>
                  </div>
                  <div class="col border p-2 fw-bold ms-3">
                    Python - <span className="fw-normal">Expert</span>
                  </div>
                  <div class="col border p-2 fw-bold ms-3">
                    Python - <span className="fw-normal">Expert</span>
                  </div>
                  <div class="col border p-2 fw-bold ms-3">
                    Python - <span className="fw-normal">Expert</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mt-3 border-0 shadow-sm rounded-4">
              <div class="card-body">
                <div class="d-flex justify-content-between ms-1">
                  <label className="profile-side-headers">
                    <MdAppRegistration className="me-4 brand-color" />
                    Preferences
                  </label>
                  <button type="button" class="btn btn-brand-color px-3 me-2">
                    <TiEdit /> Edit
                  </button>
                </div>
                <p className="ms-5 mt-3 profile-descriptions">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                  a ipsum vitae assumenda iure sequi? Dicta saepe asperiores
                  blanditiis natus quo repellat, eius, soluta sed architecto
                  accusantium eum veritatis at voluptas rem odit corrupti earum!
                  Minima itaque sunt a quos culpa laudantium totam reiciendis.
                  Laudantium quae aspernatur quas cupiditate debitis expedita
                  placeat iusto esse culpa tenetur aliquam recusandae quaerat
                  repellendus fugiat voluptates laborum dolores, facere eveniet
                  impedit sit. Asperiores, distinctio?
                </p>
              </div>
            </div>

            <div class="row mt-3 ">
              <div class="col-sm-6 mb-3 mb-sm-0">
                <div class="card h-100 border-0 shadow-sm rounded-4">
                  <div class="card-body ">
                    <div class="d-flex justify-content-between ms-1">
                      <label className="profile-side-headers">
                        <FaUserTie className="me-4 brand-color" />
                        Video
                      </label>
                      <button type="button" class="btn btn-brand-color px-3 me-2">
                        <TiEdit /> Edit
                      </button>
                    </div>
                    <div className="p-3">
                      <VideoJS />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="card h-100 border-0 shadow-sm rounded-4">
                  <div class="card-body">
                    <div class="d-flex  profile-side-headers">
                      <div class="flex-grow-1">
                        <label className="profile-side-headers">
                          <IoLanguage className="me-4 brand-color" />
                          Languages
                        </label>
                      </div>
                      <div class="p-1">
                        <button type="button" class="btn btn-brand-color px-3 me-2">
                          <MdAddBox /> Add
                        </button>
                      </div>
                      <div class="p-1">
                        <button
                          type="button"
                          class="btn btn-outline-warning text-dark px-3 me-2"
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

            <div class="card mt-3 border-0 shadow-sm rounded-4">
              <div class="card-body ">
                <div class="d-flex justify-content-between ms-1">
                  <label className="profile-side-headers">
                    <FaUserTie className="me-4 brand-color" />
                    Additional Informations
                  </label>
                  <button type="button" class="btn btn-brand-color px-3 me-2">
                    <TiEdit /> Edit
                  </button>
                </div>

                <div className="ms-5 mt-3">
                  <label className="profile-inner-headers">Certificates</label>
                  <ul className="mt-1 profile-descriptions">
                    <li>
                      Raleigh Jaycee of the Year 2008 (Junior Chamber of Commence)
                    </li>
                    <li>
                      Wake County Schools Healthy Kids Advisory Board (2008 -
                      Present)
                    </li>
                  </ul>
                  <label className="profile-inner-headers">Certificates</label>
                  <ul className="mt-1 profile-descriptions">
                    <li>
                      Raleigh Jaycee of the Year 2008 (Junior Chamber of Commence)
                    </li>
                    <li>
                      Wake County Schools Healthy Kids Advisory Board (2008 -
                      Present)
                    </li>
                  </ul>
                  <label className="profile-inner-headers">Certificates</label>
                  <ul className="mt-1 profile-descriptions">
                    <li>
                      Raleigh Jaycee of the Year 2008 (Junior Chamber of Commence)
                    </li>
                    <li>
                      Wake County Schools Healthy Kids Advisory Board (2008 -
                      Present)
                    </li>
                  </ul>
                  <label className="profile-inner-headers">Certificates</label>
                  <ul className="mt-1 profile-descriptions">
                    <li>
                      Raleigh Jaycee of the Year 2008 (Junior Chamber of Commence)
                    </li>
                    <li>
                      Wake County Schools Healthy Kids Advisory Board (2008 -
                      Present)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card mt-3 border-0 shadow-sm rounded-4">
              <div class="card-body">
                <div class="d-flex  profile-side-headers">
                  <div class="flex-grow-1">
                    <label className="profile-side-headers">
                      <IoShareSocialSharp className="me-4 brand-color" />
                      Social Links
                    </label>
                  </div>
                  <div class="p-1">
                    <button type="button" class="btn btn-brand-color px-3 me-2">
                      <MdAddBox /> Add
                    </button>
                  </div>
                  <div class="p-1">
                    <button
                      type="button"
                      class="btn btn-outline-warning text-dark px-3 me-2"
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
            <div class="card mt-3 border-0 shadow-sm rounded-4">
              <div class="card-body">
                <div class="d-flex justify-content-between ms-1">
                  <label className="profile-side-headers">
                    <RiNotificationBadgeFill className="me-4 brand-color" />
                    Expert Notes
                  </label>
                </div>
                <p className="ms-5 mt-3 profile-descriptions">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                  a ipsum vitae assumenda iure sequi? Dicta saepe asperiores
                  blanditiis natus quo repellat, eius, soluta sed architecto
                  accusantium eum veritatis at voluptas rem odit corrupti earum!
                  Minima itaque sunt a quos culpa laudantium totam reiciendis.
                  Laudantium quae aspernatur quas cupiditate debitis expedita
                  placeat iusto esse culpa tenetur aliquam recusandae quaerat
                  repellendus fugiat voluptates laborum dolores, facere eveniet
                  impedit sit. Asperiores, distinctio?
                </p>
                <div class="form-check ms-5">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    I provide consent to 2nd Careers to market the expert notes and
                    my profile to potential employees
                  </label>
                </div>
                <button className="btn btn-brand-color mt-3 ms-5">Approve</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
