'use client';

import { useRef, useState } from 'react';
import classes from './ImagePicker.module.css';
import Image from 'next/image';


export default function ImagePicker({label, name}){

    const ImageRef = useRef();
    const[ImagePicker, setImagepicker] = useState(null);


    function handleClick(){
        ImageRef.current.click();
    }

    function onChange(event){

        const file = event.target.files[0];

        if(!file){
            setImagepicker(null);
            return;
        }  

        const fileReader = new FileReader();
        fileReader.onload =() =>{
            setImagepicker(fileReader.result);
        }
        fileReader.readAsDataURL(file);

    }
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    { !ImagePicker ? <p>No image picked yet</p> :<Image src={ImagePicker} fill/>}
                </div>
                <input className={classes.input}
                 type='file'
                 id={name}
                 accept='image/png, image/jpeg'
                 name={name}
                 ref={ImageRef}
                 onChange={onChange}
                 required/>
                 <button className={classes.button}
                 type='button'
                 onClick={handleClick}
                 > Pick an Image</button>
            </div>
        </div>
    )
}