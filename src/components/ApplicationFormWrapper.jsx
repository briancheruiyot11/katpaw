"use client";
import { useSearchParams } from "next/navigation";
import ApplicationForm from "./ApplicationForm";

export default function ApplicationFormWrapper() {
  const searchParams = useSearchParams();
  const catId = searchParams.get("catId");

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <ApplicationForm catId={catId} />
    </div>
  );
}
