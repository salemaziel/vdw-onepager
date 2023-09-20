import React from 'react'
import Layout from '../components/layout'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import { StaticImage } from 'gatsby-plugin-image'

class IndexPage extends React.PureComponent {
  state = {
    isArticleVisible: false,
    timeout: false,
    articleTimeout: false,
    article: '',
    loading: 'is-loading'
  };

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' });
    }, 100);
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  };

  handleOpenArticle = (article) => {
    this.setState((prevState) => ({
      isArticleVisible: !prevState.isArticleVisible,
      article
    }), () => {
      setTimeout(() => {
        this.setState((prevState) => ({
          timeout: !prevState.timeout
        }));
      }, 325);

      setTimeout(() => {
        this.setState((prevState) => ({
          articleTimeout: !prevState.articleTimeout
        }));
      }, 350);
    });
  };

  handleCloseArticle = () => {
    this.setState((prevState) => ({
      articleTimeout: !prevState.articleTimeout
    }), () => {
      setTimeout(() => {
        this.setState((prevState) => ({
          timeout: !prevState.timeout
        }));
      }, 325);

      setTimeout(() => {
        this.setState((prevState) => ({
          isArticleVisible: !prevState.isArticleVisible,
          article: ''
        }));
      }, 350);
    });
  };

  handleClickOutside = (event) => {
    if (this.wrapperRef && event.target.id === 'wrapper') {
      if (this.state.isArticleVisible) {
        this.handleCloseArticle();
      }
    }
  };

  render() {
    return (
      <Layout location={this.props.location}>
        <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
          <div id="wrapper">
            <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
            <Main
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              onCloseArticle={this.handleCloseArticle}
              setWrapperRef={this.setWrapperRef}
            />
            <Footer timeout={this.state.timeout} />
          </div>
          <div id="bg">
            <StaticImage id="bg" formats={['auto', 'webp']} src="../../static/assets/city-bg.jpg" alt="City background" />
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;

