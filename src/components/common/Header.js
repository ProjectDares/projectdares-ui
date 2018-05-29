import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-brand d-flex">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Dares</a>
                </div>
                <div className="col-lg-3">
                    <form className="navbar-form" role="search">
                        <div className="input-group">
                            <input type="text" className="form-control search-input" placeholder="Search" name="q" />
                            <div className="input-group-btn">
                                <button className="btn btn-default" type="submit"><i className="fa fa-search"/></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;
