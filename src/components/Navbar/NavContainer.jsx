
import {connect} from "react-redux";
import Nav from "./Nav";


let mapStateToProps = (state) => {
    return {
        navbar: state.navbar
    };
};

let mapDispatchToProps = () => {
    return {

    }
}

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);

export default NavContainer;
