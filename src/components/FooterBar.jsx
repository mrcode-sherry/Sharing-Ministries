import React from 'react';

const FooterBar = () => {
  return (
    <div className="bg-[#00355e] text-white text-center py-3">
      <p className="text-sm">
        © Copyright {new Date().getFullYear()} Jesus Sharing Ministries. All rights reserved.
      </p>
    </div>
  );
};

export default FooterBar;
