import React from 'react';

const MainContent = () => {
  return (
    <main className="p-4">
      <section id="overview" className="mb-8">
        <h2 className="text-xl font-bold mb-4">Overview</h2>
        {/* Overview content */}
      </section>
      <section id="reports" className="mb-8">
        <h2 className="text-xl font-bold mb-4">Reports</h2>
        {/* Reports content */}
      </section>
      <section id="analytics" className="mb-8">
        <h2 className="text-xl font-bold mb-4">Analytics</h2>
        {/* Analytics content */}
      </section>
      <section id="settings" className="mb-8">
        <h2 className="text-xl font-bold mb-4">Settings</h2>
        {/* Settings content */}
      </section>
    </main>
  );
};

export default MainContent;