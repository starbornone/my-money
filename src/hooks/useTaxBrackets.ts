import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";

export const useTaxBrackets = (userId) => {
  const [taxBrackets, setTaxBrackets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTaxBrackets = async () => {
      if (!userId) return;

      const { data, error } = await supabase
        .from("tax_brackets")
        .select("*")
        .eq("user_id", userId);

      if (error) {
        console.error("Error fetching tax brackets:", error);
      } else {
        setTaxBrackets(data);
      }
      setIsLoading(false);
    };

    fetchTaxBrackets();
  }, [userId]);

  return { taxBrackets, isLoading };
};
