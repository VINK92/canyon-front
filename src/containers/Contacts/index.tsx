import React from "react";
import { ContactsMobile } from "@src/containers/Contacts/mobile";
import { ContactsDesktop } from "@src/containers/Contacts/desktop";

/**
 * there will be simple HOC that return MobilePage or DesktopPage
 * f.e.
 */

const isMobileDevice = () => false;

export const HomePage: React.FC = () =>
  isMobileDevice() ? <ContactsMobile /> : <ContactsDesktop />;
