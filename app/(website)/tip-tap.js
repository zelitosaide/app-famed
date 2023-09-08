"use client";

import { EditorContent, FloatingMenu, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import Placeholder from "@tiptap/extension-placeholder";
import Heading from "@tiptap/extension-heading";
import Youtube from "@tiptap/extension-youtube";

const CustomDocument = Document.extend({
  content: "heading block*",
});

export default function TipTap({ content }) {
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
      Youtube.configure({
        controls: false,
        width: 980,
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
    content: content,
    autofocus: true,
    editable: true,
    injectCSS: false, 
    editorProps: {
      attributes: {
        spellcheck: false,
      },
    },
  });

  return (
    <div className="prose prose-zinc prose-h1:text-2xl prose-h1:uppercase prose-h1:font-bold prose-h1:text-[#178415] prose-h2:text-xl prose-h2:text-[#178415] prose-h2:font-bold marker:text-[#178415] max-w-none">
      <FloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
      </FloatingMenu>
      <EditorContent  editor={editor} />
    </div>
  );
}