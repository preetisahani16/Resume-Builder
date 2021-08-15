import React from "react";
import { connect } from "react-redux";
import Skin1 from "./skins/skin1";
import Skin2 from "./skins/skin2";
import Skin5 from "./skins/skin5";




const Preview = (props) => {

  console.log("inside preview" , props);

  let skinCode = props.skinCode;
  return (
    <React.Fragment>
      {skinCode == "skin1" && <Skin1 contact={props.contact} education={props.education}></Skin1>}
      {skinCode == "skin2" && <Skin2 contact={props.contact} education={props.education}></Skin2>}
      {skinCode == "skin3" && <Skin5 contact={props.contact} education={props.education}></Skin5>}
      {skinCode == "skin4" && <Skin5 contact={props.contact} education={props.education}></Skin5>}
      {skinCode == "skin5" && <Skin5 contact={props.contact} education={props.education}></Skin5>}
    </React.Fragment>
  );
};

const mapStateToProps = (state) =>{
  console.log("inside map of preview" , state)
  return {
    skinCode : state.document.skinCode
  }
}


export default connect(mapStateToProps)(Preview);
