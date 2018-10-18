
import React from 'react';
import {Treebeard} from 'react-treebeard';

import Prism from 'prismjs';
import './styles/prismjs.css';
import './styles/index.css';

import data, { map } from '../../data';
import * as filters from './filter';
import treeStyle from './styles/treeTheme';

class LeetCode extends React.Component {
    constructor(props){
        super(props);
        this.state = { data, content: '' };
        this.onToggle = this.onToggle.bind(this);
    }
    componentDidMount() {
        this.setState({ content: map['1-two-sum.js'] });
        Prism.highlightAll();
    }
    componentDidUpdate() {
        Prism.highlightAll();
    }
    onToggle(node, toggled){
        if(this.state.cursor){
            // this.state.cursor.active = false;
            this.setState({ cursor: { active: false }});
        }
        node.active = true;
        if(node.children){ node.toggled = toggled; }
        this.setState({ cursor: node });
        if (node.type === 'file') {
            this.setState({ content: map[node.name] });
        }
    }
    onFilterMouseUp(e) {
        const filter = e.target.value.trim();
        if (!filter) {
            return this.setState({data});
        }
        var filtered = filters.filterTree(data, filter);
        filtered = filters.expandFilteredNodes(filtered, filter);
        this.setState({data: filtered});
    }
    render(){
        return (
            <div className="section group">
                <div className="col span_1_of_2">
                    <br/>
                    <input className="form-control"
                                onKeyUp={this.onFilterMouseUp.bind(this)}
                                placeholder="Search the topic..."
                                type="text"/>
                    <br/><br/>
                    <Treebeard
                        style={treeStyle}
                        data={this.state.data}
                        onToggle={this.onToggle}
                    />
                </div>
                <div className="col span_2_of_2">
                    {
                        this.state.content && 
                        (<pre>
                            <code className="language-javascript">
                                {this.state.content}
                            </code>
                        </pre>)
                    }
                </div>
            </div>
        );
    }
}

export default LeetCode;
