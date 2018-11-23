import React, { Component } from 'react';

class Todo extends Component {
    state = {
        list: [
            {
                id: 1,
                title: '할일할일1'
            },
            {
                id: 2,
                title: '할일할일2'
            }
        ],
        text: '',
    }

    checkTodo = (event) => {
        const text = this.state.text;
        const list = [ ... this.state.list];
        list.push({
            id: 3,
            title: text
        })

        this.setState({list:list});

        event.preventDefault();
    }

    handleChange = (event) => {
        this.setState({text: event.target.value});
    }

    render() {
        return (
            <div>
                <h1>Todo</h1>
                {/* {this.state.text} <br/> */}
                <form onSubmit={this.checkTodo}>
                    <input type="text" onChange={this.handleChange} value={this.state.text}/>
                </form>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li key={index}>{item.title}</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Todo;