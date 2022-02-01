import React from "react";
import { useNavigate } from 'react-router-dom';

class NavForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: null
        }

        this.submitHandler = this.submitHandler.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(event) {
        const target = event.target
        this.setState({
            searchText: target.value
        })
    }

    submitHandler(event) {
        event.preventDefault()
        if (this.state.searchText) {
            this.props.navigate(`/search?text=${this.state.searchText}`)
        }
    }

    render() {
        return (
            <form className="navbar-form" onSubmit={this.submitHandler}>
                <div className="form-group">
                    <input name="text" type="text" className="form-control" placeholder="Search" onChange={this.handleInput}></input>
                </div>
                <button type="submit" className="btn btn-default btn-search">Search</button>
            </form>
        )
    }
}

const withRouter = WrappedComponent => props => {
    const navigate = useNavigate();

    return (
        <WrappedComponent
            {...props}
            navigate={navigate}
        />
    );
};

export default withRouter(NavForm);
