import React, { useContext } from 'react';
import {
  AppBar,
  IconButton,
  InputBase,
  Switch,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core';
import { ThemeContext } from './contexts/ThemeContext';
import SearchIcon from '@material-ui/icons/Search';
import styles from './styles/NavbarStyles';
import { LanguageContext } from './contexts/LanguagesContext';

const content = {
  english: {
    search: 'Search',
    flag: '🇬🇧 ',
    title: 'App Title',
  },
  portugues: {
    search: 'Procurar',
    flag: '🇧🇷 ',
    title: 'App Titulo',
  },
  spanish: {
    search: 'Buscar',
    flag: '🇪🇸  ',
    title: 'App Título',
  },
};

function Navbar(props) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const { classes } = props;
  const { search, flag, title } = content[language];
  return (
    <LanguageContext.Consumer>
      {(context) => (
        <div className={classes.searchIcon.root}>
          <AppBar position="static" color={isDarkMode ? 'default' : 'primary'}>
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit">
                <span>{flag}</span>
              </IconButton>
              <Typography
                className={classes.title}
                variant="h6"
                color="inherit"
              >
                {title}
              </Typography>
              <Switch onChange={toggleTheme} />
              <div className={classes.grow} />
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder={`${search}...`}
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inpuInput,
                  }}
                />
              </div>
            </Toolbar>
          </AppBar>
        </div>
      )}
    </LanguageContext.Consumer>
  );
}

export default withStyles(styles)(Navbar);
