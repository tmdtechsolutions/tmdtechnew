import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";
import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block font-bold text-primary-500`;
const Phone = tw.span`text-sm mt-0 block font-bold text-primary-500`;

export default () => {
  return (
    <AnimationRevealPage>
      {/* <Header /> */}
      <Hero showHeader={true} />

      <ContactUsForm />
      <ContactDetails
        cards={[
          {
            title: "Principal Office/HQ",
            description: (
              <>
                <Address>
                  <AddressLine>101 century 21 drive</AddressLine>
                  <AddressLine>Jacksonville, FL 32216</AddressLine>
                </Address>

                <Email>
                  <strong>Tel: </strong>908-342-5031
                </Email>
                <Phone>
                  <strong>Fax: </strong>+1 (203) 991-6988
                </Phone>
              </>
            ),
          },
          {
            title: "Development Center:",
            description: (
              <>
                <Address>
                  <AddressLine>India Office & Development Center:</AddressLine>
                  <AddressLine>Relief Road</AddressLine>
                  <AddressLine>Ahmedabad Gujarat 380001 India</AddressLine>
                </Address>
                <Email>
                  <strong>Tel: </strong>+91-9904277766
                </Email>
              </>
            ),
          },
          {
            title: "Careers",
            description: (
              <>
                <Email>career@techwizardinc.com</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            ),
          },
          {
            title: "Sales",
            description: (
              <>
                <Email>sales@techwizardinc.com</Email>
              </>
            ),
          },
          {
            title: "HR",
            description: (
              <>
                <Email>hr@techwizardinc.com</Email>
              </>
            ),
          },
          {
            title: "Accounts Payable/Account Receivables",
            description: (
              <>
                <Email>accounts@techwizardinc.com</Email>
              </>
            ),
          },
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
