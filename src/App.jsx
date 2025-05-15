import { useState } from 'react';
import './App.css'
import { Education } from './compenents/education';
import { Personal } from './compenents/personal';
import { Experience } from './compenents/Experience';
function App() {
  const [eList,setEList] = useState([]);
  const [exList,setExList] = useState([]);
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
  return (
    <>
      <header className="head">CV MAKER</header>

      <aside className="left">

        <Personal pInfo={pInfo}  setPInfo={setPInfo}/>
        <Education eInfo={eInfo} setEInfo={setEInfo} eList={eList} setEList={setEList} />
        <Experience exInfo={exInfo} setExInfo={setExInfo} exList={exList} setExList={setExList}/>
        <section className="skills">
          <h2>Skills</h2>
        </section>

        <section className="languages">
          <h2>Languages</h2>
        </section>
      </aside>

      <main className="main">
        <section className='showPersonal' >
        <h1>{pInfo.name}</h1>
        <h1>{pInfo.tel}</h1>
        <h1>{pInfo.email}</h1>
        <h1>{pInfo.location}</h1>
        <h1>{pInfo.website}</h1>
        </section>
        <section className='showEducation'>
          {
            eList.map((info)=>{

              return <div key={info.id}>
                school {info.school} start {info.startDate} end {info.endDate} major {info.major}
              </div>
            })
          }
        </section>
      </main>
    </>
  )

  
}

export default App
