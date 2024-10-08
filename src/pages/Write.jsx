import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');

  return (
    <div className="add-post">
      <div className="add">
        <div className="content">
          <input type="text" placeholder="Title" />
          <div className="editorContainer">
            <ReactQuill
              className="editor"
              theme="snow"
              value={value}
              onChange={setValue}
            />
          </div>
        </div>
        <div className="menu">
          <div className="item">
            <h1>Publish </h1>
            <span>
              <b>Status: </b> Draft
            </span>
            <span>
              <b>Visibility:</b> Public
            </span>
            <input type="file" name="" id="file" style={{ display: 'none' }} />
            <label htmlFor="file">upload Image </label>
            <div className="buttons">
              <button type="button">Save as a draft</button>
              <button type="button"> update</button>
            </div>
          </div>
          <div className="item">
            <h1>Category</h1>

            <div className="cat">
              <input type="radio" name="cate" value="art" id="art" />
              <label htmlFor="art">Art</label>
            </div>

            <div className="cat">
              <input type="radio" name="cate" value="science" id="science" />
              <label htmlFor="science">Science</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                name="cat"
                value="technology"
                id="technology"
              />
              <label htmlFor="technology">Technology</label>
            </div>
            <div className="cat">
              <input type="radio" name="cate" value="cinema" id="cinema" />
              <label htmlFor="cinema">Cinema</label>
            </div>
            <div className="cat">
              <input type="radio" name="cate" value="design" id="design" />
              <label htmlFor="design">Design</label>
            </div>
            <div className="cat">
              <input type="radio" name="cate" value="food" id="food" />
              <label htmlFor="food">Food</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
