import React, { Component } from "react";
import loading from "../assets/img/loading.gif";
import MainCard from "../components/MainCard";

class PostSection extends Component {
  render() {
    const { data, load } = this.props;
    return (
      <div className="row justify-content-center">
        {load ? (
          data.map((newsData) => (
            <div className="col-md-4 mb-4">
              <MainCard
                image={newsData.urlToImage}
                author={newsData.author}
                date={newsData.publishedAt}
                title={newsData.title}
                description={newsData.description}
                url={newsData.url}
              />
            </div>
          ))
        ) : (
          <div className="col-md-auto d-flex justify-content-center align-items-center">
            <img src={loading} alt="" className="img-fluid mr-2" width="28px" />
            <span>Loading...</span>
          </div>
        )}
      </div>
    );
  }
}

export default PostSection;
