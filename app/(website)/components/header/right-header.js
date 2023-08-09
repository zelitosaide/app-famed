import Link from "next/link";
import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export default function RightHeader({ socialNetworks }) {
  return socialNetworks.map(function(socialNetwork) {
    const icon = socialNetwork.name === "InstagramLogoIcon" 
      ? <InstagramLogoIcon /> 
      : socialNetwork.name === "LinkedInLogoIcon"
        ? <LinkedInLogoIcon /> : <TwitterLogoIcon />;

    return (
      <Link 
        className="SocialNetwork p-1.5 rounded" 
        target="_blank" 
        href={socialNetwork.href}
        key={socialNetwork.id}
      >
        {icon}
      </Link>
    );
  });
}