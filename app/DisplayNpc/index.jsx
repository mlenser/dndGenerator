var React = require("react");
//var Link = require("react-router").Link;
var NpcData = require("./../components/NpcData");
var Footer = require("./../components/Footer");
var Header = require("./../components/Header");
var UserInput = require("./../components/UserInput");
var Row = require("react-bootstrap/Row");
var Col = require("react-bootstrap/Col");

var actions = require("./../actions");

require("./index.less");

export default class DisplayNpc extends React.Component {

  constructor(props) {
    super(props);
    this.state = {npc: null}

    this.generateNpc(this.props.query);
    this.generateNpc = this.generateNpc.bind(this);
  }

  generateNpc(options) {
    actions.Npc.generate(options, (err, res) => {
      if(err) {
        console.error(err);
      }
      this.setState({
        npc: res.body
      });
    });
  }

  render() {
    return (
      <div>
        <Row>
          <Col
            xs={12}
            xsOffset={0}
            sm={4}
            smOffset={0}
            md={3}
            mdOffset={0}
            className="user-info-col top-padding options-panel"
          >
			<Header />
            <UserInput npc={this.state.npc} generate={this.generateNpc}/>
          </Col>
          <Col
            xs={12}
            xsOffset={0}
            sm={7}
            smOffset={0}
            md={9}
            mdOffset={0}
			className="top-padding"
          >
            <NpcData npc={this.state.npc} />
			<Footer />
          </Col>
        </Row>
      </div>
    );
  }
}
