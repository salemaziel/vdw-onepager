import React from 'react'
import PropTypes from 'prop-types'
import Logo from './logo'

const NavItems = [
  {
    NavTitle: 'Services',
    NavItem: 'services',
  },
  {
    NavTitle: 'Philosophy',
    NavItem: 'philosophy',
  },
  {
    NavTitle: 'Consultations',
    NavItem: 'consultations',
  },
//  {
//    NavTitle: '1312',
//    NavItem: '1312',
//  },
//  {
//    NavTitle: 'Art',
//    NavItem: 'art',
//  },
  {
    NavTitle: 'Contact',
    NavItem: 'contact',
  },
  {
    NavTitle: 'Blog',
    NavItem: 'https://salemaziel.oldschoolyouth.com',
    isExternal: true,
  },
]

const NavLinks = ({ NavTitle, NavItem, onOpenArticle, isExternal }) => (
    <li>
      <a
        href={isExternal ? NavItem : 'javascript:;'}
        onClick={
          !isExternal
            ? () => {
                onOpenArticle(NavItem);
              }
            : null
        }
        target={isExternal === "true" ? '_blank' : '_self'}
        rel={isExternal ? 'noopener noreferrer' : 'referrer'}
      >
        {NavTitle}
      </a>
    </li>
  );

const Header = (props) => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <Logo className="icon" />
    </div>
    <div className="content">
      <div className="inner">
        <h1 className='px-4 text-2xl tracking-widest lg:text-3xl' style={{ textShadow: '2px 2px 4px grey' }}>Web Solutions for Small Businesses and Entrepreneurs</h1>
        <h2 className='px-16 pt-6 text-xl tracking-widest lg:text-2xl' style={{ textShadow: '2px 2px 4px gray' }}>
        Let's build your Digital Real Estate.{' '}
        </h2>
      </div>
    </div>
    <nav>
      <ul>
        {NavItems.map((item) => (
          <NavLinks
            key={item.index}
            NavTitle={item.NavTitle}
            NavItem={item.NavItem}
            onOpenArticle={props.onOpenArticle}
            isExternal={item.isExternal}
          />
        ))}
        {/*<li><a href="javascript:void(0);" onClick={() => {props.onOpenArticle('services')}}>Services</a></li>
                <li><a href="javascript:void(0);" onClick={() => {props.onOpenArticle('philosophy')}}>Philosophy</a></li>
                <li><a href="javascript:void(0);" onClick={() => {props.onOpenArticle('consultations')}}>Consultations</a></li>
                {/*<li><a href="https://salemaziel.com/blog" rel="noopener noreferrer" target="_blank" area-label="Salem Aziel Blog" /* onClick={() => {props.onOpenArticle('contact')}} * / >Blog</a></li>* /}
                <li><a href="javascript:void(0);" onClick={() => {props.onOpenArticle('1312')}}>1312</a></li>
                <li><a href="javascript:void(0);" onClick={() => {props.onOpenArticle('art')}}>Art</a></li>
            {/**     <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li> */}
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
  NavItems: PropTypes.array,
  NavTitle: PropTypes.string,
  NavItem: PropTypes.string,
}

export default Header
