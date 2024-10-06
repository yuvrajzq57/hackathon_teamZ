import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Our Hackathon's Collaborative Efforts!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "HackSecure Hackathon",
    desc: "Organized by TeamZ | 2024",
  },
  {
    title: "In Collaboration with",
    desc: "Dhanwantri Academy of Management Studies",
  },
  {
    title: "Venue",
    desc: "Dhanwantri Academy of Management Studies | 16th October 2024",
  },
];

export default Education;
