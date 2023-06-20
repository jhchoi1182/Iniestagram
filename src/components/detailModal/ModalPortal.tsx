import { ChildrenProps } from "@/context/AuthContext";
import reactDom from "react-dom";

export default function ModalPortal({ children }: ChildrenProps) {
  if (typeof window === "undefined") {
    return null;
  }

  const node = document.getElementById("portal");
  if (!node) {
    return null;
  }
  
  return reactDom.createPortal(children, node);
}
