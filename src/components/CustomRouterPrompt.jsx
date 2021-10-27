import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ModalBack from "./ModalBack";
import { useModalBack } from "../components/backModalProvider/hooks";

export const CustomRouterPrompt=(props)=> {
  const { showPrompt,handleCancel,handleOK,currentPath} = props;

  return (
    <ModalBack isOpen={showPrompt} handleCancel={handleCancel} handleOk={handleOK} currentPath={currentPath}/>
  )
}
