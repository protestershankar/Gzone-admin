const SystemRequirements = () => {
  return (
    <div>
      <h1 className="admin-page-title">SYSTEM REQUIREMENTS</h1>

      <div className="admin-card mb-10">
        <div className="admin-section-title">MINIMUM REQUIREMENTS</div>
        <div className="grid grid-cols-3 gap-6">
          <input className="admin-input" placeholder="Operating System" />
          <input className="admin-input" placeholder="Processor" />
          <input className="admin-input" placeholder="Memory" />
          <input className="admin-input" placeholder="Graphics" />
          <input className="admin-input" placeholder="Storage" />
          <input className="admin-input" placeholder="DirectX Version" />
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-section-title">RECOMMENDED REQUIREMENTS</div>
        <div className="grid grid-cols-3 gap-6">
          <input className="admin-input" placeholder="Operating System" />
          <input className="admin-input" placeholder="Processor" />
          <input className="admin-input" placeholder="Memory" />
          <input className="admin-input" placeholder="Graphics" />
          <input className="admin-input" placeholder="Storage" />
          <input className="admin-input" placeholder="DirectX Version" />
        </div>
      </div>
    </div>
  );
};

export default SystemRequirements;