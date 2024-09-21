import { supabase } from "@/lib/supabaseClient";
import { ProfileData } from "@/types";
import { useEffect, useState } from "react";

export const useUserProfile = () => {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const { data, error: sessionError } = await supabase.auth.getSession();

      if (sessionError) {
        console.error("Error fetching session:", sessionError);
        setError("Failed to fetch session");
        setIsLoading(false);
        return;
      }

      if (data.session) {
        const userId = data.session.user.id;
        const { data: profileData, error: profileError } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", userId)
          .single();

        if (profileError) {
          console.error("Error fetching profile:", profileError);
          setError("Failed to fetch profile");
        } else {
          setProfile(profileData);
        }
      }
      setIsLoading(false);
    };

    fetchUserProfile();
  }, []);

  return { profile, isLoading, error };
};
