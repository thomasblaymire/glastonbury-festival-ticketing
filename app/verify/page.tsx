"use client";

import { useMutation } from "@tanstack/react-query";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { setAuthToken } from "@/lib/auth";
import { verifyUserEmail } from "@/lib/api";

const VerifyEmail = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams?.get("token");

  const [success, setSuccess] = useState(false);

  const mutation = useMutation((token: string) => verifyUserEmail(token), {
    onSuccess: (data) => {
      setAuthToken(data.token);
      setSuccess(true);
      router.replace("/dashboard");
    },
  });

  useEffect(() => {
    if (token) {
      mutation.mutate(token);
    }
  }, [token, mutation]);

  if (!token) {
    return <p>Invalid email verification token.</p>;
  }

  if (mutation.isLoading) {
    return <p>Loading...</p>;
  }

  if (success) {
    return <p>Email verified successfully! Redirecting to the dashboard...</p>;
  }

  if (mutation.isError) {
    return (
      <p>
        Email verification failed. Please try again or contact support.{" "}
        {mutation.error instanceof Error && mutation.error.message}
      </p>
    );
  }

  return null;
};

export default VerifyEmail;
