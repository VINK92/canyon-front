import React from "react";
import { ContactMobile } from "@src/containers/ContactPage/mobile";
import { ContactsDesktop } from "@src/containers/ContactPage/desktop";

/**
 * there will be simple HOC that return MobilePage or DesktopPage
 * f.e.
 */

const isMobileDevice = () => true;

export const ContactPage: React.FC = () =>
  isMobileDevice() ? <ContactMobile /> : <ContactsDesktop />;
