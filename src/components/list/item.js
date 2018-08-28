import React from "react";

const ListItem = props => (
  <tr key="item.id">
    <td>{props.data.firstName}</td>
    <td>{props.data.lastName}</td>
    <td>{props.data.email}</td>
  </tr>
);

export default ListItem;
