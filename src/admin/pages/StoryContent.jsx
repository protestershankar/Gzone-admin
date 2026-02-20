const StoryContent = () => {
  return (
    <div>
      <h1 className="admin-page-title">STORY & CONTENT</h1>

      <div className="admin-card mb-10">
        <div className="admin-section-title">STORYLINE</div>
        <div className="grid grid-cols-2 gap-6">
          <input className="admin-input" placeholder="Storyline Description" />
          <input className="admin-input" placeholder="Hero Background Image URL" />
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-section-title">GAMEPLAY</div>
        <div className="grid grid-cols-3 gap-6">
          <input className="admin-input" placeholder="Gameplay Text" />
          <input className="admin-input" placeholder="Gameplay Title" />
          <input className="admin-input" placeholder="Gameplay Title Description" />
        </div>
      </div>
    </div>
  );
};

export default StoryContent;