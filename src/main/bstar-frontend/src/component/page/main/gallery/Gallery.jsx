import React, {useState} from 'react';
import GalleryList from './GalleryList';
import GalleryDesc from './GalleryDesc';
import './GalleryCss.css'
import GalleryItem from './GalleryItem';
import GalleryTitle from './GalleryTitle';
import GalleryModify from "./GalleryModify";
import './GalleryCss.css';


function Gallery(props){

    const {data} = props;
    const [index, setIndex] = useState(0);
   

    return(
        <div className='galleryTotal'>
            <GalleryModify 
                className='galleryModify'
                data={data} 
                /*style={{
                    float: 'right'
                }}*/
            />
            <div className='gallery'>

            
                <GalleryTitle data={data}></GalleryTitle>
                <GalleryItem data={data} index={index} setIndex={setIndex}></GalleryItem>
                <GalleryDesc data={data} index={index}></GalleryDesc>
                
                
            </div>
        </div>
    );
}

export default Gallery;