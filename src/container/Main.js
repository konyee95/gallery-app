import React, { Component } from 'react';
import { connect } from "react-redux";
import { getData } from "../actions";
import Header from "../components/Header";
import Gallery from "../components/Gallery";

class Main extends Component {
    componentDidMount() {
        this.props.getData("matiascorea")
    }

    render() { 
        return ( 
            <React.Fragment>
                <Header />
                <Gallery />
            </React.Fragment>
         );
    }
}

const mapStateToProps = ({ user }) => {
    return {
        user
    }
}

const mapDispatchToProps = {
    getData
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Main);