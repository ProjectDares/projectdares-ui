import React from 'react';
import HeaderLogo from "./HeaderLogo";
import SearchBar from "./SearchBar";

const Header = () => {
    return (
        <nav className="navbar navbar-brand d-flex dares-header">
            <div className="container-fluid">
                <HeaderLogo />
                <SearchBar/>
            </div>
        </nav>
    );
};

export default Header;
