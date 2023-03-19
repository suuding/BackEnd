import React,  {useState} from "react";
import { Box } from '@mui/material';
import GalleryDialog from "./GalleryDialog";
import GalleryLike from "./GalleryLike";
import LeftArrow from "../../../ui/arrow/LeftArrow";
import RightArrow from "../../../ui/arrow/RightArrow";

const GalleryItem = (props) => {

    const { setIndex, index, data, imgs } = props;
    const [open, setOpen] = useState(false);

    const indexBack = () => {
        setIndex(index-1);
    }

    const indexForward = () => {
        setIndex(index+1);
    }

    return (
        <Box
            sx={{
                width: '100%',
                height: '50vh',
                border: '1px solid skyblue',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                //margin: 0
            }}
        >
            <LeftArrow
                indexBack={indexBack} //전달해주는 props와 이름이 같아야한다.
            />
            <Box>
                {/* JSON 객체 배열에서 객체 액세스 하는 방법으로 src변경 */}
                <img
                    src={data.image[index]}
                    alt={''}
                    style={{
                        width: 'auto',
                        height: '40vh',
                        maxWidth: '100%',
                        marginTop: '5%',
                        cursor: 'pointer'
                    }}
                    onClick={ () => {
                        setOpen(true);
                    }}
                />
                <GalleryLike/>
            </Box>
            <RightArrow
                indexForward={indexForward}
            />
            <GalleryDialog
                data={data}
                index={index}
                setIndex={setIndex}
                open={open}
                setOpen={setOpen}
            />
        </Box>
    );
};

export default GalleryItem;