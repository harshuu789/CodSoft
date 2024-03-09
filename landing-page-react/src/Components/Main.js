
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const Main = () => {
  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(8);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=7d071ad4f3da4aedb3582c093a66068b');
        setNewsData(response.data.articles);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = newsData.slice(startIndex, endIndex);

  return (
    <div className="news-container">
      {itemsToDisplay.map((article, index) => (
        <div key={index}>
          <h2>{article.title}</h2>
          {article.urlToImage && <img src={article.urlToImage} alt="Article" />}
          <p>{article.description}</p>
          <a className="read-more-link" href={article.url}>Read More</a>
        </div>
      ))}
      <ReactPaginate
        pageCount={Math.ceil(newsData.length / itemsPerPage)}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName="active"
        previousLabel={<span>&#8592;</span>}
        nextLabel={<span>&#8594;</span>}
      />
    </div>
  );
};

export default Main;


