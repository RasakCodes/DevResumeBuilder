import { Lato } from "next/font/google";
import "./globals.css";
import MainHeader from "./(LandingPage)/shared/mainHeader";
import Footer from "./(LandingPage)/shared/Footer";
import { Toaster } from "@/components/ui/toaster";
import AuthProvider from "./(LandingPage)/shared/AuthProvider";
import Providers from "@/shared/Proivder";
import NextTopLoader from "nextjs-toploader";
import "react-quill/dist/quill.snow.css";

// const inter = Inter({ subsets: ["latin"] });
const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  alternates: {
    canonical: "https://dev-resume-lovat.vercel.app/",
    languages: {
      "en-US": "/en-US",
    },
  },
  description:
    "Build professional and compelling resumes and cover letters with DevResume. Start your journey towards your dream tech job today.",

  icons: ["/DRfavicon.png"],
  keywords:
    "DevResume, resume builder, cover letter, professional resume, tech career, resume templates, cover letter templates",
  metadataBase: new URL("https://devresume.io"),
  openGraph: {
    countryName: "US",
    description:
      "Build professional and compelling resumes and cover letters with DevResume. Start your journey towards your dream tech job today.",
    images: [
      {
        height: 600,
        url: "https://link-to-an-image-representing-your-site.jpg",
        width: 800,
      },
    ],
    siteName: "DevResume",
    title: "Build Your Professional Tech Resume | DevResume",
    url: "https://dev-resume-lovat.vercel.app/",
  },
  title: "DevResume - Professional Resume Builder for Tech Careers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <div>
          <NextTopLoader
            key="next-loading"
            // shadow="0 0 10px #f9e547, 0 0 5px rgba(0, 0, 0, 0.6)"
            color="#f9e547"
            options={{ showSpinner: false }}
            showSpinner={false}
          />

          <Providers>
            <AuthProvider>
              <MainHeader />
              <Toaster />
              {children}
              <Footer />
            </AuthProvider>
          </Providers>
        </div>
      </body>
    </html>
  );
}
