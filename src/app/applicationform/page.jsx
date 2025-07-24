"use client";
import { Suspense } from "react";
import ApplicationFormWrapper from "../../components/ApplicationFormWrapper";

export default function ApplicationFormPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ApplicationFormWrapper />
    </Suspense>
  );
}
