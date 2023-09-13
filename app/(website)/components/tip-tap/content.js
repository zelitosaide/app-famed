"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import Heading from "@tiptap/extension-heading";
import Image from "@tiptap/extension-image";

import "remixicon/fonts/remixicon.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { updateContent } from "@/app/api/server";
import { showNotification } from "@/app/utils/notifications";

const CustomDocument = Document.extend({
  content: "heading block+",
});

export default function Content({ content, id }) {
  const ref = useRef(null);
  const [isEditable, setIsEditable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    content: content,
    editorProps: {
      attributes: {
        spellcheck: false,
        class: `focus:outline outline-[#E2F0E2] focus:outline-dashed focus:rounded-lg focus:outline-2`
      },
    },
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

  useEffect(function () {
    if (editor) {
      editor.setEditable(isEditable);
    }
  }, [isEditable, editor]);

  if (!editor) {
    return null;
  }

  return (
    <div style={{ position: 'relative' }} className="prose prose-green prose-zinc prose-h1:text-2xl prose-h1:uppercase prose-h1:font-bold prose-h1:text-[#178415] prose-h2:text-xl prose-h2:text-[#178415] prose-h2:font-bold marker:text-[#178415] max-w-none">  

      <EditorContent editor={editor} />

      <div className="flex" style={{ position: "absolute", top: -2, right: -2 }}>
        {isEditable ? (
          <button 
            disabled={isLoading}
            className="pl-2 pr-2 rounded-tr-lg cursor-pointer bg-[#1b9a19] text-white outline outline-offset-2 outline-2 focus:outline-[#23c520] hover:outline-[#23c520] disabled:opacity-70 disabled:cursor-progress"
            onClick={async function() {
              setIsLoading(true);
              setTimeout(async () => {
                await updateContent(id, editor.getHTML());
                setIsLoading(false);
                setIsEditable(false);
                showNotification("Salvo com sucesso!");
              }, 3000);
            }}
          >
            {isLoading ? "Save..." : "Save"}
          </button>
        ) : (
          <button
            className="pl-2 pr-2 rounded-tr-lg cursor-pointer bg-[#E2F0E2]"
            onClick={function() {
              setIsEditable(!isEditable);
            }}
          >
            <i className="ri-edit-line" />
          </button>
        )}
      </div>

      <button onClick={function() {
        ref.current.click();
      }}>
        <input ref={ref} className="hidden" type="file" onChange={addImage}/>
        <i className="ri-image-line" />
      </button>
    </div>
  );
}