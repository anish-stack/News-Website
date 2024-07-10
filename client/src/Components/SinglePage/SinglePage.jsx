import React from 'react'

function SinglePage() {
    const data = [
        {
            id: 1,
            categoryName: 'Sports',
            title: `The world's largest cryptocurrency exchange Binance is launching a new token`,
            date : 'Jan 15, 2024',
            img : 'https://media.gettyimages.com/id/1339466666/vector/breaking-news.jpg?s=612x612&w=gi&k=20&c=eK_UQucPkqLJC9IrrsoE4SZSSCHa74YhXlG8zM2xvBY=',
            writerName : 'Jon'
        },
        {
            id: 2,
            categoryName: 'Entertainment',
            title: `The world's largest cryptocurrency exchange Binance is launching a new token`,
            date : 'Jan 15, 2024',
            img : 'https://media.gettyimages.com/id/1339466666/vector/breaking-news.jpg?s=612x612&w=gi&k=20&c=eK_UQucPkqLJC9IrrsoE4SZSSCHa74YhXlG8zM2xvBY=',
            writerName : 'Jon'
        },
        {
            id: 3,
            categoryName: 'Entertainment',
            title: `The world's largest cryptocurrency exchange Binance is launching a new token`,
            date : 'Jan 15, 2024',
            img : 'https://media.gettyimages.com/id/1339466666/vector/breaking-news.jpg?s=612x612&w=gi&k=20&c=eK_UQucPkqLJC9IrrsoE4SZSSCHa74YhXlG8zM2xvBY=',
            writerName : 'Jon'
        },
    ]
    return (
        <section className='CategoryHome-section'>
            <div className="CategoryHome-container">
                <div className="CategoryHome-heading">
                    <h3>Category</h3>
                </div>
                <div className="category-row">
                    {
                        data && data.map((item, index) => (
                            <div className="category-col" key={index}>
                                <div className="category-col-img">
                                    <img src={item.img} alt={item.categoryName} />
                                </div>
                                <div className="category-col-heading">
                                    <div className="cate-date">
                                        <span className='cate'>
                                            {item.categoryName}
                                        </span>
                                        <span className='date'>
                                            {item.date}
                                        </span>
                                    </div>
                                    <p>{item.title}</p>
                                </div>
                                <div className="auth">
                                    <p className='auth-name'>{item.writerName}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default SinglePage
