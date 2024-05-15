"use client";
import React, { useState } from "react";
import {Card, CardBody} from "@nextui-org/react";
import HomeTextAnimation from "./home-text-animation";
export default function HomeSection3() {
  return (
    <div>
      <Card className = "bg-gray-100 min-h-[45rem]">
        <CardBody>
          <HomeTextAnimation />
        </CardBody>
      </Card>
    </div>
  );
}
