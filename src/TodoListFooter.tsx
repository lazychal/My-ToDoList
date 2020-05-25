import React from 'react';
import '../src/App.css';

type FuncType = {
    changeFilter: (newFilterValue: string)=> void
    filterValue: string
}

class TodoListFooter extends React.Component<FuncType> {
    // state = {
    //     isHidden: false
    // };

    onAllFilterClick = () => { this.props.changeFilter("All") };
    onCompletedFilterClick = () => { this.props.changeFilter("Completed") };
    onActiveFilterClick = () => { this.props.changeFilter("Active") };
    // onShowFiltersClick = () => { this.setState({isHidden: true}) };
    // onHideFiltersClick = () => { this.setState({isHidden: false}) };

    render = () => {

        let classForAll = this.props.filterValue === "All" ? "filter-active" : "";
        let classForCompleted = this.props.filterValue === "Completed" ? "filter-active" : "";
        let classForActive = this.props.filterValue === "Active" ? "filter-active" : "";

        return (
            <div className="todoList-footer">
                {/*{ !this.state.isHidden && <div>*/}
                     <i onClick={ this.onAllFilterClick } id='all' className={classForAll}>All</i>
                     <i onClick={ this.onCompletedFilterClick } className={classForCompleted}>Completed</i>
                     <i onClick={ this.onActiveFilterClick } id='active' className={classForActive}>Active</i>
                {/*  </div>*/}
                {/*}*/}
                {/*{ !this.state.isHidden && <span onClick={ this.onShowFiltersClick }>hide</span> }*/}
                {/*{ this.state.isHidden && <span onClick={ this.onHideFiltersClick }>show</span> }*/}
            </div>
        );
    }
}

export default TodoListFooter;

