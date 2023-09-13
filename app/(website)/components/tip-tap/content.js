"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import Heading from "@tiptap/extension-heading";
import Image from "@tiptap/extension-image";

import "remixicon/fonts/remixicon.css";
import { useCallback } from "react";

const CustomDocument = Document.extend({
  content: "heading block+",
});

export default function Content({ content, id }) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        document: false,
        heading: false,
      }),
      Heading.configure({
        levels: [1, 2],
      }),
      CustomDocument, 
      Image
    ],
    content: content
  })

  const addImage = useCallback(async function(e) {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("caption", "Image upload using TipTap");
    formData.append("category", "TipTap");
    
    const res = await fetch("http://localhost:3001/files", { 
      method: "POST", 
      body: formData 
    });

    let data = await res.json();

    if (data.url) {
      editor
        .chain()
        .focus()
        .setImage({ src: "http://localhost:3001/" + data.url })
        .run();
    }
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div style={{ position: 'relative' }} className="prose prose-green prose-zinc prose-h1:text-2xl prose-h1:uppercase prose-h1:font-bold prose-h1:text-[#178415] prose-h2:text-xl prose-h2:text-[#178415] prose-h2:font-bold marker:text-[#178415] max-w-none">
      <input type="file" onChange={addImage} 
    />
      <EditorContent editor={editor} />
    </div>
  );
}