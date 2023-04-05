import { useState, useContext } from "react";
import { server } from "config";
("use client");

import { useEditor, EditorContent } from "@tiptap/react";
import Image from "@tiptap/extension-image";
import StarterKit from "@tiptap/starter-kit";
import Dropdown from "./forms/dropdown";

import { Global_data } from "@/context/context";

const Tiptap = () => {
  const { data } = useContext(Global_data);

  const { encounters } = data;
  const [title, setTitle] = useState("");
  const [strapline, setStrapline] = useState("");
  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: "<p>Hello World! 🌎️</p>",
  });

  if (!editor) {
    return null;
  }

  const postOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const html = editor.getHTML();

    try {
      const response = await fetch(`${server}//api/posts`, {
        ...postOptions,

        body: JSON.stringify({
          title,
          strapline,
          body: html,
          author: "ben@bjcdesign.com",
        }),
      });

      const responseJson = await response.json();
      switch (response.status) {
        case 200:
          {
            console.log(responseJson);
          }
          break;
        default: {
          console.log(responseJson);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addImage = () => {
    const url = window.prompt("URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    <>
      <button onClick={addImage}>add image from URL</button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
        type="button"
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
        type="button"
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
        type="button"
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
        type="button"
      >
        bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
        type="button"
      >
        italic
      </button>
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}
      >
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={strapline}
          onChange={(e) => setStrapline(e.target.value)}
        />
        <Dropdown options={encounters} />

        <EditorContent editor={editor} />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Tiptap;
