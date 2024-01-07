import i18n from "@src/localizations";
import { StaticImageData } from "next/image";
import active1 from "@src/assets/images/projects/desktop/color/image-1.png";
import inactive1 from "@src/assets/images/projects/desktop/shadowed/image-1.png";
import active2 from "@src/assets/images/projects/desktop/color/image-2.png";
import inactive2 from "@src/assets/images/projects/desktop/shadowed/image-2.png";
import active3 from "@src/assets/images/projects/desktop/color/image-3.png";
import inactive3 from "@src/assets/images/projects/desktop/shadowed/image-3.png";
import active4 from "@src/assets/images/projects/desktop/color/image-4.png";
import inactive4 from "@src/assets/images/projects/desktop/shadowed/image-4.png";
import active5 from "@src/assets/images/projects/desktop/color/image-5.png";
import inactive5 from "@src/assets/images/projects/desktop/shadowed/image-5.png";
import active6 from "@src/assets/images/projects/desktop/color/image-6.png";
import inactive6 from "@src/assets/images/projects/desktop/shadowed/image-6.png";
import active7 from "@src/assets/images/projects/desktop/color/image-7.png";
import inactive7 from "@src/assets/images/projects/desktop/shadowed/image-7.png";
import active8 from "@src/assets/images/projects/desktop/color/image-8.png";
import inactive8 from "@src/assets/images/projects/desktop/shadowed/image-8.png";
import active9 from "@src/assets/images/projects/desktop/color/image-9.png";
import inactive9 from "@src/assets/images/projects/desktop/shadowed/image-9.png";

export interface IProject {
  id: number;
  projectTitle: string;
  imageActive: StaticImageData;
  imageInactive: StaticImageData;
  alt: string;
}

export const projects: IProject[] = [
  {
    id: 1,
    projectTitle: i18n.t("homePage.projectsTitles.project1"),
    imageActive: active1,
    imageInactive: inactive1,
    alt: i18n.t("homePage.projectsTitles.project1"),
  },
  {
    id: 2,
    projectTitle: i18n.t("homePage.projectsTitles.project2"),
    imageActive: active2,
    imageInactive: inactive2,
    alt: i18n.t("homePage.projectsTitles.project2"),
  },
  {
    id: 3,
    projectTitle: i18n.t("homePage.projectsTitles.project3"),
    imageActive: active3,
    imageInactive: inactive3,
    alt: i18n.t("homePage.projectsTitles.project3"),
  },
  {
    id: 4,
    projectTitle: i18n.t("homePage.projectsTitles.project4"),
    imageActive: active4,
    imageInactive: inactive4,
    alt: i18n.t("homePage.projectsTitles.project4"),
  },
  {
    id: 5,
    projectTitle: i18n.t("homePage.projectsTitles.project5"),
    imageActive: active5,
    imageInactive: inactive5,
    alt: i18n.t("homePage.projectsTitles.project5"),
  },
  {
    id: 6,
    projectTitle: i18n.t("homePage.projectsTitles.project6"),
    imageActive: active6,
    imageInactive: inactive6,
    alt: i18n.t("homePage.projectsTitles.project6"),
  },
  {
    id: 7,
    projectTitle: i18n.t("homePage.projectsTitles.project7"),
    imageActive: active7,
    imageInactive: inactive7,
    alt: i18n.t("homePage.projectsTitles.project7"),
  },
  {
    id: 8,
    projectTitle: i18n.t("homePage.projectsTitles.project8"),
    imageActive: active8,
    imageInactive: inactive8,
    alt: i18n.t("homePage.projectsTitles.project8"),
  },
  {
    id: 9,
    projectTitle: i18n.t("homePage.projectsTitles.project9"),
    imageActive: active9,
    imageInactive: inactive9,
    alt: i18n.t("homePage.projectsTitles.project9"),
  },
];
