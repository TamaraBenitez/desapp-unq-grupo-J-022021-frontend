
import ModalInitTransactionContext from "./context";
import React, { useState } from "react";
import ModalTransaction from "../ModalTransaction";

const ModalTransactionProvider = ({ children }) => {
  const [open,setOpen] = useState(false);
  const [blockExec,setBlockExec] = useState(false);

  return (
    <ModalInitTransactionContext.Provider value={{open:open ,setOpen:setOpen ,setBlockExec:setBlockExec }}>
      <ModalTransaction isOpen={open} setOpen={setOpen} blockExec={blockExec}/>
      {children}
    </ModalInitTransactionContext.Provider>
  );
} 

export default ModalTransactionProvider