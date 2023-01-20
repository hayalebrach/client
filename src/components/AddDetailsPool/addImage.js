import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { AddIImagePool, updatePool } from "../../store/Actions/Pools";


export default function AddImage({Id}) {
     const [File, setFile] = useState(null);
     const dispatch=useDispatch();
    
    const uploedFile = ({ target }) => {
        setFile(target.files[0]);
    }
    const save = () => {
        alert(Id);
        const formData = new FormData();
        console.log("im File",File );
        formData.append('Image',File);
        formData.append('ItemId', Id ? Id : 0);
         AddIImagePool(formData).then(dispatch(updatePool(formData)));
    }
    return (
        <Fragment>
           
            <input lablName="תמונה" type="file" className="chageIMG"  onChange={uploedFile} />
            <input type="button" value="החל תמונה" onClick={save}/>
        </Fragment> 
    );
}








