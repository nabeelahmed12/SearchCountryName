import React, { Component } from "react";

class NameList extends Component {
  render() {
    const { data, filterText } = this.props;
    //filtertext is to access single variable name

    //  console.log('data is', data);

    const nameList = data
      .filter(name => {
        return name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
      })

      .filter(name => {
        return name.toLowerCase().indexOf(filterText.toLowerCase()) >= -1;
      
      })

      .map(name => {
        return <li>{name}</li>;
      });

    return (
      <div>
        {<p>filter value is: {this.props.filterText}</p>}

        <ul>
          <li> {nameList}</li>
        </ul>
      </div>
    );
  }
}
export default NameList;
