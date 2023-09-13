"use client";

import "./tip-tap.css";

import { EditorContent, FloatingMenu, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import Heading from "@tiptap/extension-heading";
import Image from "@tiptap/extension-image";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";

import "remixicon/fonts/remixicon.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { updateContent } from "@/app/api/server";
import { showNotification } from "@/app/utils/notifications";
import { BubbleMenu } from "@tiptap/react";

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
      Image,
      TaskItem.configure({
        nested: true,
      }),
      TaskList,
      Highlight,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: content,
    editorProps: {
      attributes: {
        spellcheck: false,
        class: `focus:outline outline-[#E2F0E2] focus:outline-dashed focus:rounded-lg focus:outline-2`
      },
    },
  });

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


  const items = [
    // {
    //   icon: 'h-1',
    //   title: 'Heading 1',
    //   action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
    //   isActive: () => editor.isActive('heading', { level: 1 }),
    // },
    // {
    //   icon: 'h-2',
    //   title: 'Heading 2',
    //   action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
    //   isActive: () => editor.isActive('heading', { level: 2 }),
    // },
    // {
    //   icon: 'paragraph',
    //   title: 'Paragraph',
    //   action: () => editor.chain().focus().setParagraph().run(),
    //   isActive: () => editor.isActive('paragraph'),
    // },
    // {
    //   icon: 'list-unordered',
    //   title: 'Bullet List',
    //   action: () => editor.chain().focus().toggleBulletList().run(),
    //   isActive: () => editor.isActive('bulletList'),
    // },
    // {
    //   icon: 'list-ordered',
    //   title: 'Ordered List',
    //   action: () => editor.chain().focus().toggleOrderedList().run(),
    //   isActive: () => editor.isActive('orderedList'),
    // },
    // {
    //   icon: 'list-check-2',
    //   title: 'Task List',
    //   action: () => editor.chain().focus().toggleTaskList().run(),
    //   isActive: () => editor.isActive('taskList'),
    // },
    // {
    //   type: 'divider',
    // },
    // {
    //   icon: 'bold',
    //   title: 'Bold',
    //   action: () => editor.chain().focus().toggleBold().run(),
    //   isActive: () => editor.isActive('bold'),
    // },
    // {
    //   icon: 'italic',
    //   title: 'Italic',
    //   action: () => editor.chain().focus().toggleItalic().run(),
    //   isActive: () => editor.isActive('italic'),
    // },
    // {
    //   icon: 'strikethrough',
    //   title: 'Strike',
    //   action: () => editor.chain().focus().toggleStrike().run(),
    //   isActive: () => editor.isActive('strike'),
    // },
    // {
    //   icon: 'mark-pen-line',
    //   title: 'Highlight',
    //   action: () => editor.chain().focus().toggleHighlight().run(),
    //   isActive: () => editor.isActive('highlight'),
    // },
    // {
    //   type: 'divider',
    // },
    // {
    //   icon: 'align-left',
    //   title: 'Align Left',
    //   action: () => editor.chain().focus().setTextAlign('left').run(),
    //   isActive: () => editor.isActive({ textAlign: 'left' }),
    // },
    // {
    //   icon: 'align-center',
    //   title: 'Align Center',
    //   action: () => editor.chain().focus().setTextAlign('center').run(),
    //   isActive: () => editor.isActive({ textAlign: 'center' }),
    // },
    // {
    //   icon: 'align-right',
    //   title: 'Align Right',
    //   action: () => editor.chain().focus().setTextAlign('right').run(),
    //   isActive: () => editor.isActive({ textAlign: 'right' }),
    // },
    // {
    //   icon: 'align-justify',
    //   title: 'Align Justify',
    //   action: () => editor.chain().focus().setTextAlign('justify').run(),
    //   isActive: () => editor.isActive({ textAlign: 'justify' }),
    // },
    // {
    //   type: 'divider',
    // },
    // {
    //   icon: 'double-quotes-l',
    //   title: 'Blockquote',
    //   action: () => editor.chain().focus().toggleBlockquote().run(),
    //   isActive: () => editor.isActive('blockquote'),
    // },
    // {
    //   icon: 'separator',
    //   title: 'Horizontal Rule',
    //   action: () => editor.chain().focus().setHorizontalRule().run(),
    // },
    // {
    //   type: 'divider',
    // },
    // {
    //   icon: 'image-line',
    //   title: 'Image',
    //   action: addImage,
    // },
    // {
    //   icon: 'youtube-line',
    //   title: 'YouTube Video',
    //   action: addYoutubeVideo,
    // },
    // {
    //   icon: 'link',
    //   title: 'Link',
    //   action: setLink,
    //   isActive: () => editor.isActive('link'),
    // },
    // {
    //   icon: 'link-unlink',
    //   title: 'Unlink',
    //   action: () => editor.chain().focus().unsetLink().run(),
    //   disabled: !editor.isActive('link'),
    // },
    // {
    //   type: 'divider',
    // },
    // {
    //   icon: 'format-clear',
    //   title: 'Clear Format',
    //   action: () => editor.chain().focus().clearNodes().unsetAllMarks().run(),
    // },
    // {
    //   icon: 'arrow-go-back-line',
    //   title: 'Undo',
    //   action: () => editor.chain().focus().undo().run(),
    // },
    // {
    //   icon: 'arrow-go-forward-line',
    //   title: 'Redo',
    //   action: () => editor.chain().focus().redo().run(),
    // },
  ];

  return (
    <div style={{ position: 'relative' }} className="prose prose-green prose-zinc prose-h1:text-2xl prose-h1:uppercase prose-h1:font-bold prose-h1:text-[#178415] prose-h2:text-xl prose-h2:text-[#178415] prose-h2:font-bold marker:text-[#178415] max-w-none">  
      <BubbleMenu className="bubble-menu" tippyOptions={{ placement: "auto" }} editor={editor}>
        <button 
          onClick={function() {
            ref.current.click();
          }}
        >
          <input ref={ref} className="hidden" type="file" onChange={addImage}/>
          <i className="ri-image-line" />
        </button>
      </BubbleMenu>

      <FloatingMenu className="floating-menu" tippyOptions={{ duration: 100, placement: "top-start" }} editor={editor}>
        <div className="editor__header">
          <button
            className={`menu-item ${editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}`}
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            title="Heading 1"
          >
            <i className={`ri-h-1`} />
          </button>

          <button
            className={`menu-item ${editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}`}
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            title="Heading 2"
          >
            <i className={`ri-h-2`} />
          </button>

          <button
            className={`menu-item ${editor.isActive('paragraph') ? 'is-active' : ''}`}
            onClick={() => editor.chain().focus().setParagraph().run()}
            title="Paragraph"
          >
            <i className={`ri-paragraph`} />
          </button>

          <button
            className={`menu-item ${editor.isActive('bulletList') ? 'is-active' : ''}`}
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            title="Bullet List"
          >
            <i className={`ri-list-unordered`} />
          </button>

          <button
            className={`menu-item ${editor.isActive('orderedList') ? 'is-active' : ''}`}
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            title="Ordered List"
          >
            <i className={`ri-list-ordered`} />
          </button>

          <button
            className={`menu-item ${editor.isActive('taskList') ? 'is-active' : ''}`}
            onClick={() => editor.chain().focus().toggleTaskList().run()}
            title="Task List"
          >
            <i className={`ri-list-check-2`} />
          </button>
          
          <div className="divider" />

          <button
            className={`menu-item ${editor.isActive('bold') ? 'is-active' : ''}`}
            onClick={() => editor.chain().focus().toggleBold().run()}
            title="Bold"
          >
            <i className={`ri-bold`} />
          </button>

          <button
            className={`menu-item ${editor.isActive('italic') ? 'is-active' : ''}`}
            onClick={() => editor.chain().focus().toggleItalic().run()}
            title="Italic"
          >
            <i className={`ri-italic`} />
          </button>

          <button
            className={`menu-item ${editor.isActive('strike') ? 'is-active' : ''}`}
            onClick={() => editor.chain().focus().toggleStrike().run()}
            title="Strike"
          >
            <i className={`ri-strikethrough`} />
          </button>

          <button
            className={`menu-item ${editor.isActive('highlight') ? 'is-active' : ''}`}
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            title="Highlight"
          >
            <i className={`ri-mark-pen-line`} />
          </button>

          <div className="divider" />

          <button
            className={`menu-item ${editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}`}
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            title="Align Left"
          >
            <i className={`ri-align-left`} />
          </button>


          {/* {
            action: ,
            isActive: () => ,
          }, */}

          
        </div>
      </FloatingMenu>

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
    </div>
  );
}