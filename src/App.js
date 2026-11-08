import logo from './logo.svg';
import './App.css';

const labDetails = {
  course: 'Welcome to Fullstack Development - I',
  exercise: 'React JS Programming Week09 Lab exercise',
  studentId: '101567797',
  studentName: 'Akin Eludoyin',
  school: 'George Brown College, Toronto',
};

function LabScreen({ course, exercise, studentId, studentName, school }) {
  return (
    <main className="lab">
      <img className="lab-logo" src={logo} alt="React logo" />
      <h1>{course}</h1>
      <h2>{exercise}</h2>
      <p className="student-id">{studentId}</p>
      <p className="student-name">{studentName}</p>
      <p className="school">{school}</p>
    </main>
  );
}

export default function App() {
  return <LabScreen {...labDetails} />;
}
