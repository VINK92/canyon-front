import React from "react";
import { ContactMobile } from "@src/containers/ContactPage/mobile";
import { ContactsDesktop } from "@src/containers/ContactPage/desktop";
import { Breakpoint, useBreakpointCheck } from "@src/hooks/useBreakpointCheck";

export const ContactPage: React.FC = () => {
  const { isMobileDevice } = useBreakpointCheck(Breakpoint.Mobile);
  if (isMobileDevice) {
    return <ContactMobile />;
  } else {
    return <ContactsDesktop />;
  }
};
