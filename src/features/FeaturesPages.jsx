
import React, { useEffect, useState } from "react";
import {
  Plus, Trash2, Search, Clock, Play, Pause,
  RotateCcw, CheckCircle2, BookOpen, Target
} from "lucide-react";
import "./FeaturePages.css";

const PAGE_CONFIG = {
  "Flashcards": {
    table: "flashcards",
    title: "Flashcards",
    fields: [
      { name: "front", label: "Question / Front side", required: true },
      { name: "back", label: "Answer / Back side", required: true },
      { name: "topic", label: "Topic" }
    ]
  },
  "Formulas": {
    table: "formulas",
    title: "Formula Library",
    fields: [
      { name: "name", label: "Formula name", required: true },
      { name: "formula", label: "Formula", required: true },
      { name: "description", label: "Explanation" },
      { name: "topic", label: "Subject / Topic" }
    ]
  },
  "Revision Scheduler": {
    table: "revision_tasks",
    title: "Revision Scheduler",
    fields: [
      { name: "topic", label: "Topic to revise", required: true },
      { name: "due_date", label: "Revision date", type: "date" },
      { name: "notes", label: "Notes" }
    ]
  },
  "Project Laboratory": {
    table: "projects",
    title: "Project Laboratory",
    fields: [
      { name: "name", label: "Project name", required: true },
      { name: "technology", label: "Technology" },
      { name: "status", label: "Status" },
      { name: "description", label: "Project description" },
      { name: "github_url", label: "GitHub URL" }
    ]
  },
  "Career & Certificates": {
    table: "career_items",
    title: "Career & Certificates",
    fields: [
      { name: "name", label: "Certificate / Career goal", required: true },
      { name: "provider", label: "Provider / Organization" },
      { name: "status", label: "Status" },
      { name: "date", label: "Completion / Target date", type: "date" },
      { name: "url", label: "Certificate URL" }
    ]
  },
  "Dataset Library": {
    table: "datasets",
    title: "Dataset Library",
    fields: [
      { name: "name", label: "Dataset name", required: true },
      { name: "source", label: "Dataset source" },
      { name: "category", label: "Category" },
      { name: "url", label: "Dataset URL" },
      { name: "description", label: "Description" }
    ]
  }
};

export function FeatureManager({
  page,
  items = [],
  onAdd,
  onDelete
}) {
  const config = PAGE_CONFIG[page];
  const [form, setForm] = useState({});
  const [search, setSearch] = useState("");
  const [flipped, setFlipped] = useState({});

  if (!config) return null;

  const filtered = items.filter(item =>
    Object.values(item).join(" ").toLowerCase().includes(search.toLowerCase())
  );

  function updateField(name, value) {
    setForm(previous => ({ ...previous, [name]: value }));
  }

  async function submitForm(e) {
    e.preventDefault();

    const requiredFields = config.fields.filter(field => field.required);
    const missing = requiredFields.some(field => !String(form[field.name] || "").trim());

    if (missing) return;

    await onAdd(config.table, form);
    setForm({});
  }

  return (
    <section className="feature-page">
      <div className="feature-heading">
        <div>
          <p className="feature-eyebrow">YOUR LEARNING WORKSPACE</p>
          <h1>{config.title}</h1>
          <p>Organise your learning and keep everything in one place.</p>
        </div>
        <span className="feature-count">{items.length} items</span>
      </div>

      <form className="feature-form" onSubmit={submitForm}>
        <h3><Plus size={18} /> Add new item</h3>

        {config.fields.map(field => (
          <label key={field.name}>
            {field.label}
            {field.name === "description" ||
             field.name === "notes" ||
             field.name === "back" ? (
              <textarea
                value={form[field.name] || ""}
                required={field.required}
                onChange={e => updateField(field.name, e.target.value)}
                rows="3"
              />
            ) : (
              <input
                type={field.type || "text"}
                value={form[field.name] || ""}
                required={field.required}
                onChange={e => updateField(field.name, e.target.value)}
              />
            )}
          </label>
        ))}

        <button className="feature-primary" type="submit">
          <Plus size={16} /> Save item
        </button>
      </form>

      <div className="feature-search">
        <Search size={17} />
        <input
          placeholder={`Search ${config.title.toLowerCase()}...`}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="feature-grid">
        {filtered.map(item => (
          <article className="feature-card" key={item.id}>
            {page === "Flashcards" ? (
              <>
                <div className="flashcard-content">
                  <small>{flipped[item.id] ? "ANSWER" : "QUESTION"}</small>
                  <h3>{flipped[item.id] ? item.back : item.front}</h3>
                </div>
                <button
                  className="feature-secondary"
                  onClick={() => setFlipped(p => ({
                    ...p,
                    [item.id]: !p[item.id]
                  }))}
                >
                  Flip card
                </button>
              </>
            ) : (
              <>
                <h3>{item.name || item.topic}</h3>
                {Object.entries(item).map(([key, value]) => {
                  if (["id", "user_id", "created_at", "name", "topic"].includes(key)) {
                    return null;
                  }
                  if (!value) return null;

                  return (
                    <p key={key}>
                      <strong>{key.replaceAll("_", " ")}:</strong> {String(value)}
                    </p>
                  );
                })}
                {item.topic && <span className="feature-tag">{item.topic}</span>}
                {item.github_url && (
                  <a href={item.github_url} target="_blank" rel="noreferrer">
                    Open GitHub
                  </a>
                )}
                {item.url && (
                  <a href={item.url} target="_blank" rel="noreferrer">
                    Open resource
                  </a>
                )}
              </>
            )}

            <button
              className="feature-delete"
              onClick={() => onDelete(config.table, item)}
              title="Delete item"
            >
              <Trash2 size={16} />
            </button>
          </article>
        ))}

        {filtered.length === 0 && (
          <p className="feature-empty">No items found. Add your first item above.</p>
        )}
      </div>
    </section>
  );
}

export function AnalyticsPage({ topics = [], notes = [], attempts = [], days = [] }) {
  const completed = topics.filter(topic => topic.completed).length;
  const percent = topics.length
    ? Math.round((completed / topics.length) * 100)
    : 0;

  const average = attempts.length
    ? Math.round(
        attempts.reduce((sum, attempt) =>
          sum + (attempt.total ? attempt.score / attempt.total * 100 : 0), 0
        ) / attempts.length
      )
    : 0;

  return (
    <section className="feature-page">
      <div className="feature-heading">
        <div>
          <p className="feature-eyebrow">MEASURE YOUR PROGRESS</p>
          <h1>Learning Analytics</h1>
          <p>Understand your learning progress and consistency.</p>
        </div>
      </div>

      <div className="analytics-grid">
        <div className="analytics-card">
          <BookOpen />
          <h2>{completed}/{topics.length}</h2>
          <p>Topics completed</p>
        </div>

        <div className="analytics-card">
          <Target />
          <h2>{percent}%</h2>
          <p>Roadmap completion</p>
        </div>

        <div className="analytics-card">
          <CheckCircle2 />
          <h2>{average}%</h2>
          <p>Average quiz score</p>
        </div>

        <div className="analytics-card">
          <Clock />
          <h2>{days.length}</h2>
          <p>Study days recorded</p>
        </div>

        <div className="analytics-card">
          <BookOpen />
          <h2>{notes.length}</h2>
          <p>Saved notes</p>
        </div>
      </div>

      <div className="feature-form">
        <h3>Roadmap progress</h3>
        <div className="analytics-progress">
          <div style={{ width: `${percent}%` }} />
        </div>
        <p>{percent}% completed</p>
      </div>

      <div className="feature-form">
        <h3>Recent quiz attempts</h3>
        {attempts.slice(0, 5).map(attempt => (
          <p key={attempt.id}>
            {attempt.subject}: {attempt.score}/{attempt.total}
          </p>
        ))}
        {!attempts.length && <p>No quiz attempts yet.</p>}
      </div>
    </section>
  );
}

export function FocusPage({ onStudyComplete }) {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [goal, setGoal] = useState("");
  const [goals, setGoals] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("aiml-focus-goals") || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => {
      setSeconds(previous => {
        if (previous > 0) return previous - 1;

        if (minutes > 0) {
          setMinutes(previousMinutes => previousMinutes - 1);
          return 59;
        }

        clearInterval(timer);
        setRunning(false);
        onStudyComplete?.();
        return 0;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [running, minutes, onStudyComplete]);

  function addGoal(e) {
    e.preventDefault();
    if (!goal.trim()) return;

    const next = [
      ...goals,
      { id: crypto.randomUUID(), title: goal.trim(), done: false }
    ];

    setGoals(next);
    localStorage.setItem("aiml-focus-goals", JSON.stringify(next));
    setGoal("");
  }

  function toggleGoal(id) {
    const next = goals.map(item =>
      item.id === id ? { ...item, done: !item.done } : item
    );

    setGoals(next);
    localStorage.setItem("aiml-focus-goals", JSON.stringify(next));
  }

  function resetTimer() {
    setRunning(false);
    setMinutes(25);
    setSeconds(0);
  }

  return (
    <section className="feature-page">
      <div className="feature-heading">
        <div>
          <p className="feature-eyebrow">STAY CONSISTENT</p>
          <h1>Focus & Daily Goals</h1>
          <p>Use focused study sessions and track your daily targets.</p>
        </div>
      </div>

      <div className="focus-card">
        <Clock size={25} />
        <h2>Pomodoro Timer</h2>

        <div className="timer-display">
          {String(minutes).padStart(2, "0")}:
          {String(seconds).padStart(2, "0")}
        </div>

        <div className="timer-actions">
          <button
            className="feature-primary"
            onClick={() => setRunning(value => !value)}
          >
            {running ? <Pause size={16} /> : <Play size={16} />}
            {running ? "Pause" : "Start"}
          </button>

          <button className="feature-secondary" onClick={resetTimer}>
            <RotateCcw size={16} /> Reset
          </button>
        </div>
      </div>

      <form className="feature-form" onSubmit={addGoal}>
        <h3>Daily goals</h3>
        <input
          value={goal}
          onChange={e => setGoal(e.target.value)}
          placeholder="Example: Complete Python functions"
        />
        <button className="feature-primary" type="submit">
          <Plus size={16} /> Add goal
        </button>

        {goals.map(item => (
          <label className="goal-row" key={item.id}>
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => toggleGoal(item.id)}
            />
            <span className={item.done ? "goal-done" : ""}>
              {item.title}
            </span>
          </label>
        ))}
      </form>
    </section>
  );
}
