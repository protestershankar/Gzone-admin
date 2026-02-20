const ReviewsCommunity = () => {
  return (
    <div>
      <h1 className="admin-page-title">REVIEWS & COMMUNITY</h1>

      <div className="admin-card mb-10">
        <div className="admin-section-title">REVIEWS</div>
        <div className="grid grid-cols-3 gap-6">
          <input className="admin-input" placeholder="Expert Review 1" />
          <input className="admin-input" placeholder="Expert Review 2" />
          <input className="admin-input" placeholder="Best of All" />
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-section-title">COMMUNITY HUB</div>
        <input className="admin-input" placeholder="User Rating" />
      </div>
    </div>
  );
};

export default ReviewsCommunity;