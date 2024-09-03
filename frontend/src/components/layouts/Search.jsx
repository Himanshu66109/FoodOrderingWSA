import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <form action="">
      <div className="input-group">
        <input
          type="text"
          name=""
          id="search_field"
          className="form-control"
          placeholder="Search your favourite restaurant..."
        />
        <div className="input-group-append">
          <button id="search_btn" className="btn">
            <FaSearch className="fa fa-search" />
          </button>
        </div>
      </div>
    </form>
  );
}
