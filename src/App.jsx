import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const questions = [
  {
    question: "What subject do you enjoy the most?",
    options: ["Math", "Science", "Art", "Business"],
  },
  {
    question: "Which activity excites you more?",
    options: [
      "Solving logical problems",
      "Doing experiments",
      "Designing something creative",
      "Planning and organizing",
    ],
  },
  {
    question: "How do you prefer working?",
    options: ["Individually", "With a team", "Hands-on tasks", "Leading others"],
  },
  {
    question: "What do you value most in a career?",
    options: ["Innovation", "Discovery", "Creativity", "Financial Growth"],
  },
  {
    question: "Which skill best describes you?",
    options: [
      "Analytical thinking",
      "Observation & research",
      "Artistic expression",
      "Communication & persuasion",
    ],
  },
  {
    question: "What kind of books/movies do you prefer?",
    options: [
      "Tech & Sci-fi",
      "Documentaries",
      "Artistic stories",
      "Business/entrepreneurship",
    ],
  },
  {
    question: "How do you solve problems?",
    options: [
      "By coding or calculations",
      "By analyzing causes",
      "By thinking outside the box",
      "By negotiating and managing",
    ],
  },
  {
    question: "Which environment do you like most?",
    options: ["Tech lab/office", "Research lab", "Studio", "Corporate office"],
  },
  {
    question: "What motivates you?",
    options: [
      "Building new technology",
      "Finding solutions to global issues",
      "Expressing ideas visually",
      "Achieving financial success",
    ],
  },
  {
    question: "Which phrase best fits you?",
    options: [
      "I love coding & logic",
      "I love science & discovery",
      "I love creating & designing",
      "I love business & leadership",
    ],
  },
];

// Map each answer to a career type
const answerCareerMap = {
  Math: "Tech",
  Science: "Science",
  Art: "Creative",
  Business: "Business",
  "Solving logical problems": "Tech",
  "Doing experiments": "Science",
  "Designing something creative": "Creative",
  "Planning and organizing": "Business",
  Individually: "Tech",
  "With a team": "Business",
  "Hands-on tasks": "Creative",
  "Leading others": "Business",
  Innovation: "Tech",
  Discovery: "Science",
  Creativity: "Creative",
  "Financial Growth": "Business",
  "Analytical thinking": "Tech",
  "Observation & research": "Science",
  "Artistic expression": "Creative",
  "Communication & persuasion": "Business",
  "Tech & Sci-fi": "Tech",
  Documentaries: "Science",
  "Artistic stories": "Creative",
  "Business/entrepreneurship": "Business",
  "By coding or calculations": "Tech",
  "By analyzing causes": "Science",
  "By thinking outside the box": "Creative",
  "By negotiating and managing": "Business",
  "Tech lab/office": "Tech",
  "Research lab": "Science",
  Studio: "Creative",
  "Corporate office": "Business",
  "Building new technology": "Tech",
  "Finding solutions to global issues": "Science",
  "Expressing ideas visually": "Creative",
  "Achieving financial success": "Business",
  "I love coding & logic": "Tech",
  "I love science & discovery": "Science",
  "I love creating & designing": "Creative",
  "I love business & leadership": "Business",
};

// Richer career type map
const careerTypeMap = {
  Tech: {
    title: "Technology Careers",
    careers: [
      "💻 Software Developer",
      "📊 Data Analyst",
      "🤖 AI Engineer",
      "🌐 Web Developer",
      "☁️ Cloud Engineer",
    ],
    description:
      "Tech careers focus on building innovative solutions using programming, data, and emerging technologies. Great for problem-solvers and logical thinkers.",
  },
  Science: {
    title: "Science Careers",
    careers: [
      "🔬 Research Scientist",
      "🧪 Chemist / Biologist",
      "👩‍⚕️ Doctor / Healthcare Professional",
      "🌍 Environmental Scientist",
      "🧠 Psychologist",
    ],
    description:
      "Science careers involve research, discovery, and problem-solving to improve the world. Best suited for curious minds who enjoy experiments and exploration.",
  },
  Creative: {
    title: "Creative Careers",
    careers: [
      "🎨 Graphic Designer",
      "🎬 Film Director",
      "🖌️ Illustrator / Animator",
      "🎶 Musician / Composer",
      "📸 Photographer",
    ],
    description:
      "Creative careers let you express ideas visually, musically, or through design. Perfect for those who thrive on imagination and originality.",
  },
  Business: {
    title: "Business Careers",
    careers: [
      "📈 Entrepreneur",
      "🏦 Business Manager",
      "📊 Marketing Specialist",
      "🤝 Human Resources Manager",
      "💼 Financial Analyst",
    ],
    description:
      "Business careers involve leadership, management, and driving growth. Great for individuals who enjoy strategy, communication, and teamwork.",
  },
};

export default function App() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState("");

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (userAnswers) => {
    const counts = { Tech: 0, Science: 0, Creative: 0, Business: 0 };
    userAnswers.forEach((ans) => {
      const type = answerCareerMap[ans];
      if (type) counts[type]++;
    });
    const topType = Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b
    );
    setResult(topType);
  };

  const restartQuiz = () => {
    setCurrentQ(0);
    setAnswers([]);
    setResult("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-br from-indigo-500 to-purple-600 p-6">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 max-w-xl w-full text-center text-gray-900 dark:text-white">
        {!result ? (
          <>
            <h2 className="text-2xl font-bold mb-6">Career Guidance Quiz</h2>
            <p className="text-lg mb-4">{questions[currentQ].question}</p>
            <div className="grid gap-3">
              {questions[currentQ].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt)}
                  className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl shadow-md transition"
                >
                  {opt}
                </button>
              ))}
            </div>
            <p className="mt-6 text-gray-500">
              Question {currentQ + 1} of {questions.length}
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">
              🎉 Your Suggested Career Path:
            </h2>
            <h3 className="text-xl font-semibold mb-2">
              {careerTypeMap[result].title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {careerTypeMap[result].description}
            </p>
            <ul className="text-left mb-6 space-y-2">
              {careerTypeMap[result].careers.map((career, i) => (
                <li key={i} className="flex items-center gap-2">
                  ✅ <span>{career}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={restartQuiz}
              className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-xl shadow-md"
            >
              Restart Quiz
            </button>
          </>
        )}
      </div>

      {/* Footer with developer info */}
      <footer className="mt-6 text-center text-white">
        <p className="font-semibold">
          Developed by Athumani Mfaume
        </p>
        <div className="flex justify-center gap-4 mt-2">
          <a
            href="mailto:athumanimfaume1995@gmail.com"
            className="hover:text-yellow-300"
          >
            <FaEnvelope size={22} />
          </a>
          <a
            href="https://wa.me/255627781186"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400"
          >
            <FaWhatsapp size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/athumani-mfaume-jr-204bb81b0/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://github.com/athumaniMfaume"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaGithub size={22} />
          </a>
        </div>
      </footer>
    </div>
  );
}



