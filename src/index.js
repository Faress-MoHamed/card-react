import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
const skills = [
	{
		skill: "HTML+CSS",
		level: "advanced",
		color: "#2662EA",
	},
	{
		skill: "JavaScript",
		level: "advanced",
		color: "#EFD81D",
	},
	{
		skill: "Web Design",
		level: "advanced",
		color: "#C3DCAF",
	},
	{
		skill: "Git and GitHub",
		level: "intermediate",
		color: "#E84F33",
	},
	{
		skill: "React",
		level: "advanced",
		color: "#60DAFB",
	},
	{
		skill: "Svelte",
		level: "beginner",
		color: "#FF3B00",
	},
];

function App() {
	return (
		<div className="card">
			<Avatar />
			<div className="data">
				<Intro></Intro>
				<SkillList></SkillList>
			</div>
		</div>
	);
}
function Avatar() {
	return <img className="avatar" src="./one.jpeg" alt="Avatar" />;
}

function Intro() {
	return (
		<div>
			<h1>fares Mohamed</h1>
			<p>
				Full-stack web developer and teacher at Udemy. When not coding or
				preparing a course, I like to play board games, to cook (and eat), or to
				just enjoy the Portuguese sun at the beach.
			</p>
		</div>
	);
}
function SkillList() {
	return (
		<div className="skill-list">
			{skills.map((el) => {
				return (
					<Skill skill={el.skill} level={el.level} color={el.color}></Skill>
				);
			})}
			{/* <Skill skill="React" emoji="😍" bgcolor="red"></Skill>
			<Skill skill="HTML" emoji="❤" bgcolor="blue"></Skill>
			<Skill skill="CSS" emoji="🤞" bgcolor="green"></Skill>
			<Skill skill="JS" emoji="🎶" bgcolor="gold"></Skill> */}
		</div>
	);
}
function Skill({ skill, level, color }) {
	return (
		<div className="skill" style={{ backgroundColor: color }}>
			<span>{skill}</span>
			{level === "advanced" ? (
				<span>"💪"</span>
			) : level === "intermediate" ? (
				<span>"👍"</span>
			) : (
				<span>"👶"</span>
			)}
		</div>
	);
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
