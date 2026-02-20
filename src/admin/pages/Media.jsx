const Media = () => {
  return (
    <div>
      <h1 className="admin-page-title">MEDIA</h1>

      <div className="admin-card">
        <div className="admin-section-title">CAROUSEL</div>
        <div className="grid grid-cols-2 gap-6">
          <input className="admin-input" placeholder="YouTube Official Video URL" />
          <input className="admin-input" placeholder="Cloud Media Upload URL" />
        </div>
      </div>
    </div>
  );
};

export default Media;