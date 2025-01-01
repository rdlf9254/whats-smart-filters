import React from "react";

import UploadTxt from "./UploadTxt/UploadTxt";

// interface SidebarProps {
//   titulo: string;
// }

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar d-flex flex-column flex-shrink-0 p-3">
      <div className="d-flex align-items-center justify-content-center w-100 mb-3 mb-md-0 me-md-auto gap-3 link-body-emphasis text-decoration-none">
        <i className="bi bi-chat-right-text icon txt-grey"></i>
        <span className="fs-5 txt-grey">Whats Smart Filters</span>
      </div>
      <hr></hr>

      <div className="filter-options gap-3">
        <UploadTxt></UploadTxt>
      </div>
    </div>
  );
};

export default Sidebar;
