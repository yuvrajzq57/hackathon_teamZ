import {
  Cmd,
  HeroContainer,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`      
 H   H     AAAAA   CCCC   K   K   SSSS   EEEEE  CCCC  U   U  RRRR   EEEEE  
 H   H     A   A  C      K  K    S      E      C      U   U  R   R  E      
 HHHHH     AAAAA  C      KKK     SSSS   EEEEE  C      U   U  RRRR   EEEEE  
 H   H     A   A  C      K  K       S   E      C      U   U  R R    E      
 H   H     A   A   CCCC  K   K   SSSS   EEEEE   CCCC   UUU   R  RR  EEEEE  


                                                    
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
              

          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to the HackSecure Hackathon! (Version 1.0.0)</div>
        <Seperator>----</Seperator>
        <div>
          This hackathon is hosted in collaboration with Dhanwantri Academy of Management Studies. 
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
       ___________
      |  HACKER   |
      |___________|
         || || 
       .-'''''-.
      /         
     |   O   O   | 
     |     <     | 
           ___/  /
       '-._____.-'
         |_____| 
       __| o o |__
      |___________|


         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
