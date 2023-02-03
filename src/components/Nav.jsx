import SearchBar from "./SearchBar";
import {Link} from "react-router-dom";
function Nav(props) {
    return(
        <>
        <Link to="about">About</Link>
        <Link to="/home">Home</Link>
        <SearchBar onSearch={props.onSearch}></SearchBar>
        </>
    ) 
}
export default Nav;