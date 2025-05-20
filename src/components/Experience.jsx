import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function Experience({ exInfo, setExInfo, exList, setExList }) {
  const [isEditing, setIsEditing] = useState(false);
  const [exId, setExId] = useState(null);

  function addExperience() {
    const isFilled = exInfo.company && exInfo.title && exInfo.totalTime;
    if (!isFilled) return;

    if (!isEditing) {
      // Yeni deneyim ekle
      setExList([...exList, { ...exInfo, id: uuidv4() }]);
    } else {
      // Var olanı güncelle
      const updated = exList.map((info) =>
        info.id === exId ? { ...exInfo, id: uuidv4() } : info
      );
      setExList(updated);
      setIsEditing(false);
      setExId(null);
    }

    // Alanları temizle
    setExInfo({ company: "", totalTime: "", title: "" });
  }

  function changeExperience(id) {
    const info = exList.find((info) => info.id === id);
    if (info) {
      setExId(id);
      setIsEditing(true);
      setExInfo({
        company: info.company || "",
        totalTime: info.totalTime || "",
        title: info.title || "",
      });
    }
  }

  function deleteExperience(id) {
    setExList(exList.filter((info) => info.id !== id));
    setExInfo({ company: "", title: "", totalTime: "" });
    setIsEditing(false);
    setExId(null);
  }

  return (
    <section className="experience">
      <h2>Experience</h2>

      <label htmlFor="company">
        Company:
        <input
          type="text"
          name="company"
          id="company"
          value={exInfo.company || ""}
          onChange={(e) =>
            setExInfo({ ...exInfo, company: e.target.value })
          }
        />
      </label>

      <label htmlFor="totalTime">
        Total Time:
        <input
          type="number"
          name="totalTime"
          id="totalTime"
          value={exInfo.totalTime || ""}
          onChange={(e) =>
            setExInfo({ ...exInfo, totalTime: e.target.value })
          }
        />
      </label>

      <label htmlFor="title">
        Title:
        <input
          type="text"
          id="title"
          name="title"
          value={exInfo.title || ""}
          onChange={(e) =>
            setExInfo({ ...exInfo, title: e.target.value })
          }
        />
      </label>

      <button onClick={addExperience}>
        {isEditing ? "Update Experience" : "Add Experience"}
      </button>

      <div className="experiences">
        {Array.isArray(exList) &&
          exList.map((info) => (
            <div
              key={info.id}
              className="ex"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <button
                onClick={() => changeExperience(info.id)}
                style={{ flex: 1 }}
              >
                {info.company}
              </button>
              <button
                onClick={() => deleteExperience(info.id)}
                style={{
                  marginLeft: "8px",
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  padding: "0 8px",
                }}
              >
                ✖
              </button>
            </div>
          ))}
      </div>
    </section>
  );
}
