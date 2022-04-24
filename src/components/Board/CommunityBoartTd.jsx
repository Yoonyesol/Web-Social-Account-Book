import React from "react";
import { FaPen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const Td = ({ item, handleRemove, handleEdit }) => {
  const onRemove = () => {
    handleRemove(item.id);
  };

  const onEdit = () => {
    handleEdit(item);
    return (
      <td onClick={onEdit}>
        <i class="far fa-edit"></i>
      </td>
    );
  };

  return (
    <>
      <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.website}</td>
        <td>
          <FaPen onClick={onEdit} />
        </td>
        <td>
          <FaTrashAlt onClick={onRemove} />
        </td>
      </tr>
    </>
  );
};

export default Td;
