"use client";
interface WoBButtonProps {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "none";
  onClick: () => void;
}
export function WoBButton(props: WoBButtonProps) {
  const primaryColor = "bg-red-600 hover:bg-red-500 active:bg-red-700 ";
  const secondaryColor = "bg-blue-600 hover:bg-blue-500 active:bg-blue-700";
  const noneColor = "bg-transparent hover:bg-gray-600 active:bg-gray-800";

  let btnClass = "rounded-xl p-4 md:p-3 sm:p-2 ";

  if (props.color == "none" || props.color == undefined) btnClass += noneColor;
  if (props.color == "primary") btnClass += primaryColor;
  if (props.color == "secondary") btnClass += secondaryColor;

  return (
    <button onClick={props.onClick} className={btnClass}>
      <p>{props.children}</p>
    </button>
  );
}
