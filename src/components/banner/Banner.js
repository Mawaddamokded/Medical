import React, { Component} from "react";
import axios from "axios";
import { Container } from "reactstrap";
import Team from "../team";
class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom_doc: "",
      ville: "",
      resultFound: false,
      filteredData: "",
      docteur: [],
      specialite: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.crimeChange = this.crimeChange.bind(this);
    this.search = this.search.bind(this);
    this.multiFilter = this.multiFilter.bind(this);
  }
  
  multiFilter(array, filters) {
    const filterKeys = Object.keys(filters);
    // filters all elements passing the criteria
    return array.filter((item) => {
      // dynamically validate all filter criteria
      return filterKeys.every((key) => !!~filters[key].indexOf(item[key]));
    });
  }
  
  handleChange(event) {
    this.setState({ nom_doc: event.target.value });
  }

  crimeChange(event) {
    this.setState({ ville: event.target.value });
  }
  search() {
    let _this = this;
    let { nom_doc, ville } = this.state;
    const url = `https://localhost3000/cabinet/docteur/search?${nom_doc}&q=${ville}`;
    
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then(function (data) {
        console.log(data, nom_doc, ville);
        let filters = {
          "docteur========": [nom_doc],
          "ville==========": [parseInt(ville)],
        };
        let filtered = _this.multiFilter(data, filters);
        console.log(filtered);
        if (filtered.length <= 0) {
          _this.setState({ resultFound: false });
        } else {
          _this.setState({ filteredData: filtered, resultFound: true });
        }
      });
  }
  componentDidMount() {
    axios.get("/cabinet/docteur").then((res) => {
      console.log(res);
      this.setState({ docteur: res.data });
    });
    axios.get("/cabinet/docteur/spec").then((res) => {
      console.log(res);
      this.setState({ specialite: res.data });
    });
    axios.get("/cabinet/docteur/ville").then((res) => {
      console.log(res);
      this.setState({ ville: res.data });
    });
  }

  render() {
    const { specialite } = this.state;
    const { ville } = this.state;
    let specialiteList =
      specialite.length > 0 &&
      specialite.map((item, i) => {
        return (
          <option key={i} value={item.id}>
            {item.nom_spec}
          </option>
        );
      }, this);

    let villeList =
      ville.length > 0 &&
      ville.map((item, i) => {
        return (
          <option key={i} value={item.id}>
            {item.nom_ville}
          </option>
        );
      }, this);

    return (
      <div id="tcd-banner" className="tcd-banner">
        {/* Banner Wrapper Part */}
        <div className="banner-wrapper">
          <Container>
            <div className="banner-part">
              <section id="hero" className="d-flex align-items-center">
                <div className="container">
                  {/* <div class="row" style="margin: 100%; "> */}
                  <div className="col">
                    <input
                      type="text"
                      value={this.state.nom_doc}
                      onChange={this.handleChange}
                      placeholder="Nom Docteur"
                      id="arround"
                      className="form-control"
                    />
                  </div>
                  <div className="col">
                    <select
                      name="Spécialité"
                      id="arround"
                      className="form-control"
                    >
                      <option value>Spécialite</option>
                      {specialiteList}
                    </select>
                  </div>
                  <div className="col">
                    <select
                      name="Ville"
                      id="arround"
                      value={this.state.ville}
                      onChange={this.crimeChange}
                      className="form-control"
                    >
                      <option value>Ville</option>
                      {villeList}
                    </select>
                  </div>
                  <div className="col">
                    <label />
                    <input
                      className="button1"
                      onClick={() => this.search()}
                      href="#tcd-team"
                      type="submit"
                    />

                    <br />
                  </div>
                </div>
              
              </section>
            </div>
          </Container>
        </div>
    {/*     {!this.state.resultFound ? (
                  <div> No Data Found!!</div>
                ) : (
                  JSON.stringify(this.state.filteredData)
                )} */}
  
      </div>
    );
  }
}
export default Banner;
