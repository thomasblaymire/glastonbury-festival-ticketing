import { useMutation } from "@tanstack/react-query";

const API_URL = "/api/auth/signup";

export function useSignup() {
  const signUpMutation = useMutation(async (data) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData?.message || "Error signing up";
        throw new Error(errorMessage);
      }

      const responseData = await response.json();

      if (!responseData || typeof responseData !== "object") {
        throw new Error("Invalid response data");
      }

      return responseData;
    } catch (error) {
      console.error("Error in useSignup:", error);
      throw error;
    }
  });

  return signUpMutation;
}
