const QuickOverview = () => {
  return (
    <div>
      <h1 className="admin-page-title">QUICK OVERVIEW</h1>

      <div className="admin-card mb-10">
        <div className="admin-section-title">QUICK CONTROL OVERVIEW</div>
        <div className="grid grid-cols-2 gap-6">
          <input className="admin-input" placeholder="QCO Title" />
          <input className="admin-input" placeholder="QCO Description" />
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-section-title">MODES</div>
        <div className="grid grid-cols-2 gap-6">
          <input className="admin-input" placeholder="Mode Title" />
          <input className="admin-input" placeholder="Mode Description" />
        </div>
      </div>
    </div>
  );
};

export default QuickOverview;