"use client";

import { useUserProfile } from "@/hooks/useUserProfile";
import IncomeTable from "./IncomeTable";

const IncomePage = () => {
  const { profile, isLoading } = useUserProfile();

  if (isLoading) {
    return <p className="text-gray-500">Loading...</p>;
  }

  return (
    <div>
      <IncomeTable userId={profile.id} />
    </div>
  );
};

export default IncomePage;
