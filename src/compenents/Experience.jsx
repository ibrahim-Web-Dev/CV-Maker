import { v4 as uuidv4 } from "uuid"
export function Experience({exInfo, setExInfo, exList, setExList}){ 
    return <section className="experience">
    <h2>Experience</h2>
    <label htmlFor="company">
        Company : <input type="text" name="company" id="company" value={exInfo.company} onChange={(e)=>setExInfo({...exInfo , company:e.target.value})}/>
    </label>
    <label htmlFor="totalTime">
        total Time : <input type="number" name="totalTime" id="totalTime" value={exInfo.totalTime} onChange={(e)=>setExInfo({...exInfo, totalTime:e.target.value})} />
    </label>
    <label htmlFor="title">
        title : <input type="text" id="title" name="title" value={exInfo.title} onChange={e=>setExInfo({...exInfo, title:e.target.value})}/>
    </label>
    <button onClick={addExperience}>Add Experience</button>
  </section>
  function addExperience(){
    if(exInfo.company&&exInfo.title&&exInfo.totalTime){
    setExList(...exList,{...exInfo, id:uuidv4()})
    setExInfo({company:"",totalTime:"",title:""})
    }
  }
}