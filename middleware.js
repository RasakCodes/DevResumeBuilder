export { default } from "next-auth/middleware";
export const config = {
  matcher: ["/dashboard/:path*", "/Build/:path*", "/GetStarted/:path*"],
};
