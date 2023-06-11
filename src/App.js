import React from "react";
import "./App.css";
import QuestionTree from "./QuestionTree";

function App() {
  // Your JSON data
  const data = [
    {
      queid: "Q1",
      question: "How long have you had the cough?",
      options: {
        "Less than 3 weeks": "Q2",
        "3 to 8 weeks": "Q3",
        "More than 8 weeks": "Q4",
      },
      level: "1",
    },
    {
      queid: "Q2",
      question: "Do you have a fever?",
      options: {
        Yes: "Q5",
        No: "Q6",
      },
      level: "2",
    },
    {
      queid: "Q3",
      question: "Do you have a fever?",
      options: {
        Yes: "Q5",
        No: "Q7",
      },
      level: "2",
    },
    {
      queid: "Q4",
      question: "Do you have a fever?",
      options: {
        Yes: "Q5",
        No: "Q8",
      },
      level: "2",
    },
    {
      queid: "Q5",
      question: "Are you experiencing shortness of breath?",
      options: {
        Yes: "Q9",
        No: "Q10",
      },
      level: "3",
    },
    {
      queid: "Q6",
      question: "Are you experiencing shortness of breath?",
      options: {
        Yes: "Q9",
        No: "Q11",
      },
      level: "3",
    },
    {
      queid: "Q7",
      question: "Are you experiencing shortness of breath?",
      options: {
        Yes: "Q9",
        No: "Q12",
      },
      level: "3",
    },
    {
      queid: "Q8",
      question: "Are you experiencing shortness of breath?",
      options: {
        Yes: "Q9",
        No: "Q13",
      },
      level: "3",
    },
    {
      queid: "Q9",
      question: "Do you have any chest pain?",
      options: {
        Yes: "Q14",
        No: "Q15",
      },
      level: "4",
    },
    {
      queid: "Q10",
      question: "Do you have any chest pain?",
      options: {
        Yes: "Q14",
        No: "Q16",
      },
      level: "4",
    },
    {
      queid: "Q11",
      question: "Do you have any chest pain?",
      options: {
        Yes: "Q14",
        No: "Q17",
      },
      level: "4",
    },
    {
      queid: "Q12",
      question: "Do you have any chest pain?",
      options: {
        Yes: "Q14",
        No: "Q18",
      },
      level: "4",
    },
    {
      queid: "Q13",
      question: "Do you have any chest pain?",
      options: {
        Yes: "Q14",
        No: "Q19",
      },
      level: "4",
    },
    {
      queid: "Q14",
      question: "Do you have a history of heart or lung disease?",
      options: {
        Yes: "Q20",
        No: "Q21",
      },
      level: "5",
    }
  ];

  return (
    <div className="App">
      <QuestionTree data={data} />
    </div>
  );
}

export default App;
