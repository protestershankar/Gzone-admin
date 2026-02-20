const StoreExtras = () => {
  return (
    <div>
      <h1 className="admin-page-title">STORE & EXTRAS</h1>

      <div className="admin-card mb-10">
        <div className="admin-section-title">GET GAME</div>
        <input className="admin-input" placeholder="Affiliate Link" />
      </div>

      <div className="admin-card mb-10">
        <div className="admin-section-title">DLCS</div>
        <input className="admin-input" placeholder="DLC Points (listed)" />
      </div>

      <div className="admin-card">
        <div className="admin-section-title">AWARDS & ACHIEVEMENTS</div>
        <input className="admin-input" placeholder="Achievement Points (listed)" />
      </div>
    </div>
  );
};

export default StoreExtras;