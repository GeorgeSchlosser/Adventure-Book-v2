import React, { Component } from "react";
import Dropzone from "react-dropzone";
import AdminUploadButton from "../AdminUploadButton";
import "./style.css";
 
// Container for holding uploaded file contents
class AdminDropZone extends Component {
  constructor() {
    super();
    this.onDrop = (files) => {
      this.setState({files})
    };
    this.state = {
      files: []
    };
  }

  render() {
    const files = this.state.files.map(file => (
      <span key={file.name}>
        {file.name} - {file.size} bytes
      </span>
    ));

    return (
      <Dropzone onDrop = {this.onDrop}>
        {({getRootProps, getInputProps}) => (
          <section className="container">
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps({ multiple: false })} />
              <p className="dropzone-text">Drag and drop a file here, or click to select a file</p>
            </div>
            <aside>
              File selected: <br/> { files }
            </aside>
            <AdminUploadButton selectedFile={ this.state.files[0] }/>
          </section>
        )}
      </Dropzone>
    );
  }
}

export default AdminDropZone;