import React from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../data/db.json';
function NewsDetail() {
    let { id } = useParams();
    // console.log(title, id);
    let newsData = data.news;
    let mainNews = newsData.filter(item => {
        if (item.id === parseInt(id)) {
            return item;
        }
    })
    let countItems = 0;

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 mx-auto mb-md-5 mt-lg-5">
                    <div className="card-deck">
                        <div className="card">
                            <img className="card-img-top mx-auto" src="https://topdev.vn/blog/wp-content/uploads/2017/10/react2.png" style={{ maxWidth: 700 }} alt="" />
                            <div className="card-body">
                                <h4 className="card-title">{mainNews[0].title}</h4>
                                <p className="card-text">{mainNews[0].description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center news-item">
                {   
                    newsData.map((item, key) => {
                        if(countItems >= 4) {
                            return;
                        }
                        if (item.id !== parseInt(id)) {
                            countItems++;
                            let pathTitle = to_slug(item.title)
                            return (
                                <Link className="col-6 col-md-3 mb-sm-4 mb-lg-5" to={`/news-detail/${pathTitle}.${item.id}`}>
                                    <div className="card-deck">
                                        <div className="card">
                                            <img className="card-img-top" src="https://topdev.vn/blog/wp-content/uploads/2017/10/react2.png" alt="" />
                                            <div className="card-body">
                                                <h4 className="card-title">Title {item.id}</h4>
                                                <p className="card-text">Text</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    })
                }
            </div>
        </div>

    )
}


function to_slug(str) {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();

    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');

    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');

    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');

    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');

    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');

    // return
    return str;
}

export default NewsDetail
