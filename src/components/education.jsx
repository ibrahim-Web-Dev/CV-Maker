import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export function Education({ eInfo, setEInfo, eList, setEList }) {
    const [isEditing, setIsEditing] = useState(false);
    const [eduId, setEduId] = useState(null);
  return (
    <section className="education">
      <h2>Education</h2>

      <label htmlFor="school">
        School Name:
        <input
          id="school"
          type="text"
          name="school"
          value={eInfo.school}
          placeholder="e.g. Hacettepe University"
          onChange={(e) => setEInfo({ ...eInfo, school: e.target.value })}
        />
      </label>

      <label htmlFor="startDate">
        Start Date:
        <input
          id="startDate"
          type="date"
          name="startDate"
          value={eInfo.startDate}
          placeholder="e.g. 2021-09-01"
          onChange={(e) => setEInfo({ ...eInfo, startDate: e.target.value })}
        />
      </label>

      <label htmlFor="endDate">
        End Date:
        <input
          id="endDate"
          type="date"
          name="endDate"
          value={eInfo.endDate}
          placeholder="e.g. 2025-06-30"
          onChange={(e) => setEInfo({ ...eInfo, endDate: e.target.value })}
        />
      </label>

      <label htmlFor="major">
        Major:
        <input
          id="major"
          type="text"
          name="major"
          value={eInfo.major}
          placeholder="e.g. Computer Engineering"
          onChange={(e) => setEInfo({ ...eInfo, major: e.target.value })}
        />
      </label>

      <button onClick={addEducation}>Add Education</button>

      <div className="educations">
        {eList.map((info) => (
    <div key={info.id} className="ex" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
    <button onClick={() => changeEducation(info.id)} style={{ flex: 1 }}>
      {info.school}
    </button>
    <button onClick={() => deleteEducation(info.id)} style={{ marginLeft: "8px", background: "red", color: "white", border: "none", borderRadius: "4px", padding: "0 8px" }}>
      ✖
    </button>
  </div>
        ))}
      </div>
    </section>
  );

  function addEducation() {
    if (!isEditing&&eInfo.school && eInfo.startDate && eInfo.endDate && eInfo.major) {
      setEList([...eList, { ...eInfo, id: uuidv4() }]);
      setEInfo({ school: "", startDate: "", endDate: "", major: "" });
    }
    else if (isEditing&&eInfo.school && eInfo.startDate && eInfo.endDate && eInfo.major){
        eList.map((info)=>{
            if(info.id==eduId){
                const updated = eList.map((info) =>
                    info.id === eduId ? { ...eInfo, id: eduId } : info
                  );
                  setEList(updated);
                  setEInfo({ school: "", startDate: "", endDate: "", major: "" });
                  setIsEditing(false);
                  setEduId(null);
            }
        })
    }
  }
  function deleteEducation(id) {
    setEList(eList.filter((info) => info.id !== id));
  
    if (id === eduId) {
      setEInfo({ school: "", startDate: "", endDate: "", major: "" });
      setIsEditing(false);
      setEduId(null);
    }
  }
  
  function changeEducation(id){
    eList.map((info)=>{
        if(info.id==id){
            setEInfo({ school: info.school, startDate:  info.startDate, endDate: info.endDate, major: info.major });
            setEduId(id)
            setIsEditing(true)
        }
    })
  }
}
