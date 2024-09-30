import { StyledAside, StyledIllustration } from "./AsideIllustration.style";
import illustrationMobile from "../../assets/images/illustration-sign-up-mobile.svg";
import illustrationDesktop from "../../assets/images/illustration-sign-up-desktop.svg";
import { useEffect, useState } from "react";

export const Aside = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyledAside>
      <StyledIllustration
        src={isMobile ? illustrationMobile : illustrationDesktop}
      />
    </StyledAside>
  );
};
