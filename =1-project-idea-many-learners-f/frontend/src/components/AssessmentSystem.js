```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/styles.css'; // Ensure this path is correct

const AssessmentSystem = () => {
  const [skills, setSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState('');
  const [assessmentType, setAssessmentType] = useState('');
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  // Set APP_BASE_URL from environment variable or default
  const APP_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';


  // Fetch skills on component mount
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${APP_BASE_URL}/api/skills/`);
        setSkills(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch skills. Please try again later.');
        console.error('Error fetching skills:', err);
        setLoading(false);
      }
    };
    fetchSkills();
  }, []);

  // Handle skill selection
  const handleSkillChange = (event) => {
    setSelectedSkill(event.target.value);
    setAssessmentType('');
    setQuestions([]);
    setUserAnswers({});
    setSubmitted(false);
  };

  // Handle assessment type selection
  const handleAssessmentTypeChange = async (event) => {
    const type = event.target.value;
    setAssessmentType(type);
    setUserAnswers({}); // Reset answers when changing assessment type
    setSubmitted(false);

    if (!selectedSkill || !type) return;

    try {
      setLoading(true);
      // In a real application, you would fetch specific questions based on the skill and type.
      // For this example, we'll use mock data.
      const mockQuestions = getMockQuestions(selectedSkill, type);
      setQuestions(mockQuestions);
      // Initialize userAnswers with empty values for each question
      const initialAnswers = {};
      mockQuestions.forEach(q => {
        initialAnswers[q.id] = q.type === 'mcq' ? '' : q.type === 'explanation' ? '' : { code: '' };
      });
      setUserAnswers(initialAnswers);
      setLoading(false);
    } catch (err) {
      setError(`Failed to load ${type} for ${selectedSkill}. Please try again later.`);
      console.error(`Error fetching ${type} questions:`, err);
      setLoading(false);
    }
  };

  // Mock question generation function - replace with actual API calls
  const getMockQuestions = (skill, type) => {
    if (type === 'quiz') {
      return [
        { id: 1, text: `What is the primary purpose of a ${skill} function?`, type: 'mcq', options: ['To perform arithmetic operations', 'To encapsulate a block of code for reuse', 'To define a variable', 'To create a loop'], answer: 'To encapsulate a block of code for reuse' },
        { id: 2, text: `In ${skill}, how do you declare a variable?`, type: 'mcq', options: ['var myVar;', 'let myVar;', 'const myVar;', 'All of the above'], answer: 'All of the above' },
      ];
    } else if (type === 'debug') {
      return [
        { id: 101, text: `Debug the following ${skill} code snippet:`, type: 'debug', code: 'function greet(name) {\n  console.log("Hello " + name)\n}\n\ngreet("World"\n', explanation_needed: true },
      ];
    } else if (type === 'challenge') {
      return [
        { id: 201, text: `Write a ${skill} function that reverses a string.`, type: 'challenge', code_template: 'function reverseString(str) {\n  // Your code here\n}' },
      ];
    } else if (type === 'explanation') {
      return [
        { id: 301, text: `Explain the concept of ${skill} in your own words.`, type: 'explanation' },
      ];
    }
    return [];
  };

  // Handle user answer changes
  const handleAnswerChange = (questionId, value) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  // Handle code answer changes for debug/challenge
  const handleCodeChange = (questionId, code) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: { ...prev[questionId], code: code } }));
  };


  // Submit assessment
  const handleSubmit = async () => {
    if (!selectedSkill || !assessmentType) {
      setError('Please select a skill and assessment type.');
      return;
    }
    if (Object.keys(userAnswers).length === 0) {
      setError('Please answer all questions.');
      return;
    }

    // Basic validation: check if all answers are filled (adjust based on question types)
    let allAnswered = true;
    questions.forEach(q => {
      const answer = userAnswers[q.id];
      if (q.type === 'mcq' && !answer) {
        allAnswered = false;
      } else if (q.type === 'explanation' && (!answer || answer.trim() === '')) {
        allAnswered = false;
      } else if ((q.type === 'debug' || q.type === 'challenge') && (!answer || !answer.code || answer.code.trim() === '')) {
        allAnswered = false;
      }
    });

    if (!allAnswered) {
      setError('Please answer all questions before submitting.');
      return;
    }


    setLoading(true);
    setError(null);

    try {
      // In a real application, assessment results would be sent to the backend.
      // The backend would then calculate the actual_score and generate feedback.
      // For this example, we'll simulate a successful submission and state change.

      // Simulate sending data to backend
      const assessmentPayload = {
        user_id: 1, // Replace with actual logged-in user ID
        skill_id: skills.find(s => s.skill_name === selectedSkill)?.id,
        // confidence_score: fetched from user perception step (not implemented here)
        // actual_score: calculated by backend
        // feedback: generated by backend
        answers: userAnswers, // Sending raw answers for backend processing
        assessment_type: assessmentType
      };

      console.log("Submitting assessment:", assessmentPayload);

      // Simulate API call
      // const response = await axios.post(`${APP_BASE_URL}/api/assessments/`, assessmentPayload);
      // console.log("Assessment submitted successfully:", response.data);

      // Simulate backend processing and receive dummy results
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network latency
      const simulatedResults = {
        confidence_score: 75, // Example confidence score
        actual_score: 60, // Example actual score
        feedback: "Good theoretical understanding, but application needs practice.",
      };

      // Display feedback or redirect to dashboard/feedback page
      console.log("Simulated results:", simulatedResults);
      setSubmitted(true);
      alert(`Assessment Submitted! \nConfidence: ${simulatedResults.confidence_score}%\nActual Skill: ${simulatedResults.actual_score}%\nFeedback: ${simulatedResults.feedback}`);
      // Optionally update state or redirect

    } catch (err) {
      setError('Failed to submit assessment. Please check your answers and try again.');
      console.error('Error submitting assessment:', err);
    } finally {
      setLoading(false);
    }
  };

  const primaryColor = '#4A90E2';
  const secondaryColor = '#50E3C2';
  const textColor = '#333333';

  return (
    <div className="assessment-container" style={{ fontFamily: 'Roboto', color: textColor }}>
      <h1 style={{ color: primaryColor }}>Skill Assessment</h1>

      {error && <p className="error-message">{error}</p>}
      {loading && <p className="loading-message">Loading...</p>}

      <div className="form-group">
        <label htmlFor="skill-select">Select Skill:</label>
        <select
          id="skill-select"
          value={selectedSkill}
          onChange={handleSkillChange}
          disabled={loading || skills.length === 0}
          style={{ borderColor: primaryColor, color: textColor }}
        >
          <option value="">--Select a Skill--</option>
          {skills.map(skill => (
            <option key={skill.id} value={skill.skill_name}>{skill.skill_name}</option>
          ))}
        </select>
      </div>

      {selectedSkill && (
        <div className="form-group">
          <label htmlFor="assessment-type-select">Select Assessment Type:</label>
          <select
            id="assessment-type-select"
            value={assessmentType}
            onChange={handleAssessmentTypeChange}
            disabled={loading}
            style={{ borderColor: primaryColor, color: textColor }}
          >
            <option value="">--Select Assessment Type--</option>
            <option value="quiz">Quiz (MCQ)</option>
            <option value="debug">Debug Task</option>
            <option value="challenge">Coding Challenge</option>
            <option value="explanation">Concept Explanation</option>
          </select>
        </div>
      )}

      {questions.length > 0 && !submitted && (
        <div className="questions-section">
          <h2>{assessmentType.charAt(0).toUpperCase() + assessmentType.slice(1)} Questions for {selectedSkill}</h2>
          {questions.map((q) => (
            <div key={q.id} className="question-item" style={{ border: `1px solid ${primaryColor}` }}>
              <p>{q.text}</p>
              {q.type === 'mcq' && (
                <div className="options-group">
                  {q.options.map(option => (
                    <label key={option} className="option-label">
                      <input
                        type="radio"
                        name={`question-${q.id}`}
                        value={option}
                        checked={userAnswers[q.id] === option}
                        onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                        style={{ accentColor: secondaryColor }}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              )}
              {(q.type === 'debug' || q.type === 'challenge') && (
                <div className="code-editor-placeholder">
                  <pre><code>{q.code || q.code_template}</code></pre>
                  <textarea
                    placeholder="Write your code here..."
                    value={userAnswers[q.id]?.code || ''}
                    onChange={(e) => handleCodeChange(q.id, e.target.value)}
                    rows={10}
                    className="code-input" // Add a class for styling code input
                    style={{ borderColor: primaryColor, color: textColor }}
                  />
                </div>
              )}
              {q.type === 'explanation' && (
                <textarea
                  placeholder="Explain the concept here..."
                  value={userAnswers[q.id] || ''}
                  onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                  rows={5}
                  className="explanation-input" // Add a class for styling explanation input
                  style={{ borderColor: primaryColor, color: textColor }}
                />
              )}
            </div>
          ))}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="submit-assessment-button"
            style={{ backgroundColor: secondaryColor }}
          >
            {loading ? 'Submitting...' : 'Submit Assessment'}
          </button>
        </div>
      )}

      {submitted && (
        <div className="submission-success" style={{ color: secondaryColor }}>
          <p>Assessment submitted successfully! Check your dashboard for results.</p>
          {/* You might want to redirect to the dashboard or display results here */}
        </div>
      )}
    </div>
  );
};

export default AssessmentSystem;
```