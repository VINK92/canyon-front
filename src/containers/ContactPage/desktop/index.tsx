import React from "react";
import { BasicLayout } from "@src/components/shared/Layout/BasicLayout";
import { ContactContent } from "@src/components/ContactContent/desktop";

export const ContactsDesktop: React.FC = () => {
  return (
    <BasicLayout isShowMenu={true}>
      <ContactContent />
    </BasicLayout>
  );
};
