import { useContext } from "react";
import { termContext } from "../Terminal";

/* ===== Projects component (Hackathon Registration + Google Form link) ===== */
const Projects: React.FC = () => {
  const { arg } = useContext(termContext);

  /* ===== Get current command ===== */

  /* ===== Validate argument ===== */
  const isArgInvalid = (arg: string[], command: string, validArgs: string[]) => {
    return arg[0] !== command || !validArgs.includes(arg[1]);
  };


  /* ===== Handle button click for redirect ===== */
  const handleRedirect = (url: string) => {
    window.open(url, "_blank");
  };

  /* ===== Check if argument is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1"]) ? (
      <Usage cmd="hackathon" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="hackathon">
      <div style={styles.intro}>
        Welcome to the Hackathon! Ready to register? Click the button below to participate.
      </div>
      {hackathonDetails.map(({ id, title, desc, formUrl }) => (
        <div key={id} style={styles.container}>
          <h2 style={styles.title}>{`${id}. ${title}`}</h2>
          <p style={styles.desc}>{desc}</p>
          <button
            style={styles.button}
            onClick={() => handleRedirect(formUrl)}
          >
            Register for Hackathon
          </button>
        </div>
      ))}
      <Usage cmd="hackathon" />
    </div>
  );
};

/* ===== Hackathon details (Google Form link) ===== */
const hackathonDetails = [
  {
    id: 1,
    title: "Hackathon Registration",
    desc: "Fill out the form to register for the upcoming hackathon!",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSewag5LMh1ThFPSObdeLcYE0iCH-GoirIpbRGfQhrTb_xEVhg/viewform?usp=sf_link", // Replace with your Google Form link
  },
];

/* ===== Usage component (shows usage help) ===== */
const Usage: React.FC<{ cmd: string }> = ({ cmd }) => (
  <div style={{ marginTop: "20px" }}>
    <p>Usage:</p>
    <p>Click on Register for registering for {cmd}</p>
  </div>
);

/* ===== Simple Inline Styles ===== */
const styles = {
  intro: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  container: {
    border: "1px solid #ccc",
    padding: "10px",
    marginBottom: "10px",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  desc: {
    fontSize: "16px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Projects;
