import React from "react";
import TopMenu from "./TopMenu";
import BottomMenu from "./BottomMenu";
import MainContent from "./MainContent";
import Loading from "./Loading";
import { react_objs, my_scroll } from "../functions";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page_num: null,
      fetch: null,
      loading_status: "gif",
    };

    react_objs.app = this;
  }

  fetch_json(page_num) {
    this.setState({
      loading_status: "gif",
    });

    fetch(`https://randomuser.me/api/?page=${page_num}&results=10&seed=abc`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          page_num,
          fetch: data,
          loading_status: "done",
        });
      })
      .catch((error) => {
        this.setState({
          loading_status: "error",
        });
      });
  }

  componentDidMount() {
    // use page from url, otherwise default to page 1
    const { search } = window.location;
    const my_match = search ? search.match(/\?page=\d+/g) : "";
    const page_num_from_url =
      my_match && my_match[0] ? +my_match[0].match(/\d+/) : "";

    // scroll effect for top and bottom menu
    my_scroll.init(window);

    // fetching json data from api
    this.fetch_json(page_num_from_url || 1);
  }

  render() {
    return (
      <div className="App">
        <Loading loading_status={this.state.loading_status} />
        <TopMenu />
        <MainContent fetch={this.state.fetch} />
        <BottomMenu page_num={this.state.page_num} />
      </div>
    );
  }
}
