import React from "react";
import Td from "./Td";

const Tr = ({ board, handleRemove, handleEdit }) => {
  return (
    <tbody>
      {board.map((item) => {
        return <Td key={item.id} item={item} handleRemove={handleRemove} handleEdit={handleEdit} />;
      })}
    </tbody>
  );
};

export default Tr;
