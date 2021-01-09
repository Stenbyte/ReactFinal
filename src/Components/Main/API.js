import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";

class API extends Component {
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
  }

  render() {
    return (
      <Container fluid>
        <div>
          {this.state.loading || !this.state.person ? (
            <div>Loading...</div>
          ) : (
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={this.state.person.picture.large}
                alt="name"
              />
              <Card.Body>
                <Card.Title>
                  {this.state.person.name.title} {this.state.person.name.first}{" "}
                  {this.state.person.name.last}
                </Card.Title>
                <Card.Text>
                  <p>City: {this.state.person.location.city}</p>
                  <p>Street name: {this.state.person.location.street.name}</p>
                  <p>
                    Street number: {this.state.person.location.street.number}
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </div>
      </Container>
    );
  }
}

export default API;

//   /* <div>
//   <div>{this.state.person.name.first} </div>
//   <div>{this.state.person.name.last} </div>
//   <div>{this.state.person.name.title} </div>
//   <img src={this.state.person.picture.large} alt="name" />
//   <div>{this.state.person.location.street.number} </div>
//   <div>{this.state.person.location.street.name} </div>
//   <div>{this.state.person.location.city} </div>
// </div>; */
