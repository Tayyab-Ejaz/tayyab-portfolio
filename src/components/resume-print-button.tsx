"use client";

export function ResumePrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="button-primary"
    >
      Save as PDF
    </button>
  );
}
