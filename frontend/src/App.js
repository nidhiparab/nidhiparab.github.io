import './App.css';
import Header from './components/header/header.jsx';
import Navi from './components/nav/nav.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

// import About from './components/about/about.jsx';
import { Helmet } from 'react-helmet';
import Skill from './components/skills/skill.jsx';
import Experience from './components/experience/Experience.jsx';
import Positions from './components/positions/Positions.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx'
import Banner from './components/banner/Banner.jsx'
import Education from './components/education/Education.jsx'
import Certification from './components/certification/Certification.jsx'
import MultipleItems from './components/myprojects/myprojects.jsx';
import Top from './components/top/top.jsx';
import Footer from './components/footer/footer.jsx';
import CustomCursor from './components/CustomCursor/CustomCursor.jsx';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Nidhi Parab</title>
      <meta name="google-site-verification" content="google0c1e061200997091.html" />
      </Helmet>

      <CustomCursor/>
      <Navi/>
      {/* <Sidebar/> */}
      {/* <Top/> */}
      {/* <Port/> */}
      <Header/>
      <Banner/>
      <Education/>
      <Skill/>
      <Experience/>
      <MultipleItems/>
      <Positions/>
      <Certification/>
      
      <Footer/>
  </div>
  );
}

export default App;
