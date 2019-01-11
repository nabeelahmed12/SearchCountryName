import React, { Component } from "react";
import NameList from "./Component/NameList";
import Search from "./Component/Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ""
    };
  }
  filterUpdate(value) {
    // console.log('val', value)
    this.setState({
      filterText: value
    });
  }

  render() {
    // console.log(
    //   "filtertext state from parent component",
    //   this.state.filterText
    // );
    return (
      <div>
        <Search
          filterUpdate={this.filterUpdate.bind(this)}
          filterText={this.state.filterText}
        />

        <NameList filterText={this.state.filterText} data={this.props.data} />
      </div>
    );
  }
}

export default App;
