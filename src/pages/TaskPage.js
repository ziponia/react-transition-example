import React from 'react';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

class TaskPage extends React.Component {

    taskId = 0;

    constructor(props) {
        super(props);
        this.state = {
            formVisible: false,
            taskName: '',
            taskList: []
        }
    }

    handleTaskInput = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleAddTask = e => {
        e.preventDefault();
        this.setState({
            ...this.state,
            taskList: this.state.taskList.concat(Object.assign({}, {
                taskId: this.taskId++,
                taskName: this.state.taskName
            })),
            taskName: ''
        })
    }

    handleEnter = e => {
        if (e.key === 'Enter' ) {
            this.handleAddTask(e);
        }
    }

    render() {
        return (
            <div className="wrap">
                Task Page!!!
            <button onClick={() => this.setState({ formVisible: !this.state.formVisible })}>Form Visible Toggle</button>

                <CSSTransition timeout={300} classNames="fade" in={this.state.formVisible} unmountOnExit>
                    <div>
                        <input type="text"
                            onChange={this.handleTaskInput}
                            name="taskName"
                            value={this.state.taskName}
                            onKeyDown={this.handleEnter}
                        />
                        <button onClick={this.handleAddTask}>ADD</button>
                    </div>
                </CSSTransition>

                {/* Task List */}

                <ul>
                    <TransitionGroup>
                        {this.state.taskList.map(item => (
                            <CSSTransition timeout={300} classNames="fade" key={item.taskId}>
                                <li>
                                    {item.taskName}
                                </li>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ul>
            </div>
        )
    }
}

export default TaskPage