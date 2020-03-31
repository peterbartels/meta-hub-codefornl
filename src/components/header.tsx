import React, { useCallback, FunctionComponent } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useTypewriter from 'react-use-typewriter'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";

import {
  Centered,
  NameContainer,
  Name,
  MenuContainer,
  HeaderContainer,
  Header,
  MenuItem,
  Icons
} from './styles'

const HeaderComponent: FunctionComponent = () => {

  const typerWords = ["Hacking Corona", "An initiative by Dtuch Hack Health"]
  const currentTyperWord = useTypewriter({
    words: typerWords,
    eraseSpeed: 50,
    typeSpeed: 120,
  })

  const dispatch = useDispatch()

  const dispatchStartAddProfile = useCallback(
    () => (dispatch({ type: "EDIT_PROFILE", payload: true })),
    [dispatch]
  );

  return (<>
    <NameContainer>
      <Name>
        <FontAwesomeIcon icon="heart" size="2x" color="#0289C8" /><span>Health Hacker Hub</span>
      </Name>

      <MenuContainer>
        <Link to="/home">
          <MenuItem onClick={dispatchStartAddProfile}>
            <FontAwesomeIcon icon="home" size="2x" color="#0289C8" />
            <span>Home</span>
          </MenuItem>
        </Link>
        <Link to="/my-profile">
          <MenuItem onClick={dispatchStartAddProfile}>
            <FontAwesomeIcon icon="user" size="2x" color="#0289C8" />
            <span>My Profile</span>
          </MenuItem>
        </Link>
        <Link to="/profiles">
          <MenuItem onClick={dispatchStartAddProfile}>
            <FontAwesomeIcon icon="user-cog" size="2x" color="#0289C8" />
            <span>Hackers</span>
          </MenuItem>
        </Link>
        <Link to="/organisations">
          <MenuItem>
            <FontAwesomeIcon icon="building" size="2x" color="#0289C8" />
            <span>Organisations</span>
          </MenuItem>
        </Link>
      </MenuContainer>
    </NameContainer>
  </>)
}

export default HeaderComponent
