import React from "react";
import {ModalDispatchContext, ModalStateContext, ModalStateContextSchema} from "services/context/ModalContext/index";

export function ModalProvider({children}: React.PropsWithChildren<unknown>) {
  const [activeModal, setActiveModal] = React.useState<ModalStateContextSchema | null>(null);
  return (
    <ModalStateContext.Provider value={activeModal}>
      <ModalDispatchContext.Provider value={setActiveModal}>{children}</ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
}
