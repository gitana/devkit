import React from "react";

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
        this.props.history.push(`/search?text=${this.state.searchText}`, this.state)
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

export default NavForm