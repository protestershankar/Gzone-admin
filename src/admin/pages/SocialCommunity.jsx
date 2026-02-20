const SocialCommunity = () => {
  return (
    <div>
      <h1 className="admin-page-title">SOCIAL & COMMUNITY</h1>

      <div className="admin-card">
        <div className="admin-section-title">JOIN OUR COMMUNITY</div>

        <div className="grid grid-cols-3 gap-6">
          <input className="admin-input" placeholder="Instagram URL" />
          <input className="admin-input" placeholder="Facebook URL" />
          <input className="admin-input" placeholder="YouTube URL" />
        </div>
      </div>
    </div>
  );
};

export default SocialCommunity;