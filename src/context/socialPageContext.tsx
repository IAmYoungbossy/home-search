import { createContext, useState } from "react";

export interface SocialPageContextProps {
  showSignInPage: boolean;
  handlerToggleSignInPage: () => void;
}

export const SocialPageContext = createContext<SocialPageContextProps | null>(
  null
);
interface PageProps {
  children: React.ReactNode;
}

const SocialPageDataProvider = ({ children }: PageProps) => {
  const [showSignInPage, setShowSignInPage] = useState(false);

  const handlerToggleSignInPage = () => {
    setShowSignInPage(showSignInPage ? false : true);
  };

  return (
    <SocialPageContext.Provider
      value={{ handlerToggleSignInPage, showSignInPage }}
    >
      {children}
    </SocialPageContext.Provider>
  );
};

export default SocialPageDataProvider;
