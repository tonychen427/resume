import React from "react";
import "./styles/index.css";

class TreeView extends React.Component {
    render() {
        return (
        <ul className="tree">
            {
                this.props.data.children.map((catagory, index) => {
                    return (
                        <li key={index}>
                            <input type="checkbox" id={catagory.name + 'ck'} />
                            <label className="tree_label" htmlFor={catagory.name + 'ck'}>{catagory.name}</label>
                            <ul>
                                {
                                    catagory.children.map((item) => {
                                        return (
                                            <li key={item.name} onClick={ () => { this.props.onItemClick(item) }}>
                                                <span className="tree_label">{item.name}</span>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </li>
                    )
                })
            }
        </ul>
        );
    }
}

export default TreeView;
