"use client";

import { supabase } from "@/lib/supabaseClient";
import { ProfileData } from "@/types";
import { useEffect, useState } from "react";

export default function ProfileInfo() {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchProfile = async () => {
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (sessionError) {
        setError("Failed to fetch session.");
        setLoading(false);
        return;
      }

      if (!session?.user) {
        setError("User not authenticated.");
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from<ProfileData>("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single();

      if (error) {
        setError("Failed to fetch profile.");
        setLoading(false);
        return;
      }

      setProfile(data);
      setLoading(false);
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <p>Loading profile...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!profile) {
    return <p>No profile data found.</p>;
  }

  return (
    <div>
      <p>
        <strong>Name:</strong> {profile.name}
      </p>
      <p>
        <strong>Country:</strong> {profile.country}
      </p>
      <p>
        <strong>Preferred Currency:</strong> {profile.preferred_currency}
      </p>
      <p>
        <strong>Time Zone:</strong> {profile.time_zone}
      </p>
      <p>
        <strong>Email Notifications:</strong>{" "}
        {profile.email_notifications ? "Enabled" : "Disabled"}
      </p>
      <p>
        <strong>SMS Notifications:</strong>{" "}
        {profile.sms_notifications ? "Enabled" : "Disabled"}
      </p>
      <p>
        <strong>Push Notifications:</strong>{" "}
        {profile.push_notifications ? "Enabled" : "Disabled"}
      </p>
      <p>
        <strong>Allow Tracking:</strong>{" "}
        {profile.allow_tracking_age_gender_marital ? "Yes" : "No"}
      </p>
      {/* Display additional fields as needed */}
    </div>
  );
}
