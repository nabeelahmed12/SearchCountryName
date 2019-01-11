import React, { Component } from "react";
//import NameList from '../Component/NameList';
class Search extends Component {
  filterUpdate() {
    const val = this.myValue.value;

  //  console.log(val);
    this.props.filterUpdate(val)
  }

  render() {
  
  // console.log("filter text value", this.props.filterText);
    
    return (
      <form>
        <input
          type="text"
          placeholder="type to filter"
          ref={ (value) => (this.myValue = value)}
          onChange={this.filterUpdate.bind(this)}
        />
      </form>
    );
  }
}
export default Search;
