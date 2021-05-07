import React from "react";
import {modalsPayload} from "services/context/ModalContext/types";

export type ModalStateContextSchema = {
  [K in keyof modalsPayload]: {
    modal: K;
    payload: modalsPayload[K];
  };
}[keyof modalsPayload];

export const ModalStateContext = React.createContext<ModalStateContextSchema | null>(null);

export const useModalState = () => React.useContext(ModalStateContext);

export const ModalDispatchContext = React.createContext<
  React.Dispatch<React.SetStateAction<ModalStateContextSchema | null>>
>(() => null);

export function useModalDispatch<T extends keyof modalsPayload>(
  modal: T,
  payload: keyof modalsPayload[T] extends never ? EmptyObject : modalsPayload[T]
): (payload?: modalsPayload[T]) => void;
export function useModalDispatch<T extends keyof modalsPayload | null>(
  modal: T
): T extends keyof modalsPayload
  ? keyof modalsPayload[T] extends never
    ? (payload?: EmptyObject) => void
    : (payload: modalsPayload[T]) => void
  : () => void;
export function useModalDispatch(modal: any, payload?: any) {
  const dispatch = React.useContext(ModalDispatchContext);
  if (!modal) {
    return () => dispatch(null);
  }
  if (!payload) {
    return (payload: any) => dispatch({modal, payload: payload || {}});
  } else {
    return (payloadOverride?: any) => dispatch({modal, payload: payloadOverride || payload || {}});
  }
}

export type EmptyObject = {[key: string]: never};
