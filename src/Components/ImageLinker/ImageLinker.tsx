import { motion } from "motion/react";
import { useState } from "react";
import "./ImageLinker.css";


const ImageLinker = (props: {
  handleSubmit: (url: string) => void;
  handleClose: () => void;
}) => {
  const [imageLink, setImageLink] = useState("");

  const handleSave = () => {
    props.handleSubmit(imageLink);
    props.handleClose();
    setImageLink("");
  }

  return (
      <motion.div
          className="ImageLinker" 
          onClick={(e) => e.stopPropagation()}
          initial={{opacity: 0, y: "40px"}}
          animate={{opacity: 1, y: "0", transition: { duration: 0.35, type: "tween", ease: "easeOut" }}}
          exit={{opacity: 0, y: "-40px"}}
        >
      <motion.div 
        className="ImageLinker__preview" 
        style={{ backgroundImage: `url(${imageLink})` }} 
        initial={{opacity: 0, y: "-80px"}}
        animate={{opacity: 1, y: "0", transition: { duration: 0.35, type: "tween", ease: "easeOut" }}}
        exit={{opacity: 0, y: "80px"}}
      />
      <div className="ImageLinker__label">IMAGE LINK</div>
      <input type="text" onChange={(e) => setImageLink(e.target.value)} />
      <button onClick={handleSave} disabled={imageLink === ""}>SAVE</button>
      <button className="ImageLinker__close" onClick={props.handleClose}>X</button>
      <div className="ImageLinker__preview--bg" >
        <div className="ImageLinker__preview--bg-overlay" />
        <div style={{ backgroundImage: `url(${imageLink})` }} />
      </div>
    </motion.div>
  )
}

export default ImageLinker;