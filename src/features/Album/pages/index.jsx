import { useEffect } from 'react';
import productApi from '../../../api/productApi';
import AlbumList from '../components/AlbumList';

const AlbumFeature = (props) => {
    const albumList = [
        {id : 1, name:"Album 1", thumbnailUrl:"https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/8/3/4/0834f695b6f3666e705401e005bf97e8.jpg"},
        {id : 2, name:"Album 2", thumbnailUrl:"https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/c/3/6/ac365130672dc1a7038143757a3b9357.jpg"},
        {id : 3, name:"Album 3", thumbnailUrl:"https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/a/8/a/aa8a09786bd1d04de4702360980bad08.jpg"},
        {id : 4, name:"Album 4", thumbnailUrl:"https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/3/b/1/43b1a01b4a9a11cd4d03392c0904e072.jpg"},
        {id : 5, name:"Album 5", thumbnailUrl:"https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/2/7/c/d27cb45cd711804c3df8b20be70a9b20.jpg"},
        {id : 6, name:"Album 6", thumbnailUrl:"https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/c/b/2/fcb2221aa4589d9f3165f7f2ca2ca821.jpg"},
        {id : 7, name:"Album 7", thumbnailUrl:"https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/3/b/1/43b1a01b4a9a11cd4d03392c0904e072.jpg"},
        {id : 8, name:"Album 8", thumbnailUrl:"https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/f/0/9/df094e79da1005342032c00fbbe50abd.jpg"},
        {id : 9, name:"Album 9", thumbnailUrl:"https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/3/b/2/a3b2b31ff8591cb7d6260377e06471fa.jpg"},
    ]

    useEffect(() => {
        const fetchProducts = async () => {
            const productList = await productApi.getAll();
            console.log("🚀 ~ file: index.jsx:21 ~ fetchProducts ~ productList:", productList)
        }
        fetchProducts()
        
    },[])

    return (
        <div>
            <h3>Album List</h3>
            <AlbumList albumList={albumList}/>
        </div>
    );
};

export default AlbumFeature;