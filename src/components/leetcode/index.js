
import React from 'react';
import TreeView from './treeview';
import Prism from 'prismjs';
import './styles/prismjs.css';
import './styles/index.css';

import data, { map } from '../../data';
import * as filters from './filter';

class LeetCode extends React.Component {
    constructor(props){
        super(props);
        const firstFile = data.children[0].children[0].name;
        this.state = { data, content: map[firstFile], name: firstFile };
    }

    componentDidMount() {
        Prism.highlightAll();
    }
    
    componentDidUpdate() {
       Prism.highlightAll();
    }

    OnItemClick = (node) => {
        this.setState({ content: map[node.name], name: node.name });
    }

    onFilterMouseUp = (e) => {
        const filter = e.target.value.trim();
        if (!filter) { return this.setState({data}); }
        var filtered = filters.filterTree(data, filter);
        filtered = filters.expandFilteredNodes(filtered, filter);
        this.setState({data: filtered});
    }

    render(){
        return (
            <div className="section group">
                <div className="col span_1_of_2">
                    <input className="form-control"
                                onKeyUp={ this.onFilterMouseUp }
                                placeholder="Search the topic..."
                                type="text"/>
                    <br/>
                    <TreeView data={this.state.data} onItemClick={ this.OnItemClick }></TreeView>
                </div>
                <div className="col span_2_of_2">
                    <span>{ this.state.name}</span>
                    <br/> <br/>
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
