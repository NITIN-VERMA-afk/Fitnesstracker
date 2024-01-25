import { Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/system/Box";
import CopyrightIcon from "@mui/icons-material/Copyright";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";

const FooterProducts: String[] = ["food", "exercise", "apps", "premium"];

const FooterResourses: string[] = [
  "Blog",
  "Community",
  "Contact us",
  "Support Center",
];
const FooterCompany: String[] = ["About us", "Careers", "Press"];

const FooterLinks: string[] = [
  "CommunityGuidelines",
  "Feedback",
  "Terms",
  "Privacy",
  "API",
  "CookiesPreferences",
  "Ad Choices",
];

interface Logos {
  id: number;
  name: string;
  icons: JSX.Element;
}

const Logos: Logos[] = [
  { id: 1, name: "instagram", icons: <InstagramIcon /> },
  { id: 2, name: "youtube", icons: <YouTubeIcon /> },
  { id: 3, name: "twitter", icons: <XIcon /> },
  { id: 4, name: "facebook", icons: <FacebookIcon /> },
];

const Footer = () => {
  return (
    <>
      <Box className="mt-auto bg-coolGray-900 w-full h-4/6">
        <Box className="w-full md:w-3/5 mx-auto">
          <Box className="flex flex-col md:flex-row justify-between">
            <Box className="flex flex-col gap-3">
              <Typography variant="h3">FitQuest</Typography>
              <Typography variant="body1">
                Find your healthy, and your happy.
              </Typography>
              <Button className="w-full md:w-48" variant="outlined">
                Start today <ArrowForwardIcon />
              </Button>
            </Box>
            <Box className="flex justify-center items-center gap-6 mt-4 md:mt-0">
              <Box className="flex flex-col">
                <Typography variant="h5">Product</Typography>
                {FooterProducts.map((item,index) => (
                  <ul key={index}>
                    <li>{item.toUpperCase()}</li>
                  </ul>
                ))}
              </Box>
              <Box className="flex flex-col">
                <Typography variant="h5">Resources</Typography>
                {FooterResourses.map((item,index) => (
                  <ul key={index}>
                    <li>{item.toUpperCase()}</li>
                  </ul>
                ))}
              </Box>
              <Box className="flex flex-col">
                <Typography variant="h5">
                  Company
                </Typography>
                {FooterCompany.map((item,index) => (
                  <ul key={index}>
                    <li>{item.toUpperCase()}</li>
                  </ul>
                ))}
              </Box>
            </Box>
          </Box>

          <Box className="mt-4">
            <Typography className="flex gap-2 mt-2">
              <CopyrightIcon />
              2024Fitquest
              {FooterLinks.map((item) => (
                <ul>
                  <li>{item.toUpperCase()}</li>
                </ul>
              ))}
            </Typography>
            <Box className="flex justify-center gap-5 mt-2">
              {Logos.map((logo) => (
                <Box className="" key={logo.id}>
                  <Box className="text-center">{logo.icons} </Box>
                  {logo.name}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;

