const BasicInfo = () => {
  return (
    <div>
      <h1 className="admin-page-title">BASIC INFORMATION</h1>

      <div className="admin-card mb-10">
        <div className="admin-section-title">HERO SECTION</div>
        <div className="grid grid-cols-3 gap-6">
          <input className="admin-input" placeholder="Game Title" />
          <input className="admin-input" placeholder="Short Description" />
          <input className="admin-input" placeholder="Hero Background Image URL" />
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-section-title">SIDEBAR GAME INFO</div>

        <div className="grid grid-cols-3 gap-6 mb-6">
          <input className="admin-input" placeholder="Developer" />
          <input className="admin-input" placeholder="Publisher" />
          <input className="admin-input" placeholder="Release Date" />
        </div>

        <div className="grid grid-cols-3 gap-6">
          <input className="admin-input" placeholder="Genres" />
          <input className="admin-input" placeholder="Platforms" />
          <input className="admin-input" placeholder="Game Cover URL" />
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;