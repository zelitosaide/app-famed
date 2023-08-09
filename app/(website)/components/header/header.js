import "./header.css";
import NextLink from "next/link";

// import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { getHeaderLinks } from "@/app/api/server";
import LeftHeader from "./left-header";

export default async function Header() {
  const links = await getHeaderLinks();
  
  return (
    <header style={{ backgroundColor: "rgb(var(--accent-rgb))" }} className="pl-28 pr-28 flex justify-between">
      <div>
        <LeftHeader links={links} />
      </div>

      {/* <div className="flex gap-2 items-center pr-3">
        <NextLink className="SocialNetwork p-1.5 rounded" target="_blank" href="https://www.instagram.com/faculdademedicinauem/">
          <InstagramLogoIcon />
        </NextLink>
        <NextLink className="SocialNetwork p-1.5 rounded" target="_blank" href="https://www.linkedin.com/in/faculdade-de-medicina-uem">
          <LinkedInLogoIcon />
        </NextLink>
        <NextLink className="SocialNetwork p-1.5 rounded" target="_blank" href="https://twitter.com/FamedUEM">
          <TwitterLogoIcon />
        </NextLink>
      </div> */}
    </header>
  );
}