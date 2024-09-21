"use client";

import { ExpensesChart, IncomeChart } from "@/features";
import { supabase } from "@/lib/supabaseClient";
import { ProfileData } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const router = useRouter();
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (sessionError) {
        console.error("Error fetching session:", sessionError);
        router.push("/auth/login");
        return;
      }

      if (!session?.user) {
        router.push("/auth/login");
        return;
      }

      const { data, error } = await supabase
        .from<ProfileData>("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single();

      if (error) {
        console.error("Error fetching profile:", error);
        setProfile(null);
      } else {
        setProfile(data);
      }

      setIsLoading(false);
    };

    fetchProfile();
  }, [router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <p>Loading your dashboard...</p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex items-center justify-center">
        <p>Failed to load profile.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-2xl mb-4">Hello, {profile.name}!</h2>

      <p>Your dashboard is set up and ready to use.</p>

      <div className="grid grid-cols-2 gap-8">
        <IncomeChart />
        <ExpensesChart />
      </div>
    </div>
  );
}
