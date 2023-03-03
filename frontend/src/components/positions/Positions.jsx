import React from 'react';
import './positions.css';
import { Row, Col, Container } from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Experience() {
	return (
		<Container className="time" id="positions">
			<div className="top">
				<h3>Positions</h3>
			</div>
			<div class="timeline">
				<VerticalTimeline lineColor="rgb(0, 0, 0)">
					<VerticalTimelineElement
						className="vertical-timeline-element"
						contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
						contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
						iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
					>
						<h3 className="vertical-timeline-element-title">Events Head</h3>
						<h6 className="vertical-timeline-element-subtitle">CSI Sakec 2022-23</h6>
						<p> Delegation, Analytical Decision Making, Perceptiveness</p>
					</VerticalTimelineElement>

					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
						contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
						iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
					>
						<h3 className="vertical-timeline-element-title">Literature Team Head</h3>
						<h6 className="vertical-timeline-element-subtitle">Student Council 2021-Present</h6>
						<p>Content Writing, Team building</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
						contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
						iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
					>
						<h3 className="vertical-timeline-element-title">Social Media Co-head</h3>
						<h6 className="vertical-timeline-element-subtitle">CSI Sakec 2021-22</h6>
						<p>Creative Direction, Social Media Marketing, Visual Design, Lateral thinking</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
						contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
						iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
					>
						<h3 className="vertical-timeline-element-title">Student Member</h3>
						<h4 className="vertical-timeline-element-subtitle">Sambodhi (Writer's Club)</h4>
						<p>Creative Writing, Storytelling, Feature Writing</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element"
						contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
						contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
						iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
					>
						<h3 className="vertical-timeline-element-title">
							House Captain
						</h3>
						<h4 className="vertical-timeline-element-subtitle">St. Xavire's High School & Jr. College</h4>
						<p>Disciplining, Prioritization, Morale-building</p>
					</VerticalTimelineElement>
					{/* <VerticalTimelineElement
						className="vertical-timeline-element"
						contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
						contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
						iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
					>
						<h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
						<h4 className="vertical-timeline-element-subtitle">Certification</h4>
						<p>Creative Direction, User Experience, Visual Design</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element"
						iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
					>
						<h3 className="vertical-timeline-element-title">
							Bachelor of Science in Interactive Digital Media Visual Imaging
						</h3>
						<h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
						<p>Creative Direction, Visual Design</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }} /> */}
				</VerticalTimeline>
			</div>
		</Container>
	);
}

export default Experience;
