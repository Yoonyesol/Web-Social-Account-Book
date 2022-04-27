import React from "react";

import { FaPen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const Td = ({ item, handleRemove, handleEdit }) => {
  const onRemove = () => {
    handleRemove(item.id);
  };

  const onEdit = () => {
    handleEdit(item);
  };

  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td>{item.username}</td>
      <td>{item.lastedit}</td>
      <td>
        <FaPen onClick={onEdit} />
      </td>
      <td>
        <FaTrashAlt onClick={onRemove} />
      </td>
    </tr>
  );
};

export default Td;
