import { v4 as uuidv4 } from "uuid";
export function Languages({langInfo,setLangInfo,langList,setLangList}) {
    return  <section className="languages">
    <h2>Languages</h2>
    <label htmlFor="addButton">
      <input type="text" placeholder="enter your language"  value={langInfo.language} onChange={(e)=>setLangInfo({...langInfo, language:e.target.value})}/>
      <button  onClick={addLang}>Add Language</button>
    </label>
    {langList.map((info)=>(
      <label key={info.id}>
      {info.language}:
      <select
        value={info.prof}
        onChange={(e) =>updateLangLevel(info.id, e.target.value) }
      >
        <option value="">Select level</option>
        <option value="none">none</option>
        <option value="Basic">Basic</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
        <option value="Fluent">Fluent</option>
        <option value="Native">Native</option>
      </select>
      </label>
    ))
    }
  </section>
  function addLang() {
    const languageName = langInfo.language.trim().toLowerCase();
    const alreadyExists = langList.some(
      (info) => info.language.toLowerCase() === languageName
    );

    if (languageName !== ""  && !alreadyExists) {
      setLangList([
        ...langList,
        { ...langInfo, id: uuidv4() }
      ]);
      setLangInfo({ language: "", prof: "none" });
    }
  }
  function updateLangLevel(id, newLevel) {
    const updated = langList.map(info =>
      info.id === id ? { ...info, prof: newLevel } : info
    );
    setLangList(updated);
  }
}