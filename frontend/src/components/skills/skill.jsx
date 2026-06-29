import React, { useEffect, useRef } from 'react';
import './skill.css';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCode, faDatabase, faLaptopCode, faServer, faRobot, faCloud } from '@fortawesome/free-solid-svg-icons';

const skillCategories = [
  {
    key: 'languages',
    title: 'languages.',
    icon: faCode,
    skills: [
      { name: 'python.', rating: 5 },
      { name: 'javascript.', rating: 5 },
      { name: 'sql.', rating: 5 },
      { name: 'java.', rating: 4 },
      { name: 'typescript.', rating: 4 },
      { name: 'rust.', rating: 2 },
      { name: 'c++.', rating: 2 },
      { name: 'go.', rating: 1 },
    ],
  },
  {
    key: 'frontend',
    title: 'frontend.',
    icon: faLaptopCode,
    skills: [
      { name: 'react.', rating: 5 },
      { name: 'tailwind css.', rating: 5 },
      { name: 'next.js.', rating: 4 },
      { name: 'material-ui.', rating: 4 },
      { name: 'vite.', rating: 2 },
      { name: 'svelte.', rating: 1 },
      { name: 'astro.', rating: 1 },
    ],
  },
  {
    key: 'backendApis',
    title: 'backend & apis.',
    icon: faServer,
    skills: [
      { name: 'node.js.', rating: 5 },
      { name: 'restful apis.', rating: 5 },
      { name: 'openai apis.', rating: 5 },
      { name: 'fastapi.', rating: 4 },
      { name: 'flask.', rating: 4 },
      { name: 'django.', rating: 4 },
      { name: 'graphql.', rating: 4 },
      { name: 'jwt.', rating: 4 },
      { name: 'oauth.', rating: 4 },
      { name: 'bun.', rating: 1 },
      { name: 'trpc.', rating: 1 },
      { name: 'grpc.', rating: 1 },
    ],
  },
  {
    key: 'aiTooling',
    title: 'ai & developer tooling.',
    icon: faRobot,
    skills: [
      { name: 'cursor.', rating: 5 },
      { name: 'claude.', rating: 5 },
      { name: 'github copilot.', rating: 5 },
      { name: 'prompt engineering.', rating: 5 },
      { name: 'ai coding agents.', rating: 5 },
      { name: 'llm workflows.', rating: 4 },
      { name: 'mcp servers.', rating: 4 },
      { name: 'langgraph.', rating: 1 },
      { name: 'gemini api.', rating: 1 },
      { name: 'v0.', rating: 1 },
    ],
  },
  {
    key: 'cloudDevOps',
    title: 'cloud & devops.',
    icon: faCloud,
    skills: [
      { name: 'docker.', rating: 5 },
      { name: 'aws.', rating: 4 },
      { name: 'gcp.', rating: 4 },
      { name: 'kubernetes.', rating: 4 },
      { name: 'ci/cd (github actions).', rating: 4 },
      { name: 'openshift.', rating: 3 },
      { name: 'terraform.', rating: 2 },
      { name: 'vercel.', rating: 2 },
      { name: 'pulumi.', rating: 1 },
      { name: 'deno deploy.', rating: 1 },
    ],
  },
  {
    key: 'databasesTesting',
    title: 'databases & testing.',
    icon: faDatabase,
    skills: [
      { name: 'postgresql.', rating: 5 },
      { name: 'git.', rating: 5 },
      { name: 'mysql.', rating: 4 },
      { name: 'dynamodb.', rating: 4 },
      { name: 'bigquery.', rating: 4 },
      { name: 'jest.', rating: 4 },
      { name: 'cypress.', rating: 4 },
      { name: 'selenium.', rating: 4 },
      { name: 'playwright.', rating: 4 },
      { name: 'linux.', rating: 4 },
      { name: 'redis.', rating: 2 },
      { name: 'supabase.', rating: 1 },
      { name: 'neon.', rating: 1 },
    ],
  },
].map((category) => ({
  ...category,
  skills: [...category.skills].sort((a, b) => b.rating - a.rating),
}));

const Skill = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          } else {
            entry.target.classList.remove('animate-in');
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (skillsRef.current) {
      const animatedElements = skillsRef.current.querySelectorAll(
        '.skill-header-block, .skill-card-category'
      );
      animatedElements.forEach((element) => observer.observe(element));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="skill-wrapper" id="skills">
      <Container className="skill-section">
        <Row className="skill-detail" ref={skillsRef}>
          <Col lg={8} className="skill-header-block">
            <h2 className="skill-title">skills.</h2>
            <p className="skill-lead">
              full-stack engineering across product, cloud, and ai-native workflows.
            </p>
          </Col>

          <Col lg={4} className="skill-header-block skill-header-action">
            <a href="/nParabResume.pdf" download="resume.pdf" className="skill-resume-link">
              <Button variant="outline-light" className="skill-resume-btn">
                download resume.
                <FontAwesomeIcon icon={faArrowRight} className="skill-arrow-icon" />
              </Button>
            </a>
          </Col>

          {skillCategories.map((category, index) => (
            <Col key={category.key} md={6} lg={4} className="skill-category-col">
              <article
                className="skill-card-category"
                style={{ '--card-delay': `${index * 0.06}s` }}
              >
                <header className="skill-card-header">
                  <FontAwesomeIcon icon={category.icon} className="skill-card-icon" />
                  <h3>{category.title}</h3>
                </header>

                <ul className="skill-list">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="skill-row">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-rating" aria-label={`${skill.rating} out of 5`}>
                        {skill.rating}/5.
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Skill;
