import React from "react";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import "./footer.css";
export default function Footer({ dark, setDark }) {
	return (
		<div>
			<footer className="footer" style={{ backgroundColor: dark ? "#393E46" : "" }}>
				<div className="d-flex bd-highlight"   style={{flexWrap:"wrap"}}>
					<div className="p-2 bd-highlight">
						<a href="https://github.com/AjuSingh/Dsa_Cracker">
							<h4>
								<Badge pill variant="light" className="hvr-grow">
									<span role="img" aria-label="star" className="emojiFix">
										⭐
									</span>{" "}
									This project
								</Badge>
							</h4>
						</a>
					</div>
					<div className="p-2 bd-highlight">
						<a href="https://contestsite.herokuapp.com/">
							<h4>
								<Badge pill variant="light" className="hvr-grow">
									<span role="img" aria-label="star" className="emojiFix">
										💻
									</span>{" "}
									Live Contest
								</Badge>
							</h4>
						</a>
					</div>

					<div className="p-2 bd-highlight">
						<a href="/notes">
							<h4>
								<Badge pill variant="light" className="hvr-grow">
									<span role="img" aria-label="star" className="emojiFix">
										📝
									</span>{" "}
									Notes
								</Badge>
							</h4>
						</a>
					</div>
					<div className="ml-auto p-2 bd-highlight footer-toggle">
						<h4>
							{/* toggle dark mode */}
							<Badge
								pill
								variant="light"
								className="hvr-grow"
								onClick={() => {
									setDark(!dark);
									window.localStorage["isDark"] = !dark;
								}}
								style={{ cursor: "pointer" }}
							>
								{dark ? (
									<span role="img" aria-label="sun-emoji" className="emojiFix">
										☀️
									</span>
								) : (
									<span role="img" aria-label="moon-emoji" className="emojiFix">
										🌙
									</span>
								)}
							</Badge>{" "}
							<Link to="/about">
								<Badge pill variant="light" className="hvr-grow">
									About{" "}
									<span role="img" aria-label="face-with-monocole" className="emojiFix">
										🧐
									</span>
								</Badge>
							</Link>
						</h4>
					</div>
				</div>
			</footer>
		</div>
	);
}
