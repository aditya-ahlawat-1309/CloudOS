import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Github, Hackerrank, Leetcode, Linkedin } from '../components/AllSvgs'
import { DarkTheme } from '../components/Themes'

const Icons = styled.div`
display:flex;
flex-direction: column;
align-items: center;
position:fixed;
bottom: 0;
left: 2rem;
z-index:3;

&>*:not(:last-child){
    margin: 0.5rem 0;
}

`

const Line = styled.span`
width: 2px;
height:8rem;
 background-color: black;
{/*{${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body}; */}
`

const SocialIcons = (props) => {
  return (
    <Icons>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://github.com/aditya-ahlawat-1309" }}
        >
          <Github width={45} height={45} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://leetcode.com/aditya_ahlawat_1309/" }}
        >
          <Leetcode width={35} height={35} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://www.linkedin.com/in/ad-aditya/" }}
        >
          <Linkedin width={35} height={35} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://www.hackerrank.com/adityaroyal10" }}
        >
          <Hackerrank width={35} height={35} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
        </NavLink>
      </div>
      <Line color = {props.theme == "dark" ? "light" : "dark"}/>
    </Icons>
  );
}

export default SocialIcons