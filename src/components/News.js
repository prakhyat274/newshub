import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        this.state = {
            articles : [],
            page:1
        }
    }
    async componentDidMount(){
      let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=307b58ea755e463fbe5516dd7e3922c5&page=1&pageSize=20"
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults
      })
    }

    handlePrevClick = async () =>{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=307b58ea755e463fbe5516dd7e3922c5&page=${this.state.page -1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({
        articles: parsedData.articles,
        page : this.state.page - 1
      })
    }

    handleNextClick = async () =>{
      if(this.state.page+1 <= Math.ceil(this.state.totalResults/20)){
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=307b58ea755e463fbe5516dd7e3922c5&page=${this.state.page +1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
          page : this.state.page + 1,
          articles: parsedData.articles
        })
      }
    }

  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center'>NewsHub - Top Headlines</h2>
        <div className='row my-3'>
            {
                this.state.articles.map((element) =>{
                    return <div className='col-md-4 col-sm-12' key={element.url}>
                              <NewsItem  imgUrl={element.urlToImage?element.urlToImage:"https://ma-hub.imgix.net/wp-images/2019/05/28232454/news-intro-template.jpg?w=1600&h=850&auto=format"} 
                              title={element.title?element.title.slice(0,45):""} 
                              description={element.description?element.description.slice(0,90):""} 
                              newsUrl={element.url}/>
                            </div>
                })
            }
        </div>
        <div className='d-flex justify-content-center'>
          <button disabled={this.state.page === 1?true:false}className='button mx-2' onClick={this.handlePrevClick}>&larr; Prev</button>
          <button className='button mx-2' onClick={this.handleNextClick}>Next &rarr;</button>
        </div>    
      </div>
    )
  }
}

export default News