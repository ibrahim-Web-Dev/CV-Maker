export function Personal({ pInfo, setPInfo }) {
    return (
      <section className="personal">
        <h2>Personal Information</h2>
  
        <label htmlFor="name">
          Name Surname:
          <input
            id="name"
            type="text"
            name="name"
            placeholder="e.g. John Doe"
            onChange={(e) => setPInfo({ ...pInfo, name: e.target.value })}
          />
        </label>
  
        <label htmlFor="tel">
          Tel:
          <input
            id="tel"
            type="tel"
            name="tel"
            placeholder="e.g. +90 555 123 45 67"
            onChange={(e) => setPInfo({ ...pInfo, tel: e.target.value })}
          />
        </label>
  
        <label htmlFor="mail">
          Mail:
          <input
            id="mail"
            type="email"
            name="mail"
            placeholder="e.g. example@mail.com"
            onChange={(e) => setPInfo({ ...pInfo, email: e.target.value })}
          />
        </label>
  
        <label htmlFor="location">
          Location:
          <input
            id="location"
            type="text"
            name="location"
            placeholder="e.g. Ankara, Turkey"
            onChange={(e) => setPInfo({ ...pInfo, location: e.target.value })}
          />
        </label>
  
        <label htmlFor="site">
          Website:
          <input
            id="site"
            type="text"
            name="site"
            placeholder="e.g. www.johndoe.com"
            onChange={(e) => setPInfo({ ...pInfo, website: e.target.value })}
          />
        </label>
      </section>
    );
  }
  