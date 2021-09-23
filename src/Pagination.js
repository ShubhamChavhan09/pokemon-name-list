import React from "react";

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div className="btn-box">
      {gotoPrevPage && (
        <button className="btn" onClick={gotoPrevPage}>
          Previous
        </button>
      )}
      {gotoNextPage && (
        <button className="btn" onClick={gotoNextPage}>
          Next
        </button>
      )}
    </div>
  );
}
