"use client";

import { useUserProfile } from "@/hooks/useUserProfile";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CategoryPage = () => {
  const { profile, isLoading } = useUserProfile();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      if (!profile) return;

      const { data, error } = await supabase
        .from("categories")
        .select("*")
        .eq("user_id", profile.id);

      if (error) {
        console.error("Error fetching categories:", error);
      } else {
        setCategories(data);
      }
      setLoading(false);
    };

    fetchCategories();
  }, [profile]);

  const handleDelete = async (id: number) => {
    const { error } = await supabase.from("categories").delete().eq("id", id);

    if (error) {
      console.error("Error deleting category:", error);
    } else {
      setCategories(categories.filter((category) => category.id !== id));
    }
  };

  if (isLoading || loading) {
    return <p className="text-gray-500">Loading...</p>;
  }

  return (
    <div>
      <button
        onClick={() => router.push("/dashboard/category/new")}
        className="mb-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Add New Category
      </button>

      {categories.length === 0 ? (
        <p className="text-gray-600">No categories found. Start adding some!</p>
      ) : (
        <table className="min-w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Limit</th>
              <th className="py-2 px-4 border-b">Color</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="border-b hover:bg-gray-100">
                <td className="py-2 px-4">{category.name}</td>
                <td className="py-2 px-4">{category.limit}</td>
                <td className="py-2 px-4">
                  <span
                    className="inline-block w-4 h-4 rounded-full"
                    style={{ backgroundColor: category.color }}
                  ></span>
                </td>
                <td className="py-2 px-4">
                  <button
                    onClick={() =>
                      router.push(`/dashboard/category/edit/${category.id}`)
                    }
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(category.id)}
                    className="text-red-600 hover:underline ml-4"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CategoryPage;
