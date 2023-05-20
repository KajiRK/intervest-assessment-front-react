import * as React from "react";

export interface IPrimaryButtonProps {
  type?: "button" | "submit" | "reset";
  text: string;
}

export default function PrimaryButton(props: IPrimaryButtonProps) {
  return (
    <button
      type={props.type ? props.type : 'button'}
      className="w-full text-md bg-primary-purple text-white p-2 mt-2 rounded hover:bg-slate-900 hover:text-white"
    >
      {props.text}
    </button>
  );
}
