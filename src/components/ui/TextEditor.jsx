import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['blockquote', 'code-block'],
    [{ color: [] }, { background: [] }],
    ['link', 'image'],
    ['clean'],
  ],
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike',
  'list', 'bullet',
  'blockquote', 'code-block',
  'color', 'background',
  'link', 'image',
];

export default function ReactQuillEditor({ value, onChange }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render until component is mounted (prevents SSR issues)
  if (!isMounted) {
    return (
      <div className="h-96 mb-16 border border-gray-300 rounded-md p-4 bg-gray-50">
        Loading editor...
      </div>
    );
  }

  return (
    <div className="mb-16">
      <ReactQuill
        value={value || ''} // Ensure value is never undefined
        onChange={onChange}
        modules={modules}
        formats={formats}
        theme="snow"
        className="h-96"
        placeholder="Write your blog content here..."
        style={{ height: '300px' }} // Explicit height
      />
    </div>
  );
}