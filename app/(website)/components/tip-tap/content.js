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
import Menu from "./menu";

import { useCallback, useEffect, useState } from "react";

import "remixicon/fonts/remixicon.css";
import { updateContent } from "@/app/api/server";
import { showNotification } from "@/app/utils/notifications";

const CustomDocument = Document.extend({
  content: "heading block+",
});

// export default function Content({ content, id }) {
//   const editor = useEditor({
//     extensions: [
//       Link.configure({
//         openOnClick: true,
//         autolink: true,
//         linkOnPaste: true,
//         validate: href => /^https?:\/\//.test(href),
//       }),
//       TaskItem.configure({
//         nested: true,
//       }),
//       TaskList,
//       Highlight,
//       TextAlign.configure({
//         types: ["heading", "paragraph"],
//       }),
//       CustomDocument,
//       Heading.configure({
//         levels: [1, 2],
//       }),
//       StarterKit.configure({
//         document: false,
//         heading: false,
//         dropcursor: false,
//         bulletList: {
//           keepMarks: true,
//           keepAttributes: false,
//         },
//         orderedList: {
//           keepMarks: true,
//           keepAttributes: false,
//         },
//       }),
//       Youtube.configure({
//         controls: false,
//         width: 980,
//         progressBarColor: 'white',
//         modestBranding: 'true',
//       }),
//       Image,
//       Dropcursor,
//       Placeholder.configure({
//         placeholder: ({ node }) => {
//           if (node.type.name === 'heading' && node.attrs?.level === 1) {
//             return "What’s the title?";
//           }
//           return;
//         },
//       }),
//     ],
//     content: content,
//     autofocus: true,
//     editable: true,
//     injectCSS: false, 
//     editorProps: {
//       attributes: {
//         spellcheck: false,
//         class: `focus:outline outline-[#E2F0E2] focus:outline-dashed focus:rounded-lg focus:outline-2`
//       },
//     },
//   });

//   const [isLoading, setIsLoading] = useState(false);
//   const [isEditable, setIsEditable] = useState(false);

//   useEffect(function () {
//     if (editor) {
//       editor.setEditable(isEditable);
//     }
//   }, [isEditable, editor]);

//   if (!editor) {
//     return null;
//   }

//   return (
//     <div style={{ position: 'relative' }} className="prose prose-green prose-zinc prose-h1:text-2xl prose-h1:uppercase prose-h1:font-bold prose-h1:text-[#178415] prose-h2:text-xl prose-h2:text-[#178415] prose-h2:font-bold marker:text-[#178415] max-w-none">
//       <BubbleMenu className="bubble-menu" tippyOptions={{ duration: 100 }} editor={editor}>
//         <Menu editor={editor} />
//       </BubbleMenu>

//       <FloatingMenu className="floating-menu" tippyOptions={{ duration: 100 }} editor={editor}>
//         <Menu editor={editor} />
//       </FloatingMenu>

//       <EditorContent editor={editor} />

//       <div className="flex" style={{ position: "absolute", top: -2, right: -2 }}>
//         {isEditable ? (
//           <button 
//             disabled={isLoading}
//             className="pl-2 pr-2 rounded-tr-lg cursor-pointer bg-[#1b9a19] text-white outline outline-offset-2 outline-2 focus:outline-[#23c520] hover:outline-[#23c520] disabled:opacity-70 disabled:cursor-progress"
//             onClick={async function() {
//               setIsLoading(true);
//               setTimeout(async () => {
//                 await updateContent(id, editor.getHTML());
//                 setIsLoading(false);
//                 setIsEditable(false);
//                 showNotification("Salvo com sucesso!");
//               }, 3000);
//             }}
//           >
//             {isLoading ? "Save..." : "Save"}
//           </button>
//         ) : (
//           <button
//             className="pl-2 pr-2 rounded-tr-lg"
//             style={{ cursor: "pointer", background: "#E2F0E2" }}
//             onClick={function() {
//               setIsEditable(!isEditable);
//             }}
//           >
//             <i className="ri-edit-line"></i>
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }


export default function Content({ content, id }) {
  const editor = useEditor({
    extensions: [CustomDocument, StarterKit.configure({
      
    }), Image, Dropcursor],
    content: `
      <p>This is a basic example of implementing images. Drag to re-order.</p>
      <img src="https://source.unsplash.com/8xznAGy4HcY/800x400" />
      <img src="https://source.unsplash.com/K9QHL52rE2k/800x400" />
    `,
  })

  const addImage = useCallback(() => {
    const url = window.prompt("URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div>
      <button onClick={addImage}>setImage</button>
      <EditorContent editor={editor} />
      <BubbleMenu tippyOptions={{ placement: "top-start" }} editor={editor}>
        <div className="bg-green">Bubble Menu</div>
      </BubbleMenu>
    </div>
  );
}