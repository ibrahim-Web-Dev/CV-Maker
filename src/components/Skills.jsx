import { v4 as uuidv4 } from "uuid";

export function Skills({ skillInfo, setSkillInfo, skillList, setSkillList }) {
  function addSkill() {
    const skillName = skillInfo.trim().toLowerCase();
    const alreadyExists = skillList.some(
      (s) => s.name.toLowerCase() === skillName
    );

    if (skillName !== "" && !alreadyExists) {
      setSkillList([...skillList, { id: uuidv4(), name: skillInfo }]);
      setSkillInfo("");
    }
  }

  function deleteSkill(id) {
    setSkillList(skillList.filter((s) => s.id !== id));
  }

  return (
    <section className="skills">
      <h2>Skills</h2>

      <label>
        <input
          type="text"
          placeholder="Enter a skill"
          value={skillInfo}
          onChange={(e) => setSkillInfo(e.target.value)}
        />
        <button onClick={addSkill}>Add Skill</button>
      </label>

      <ul>
        {skillList.map((s) => (
          <li key={s.id} style={{ marginTop: "6px" }}>
            {s.name}
            <button
              onClick={() => deleteSkill(s.id)}
              style={{
                marginLeft: "10px",
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "4px",
                padding: "0 6px"
              }}
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
