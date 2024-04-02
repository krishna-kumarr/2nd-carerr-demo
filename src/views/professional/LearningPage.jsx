import React from "react";
import CardWithImage from "../../components/Cards/CardWithImage";
import { FaDownload } from "react-icons/fa";

import Image from '../../utils/images.js'
import DashboardNavbar from "../../components/Navbar/DashboardNavbar.jsx";


const LearningPage = () => {
    const professionalPageDashboardMenu = ['Home', 'Learning', 'Community']
    return (
        <>
            <DashboardNavbar profileImage="https://github.com/mdo.png" profileName="George Martin" dashboadMenus={professionalPageDashboardMenu} />

            <div className="learning-page-height learning-page-bg overflow-scroll">
                <div className="container pt-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4 mt-0">
                        <div className="col">
                            <CardWithImage cardImage={Image.learningImage}
                                cardTitle="Learning"
                                cardTitleStyle="learningTitle"
                                imageClassName="rounded-4 img-fluid learning-img-height"
                                cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, eveniet. Asperiores itaque quisquam exercitationem praesentium laboriosam culpa, ab beatae facere esse. Dolores dicta tempore"
                                carTextClassName="role-selection-description"
                                cardParaTestId="professionalTestId"
                                cardButtonTestId="cardButton"
                                role="learningAndCommunity"
                                firstButton_Name="Download"
                                secondButton_Name="Learn"
                                icon={<FaDownload className="me-2" />}
                                firstCardColor="outline-secondary"
                                secondCardColor="brand-color"
                                
                            />
                        </div>
                        <div className="modal fade col-md-4" id="learnMore" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="staticBackdropLabel">Learn More</h5>    
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam omnis animi at eveniet perferendis fugit voluptatum enim et. Sapiente nostrum eius velit porro accusamus culpa eligendi corrupti eveniet nulla fugiat aliquid, a quas soluta odio suscipit blanditiis officia. Assumenda ullam nihil incidunt a dolores recusandae, voluptate culpa ipsam. Minus, aspernatur!
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <CardWithImage cardImage={Image.learningTwo}
                                cardTitle="Learning"
                                cardTitleStyle="learningTitle"
                                imageClassName="rounded-4 img-fluid learning-img-height"
                                cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, eveniet. Asperiores itaque quisquam exercitationem praesentium laboriosam culpa, ab beatae facere esse. Dolores dicta tempore "

                                carTextClassName="role-selection-description"
                                cardParaTestId="professionalTestId"
                                cardButtonTestId="cardButton"
                                role="learningAndCommunity"
                                firstButton_Name="Download"
                                secondButton_Name="Learn"
                                icon={<FaDownload className="me-2" />}
                                firstCardColor="outline-secondary"
                                secondCardColor="brand-color learning"
                            />

                        </div>

                        <div className="col">
                            <CardWithImage cardImage={Image.learningThree}
                                cardTitle="Learning"
                                cardTitleStyle="learningTitle"
                                imageClassName="rounded-4 img-fluid learning-img-height"
                                cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, eveniet. Asperiores itaque quisquam exercitationem praesentium laboriosam culpa, ab beatae facere esse. Dolores dicta tempore"
                                carTextClassName="role-selection-description"
                                cardParaTestId="professionalTestId"
                                cardButtonTestId="cardButton"
                                role="learningAndCommunity"
                                firstButton_Name="Download"
                                secondButton_Name="Learn"
                                icon={<FaDownload className="me-2" />}
                                firstCardColor="outline-secondary"
                                secondCardColor="brand-color" />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LearningPage;