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
    },
    {
      queid: "Q15",
      question: "Do you have a history of heart or lung disease?",
      options: {
        Yes: "Q20",
        No: "Q22",
      },
      level: "5",
    },
    {
      queid: "Q16",
      question: "Do you have a history of heart or lung disease?",
      options: {
        Yes: "Q20",
        No: "Q23",
      },
      level: "5",
    },
    {
      queid: "Q17",
      question: "Do you have a history of heart or lung disease?",
      options: {
        Yes: "Q20",
        No: "Q24",
      },
      level: "5",
    },
    {
      queid: "Q18",
      question: "Do you have a history of heart or lung disease?",
      options: {
        Yes: "Q20",
        No: "Q25",
      },
      level: "5",
    },
    {
      queid: "Q19",
      question: "Do you have a history of heart or lung disease?",
      options: {
        Yes: "Q20",
        No: "Q26",
      },
      level: "5",
    },
    {
      queid: "Q20",
      question:
        "Are you currently taking any medications for heart or lung disease?",
      options: {
        Yes: "Q27",
        No: "Q28",
      },
      level: "6",
    },
    {
      queid: "Q21",
      question: "Do you smoke or have a history of smoking?",
      options: {
        Yes: "Q29",
        No: "Q30",
      },
      level: "6",
    },
    {
      queid: "Q22",
      question: "Do you smoke or have a history of smoking?",
      options: {
        Yes: "Q29",
        No: "Q31",
      },
      level: "6",
    },
    {
      queid: "Q23",
      question: "Do you smoke or have a history of smoking?",
      options: {
        Yes: "Q29",
        No: "Q32",
      },
      level: "6",
    },
    {
      queid: "Q24",
      question: "Do you smoke or have a history of smoking?",
      options: {
        Yes: "Q29",
        No: "Q33",
      },
      level: "6",
    },
    {
      queid: "Q25",
      question: "Do you smoke or have a history of smoking?",
      options: {
        Yes: "Q29",
        No: "Q34",
      },
      level: "6",
    },
    {
      queid: "Q26",
      question: "Do you smoke or have a history of smoking?",
      options: {
        Yes: "Q29",
        No: "Q35",
      },
      level: "6",
    },
    {
      queid: "Q27",
      question: "Has there been any recent change in your medication?",
      options: {
        Yes: "fc39",
        No: "b37",
      },
      level: "7",
    },
    {
      queid: "Q28",
      question:
        "Has there been any recent change in your living or work environment?",
      options: {
        Yes: "d39",
        No: "fo48",
      },
      level: "7",
    },
    {
      queid: "Q29",
      question: "Are you exposed to secondhand smoke or air pollution?",
      options: {
        Yes: "f41",
        No: "g42",
      },
      level: "7",
    },
    {
      queid: "Q30",
      question: "Are you experiencing nasal congestion or a runny nose?",
      options: {
        Yes: "h43",
        No: "fm41",
      },
      level: "7",
    },
    {
      queid: "Q31",
      question: "Are you experiencing nasal congestion or a runny nose?",
      options: {
        Yes: "v41",
        No: "fk39",
      },
      level: "7",
    },
    {
      queid: "Q32",
      question: "Are you experiencing nasal congestion or a runny nose?",
      options: {
        Yes: "E43",
        No: "F45",
      },
      level: "7",
    },
    {
      queid: "Q33",
      question: "Are you experiencing nasal congestion or a runny nose?",
      options: {
        Yes: "M42",
        No: "P37",
      },
      level: "7",
    },
    {
      queid: "Q34",
      question: "Are you experiencing nasal congestion or a runny nose?",
      options: {
        Yes: "fg43",
        No: "V44",
      },
      level: "7",
    },
    {
      queid: "Q35",
      question: "Are you experiencing nasal congestion or a runny nose?",
      options: {
        Yes: "ak42",
        No: "R39",
      },
      level: "7",
    },
    {
      queid: "fc39",
      question: "Do you smoke or have a history of smoking?",
      options: {
        Yes: "fc40",
        No: "fc41",
      },
      level: "8",
    },
    {
      queid: "fc40",
      question: "Do you experience frequent coughing with mucus?",
      options: {
        Yes: "fc42",
        No: "fc43",
      },
      level: "9",
    },
    {
      queid: "fc41",
      question: "Do you have allergies or asthma?",
      options: {
        Yes: "fc44",
        No: "fc45",
      },
      level: "9",
    },
    {
      queid: "fc42",
      question: "Are you experiencing weight loss without trying?",
      options: {
        Yes: "fc46",
        No: "fc47",
      },
      level: "10",
    },
    {
      queid: "fc43",
      question: "Do you have a sore throat or hoarse voice?",
      options: {
        Yes: "fc48",
        No: "fc49",
      },
      level: "10",
    },
    {
      queid: "fc44",
      question: "Are your allergy or asthma symptoms well-controlled?",
      options: {
        Yes: "fc50",
        No: "fc51",
      },
      level: "10",
    },
    {
      queid: "fc45",
      question: "Do you experience heartburn or acid reflux?",
      options: {
        Yes: "fc52",
        No: "fc53",
      },
      level: "10",
    },
    {
      queid: "fc46",
      question: "Have you been exposed to polluted air, dust or harmful fumes?",
      options: {
        Often: [
          "Chronic bronchitis, Chronic obstructive pulmonary disease (COPD)",
        ],
        "Rarely/never": ["Lung cancer, Tuberculosis"],
      },
      level: "11",
    },
    {
      queid: "fc47",
      question: "Do you experience wheezing?",
      options: {
        Yes: ["Asthma exacerbation, Bronchitis"],
        No: ["Viral respiratory infection"],
      },
      level: "11",
    },
    {
      queid: "fc48",
      question: "Is your sore throat accompanied by a runny or stuffy nose?",
      options: {
        Yes: ["Common cold, Sinusitis"],
        No: ["Laryngitis, Tonsillitis"],
      },
      level: "11",
    },
    {
      queid: "fc49",
      question: "Do you have swelling in your legs or ankles?",
      options: {
        Yes: ["Congestive heart failure"],
        No: ["Deconditioning, Anxiety"],
      },
      level: "11",
    },
    {
      queid: "fc50",
      question: "Do you have a history of respiratory infections or pneumonia?",
      options: {
        Yes: ["Bronchiectasis, Immunodeficiency"],
        No: ["Well-controlled asthma, Allergic rhinitis"],
      },
      level: "11",
    },
    {
      queid: "fc51",
      question: "Have you been around sick people or traveled recently?",
      options: {
        Yes: ["Viral respiratory infection, Asthma exacerbation"],
        No: ["Uncontrolled asthma, Allergic rhinitis"],
      },
      level: "11",
    },
    {
      queid: "fc52",
      question: "Do you experience coughing after eating or lying down?",
      options: {
        Yes: ["Gastroesophageal reflux disease (GERD)"],
        No: ["Peptic ulcer, Gastritis"],
      },
      level: "11",
    },
    {
      queid: "fc53",
      question: "Have you had a recent cold or upper respiratory infection?",
      options: {
        Yes: ["Postnasal drip, Acute bronchitis"],
        No: ["Irritant exposure, Anxiety"],
      },
      level: "11",
    },
    {
      "queid":"b37",
      "question":"Are you experiencing wheezing?",
      "options":{
         "Yes":"b38",
         "No":"b39"
      },
      "level":"8"
   },
   {
      "queid":"b38",
      "question":"Do you have a runny or stuffy nose?",
      "options":{
         "Yes":"b40",
         "No":"b41"
      },
      "level":"9"
   },
   {
      "queid":"b39",
      "question":"Do you have a sore throat?",
      "options":{
         "Yes":"b42",
         "No":"b43"
      },
      "level":"9"
   },
   {
      "queid":"b40",
      "question":"Have you been exposed to any allergens or irritants recently?",
      "options":{
         "Yes":"b44",
         "No":"b45"
      },
      "level":"10"
   },
   {
      "queid":"b41",
      "question":"Have you been exposed to smoke or air pollution recently?",
      "options":{
         "Yes":"b46",
         "No":"b47"
      },
      "level":"10"
   },
   {
      "queid":"b42",
      "question":"Are you experiencing muscle aches?",
      "options":{
         "Yes":"b48",
         "No":"b49"
      },
      "level":"10"
   },
   {
      "queid":"b43",
      "question":"Have you recently traveled or been in contact with someone who has traveled?",
      "options":{
         "Yes":"b50",
         "No":"b51"
      },
      "level":"10"
   },
   {
      "queid":"b44",
      "question":"Do your symptoms improve with antihistamines?",
      "options":{
         "Yes":[
            "Allergic Rhinitis, Asthma trigger"
         ],
         "No":[
            "Upper Respiratory Infection, Asthma"
         ]
      },
      "level":"11"
   },
   {
      "queid":"b45",
      "question":"Do your symptoms worsen in cold air or during exercise?",
      "options":{
         "Yes":[
            "Asthma, Cold-Induced Bronchoconstriction"
         ],
         "No":[
            "Bronchitis, Respiratory Infection"
         ]
      },
      "level":"11"
   },
   {
      "queid":"b46",
      "question":"Do your symptoms improve with the use of an inhaler?",
      "options":{
         "Yes":[
            "Asthma, COPD"
         ],
         "No":[
            "Bronchitis, Respiratory Infection"
         ]
      },
      "level":"11"
   },
   {
      "queid":"b47",
      "question":"Do you have a productive cough with thick mucus?",
      "options":{
         "Yes":[
            "Bronchitis, Pneumonia"
         ],
         "No":[
            "Viral Respiratory Infection, GERD"
         ]
      },
      "level":"11"
   },
   {
      "queid":"b48",
      "question":"Do you have a headache and chills?",
      "options":{
         "Yes":[
            "Influenza, COVID-19"
         ],
         "No":[
            "Common Cold, Viral Respiratory Infection"
         ]
      },
      "level":"11"
   },
   {
      "queid":"b49",
      "question":"Do your symptoms improve with rest and hydration?",
      "options":{
         "Yes":[
            "Viral Respiratory Infection, Common Cold"
         ],
         "No":[
            "Strep Throat, Bacterial Respiratory Infection"
         ]
      },
      "level":"11"
   },
   {
      "queid":"b50",
      "question":"Have you been tested for COVID-19?",
      "options":{
         "Yes":[
            "COVID-19, Pneumonia"
         ],
         "No":[
            "Tuberculosis, Bacterial Respiratory Infection"
         ]
      },
      "level":"11"
   },
   {
      "queid":"b51",
      "question":"Do you have a history of GERD or acid reflux?",
      "options":{
         "Yes":[
            "GERD, Acid Reflux"
         ],
         "No":[
            "Viral Respiratory Infection, Unspecified Respiratory Infection"
         ]
      },
      "level":"11"
   },
   {
      "queid":"d39",
      "question":"Have you been recently sick with a viral illness?",
      "options":{
         "Yes":"d40",
         "No":"d41"
      },
      "level":"7"
   },
   {
      "queid":"d40",
      "question":"Did your cough start during the viral illness?",
      "options":{
         "Yes":"d42",
         "No":"d43"
      },
      "level":"8"
   },
   {
      "queid":"d41",
      "question":"Are you exposed to any irritants or allergens?",
      "options":{
         "Yes":"d44",
         "No":"d45"
      },
      "level":"8"
   },
   {
      "queid":"d42",
      "question":"Is your cough productive?",
      "options":{
         "Yes":"d46",
         "No":"d47"
      },
      "level":"9"
   },
   {
      "queid":"d43",
      "question":"Do you have a history of allergies?",
      "options":{
         "Yes":"d48",
         "No":"d49"
      },
      "level":"9"
   },
   {
      "queid":"d44",
      "question":"Do you experience sneezing or itching?",
      "options":{
         "Yes":"d50",
         "No":"d51"
      },
      "level":"9"
   },
   {
      "queid":"d45",
      "question":"Do you smoke or have exposure to secondhand smoke?",
      "options":{
         "Yes":"d52",
         "No":"d53"
      },
      "level":"9"
   },
   {
      "queid":"d46",
      "question":"What is the color of the mucus?",
      "options":{
         "Clear":"d54",
         "Yellow or Green":"d55",
         "Other":"d56"
      },
      "level":"10"
   },
   {
      "queid":"d47",
      "question":"Does the cough worsen at night?",
      "options":{
         "Yes":"d57",
         "No":"d58"
      },
      "level":"10"
   },
   {
      "queid":"d48",
      "question":"Does the cough improve with antihistamines?",
      "options":{
         "Yes":"d59",
         "No":"d60"
      },
      "level":"10"
   },
   {
      "queid":"d49",
      "question":"Are you experiencing weight loss, night sweats, or fever?",
      "options":{
         "Yes":"d61",
         "No":"d62"
      },
      "level":"10"
   },
   {
      "queid":"d50",
      "question":"Have you tried antihistamines?",
      "options":{
         "Yes":"d63",
         "No":"d64"
      },
      "level":"10"
   },
   {
      "queid":"d51",
      "question":"Are you experiencing weight loss, night sweats, or fever?",
      "options":{
         "Yes":"d65",
         "No":"d66"
      },
      "level":"10"
   },
   {
      "queid":"d52",
      "question":"Have you tried duitting smoking?",
      "options":{
         "Yes":"d67",
         "No":"d68"
      },
      "level":"10"
   },
   {
      "queid":"d53",
      "question":"Are you experiencing weight loss, night sweats, or fever?",
      "options":{
         "Yes":"d69",
         "No":"d70"
      },
      "level":"10"
   },
   {
      "queid":"d54",
      "question":"Options",
      "options":{
         "Confirm":[
            "Post-viral Cough"
         ]
      },
      "level":"11"
   },
   {
      "queid":"d55",
      "question":"Options",
      "options":{
         "Confirm":[
            "Bacterial Infection, Sinusitis, Bronchitis"
         ]
      },
      "level":"11"
   },
   {
      "queid":"d56",
      "question":"Options",
      "options":{
         "Confirm":[
            "Pneumonia, Chronic Obstructive Pulmonary Disease, Non-infectious cause"
         ]
      },
      "level":"11"
   },
   {
      "queid":"d57",
      "question":"Options",
      "options":{
         "Confirm":[
            "Asthma, Gastroesophageal Reflux Disease (GERD), Postnasal Drip"
         ]
      },
      "level":"11"
   },
   {
      "queid":"d58",
      "question":"Options",
      "options":{
         "Confirm":[
            "Non-specific Cough, Consider other causes"
         ]
      },
      "level":"11"
   },
   {
      "queid":"d59",
      "question":"Options",
      "options":{
         "Confirm":[
            "Allergic Rhinitis"
         ]
      },
      "level":"11"
   },
   {
      "queid":"d60",
      "question":"Options",
      "options":{
         "Confirm":[
            "Non-allergic Rhinitis, Consider other causes"
         ]
      },
      "level":"11"
   },
   {
      "queid":"d61",
      "question":"Options",
      "options":{
         "Confirm":[
            "Tuberculosis, Lung Cancer"
         ]
      },
      "level":"11"
   },
   {
      "queid":"d62",
      "question":"Options",
      "options":{
         "Confirm":[
            "Cough of Unknown Origin, Consider further evaluation"
         ]
      },
      "level":"11"
   },
   {
      "queid":"d63",
      "question":"Options",
      "options":{
         "Confirm":[
            "Allergic Reaction"
         ]
      },
      "level":"11"
   },
   {
      "queid":"d64",
      "question":"Options",
      "options":{
         "Confirm":[
            "Possible Allergic Reaction, Consider trying antihistamines"
         ]
      },
      "level":"11"
   },
   {
      "queid":"d65",
      "question":"Options",
      "options":{
         "Confirm":[
            "Tuberculosis, Lung Cancer"
         ]
      },
      "level":"11"
   },
   {
      "queid":"d66",
      "question":"Options",
      "options":{
         "Confirm":[
            "Irritant-induced Cough, Consider other causes"
         ]
      },
      "level":"11"
   },
   {
      "queid":"d67",
      "question":"Options",
      "options":{
         "Confirm":[
            "Cigarette Smoke-induced Cough, Consider further evaluation"
         ]
      },
      "level":"11"
   },
   {
      "queid":"d68",
      "question":"Options",
      "options":{
         "Confirm":[
            "Cigarette Smoke-induced Cough, Consider quitting smoking"
         ]
      },
      "level":"11"
   },
   {
      "queid":"d69",
      "question":"Options",
      "options":{
         "Confirm":[
            "Tuberculosis, Lung Cancer"
         ]
      },
      "level":"11"
   },
   {
      "queid":"d70",
      "question":"Options",
      "options":{
         "Confirm":[
            "Cough of Unknown Origin, Consider further evaluation"
         ]
      },
      "level":"11"
   },
   {
    "queid":"f41",
    "question":"Is your cough dry or productive?",
    "options":{
       "Dry":"f42",
       "Productive":"f43"
    },
    "level":"8"
 },
 {
    "queid":"f42",
    "question":"Do you experience heart palpitations or dizziness?",
    "options":{
       "Yes":"f44",
       "No":"f45"
    },
    "level":"9"
 },
 {
    "queid":"f43",
    "question":"Do you cough up blood or yellow/green phlegm?",
    "options":{
       "Yes":"f46",
       "No":"f47"
    },
    "level":"9"
 },
 {
    "queid":"f44",
    "question":"Have you recently experienced unintentional weight loss?",
    "options":{
       "Yes":"f48",
       "No":"f49"
    },
    "level":"10"
 },
 {
    "queid":"f45",
    "question":"Do you have any nasal congestion or sinus issues?",
    "options":{
       "Yes":"f50",
       "No":"f51"
    },
    "level":"10"
 },
 {
    "queid":"f46",
    "question":"Do you have a high-stress lifestyle?",
    "options":{
       "Yes":"f52",
       "No":"f53"
    },
    "level":"10"
 },
 {
    "queid":"f47",
    "question":"Have you recently changed environment or been around new allergens?",
    "options":{
       "Yes":"f54",
       "No":"f55"
    },
    "level":"10"
 },
 {
    "queid":"f48",
    "question":"Do you frequently experience fatigue or irritability?",
    "options":{
       "Yes":"f56",
       "No":"f57"
    },
    "level":"11"
 },
 {
    "queid":"f49",
    "question":"Did the cough start suddenly?",
    "options":{
       "Yes":[
          "Viral infection, Bronchitis, or Upper Respiratory Infection"
       ],
       "No":[
          "Chronic Obstructive Pulmonary Disease, Asthma"
       ]
    },
    "level":"11"
 },
 {
    "queid":"f50",
    "question":"Do you have a sore throat or postnasal drip?",
    "options":{
       "Yes":[
          "Sinusitis, Allergic Rhinitis, or Viral infection"
       ],
       "No":[
          "Gastroesophageal Reflux Disease, Vocal Cord Dysfunction"
       ]
    },
    "level":"11"
 },
 {
    "queid":"f51",
    "question":"Are you experiencing any wheezing?",
    "options":{
       "Yes":[
          "Asthma, Bronchospasm"
       ],
       "No":[
          "Foreign Body Aspiration, Anxiety"
       ]
    },
    "level":"11"
 },
 {
    "queid":"f52",
    "question":"Do you have a persistently dry mouth?",
    "options":{
       "Yes":[
          "Sjogren's Syndrome or Dehydration"
       ],
       "No":[
          "Tuberculosis, Pneumonia"
       ]
    },
    "level":"11"
 },
 {
    "queid":"f53",
    "question":"Have you been in contact with someone who has tuberculosis?",
    "options":{
       "Yes":[
          "Tuberculosis"
       ],
       "No":[
          "Bacterial Pneumonia, Bronchitis"
       ]
    },
    "level":"11"
 },
 {
    "queid":"f54",
    "question":"Have your symptoms improved with any treatments?",
    "options":{
       "Yes":[
          "Allergy or Environmental-related Cough"
       ],
       "No":[
          "Unidentified Allergy, Chronic Idiopathic Cough"
       ]
    },
    "level":"11"
 },
 {
    "queid":"f55",
    "question":"Do you have any pets?",
    "options":{
       "Yes":[
          "Pet Allergy or Exposure to Pet-related Irritants"
       ],
       "No":[
          "Unidentified Allergy, Post-Infectious Cough"
       ]
    },
    "level":"11"
 },
 {
    "queid":"f56",
    "question":"Are you able to sleep well at night?",
    "options":{
       "Yes":[
          "Chronic Fatigue Syndrome, Nervous System Disorder"
       ],
       "No":[
          "Sleep Apnea, Insomnia"
       ]
    },
    "level":"11"
 },
 {
    "queid":"f57",
    "question":"Have you noticed any sudden changes in appetite or thirst?",
    "options":{
       "Yes":[
          "Diabetes, Hyperthyroidism"
       ],
       "No":[
          "Anxiety-related Cough, Gastroesophageal Reflux Disease"
       ]
    },
    "level":"11"
 },
 {
    "queid":"g42",
    "question":"Do you have a sore throat?",
    "options":{
       "Yes":"g43",
       "No":"g48"
    },
    "level":"7"
 },{
    "queid":"g43",
    "question":"Do you have swollen glands in the neck?",
    "options":{
       "Yes":"g44",
       "No":"g45"
    },
    "level":"8"
 },{
    "queid":"g44",
    "question":"Are there white patches in your throat or pus on your tonsils?",
    "options":{
       "Yes":"g46",
       "No":"g47"
    },
    "level":"9"
 },{
    "queid":"g45",
    "question":"Have you recently been exposed to an allergen?",
    "options":{
       "Yes":"g49",
       "No":"g50"
    },
    "level":"9"
 },{
    "queid":"g46",
    "question":"Have you experienced sudden severe pain?",
    "options":{
       "Yes":"g51",
       "No":"g52"
    },
    "level":"10"
 },{
    "queid":"g47",
    "question":"Do you have a headache?",
    "options":{
       "Yes":"g53",
       "No":"g54"
    },
    "level":"10"
 },{
    "queid":"g48",
    "question":"Are you experiencing fatigue?",
    "options":{
       "Yes":"g55",
       "No":"g56"
    },
    "level":"8"
 },{
    "queid":"g49",
    "question":"Are you having difficulty swallowing?",
    "options":{
       "Yes":[
          "Strep throat, Tonsillitis"
       ],
       "No":[
          "Viral infection, Allergic rhinitis"
       ]
    },
    "level":"11"
 },{
    "queid":"g50",
    "question":"Are you experiencing muscle or joint pain?",
    "options":{
       "Yes":[
          "Influenza, Common cold"
       ],
       "No":[
          "Viral infection, Environmental irritant"
       ]
    },
    "level":"11"
 },{
    "queid":"g51",
    "question":"Did the pain occur after an injury?",
    "options":{
       "Yes":[
          "Cervical spine injury, Neck sprain/strain"
       ],
       "No":[
          "Muscle spasm, Fibromyalgia"
       ]
    },
    "level":"11"
 },{
    "queid":"g52",
    "question":"Do you have difficulty opening your mouth?",
    "options":{
       "Yes":[
          "Temporomandibular joint dysfunction, Dental infection"
       ],
       "No":[
          "Migraine, Sinus headache"
       ]
    },
    "level":"11"
 },{
    "queid":"g53",
    "question":"Are you feeling light-headed or dizzy?",
    "options":{
       "Yes":[
          "Dehydration, Vasovagal syncope"
       ],
       "No":[
          "Tension-type headache, Migraine"
       ]
    },
    "level":"11"
 },{
    "queid":"g54",
    "question":"Do you have difficulty sleeping?",
    "options":{
       "Yes":[
          "Insomnia, Sleep apnea"
       ],
       "No":[
          "Restless legs syndrome, Periodic limb movement disorder"
       ]
    },
    "level":"11"
 },{
    "queid":"g55",
    "question":"Are you experiencing unusual weight loss?",
    "options":{
       "Yes":"g57",
       "No":"g58"
    },
    "level":"9"
 },{
    "queid":"g56",
    "question":"Do you have a significant change in appetite?",
    "options":{
       "Yes":"g59",
       "No":"g60"
    },
    "level":"9"
 },{
    "queid":"g57",
    "question":"Do you have night sweats?",
    "options":{
       "Yes":[
          "Lymphoma, Tuberculosis"
       ],
       "No":[
          "Chronic fatigue syndrome, Depression"
       ]
    },
    "level":"11"
 },{
    "queid":"g58",
    "question":"Are you experiencing constant thirst?",
    "options":{
       "Yes":[
          "Diabetes, Dehydration"
       ],
       "No":[
          "Hypothyroidism, Anemia"
       ]
    },
    "level":"11"
 },{
    "queid":"g59",
    "question":"Do you have a history of substance abuse?",
    "options":{
       "Yes":[
          "Alcohol abuse, Drug abuse"
       ],
       "No":[
          "Eating disorder, Medication side effect"
       ]
    },
    "level":"11"
 },{
    "queid":"g60",
    "question":"Do you have feelings of worry or anxiety?",
    "options":{
       "Yes":[
          "Generalized anxiety disorder, Panic disorder"
       ],
       "No":[
          "Adjustment disorder, Major depressive disorder"
       ]
    },
    "level":"11"
 },
 {
  "queid":"h43",
  "question":"Have you recently been in contact with someone sick or traveled to an area with high COVID-19 cases?",
  "options":{
     "Yes":"h44",
     "No":"h45"
  },
  "level":"8"
},{
  "queid":"h44",
  "question":"Have you been vaccinated for COVID-19?",
  "options":{
     "Yes":"h46",
     "No":"h47"
  },
  "level":"9"
},{
  "queid":"h45",
  "question":"Are you experiencing fatigue or body aches?",
  "options":{
     "Yes":"h48",
     "No":"h49"
  },
  "level":"9"
},{
  "queid":"h46",
  "question":"Did you experience any side effects after the vaccination?",
  "options":{
     "Yes":"h50",
     "No":"h51"
  },
  "level":"10"
},{
  "queid":"h47",
  "question":"Have you been tested for COVID-19 recently?",
  "options":{
     "Yes":"h52",
     "No":"h53"
  },
  "level":"10"
},{
  "queid":"h48",
  "question":"Do you have a sore throat or difficulty in swallowing?",
  "options":{
     "Yes":"h54",
     "No":"h55"
  },
  "level":"10"
},{
  "queid":"h49",
  "question":"Do you have any environmental allergies?",
  "options":{
     "Yes":"h56",
     "No":"h57"
  },
  "level":"10"
},{
  "queid":"h50",
  "question":"",
  "options":{
     "Mild side effects":[
        "COVID-19 vaccine side effects"
     ],
     "Severe side effects":[
        "COVID-19 vaccine side effects, Consult a doctor"
     ]
  },
  "level":"11"
},{
  "queid":"h51",
  "question":"",
  "options":{
     "Continue":[
        "COVID-19 infection unlikely, Possible mild viral infection"
     ],
     "Seek Medical Advice":[
        "Consult a doctor to rule out COVID-19 or other causes"
     ]
  },
  "level":"11"
},{
  "queid":"h52",
  "question":"",
  "options":{
     "Positive":[
        "COVID-19"
     ],
     "Negative":[
        "Possible flu"
     ]
  },
  "level":"11"
},{
  "queid":"h53",
  "question":"",
  "options":{
     "Get Tested":[
        "Consider getting tested for COVID-19"
     ],
     "Consult a Doctor":[
        "Consult a doctor to determine the cause of your cough and symptoms"
     ]
  },
  "level":"11"
},{
  "queid":"h54",
  "question":"",
  "options":{
     "Yes":[
        "Possible flu or strep throat"
     ],
     "No":[
        "Infection or inflammation"
     ]
  },
  "level":"11"
},{
  "queid":"h55",
  "question":"",
  "options":{
     "Persistent symptoms":[
        "Viral infection or other conditions"
     ],
     "Symptoms improve":[
        "Viral infection, self-care and rest"
     ]
  },
  "level":"11"
},{
  "queid":"h56",
  "question":"",
  "options":{
     "Allergy-induced":[
        "Allergy-induced cough, consider allergy medication"
     ],
     "Exacerbating factors":[
        "Allergy with possible infection"
     ]
  },
  "level":"11"
},{
  "queid":"h57",
  "question":"",
  "options":{
     "No known allergies":[
        "Environmental factors, possible viral infection"
     ],
     "Non-allergic triggers":[
        "Irritation from pollution, smoke, or dust, consider wearing a mask"
     ]
  },
  "level":"11"
},
{
  "queid":"v41",
  "question":"Do you have a high-stress job or environment?",
  "options":{
     "Yes":"v42",
     "No":"v43"
  },
  "level":"8"
},
{
  "queid":"v42",
  "question":"Are you experiencing more fatigue than usual?",
  "options":{
     "Yes":"v44",
     "No":"v45"
  },
  "level":"9"
},
{
  "queid":"v43",
  "question":"Are you experiencing symptoms like sneezing or runny nose?",
  "options":{
     "Yes":"v46",
     "No":"v47"
  },
  "level":"9"
},
{
  "queid":"v44",
  "question":"Are you sleeping less or having sleep disturbances?",
  "options":{
     "Yes":"v48",
     "No":"v49"
  },
  "level":"10"
},
{
  "queid":"v45",
  "question":"Do you have a weakened immune system?",
  "options":{
     "Yes":"v50",
     "No":"v51"
  },
  "level":"10"
},
{
  "queid":"v46",
  "question":"Do you have a history of allergies?",
  "options":{
     "Yes":"v52",
     "No":"v53"
  },
  "level":"10"
},
{
  "queid":"v47",
  "question":"Do you have any other unusual symptoms?",
  "options":{
     "Yes":"v54",
     "No":"v55"
  },
  "level":"10"
},
{
  "queid":"v48",
  "question":"Do you use any medication to help you sleep?",
  "options":{
     "MedicationYes":[
        "SleepApnea, GastroesophagealRefluxDisease, Anxiety"
     ],
     "MedicationNo":[
        "Stress, Insomnia, ChronicFatigueSyndrome"
     ]
  },
  "level":"11"
},
{
  "queid":"v49",
  "question":"Do you experience mood swings or irritability?",
  "options":{
     "MoodYes":[
        "Anxiety, Depression, Burnout"
     ],
     "MoodNo":[
        "PhysicalExhaustion, GastroesophagealRefluxDisease, OccupationalAsthma"
     ]
  },
  "level":"11"
},
{
  "queid":"v50",
  "question":"Do you have any autoimmune disorders?",
  "options":{
     "AutoimmuneYes":[
        "Bronchitis, Pneumonia, Influenza"
     ],
     "AutoimmuneNo":[
        "CommonCold, AcuteRespiratoryInfection, Bronchitis"
     ]
  },
  "level":"11"
},
{
  "queid":"v51",
  "question":"Do you engage in regular physical exercise?",
  "options":{
     "ExerciseYes":[
        "Costochondritis, MuscleStrain, ExerciseInducedAsthma"
     ],
     "ExerciseNo":[
        "SedentaryLifestyle, PoorPosture, MusculoskeletalPain"
     ]
  },
  "level":"11"
},
{
  "queid":"v52",
  "question":"Do you take any allergy medications?",
  "options":{
     "AllergyMedsYes":[
        "AllergicRhinitis, HayFever, Sinusitis"
     ],
     "AllergyMedsNo":[
        "UpperRespiratoryInfection, CommonCold, AllergenExposure"
     ]
  },
  "level":"11"
},
{
  "queid":"v53",
  "question":"Have you recently been exposed to any new environments or substances?",
  "options":{
     "ExposureYes":[
        "EnvironmentalIrritant, ChemicalExposure, NewAllergen"
     ],
     "ExposureNo":[
        "UpperRespiratoryInfection, Sinusitis, CommonCold"
     ]
  },
  "level":"11"
},
{
  "queid":"v54",
  "question":"Are you experiencing any weight loss or night sweats?",
  "options":{
     "WLYes":[
        "Tuberculosis, Lymphoma, Endocarditis"
     ],
     "WLNo":[
        "AcidReflux, PostnasalDrip, Bronchitis"
     ]
  },
  "level":"11"
},
{
  "queid":"v55",
  "question":"Do you experience any heartburn or acid reflux?",
  "options":{
     "HeartburnYes":[
        "GastroesophagealRefluxDisease, Esophagitis, PepticUlcer"
     ],
     "HeartburnNo":[
        "AcuteBronchitis, RespiratoryInfection, Asthma"
     ]
  },
  "level":"11"
},
  ];

  return (
    <div className="App">
      <QuestionTree data={data} />
    </div>
  );
}

export default App;
