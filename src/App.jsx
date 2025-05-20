import { useState } from 'react';
import './App.css'
import { Education } from './components/education';
import { Personal } from './components/personal';
import { Experience } from './components/Experience';
import { Languages } from './components/Languages';
import { Skills } from './components/Skills';
function App() {
  const [eList,setEList] = useState([]);
  const [exList,setExList] = useState([]);
  const [langList,setLangList] = useState([{language:"English",prof:"none" ,id:"12324"}]);
  const [skillInfo ,setSkillInfo] = useState("")
  const [skillList,setSkillList] = useState([]);
  const [pInfo, setPInfo] = useState({
    name:"",
    tel:"",
    email:"",
    location:"",
    website:""
  });
  
  const [eInfo, setEInfo]=useState({
    school:"",
    startDate:"",
    endDate:"",
    major:"",
  })
  const [exInfo, setExInfo]=useState({
    company:"",
    totalTime:"",
    title:"",
  })
  const [langInfo,setLangInfo]=useState({language:"",prof:"none"})
  return (
    <>
      <header className="head">CV MAKER</header>

      <aside className="left">

        <Personal pInfo={pInfo}  setPInfo={setPInfo}/>
        <Education eInfo={eInfo} setEInfo={setEInfo} eList={eList} setEList={setEList} />
        <Experience exInfo={exInfo} setExInfo={setExInfo} exList={exList} setExList={setExList}/>
        <Skills skillInfo={skillInfo} setSkillInfo={setSkillInfo} skillList={skillList} setSkillList={setSkillList} />

      <Languages langInfo={langInfo} setLangInfo={setLangInfo} langList={langList} setLangList={setLangList} />
      </aside>

  <main className="main">
    <div className="cv">
      <section className="cv-section personal">
        <h2>Personal Information</h2>
        <p><strong>Name:</strong> {pInfo.name}</p>
        <p><strong>Tel:</strong> {pInfo.tel}</p>
        <p><strong>Email:</strong> {pInfo.email}</p>
        <p><strong>Location:</strong> {pInfo.location}</p>
        <p><strong>Website:</strong> {pInfo.website}</p>
      </section>

      <section className="cv-section education">
        <h2>Education</h2>
        {eList.map((info) => (
          <div key={info.id} className="cv-item">
            <p><strong>School:</strong> {info.school}</p>
            <p><strong>Start:</strong> {info.startDate} <strong>End:</strong> {info.endDate}</p>
            <p><strong>Major:</strong> {info.major}</p>
          </div>
        ))}
      </section>

      <section className="cv-section experience">
        <h2>Experience</h2>
        {exList.map((info) => (
          <div key={info.id} className="cv-item">
            <p><strong>Company:</strong> {info.company}</p>
            <p><strong>Total Time:</strong> {info.totalTime}</p>
            <p><strong>Title:</strong> {info.title}</p>
          </div>
        ))}
      </section>

      <section className="cv-section languages">
        <h2>Languages</h2>
        {langList.map((info) => (
          <p key={info.id}>{info.language} – {info.prof}</p>
        ))}
      </section>

      <section className="cv-section skills">
        <h2>Skills</h2>
        <ul>
          {skillList.map((s) => (
            <li key={s.id}>{s.name}</li>
          ))}
        </ul>
      </section>
    </div>
  </main>
    </>
  )

  
}

export default App
