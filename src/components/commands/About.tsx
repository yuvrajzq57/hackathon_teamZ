import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Welcome to <HighlightSpan>HackSecure</HighlightSpan>!
      </p>
      <p>
        This is <HighlightAlt>TeamZ's flagship hackathon</HighlightAlt> bringing together
        creative minds and cybersecurity enthusiasts.
      </p>
      <p>
        Join us to showcase your hacking skills, solve real-world security challenges,
        <br /> and take part in an immersive learning experience.
      </p>
    </AboutWrapper>
  );
};

export default About;
