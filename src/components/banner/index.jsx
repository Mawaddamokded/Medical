import Header from '../header'
import React, { Component } from 'react';
import axios from 'axios';
import { Container } from 'reactstrap';

class Banner extends Component {

  state = {
    docteur: [],
    specialite: [],
    ville: [],
  };
  componentDidMount() {
    axios.get('/cabinet/docteur').then(res => {
      console.log(res);
      this.setState({ docteur: res.data });
    });
    axios.get('/cabinet/docteur/spec').then(res => {
      console.log(res);
      this.setState({ specialite: res.data });
    });
    axios.get('/cabinet/docteur/ville').then(res => {
      console.log(res);
      this.setState({ ville: res.data });
    });
  };
  render() {
    const { specialite } = this.state;
    const { ville } = this.state;
      let specialiteList = specialite.length > 0
      && specialite.map((item, i) => {
        return (
          <option key={i} value={item.id}>{item.nom_spec}</option>
        )
      }, this);

      let villeList = ville.length > 0
      && ville.map((item, i) => {
        return (
          <option key={i} value={item.id}>{item.nom_ville}</option>
        )
      }, this);

    return (

      <div id="tcd-banner" className="tcd-banner">

        {/* Header Part */}
        <Header />

        {/* Banner Wrapper Part */}
        <div className="banner-wrapper">
          <Container>
            <div className="banner-part">
              <section id="hero" className="d-flex align-items-center">
                <div className="container">
                  {/* <div class="row" style="margin: 100%; "> */}
                  <div className="col">
                    <input type="text" placeholder="Nom Docteur" id="arround" className="form-control" />
                  </div>
                  <div className="col">
                    <select name="Spécialité" id="arround" className="form-control">
                      <option value>Spécialite</option>
                      {specialiteList}

                    </select>
                  </div>
                  <div className="col">
                    <select name="Ville" id="arround" className="form-control">
                      <option value>Ville</option>
                      {villeList}
                    </select>
                  </div>
                  <div className="col">
                    <label />
                    <form action method>
                      <input className="buttonTemp" href="#tcd-team" onClick={this.searchDoct} type="submit" />
                    </form>
                    <br />


                  </div>
                </div>
              </section>
              
            </div>

          </Container>

        </div>





      </div>

    )
  }
}
export default Banner