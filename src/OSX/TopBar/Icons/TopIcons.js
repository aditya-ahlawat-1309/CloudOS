import React, {useState} from 'react'
import DialogBoxFile from '../DialogBoxFile/DialogBoxFile';
import DialogBoxHelp from "../DialogBoxHelp/DialogBoxHelp";
import DialogBoxEdit from "../DialogBoxEdit/DialogBoxEdit";

const TopIcons = () => {

  const [showFile,setShowFile] = useState(false);

const handleClickFile = () => {
  setShowHelp(false);
  setShowEdit(false);
  setShowFile(!showFile);
}

  const [showHelp, setShowHelp] = useState(false);

  const handleClickHelp = () => {
    setShowHelp(!showHelp);
  setShowEdit(false);
  setShowFile(false);
  };

 const [showEdit, setShowEdit] = useState(false);

 const handleClickEdit = () => {
   setShowEdit(!showEdit);
   setShowHelp(false);
   setShowFile(false);
 };

  return (
    <div
      style={{
        color: "white",
        //backgroundColor: "black",
        height: "35px",
        display: "flex",
      }}
    >
      <img
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSonXt9NxcNDx6RraYgy2b-FAYNA_Rzm_0Ms6dAlGxsS219I24D88lILl_5gfO1bwCv7EY&usqp=CAU"
        }
        style={{
          width: "25px",
          marginLeft: "2%",
          marginTop: "3.25px",
          height: "24px",
        }}
      />

      <div
        style={{
          marginLeft: "5%",
          marginTop: "7.5px",
          fontWeight: "bold",
          display: "flex",
          color: "black",
        }}
      >
        <button
          style={{
            border: "none",
            outline: "none",
            background: "none",
            color: "black",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={() => handleClickFile()}
        >
          F i l e
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button
          style={{
            border: "none",
            outline: "none",
            background: "none",
            color: "black",
            fontWeight: "bold",
            cursor:"pointer",
          }}
          onClick={() => handleClickEdit()}
        >
          E d i t
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button
          style={{
            fontWeight: "bold",
            border: "none",
            outline: "none",
            background: "none",
            color: "black",
            cursor: "pointer",
          }}
          onClick={() => handleClickHelp()}
        >
          H e l p
        </button>
      </div>
      <div
        style={{
          color: "black",
          marginLeft: "19%",
          marginTop: "10px",
          fontWeight: "bold",
        }}
      >
        A P P L E &nbsp;&nbsp;C L O U D&nbsp;&nbsp; O S &nbsp;&nbsp;P R O T O T
        Y P E
      </div>
      {showFile ? <DialogBoxFile /> : null}
      {showHelp ? <DialogBoxHelp /> : null}
      {showEdit ? <DialogBoxEdit /> : null}
    </div>
  );
}

export default TopIcons