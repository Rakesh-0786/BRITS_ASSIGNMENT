import React from 'react'
import { UploadOutlined } from "@ant-design/icons";


export default function 
() {
  return (
    <div style={{marginTop:'150px', textAlign:'right'}}>
    <span style={{marginRight:'10px'}}><strong>Attachment*</strong></span>
    <span style={{marginRight:'10px'}}><button type='submit' style={{border:'1px solid black',padding:'7px',color:'black'}}><UploadOutlined style={{ marginRight: "5px" }} />Upload</button></span>
    <span><button type='submit' style={{border:'1px solid black',padding:'7px',backgroundColor:'black',color:'white'}}>Submit</button></span>
    </div>
  )}