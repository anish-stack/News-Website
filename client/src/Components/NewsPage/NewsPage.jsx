import React from 'react'
import './NewsPage.css'

function NewsPage() {
    const data = {
        categoryName: 'Sports',
        title: `The world's largest cryptocurrency exchange Binance is launching a new token`,
        date: 'Jan 15, 2024',
        img: 'https://themewagon.github.io/biznews/img/news-700x435-1.jpg',
        writerName: 'Jon',
        paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iusto soluta dolorem expedita illo quas, quo nam, tempora exercitationem, aliquid quod? Quam nesciunt saepe explicabo cupiditate at accusantium a! Nisi ratione harum culpa, sequi enim repellendus, nostrum molestiae qui obcaecati, suscipit omnis iusto dolor veritatis aliquid nam voluptates? Exercitationem quos earum labore, doloremque dolorem ipsa a qui? Rerum iure illo et enim culpa delectus ad earum ut. Aliquam molestiae dolorum pariatur saepe explicabo eaque atque totam similique, porro ipsa. Omnis aperiam repellat nesciunt, aliquam voluptates eos voluptas adipisci. Placeat, voluptatum asperiores eum unde fuga consequuntur id. Minima unde accusantium incidunt!'
    }
    return (
        <section className='NewsPage-section'>
            <div className="NewsPage-container">
                <div className="content">
                    <div className="img">
                        <img src={data.img} alt="" />
                    </div>
                    <div className="main-data">
                        <div className="cate-date">
                            <span className='cate'>
                                {
                                    data.categoryName
                                }
                            </span>
                            <span className='date'>
                                {
                                    data.date
                                }
                            </span>
                        </div>
                        <h1 className='title'>{data.title}</h1>
                        <p className='para'>{data.paragraph}</p>
                    </div>
                    <div className="auth">
                        <p className='auth-name'>
                            {data.writerName}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsPage
