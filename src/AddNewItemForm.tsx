import React, {ChangeEvent, CSSProperties} from 'react';
import './App.css';
import s from "./newStyle.module.css";
import background from './assets/images/background.jpg'

type FunctionType = {
    addItem: (title: string)=> void
}

const styles: CSSProperties = {
    backgroundImage:`url(${background})`
};

class AddNewItemForm extends React.Component<FunctionType> {
    state = {
        error: false,
        title: ""
    };


    onAddItemClick = () => {
        let newText = this.state.title;
        this.setState({title: ""});

        if (newText === "") {
            this.setState({error: true});
        } else {
            this.setState({error: false});
            // передаём новый текст наружу
            this.props.addItem(newText);
        }
    };

    onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        this.setState({
            error: false,
            title: e.currentTarget.value
        });
    };

    onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        debugger
        if (e.key === "Enter") {
            this.onAddItemClick();
        }
    };


// Begin........................
    render = () => {
        let classNameForInput = this.state.error ? "error" : "";

        return (
            <div className={s.addSection}>
                <input className={s.taskInput} type="text" placeholder="New item name"
                       onChange={this.onTitleChanged}
                       onKeyPress={this.onKeyPress}
                       value={this.state.title}/>
                <button className={s.add} onClick={this.onAddItemClick}>Add</button>
            </div>

        );
    }
}

export default AddNewItemForm;

