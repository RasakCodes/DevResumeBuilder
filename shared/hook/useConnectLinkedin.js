"use client";
import { useEffect, useRef, useCallback, useState } from "react";
import axios from "axios";
import { getSearchParams } from "../lib/getSearchParams";
import { useRouter } from "next/navigation";
import Http from "../helper/htttp";
import WINDOW from "../lib/mockWindow";

function useConnectLinkedin() {
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);
  const hasFetchedUserData = useRef(false);
  const code = getSearchParams("code");

  const getUserData = useCallback(async () => {
    setisLoading(true);
    const endpoint = "/api/auth/connectLinkedin";
    try {
      const res = await Http.post({ body: { code }, endpoint: endpoint });
      const id = res?.message?._id;
      if (id) {
        router.push(`/Build/Cv?id=${id}`);
      }
    } catch (error) {
      console.error("error", error);
    } finally {
      setisLoading(false);
    }
  }, []);

  useEffect(() => {
    if (code && !hasFetchedUserData.current) {
      getUserData();
      hasFetchedUserData.current = true;
    }
  }, []);

  const initiateConnectLinkedin = useCallback(() => {
    WINDOW.localStorage.setItem("CvCurrentStep", 0);
    const clientId = process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID;
    const redirectUri = encodeURIComponent(
      process.env.NEXT_PUBLIC_REDIRECT_URL
    );
    const state = generateState();
    const scope = encodeURIComponent("openid profile email");

    const linkedInUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}`;
    window.location.href = linkedInUrl;
  }, []);

  function generateState() {
    const randomValues = window.crypto.getRandomValues(new Uint8Array(16));
    return Array.from(randomValues, (byte) =>
      `0${byte & 0xff}.toString(16)`.slice(-2)
    ).join("");
  }

  return { initiateConnectLinkedin, isLoading };
}

export default useConnectLinkedin;
