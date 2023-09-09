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

import { useCallback } from "react";

const CustomDocument = Document.extend({
  content: "heading block+",
});

export default function TipTap({ content }) {
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
  });

  const addImage = useCallback(() => {
    const url = window.prompt("URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  const addYoutubeVideo = () => {
    const url = prompt("Enter YouTube URL");

    if (url) {
      editor.commands.setYoutubeVideo({src: url});
    }
  }

  if (!editor) {
    return null;
  }

  return (
    <div className="prose prose-green prose-zinc prose-h1:text-2xl prose-h1:uppercase prose-h1:font-bold prose-h1:text-[#178415] prose-h2:text-xl prose-h2:text-[#178415] prose-h2:font-bold marker:text-[#178415] max-w-none">
      {editor && <BubbleMenu className="bubble-menu" tippyOptions={{ duration: 100 }} editor={editor}>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          <i className="ri-bold"></i>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          <i className="ri-italic"></i>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? 'is-active' : ''}
        >
          <i className="ri-strikethrough"></i>
        </button>
        <button onClick={() => editor.chain().focus().toggleHighlight().run()} className={editor.isActive('highlight') ? 'is-active' : ''}>
          <i className="ri-mark-pen-line"></i>
        </button>

        <button onClick={() => editor.chain().focus().setTextAlign('left').run()} className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}>
          <i className="ri-align-left"></i>
        </button>
        <button onClick={() => editor.chain().focus().setTextAlign('center').run()} className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}>
          <i className="ri-align-center"></i>
        </button>
        <button onClick={() => editor.chain().focus().setTextAlign('right').run()} className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}>
          <i className="ri-align-right"></i>
        </button>
        <button onClick={() => editor.chain().focus().setTextAlign('justify').run()} className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}>
          <i className="ri-align-justify"></i>
        </button>

        <button onClick={setLink} className={editor.isActive('link') ? 'is-active' : ''}>
          <i className="ri-link"></i>
        </button>
        <button
          onClick={() => editor.chain().focus().unsetLink().run()}
          disabled={!editor.isActive('link')}
        >
          <i className="ri-link-unlink"></i>
        </button>
        <button onClick={addImage}>
          <i className="ri-image-line"></i>
        </button>
      </BubbleMenu>}

      {editor && <FloatingMenu className="floating-menu" tippyOptions={{ duration: 100 }} editor={editor}>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
        >
          <i className="ri-h-1"></i>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
        >
          <i className="ri-h-2"></i>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          <i className="ri-list-unordered"></i>
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          <i className="ri-bold"></i>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          <i className="ri-italic"></i>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? 'is-active' : ''}
        >
          <i className="ri-strikethrough"></i>
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? 'is-active' : ''}
        >
          <i className="ri-paragraph"></i>
        </button>

        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
        >
          <i className="ri-list-ordered"></i>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'is-active' : ''}
        >
          <i className="ri-double-quotes-l"></i>
        </button>
        <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          <i className="ri-separator"></i>
        </button>
        <button onClick={() => editor.chain().focus().toggleHighlight().run()} className={editor.isActive('highlight') ? 'is-active' : ''}>
          <i className="ri-mark-pen-line"></i>
        </button>

        <button onClick={() => editor.chain().focus().setTextAlign('left').run()} className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}>
          <i className="ri-align-left"></i>
        </button>
        <button onClick={() => editor.chain().focus().setTextAlign('center').run()} className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}>
          <i className="ri-align-center"></i>
        </button>
        <button onClick={() => editor.chain().focus().setTextAlign('right').run()} className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}>
          <i className="ri-align-right"></i>
        </button>
        <button onClick={() => editor.chain().focus().setTextAlign('justify').run()} className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}>
          <i className="ri-align-justify"></i>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleTaskList().run()}
          className={editor.isActive('taskList') ? 'is-active' : ''}
        >
          <i className="ri-list-check-2"></i>
        </button>

        <button onClick={addImage}>
          <i className="ri-image-line"></i>
        </button>

        <button id="add" onClick={addYoutubeVideo}>
          <i className="ri-youtube-line"></i>
        </button>

        <button onClick={setLink} className={editor.isActive('link') ? 'is-active' : ''}>
          <i className="ri-link"></i>
        </button>
        <button
          onClick={() => editor.chain().focus().unsetLink().run()}
          disabled={!editor.isActive('link')}
          className="menu-item"
        >
          <i className="ri-link-unlink"></i>
        </button>
      </FloatingMenu>}

      <EditorContent editor={editor} />
    </div>
  );
}