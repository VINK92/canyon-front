"use client";
import React from "react";
import dynamic from "next/dynamic";
import { BasicLayout } from "@src/components/shared/Layout/BasicLayout";
import { HomeContent } from "@src/components/HomeContent/desktop";

// const DynamicHomeContentWithNoSSR = dynamic(
//   () => import("../../../components/HomeContent/desktop") as any,
//   {
//     ssr: false,
//   }
// );

export const HomeDesktop: React.FC = () => {
  return (
    <BasicLayout isShowMenu={true} alignLeft>
      <HomeContent />
    </BasicLayout>
  );
};
