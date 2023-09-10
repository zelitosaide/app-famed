"use client";

import { BubbleMenu, EditorContent, FloatingMenu, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import Placeholder from "@tiptap/extension-placeholder";
import Heading from "@tiptap/extension-heading";
import Youtube from "@tiptap/extension-youtube";
import Dropcursor from "@tiptap/extension-dropcursor";
import Image from "@tiptap/extension-image";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import Link from "@tiptap/extension-link";

import 'remixicon/fonts/remixicon.css';
import Menu from "./menu";
import { updateContent } from "@/app/api/server";

const CustomDocument = Document.extend({
  content: "heading block+",
});

export default function Content({ content, id }) {
  const editor = useEditor({
    extensions: [
      Link.configure({
        openOnClick: true,
        autolink: true,
        linkOnPaste: true,
        validate: href => /^https?:\/\//.test(href),
      }),
      TaskItem.configure({
        nested: true,
      }),
      TaskList,
      Highlight,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      CustomDocument,
      Heading.configure({
        levels: [1, 2],
      }),
      StarterKit.configure({
        document: false,
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
        // history: false,
      }),
      Youtube.configure({
        controls: false,
        width: 980,
        progressBarColor: 'white',
        modestBranding: 'true',
      }),
      Image,
      Dropcursor,
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === 'heading' && node.attrs?.level === 1) {
            return "What’s the title?";
          }
          return;
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
        class: "focus:outline outline-[#E2F0E2] focus:outline-dashed focus:rounded-lg focus:outline-2"
      },
    },
    onUpdate({ editor }) {
      // console.log(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div style={{ position: 'relative' }} className="prose prose-green prose-zinc prose-h1:text-2xl prose-h1:uppercase prose-h1:font-bold prose-h1:text-[#178415] prose-h2:text-xl prose-h2:text-[#178415] prose-h2:font-bold marker:text-[#178415] max-w-none">
      <BubbleMenu pluginKey={{ }} className="bubble-menu" tippyOptions={{ duration: 100 }} editor={editor}>
        <Menu editor={editor} />
      </BubbleMenu>

      <FloatingMenu className="floating-menu" tippyOptions={{ duration: 100 }} editor={editor}>
        <Menu editor={editor} />
      </FloatingMenu>

      <EditorContent editor={editor} />

      <div className="flex" style={{ position: "absolute", top: 0, right: 0 }}>
        <button>
          <i className="ri-edit-line"></i>
        </button>
          <button 
            onClick={async function() {
              await updateContent(id, editor.getHTML());
            }}
          >
            Save
          </button>
      </div>
    </div>
  );
}