"use client";


export default function HelloButton() {
  return (
    <button
      
      type="button"
      onClick={() => {
        console.log("click fired");
        alert("Hello");
      }}
      onPointerUp={() => {
        console.log("pointerup fired");
      }}
      onTouchEnd={() => {
        console.log("touchend fired");
      }}
      style={{
        padding: "16px 24px",
        fontSize: "16px",
        touchAction: "manipulation",
        WebkitTapHighlightColor: "rgba(0,0,0,0.1)",
      }}
    >
      Click me
    </button>
  );
}