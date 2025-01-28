import React, { useRef } from "react";
import ReactQuill, { Quill } from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

// Add a custom color picker button
const CustomColorPicker = ({ quill }) => {
    const handleColorChange = (event) => {
        const color = event.target.value;
        if (quill) {
            quill.format("color", color); // Apply the selected color
        }
    };

    return (
        <input
            type="color"
            className="border-none bg-transparent p-0 w-7 h-7 cursor-pointer ml-1.5"
            onChange={handleColorChange}
        />
    );
};

// Include the custom toolbar
const CustomToolbar = ({ quill }) => (
    <div id="toolbar" className="flex flex-wrap items-center p-2 bg-gray-100 border border-gray-300 rounded-t-md">
        {/* Header Options */}
        <select className="ql-header border border-gray-300 rounded-md mx-1">
            <option value="1">Heading 1</option>
            <option value="2">Heading 2</option>
            <option value="3">Heading 3</option>
            <option value="4">Heading 4</option>
            <option value="5">Heading 5</option>
            <option value="6">Heading 6</option>
            <option value="">Normal</option>
        </select>
        {/* Font Options */}
        <select className="ql-font border border-gray-300 rounded-md mx-1"></select>
        {/* Size Options */}
        <select className="ql-size border border-gray-300 rounded-md mx-1"></select>
        {/* Styles */}
        <button className="ql-bold mx-1"></button>
        <button className="ql-italic mx-1"></button>
        <button className="ql-underline mx-1"></button>
        <button className="ql-strike mx-1"></button>
        {/* Font Color and Background */}
        <select className="ql-color border border-gray-300 rounded-md mx-1"></select>
        <select className="ql-background border border-gray-300 rounded-md mx-1"></select>
        {/* List Options */}
        <button className="ql-list mx-1" value="ordered"></button>
        <button className="ql-list mx-1" value="bullet"></button>
        {/* Block Styles */}
        <button className="ql-blockquote mx-1"></button>
        <button className="ql-code-block mx-1"></button>
        {/* Align Options */}
        <select className="ql-align border border-gray-300 rounded-md mx-1"></select>
        {/* Link and Image */}
        <button className="ql-link mx-1"></button>
        <button className="ql-image mx-1"></button>
        {/* Clear Formatting */}
        <button className="ql-clean mx-1"></button>
        {/* Custom Color Picker */}
        <CustomColorPicker quill={quill} />
    </div>
);

const TextEditor = ({ id, width = "w-full", value, onChange, height = "h-72" }) => {
    const quillRef = useRef(null);

    const modules = {
        toolbar: {
            container: "#toolbar", // Link custom toolbar
        },
    };

    return (
        <div className={`flex flex-col ${width}`}>
            <CustomToolbar quill={quillRef.current?.getEditor()} />
            <ReactQuill
                ref={quillRef} // Store Quill instance
                name={id}
                className={`border border-gray-300 rounded-b-md ${height}`}
                theme="snow"
                value={value}
                onChange={(content) => onChange(content, id)} // Pass content and ID
                id={id} // For semantics or debugging
                modules={modules} // Apply custom toolbar
            />
        </div>
    );
};

export default TextEditor;
