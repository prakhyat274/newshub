import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
    constructor(){
        super();
        this.state = {
            articles : [],
            page:1,
            loading: false
        }
    }

    async updateNews(){
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=20`
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false
      })
    }

    async componentDidMount(){
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=20`
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false
      })
    }

    handlePrevClick = async () =>{
      this.setState({
        page : this.state.page - 1
      })
      this.updateNews()
    }

    handleNextClick = async () =>{
      if(this.state.page+1 <= Math.ceil(this.state.totalResults/20)){
        this.setState({
          page : this.state.page + 1
        })
        this.updateNews()
      }
    }

  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center'>NewsHub - Top Headlines</h2>
        {this.state.loading?<Spinner/>:
        <div className='row my-3'>
            {
                this.state.articles.map((element) =>{
                    return !this.state.loading && <div className='col-md-4 col-sm-12' key={element.url}>
                              <NewsItem  imgUrl={element.urlToImage?element.urlToImage:"https://ma-hub.imgix.net/wp-images/2019/05/28232454/news-intro-template.jpg?w=1600&h=850&auto=format"} 
                              title={element.title?element.title.slice(0,45):""} 
                              description={element.description?element.description.slice(0,90):""} 
                              newsUrl={element.url}/>
                            </div>
                })
            }
        </div>
        }
        <div className='d-flex justify-content-center'>
          <button disabled={this.state.page === 1?true:false}className='button mx-2' onClick={this.handlePrevClick}>&larr; Prev</button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/20)}className='button mx-2' onClick={this.handleNextClick}>Next &rarr;</button>
        </div>    
      </div>
    )
  }
}

export default News