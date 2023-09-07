"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function TipTap() {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: `
      <h1>
        It’ll always have a heading …
      </h1>
      <p>Hello World! 🌎️</p>
    `,
  });

  return (
    <EditorContent editor={editor} />
  );
}