// Code taken from https://github.com/react-bootstrap/react-bootstrap/tree/master/docs
import React from "react";
import packageJSON from "../../../package.json";

require("./index.less");

export default class PageFooter extends React.Component {

  render() {
    return (
        <footer className="bs-docs-footer" role="contentinfo">
			<div>
				<p><b> Background image by <a href="https://www.artstation.com/artwork/J1QAd">Julien Gauthier</a></b></p>
				<p><b> Comments, suggestions, crazy hook or trait idea? </b></p>
				<p> Email me at: <a href="mailto:etienspb@gmail.com">EtiensPB@gmail.com</a>!</p>
			</div>
            <div className="bs-docs-social">
              <ul className="bs-docs-social-buttons">
                <li>
                  <iframe className="github-btn"
                    src="http://ghbtns.com/github-btn.html?user=cellule&repo=dndGenerator&type=watch&count=true"
                    width={95}
                    height={20}
                    title="Star on GitHub" />
                </li>
                <li>
                  <iframe className="github-btn"
                    src="http://ghbtns.com/github-btn.html?user=cellule&repo=dndGenerator&type=fork&count=true"
                    width={92}
                    height={20}
                    title="Fork on GitHub" />
                </li>
              </ul>
            </div>
            <p>Code licensed under <a href="https://github.com/cellule/dndGenerator/blob/master/LICENSE" target="_blank">MIT</a>.</p>
            <ul className="bs-docs-footer-links muted">
              <li>Currently v{packageJSON.version}</li>
              <li>·</li>
              <li><a href="https://github.com/cellule/dndGenerator/">GitHub</a></li>
              <li>·</li>
              <li><a href="https://github.com/cellule/dndGenerator/issues?state=open">Issues</a></li>
              <li>·</li>
              <li><a href="https://github.com/cellule/dndGenerator/releases">Releases</a></li>
            </ul>
        </footer>
      );
  }
};

