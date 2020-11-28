import logo from './logo.svg';
import './App.css';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import { parse } from "papaparse";
// Importing combination 
import React, { Component } from 'react';
// Importing Module 
import ReactDOM from 'react-dom'

import { useState } from 'react';

// using custom react hook also custom drop zone craeted

function PopUp() {
  const [highlighted, setHighlighted] = React.useState(false);
  const [contacts, setContacts] = React.useState([
    { description: "", address: "",bathroom: "",bedroom:"" },
  ]);
  const [disabled, setDisabled] = React.useState(true);

  function handleGameClick() {
    setDisabled(!disabled);
  
  }
  // function handleFirstNameInputChange(event) {
  //   event.persist();
  //   setContacts((contacts) => ({
  //     ...contacts,
  //     Description: event.target.value,
  //   }));
  // };

  return (
    <div>
      <h1 className="text-center text-4xl">CSV Import</h1>
      <div
        className={`p-6 my-2 mx-auto max-w-md border-2 ${highlighted ? "border-green-600 bg-green-100" : "border-gray-600"
          }`}
        onDragEnter={() => {
          setHighlighted(true);
        }}
        onDragLeave={() => {
          setHighlighted(false);
        }}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={(e) => {
          e.preventDefault();
          setHighlighted(false);

          Array.from(e.dataTransfer.files)
            .filter((file) => file.type === "text/csv")
            .forEach(async (file) => {
              const text = await file.text();
              const result = parse(text, { header: true });
              console.log(result)
              setContacts((existing) => [...existing, ...result.data]);
              // setName((existing) => [...existing, ...result.data])
            });
        }}
      >
        DROP THE CSV HERE
      </div>


      {contacts.map(contact => (
        <div>
          {/* <h1>{contact.Description}</h1> */}
          <h1>{contact.address}</h1>
          <h1>{contact.bedroom}</h1>

          <h1>{contact.bathroom}</h1>

          <h1>{contact.description}</h1>
{/* form can be used */}
          {/* <form>
            <input type="text" className="form-control" id="inputAddress" name="address" placeholder="1234 Main St" value={contact.address} />
            <input type="number" className="form-control" id="inputBedroom" name="bedroom" placeholder="0" value={contact.bedroom} />
            <input type="number" className="form-control" id="inputBathroom" name="bathroom" placeholder="0" value={contact.bathroom} />
            <input type="text" className="form-control" id="inputDescription" name="address" placeholder="1234 Main St" value={contact.description} />



          </form> */}

         
        </div>

      ))}
       <button type="submit" className="btn btn-primary" id="myBtn"  onClick={(e) => {
                e.preventDefault()
                var y = document.querySelector(".upload")
                if (y.style.display === "none") {
                  y.style.display = "block";
                } else {
                  y.style.display = "none";
                }
              }}>Sign in</button>




    </div>
  );
}




















// using react-dropzone-uploader and tweaking it as per need


class ImageAudioVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  getUploadParams = ({ meta }) => {
    let url = 'https://httpbin.org/post'
    return { url, meta: { fileUrl: `${url}/${encodeURIComponent(meta.name)}` } }
  }

  handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta)
  }

  handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    console.log(files.map(f => f.meta.name))
    console.log(this.props.address)
    console.log(this.props.bedroom)
    console.log(this.props.bathroom)
    console.log(this.props.description)

    // removing files 
    // allFiles.forEach(f => f.remove())
  }


  render() {
    return (
      <Dropzone

        getUploadParams={this.getUploadParams}
        onChangeStatus={this.handleChangeStatus}
        onSubmit={this.handleSubmit}
        // tweaking max file upload to 4
        maxFiles={4}
        inputWithFilesContent={files => `${4 - files.length} more`}
        submitButtonDisabled={files => files.length < 4}
        // types of file it will accept can be tweaked
        accept=".csv,image/*,audio/*,video/*"
        inputContent={(files, extra) => (extra.reject ? 'Image, audio and video files only' : 'Drag Files')}
        styles={{
          dropzoneReject: { borderColor: 'red', backgroundColor: '#DAA' },
          inputLabel: (files, extra) => (extra.reject ? { color: 'red' } : {}),
        }}
      />
    )
  }
}






















// main file





class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      address: "",
      bedroom: 0,
      bathroom: 0,
      description: ""
    };
  }

  //  address
  handleAdrressChange = (e) => {
    e.preventDefault();
    var y = document.querySelector(".upload")
    this.setState({ address: e.target.value });


    if (e.target.value.length !== 0) {

      this.setState({
        disabled: false,

      })
      // checking
      console.log(this.state)
    }
    else {
      y.style.display = "none";

      this.setState({
        disabled: true,

      })
    }

  }

  // description
  handleDescriptionChange = (e) => {
    e.preventDefault();
    var y = document.querySelector(".upload")

    this.setState({ description: e.target.value });


    if (e.target.value.length !== 0) {
      this.setState({
        disabled: false,


      })
      // checking
      console.log(this.state)
    }
    else {
      y.style.display = "none";
      this.setState({
        disabled: true,

      })
    }

  }

  // bedroom

  handleBedroomChange = (e) => {
    e.preventDefault();
    var y = document.querySelector(".upload")

    this.setState({ bedroom: e.target.value });


    if (e.target.value.length !== 0) {
      this.setState({
        disabled: false,


      })
      // checking
      console.log(this.state)
    }
    else {
      y.style.display = "none";
      this.setState({
        disabled: true,

      })
    }

  }

  // bathroom


  handleBathroomChange = (e) => {
    e.preventDefault();
    var y = document.querySelector(".upload")

    this.setState({ bathroom: e.target.value });


    if (e.target.value.length !== 0) {
      this.setState({
        disabled: false,


      })
      // checking
      console.log(this.state)
    }
    else {
      y.style.display = "none";

      this.setState({
        disabled: true,

      })
    }

  }



  // csv
  // on drag
  onDrop = (e) => {
    e.preventDefault();

    Array.from(e.dataTransfer.files)
      .filter((file) => file.type === "text/csv")
      .forEach(async (file) => {
        const text = await file.text();
        const result = parse(text, { header: true });
      });
  }

  // 



  render() {
    return (
      <div className="container">

        <div className="container-sm" align="center">
          <button type="button" class="btn btn-success" onClick={() => {
            var x = document.querySelector(".scratch")
            var z = document.querySelector(".scratch2")


            if (x.style.display === "none") {
              x.style.display = "block";
              z.style.display = "none"

            } else {
              x.style.display = "none";
            }
          }}>Add from Scratch</button>
          <button type="button" class="btn btn-success" onClick={() => {
            var x = document.querySelector(".scratch2")
            var z = document.querySelector(".scratch")

            if (x.style.display === "none") {
              x.style.display = "block";
              z.style.display = "none";

            } else {
              x.style.display = "none";
            }
          }}>upload as csv</button>

          <section className="scratch"  >

            <form>



              <label for="inputAddress">Address</label>
              <input type="text" className="form-control" id="inputAddress" name="address" placeholder="1234 Main St" value={this.state.address} onChange={this.handleAdrressChange} />

              <label for="inputEmail4">Number of Bedroom</label>
              <input type="number" className="form-control" id="inputBedroom" name="bedroom" placeholder="0" value={this.state.bedroom} onChange={this.handleBedroomChange} />

              <label for="inputPassword4">Number of Bathroom</label>
              <input type="number" className="form-control" id="inputBathroom" name="bathroom" placeholder="0" value={this.state.bathroom} onChange={this.handleBathroomChange} />

              <label for="inputDescription">Description of the Property</label>
              <input type="text" className="form-control" id="inputDescription" name="description" placeholder="..." value={this.state.description} onChange={this.handleDescriptionChange} />



              <button type="submit" className="btn btn-primary" id="myBtn" disabled={this.state.disabled} onClick={(e) => {
                e.preventDefault()
                var y = document.querySelector(".upload")
                if (y.style.display === "none") {
                  y.style.display = "block";
                } else {
                  y.style.display = "none";
                }
              }}>Sign in</button>
            </form>
          </section>


          <section className="scratch2"  >
            <div>
              <PopUp />
            </div>
            
          </section>

        </div>
        <section className="upload">
          <ImageAudioVideo address={this.state.address}  bedroom = {this.state.bedroom}
      bathroom ={this.state.bathroom}
      description = {this.state.description} />
        </section>
      </div>
    );
  }
}


export default App;



