import React, { Component } from "react";
import "../assets/css/main.css";
import NavigationSection from "../sections/NavigationSection";
import WidgetSection from "../sections/WidgetSection";
import FooterSection from "../sections/FooterSection";
import HeaderSection from "../sections/HeaderSection";
import PostSection from "../sections/PostSection";
import { getNews, searchNews } from "../services/apis/newsApi";
import Swal from "sweetalert2";

class Layout extends Component {
  state = {
    newsData: [],
    isLoaded: false,
    newsID: null,
    searchData: "",
    btnStatus: false,
  };

  searchOnChange = (e) => {
    this.setState({
      searchData: e.target.value,
    });
  };

  searchPostData = (e) => {
    e.preventDefault();
    this.setState({
      btnStatus: true,
    });
    searchNews(this.state.searchData)
      .then((res) => {
        this.setState({
          newsData: res.articles,
          isLoaded: true,
          searchData: "",
          btnStatus: false,
        });
      })
      .catch((e) => {
        console.log(e);
        Swal.fire("Oops", "Something When Wrong !!!", "error");
      });
  };

  getNewsData = (id) => {
    this.setState({
      isLoaded: false,
    });
    getNews(id)
      .then((res) => {
        this.setState({
          newsData: res.articles,
          isLoaded: true,
        });
      })
      .catch(() => {
        Swal.fire("Oops", "Connection Timeout !!!", "error");
      });
  };

  componentDidMount() {
    if (this.props.match) {
      const newsID = this.props.match.params.newsID;
      this.setState({
        newsID,
      });
      this.getNewsData(newsID);
    }
  }

  render() {
    console.log(this.state.newsID);
    return (
      <div>
        <section id="header">
          <HeaderSection />
        </section>
        <section id="navigation">
          <NavigationSection
            searchData={this.state.searchData}
            searchButton={this.searchPostData}
            searchChange={this.searchOnChange}
            btnStatus={this.state.btnStatus}
            linkClick={this.getNewsData}
          />
        </section>
        <section className="mainContent" style={{ margin: "2rem" }}>
          <div className="row">
            <section id="main" className="col-12 col-md-12 col-lg-8 col-xl-8">
              <div
                className="card"
                style={{
                  borderRadius: "1rem",
                  border: "none",
                  boxShadow:
                    "0 0.8px 2.2px rgba(0, 0, 0, 0.02), 0 1.9px 5.3px rgba(0, 0, 0, 0.028), 0 3.6px 10px rgba(0, 0, 0, 0.035), 0 6.5px 17.9px rgba(0, 0, 0, 0.042), 0 12.1px 33.4px rgba(0, 0, 0, 0.05), 0 29px 80px rgba(0, 0, 0, 0.07)",
                }}
              >
                <PostSection
                  data={this.state.newsData}
                  load={this.state.isLoaded}
                />
              </div>
            </section>
            <section id="widget" className="col-12 col-md-12 col-lg-4 col-xl-4">
              <WidgetSection />
            </section>
          </div>
        </section>
        <section id="footer" className="mt-5 py-5 text-light footer">
          <FooterSection />
        </section>
      </div>
    );
  }
}

export default Layout;
