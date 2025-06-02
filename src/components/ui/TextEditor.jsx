import { useEffect, useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Quill from "quill";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["blockquote", "code-block"],
    [{ color: [] }, { background: [] }],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "blockquote",
  "code-block",
  "color",
  "background",
  "link",
  "image",
];

export default function ReactQuillEditor({ value, onChange }) {
  const [isMounted, setIsMounted] = useState(false);
  const quillRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const applyCustomColor = (e) => {
    const color = e.target.value;
    const editor = quillRef.current.getEditor();
    const range = editor.getSelection();
    if (range) {
      editor.formatText(range.index, range.length, "color", color);
    }
  };

  if (!isMounted) {
    return (
      <div className="h-96 mb-16 border border-gray-300 rounded-md p-4 bg-gray-50">
        Loading editor...
      </div>
    );
  }

  return (
    <div className="mb-16">
      {/* Custom Color Picker */}
      <div className="flex justify-start items-center gap-4">
        <span className="text-md">Color Picker</span>
        <input
          type="color"
          onChange={applyCustomColor}
          style={{ marginBottom: "10px" }}
          title="Select custom text color"
        />
      </div>

      <ReactQuill
        ref={quillRef}
        value={value || ""}
        onChange={onChange}
        modules={modules}
        formats={formats}
        theme="snow"
        className="h-96"
        placeholder="Write your blog content here..."
        style={{ height: "300px" }}
      />
    </div>
  );
}
