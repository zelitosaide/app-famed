"use client";

import { EditorContent, FloatingMenu, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import Placeholder from "@tiptap/extension-placeholder";
import Heading from "@tiptap/extension-heading";

const CustomDocument = Document.extend({
  content: "heading block*",
  // draggable: true
});

export default function TipTap() {
  const editor = useEditor({
    extensions: [
      CustomDocument,
      Heading.configure({
        levels: [1, 2, 3],
      }),
      StarterKit.configure({
        document: false,
        // history: false,
      }),
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === 'heading') {
            return "What’s the title?";
          }
          return "Can you add some further context?";
        },
      }),
    ],
    content: `
      <h1>It’ll always have a heading …</h1>
      <p>Hello World! 🌎️</p>
    `,
    autofocus: true,
    editable: true,
    injectCSS: false,
  });

  return (
    <>
      <FloatingMenu editor={editor}>
        olas
      </FloatingMenu>
      <EditorContent editor={editor} />
    </>
  );
}