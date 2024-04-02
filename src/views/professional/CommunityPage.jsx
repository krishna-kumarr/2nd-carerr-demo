import React from "react";
import DashboardNavbar from "../../components/Navbar/DashboardNavbar";
import CardWithImage from "../../components/Cards/CardWithImage";
import Image from '../../utils/images.js'

const CommunityPage = () => {
    const professionalPageDashboardMenu = ['Home', 'Learning', 'Community']

    return (
        <>
            <DashboardNavbar profileImage="https://github.com/mdo.png" profileName="George Martin" dashboadMenus={professionalPageDashboardMenu} />

            <div className="community-page-height community-page-bg overflow-scroll">
                <div className="container pt-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4 mt-0">
                        <div className="col">
                            <CardWithImage cardImage={"https://coworkingers.com/wp-content/uploads/2020/06/awfis-1.jpg"}
                                cardTitle="Community"
                                cardTitleStyle="learningTitle"
                                imageClassName="rounded-4 community-img-height"
                                cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, eveniet. Asperiores itaque quisquam exercitationem praesentium laboriosam culpa, ab beatae facere esse. Dolores dicta tempore"
                                carTextClassName="role-selection-description"
                                cardParaTestId="professionalTestId"
                                cardButtonTestId="cardButton"
                                role="learningAndCommunity"
                                firstButton_Name="Join Community"
                                secondButton_Name="Share"
                                firstCardColor="brand-color"
                                secondCardColor="outline-secondary" />
                        </div>
                        <div className="col">
                            <CardWithImage cardImage={"https://coworkingers.com/wp-content/uploads/2020/06/awfis-1.jpg"}
                                cardTitle="Community"
                                cardTitleStyle="learningTitle"
                                imageClassName="rounded-4 community-img-height"
                                cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, eveniet. Asperiores itaque quisquam exercitationem praesentium laboriosam culpa, ab beatae facere esse. Dolores dicta tempore"
                                carTextClassName="role-selection-description"
                                cardParaTestId="professionalTestId"
                                cardButtonTestId="cardButton"
                                role="learningAndCommunity"
                                firstButton_Name="Join Community"
                                secondButton_Name="Share"
                                firstCardColor="brand-color"
                                secondCardColor="outline-secondary" />
                        </div>
                        <div className="col">
                            <CardWithImage cardImage={"https://coworkingers.com/wp-content/uploads/2020/06/awfis-1.jpg"}
                                cardTitle="Community"
                                cardTitleStyle="learningTitle"
                                imageClassName="rounded-4 community-img-height"
                                cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, eveniet. Asperiores itaque quisquam exercitationem praesentium laboriosam culpa, ab beatae facere esse. Dolores dicta tempore"
                                carTextClassName="role-selection-description"
                                cardParaTestId="professionalTestId"
                                cardButtonTestId="cardButton"
                                role="learningAndCommunity"
                                firstButton_Name="Join Community"
                                secondButton_Name="Share"
                                firstCardColor="brand-color"
                                secondCardColor="outline-secondary"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommunityPage