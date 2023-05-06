import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { getNews } from "../services/apis/newsApi";
import loading from "../assets/img/loading.gif";
import styled from "styled-components";

const WidgetPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  p {
    font-weight: bold;
    font-size: 1.2rem;
    color: #212529;
  }

  hr {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const WidgetPostLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const WidgetPost = () => {
  const [newsData, setNewsData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const businessToday = () => {
    getNews("business")
      .then((res) => {
        setNewsData(res.articles);
        setIsLoaded(true);
      })
      .catch(() => {
        Swal.fire("Oops", "Connection Timeout !!!", "error");
      });
  };

  useEffect(() => {
    businessToday();
  }, []);

  return (
    <WidgetPostContainer>
      {isLoaded ? (
        <>
          {newsData.map((businessData) => (
            <div key={businessData.title}>
              <a href={businessData.url}>
                <img src={businessData.urlToImage} alt="" />
              </a>
              <div>
                <a href={businessData.url}>
                  <p>{businessData.title}</p>
                </a>
              </div>
              <hr />
            </div>
          ))}
        </>
      ) : (
        <WidgetPostLoading>
          <img src={loading} alt="" width="28px" />
        </WidgetPostLoading>
      )}
    </WidgetPostContainer>
  );
};

export default WidgetPost;
