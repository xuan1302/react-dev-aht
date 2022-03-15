import React from 'react';
import AlbumList from './components/AlbumList';




function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'V-Pop: Hits Quốc Dân',
            thumbnail: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/3/4/e/9/34e997492621abb23a753de0d8ebd0d9.jpg',
        },
        {
            id: 2,
            name: 'Pop Ballad Việt Nổi Bật',
            thumbnail: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/5/c/1/6/5c16f1a4bfe1710184c010a7837a7894.jpg',
        },
        {
            id: 3,
            name: 'Hit-Maker: Đạt G',
            thumbnail: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/3/d/d/1/3dd1c2b04d492faaefe5ef251cb6246b.jpg',
        },
        {
            id: 4,
            name: 'V-Pop: 100 Hits Thập Niên',
            thumbnail: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/0/a/9/e/0a9e43f3bc9346957f2750d2f1c0fb32.jpg',
        },
    ]
    return (
        <div>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;