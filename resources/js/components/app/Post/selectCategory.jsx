import React, {useState, useEffect} from 'react';




export default function SelectCategory(){
    return (
        <> 
<form method="post" className="">
    
        <div className="form-group">
            <label htmlFor="Upoload picture"></label>
            <input name="uploaded_photo_path" type="file"/>
        </div>   
    <div className="form-group">
            <label htmlFor="service_category">Select service category from list below</label>
        <select name="service_category" id="">
            <option  value="help" >Help with repairs</option>
            <option value="driver">Driver Needed</option>
            <option value="tutor">Tutor</option>
            <option value="other">Other</option>
        </select>
    </div>

</form> 

        </>
    );
}