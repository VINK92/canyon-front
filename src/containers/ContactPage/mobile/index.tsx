import React from "react";
import { MobileLayout } from "@src/components/shared/Layout/MobileLayout";
import { ContactContent } from "@src/components/ContactContent/mobile";

export const ContactMobile: React.FC = () => {
  return (
    <MobileLayout>
      <ContactContent />
    </MobileLayout>
  );
};
