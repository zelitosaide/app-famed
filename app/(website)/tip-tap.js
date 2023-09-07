"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import Placeholder from "@tiptap/extension-placeholder";

const CustomDocument = Document.extend({
  content: "heading block*",
});

export default function TipTap() {
  const editor = useEditor({
    extensions: [
      CustomDocument,
      StarterKit.configure({
        document: false,
      }),
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === 'heading') {
            return 'What’s the title?';
          }
          return 'Can you add some further context?'
        },
      }),
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