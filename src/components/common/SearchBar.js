import React from 'react';

const SearchBar = () => {
    return (
        <div className="col-lg-3">
            <form className="navbar-form" role="search">
                <div className="input-group">
                    <input type="text" className="form-control search-input" placeholder="Search" name="q" />
                    <div className="input-group-btn search-btn">
                        <button className="btn btn-default rounded-circle" type="submit"><i className="fa fa-search"/></button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
