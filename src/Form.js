import React, { useContext } from 'react';
import {
  Avatar,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
  withStyles,
} from '@material-ui/core';
import styles from './styles/FormStyles';
import { LockOutlined } from '@material-ui/icons';
import { LanguageContext } from './contexts/LanguagesContext';

const words = {
  english: {
    signIn: 'Sign In',
    email: 'E-mail',
    password: 'Password',
    remember: 'Remember me',
  },
  portugues: {
    signIn: 'Assine ',
    email: 'Correio Eletrônico',
    password: 'Senha',
    remember: 'Lembre me',
  },
  spanish: {
    signIn: 'Registrarse',
    email: 'Correo Electrónico',
    password: 'Contraseña',
    remember: 'Recúardame',
  },
};
function Form(props) {
  const { language, changeLanguage } = useContext(LanguageContext);
  const { classes } = props;
  const { email, signIn, password, remember } = words[language];

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography variant="h5">{signIn}</Typography>
        <Select value={language} onChange={changeLanguage}>
          <MenuItem value="english">English</MenuItem>
          <MenuItem value="portugues">Português</MenuItem>
          <MenuItem value="spanish">Spanish</MenuItem>
        </Select>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlform="email">{email}</InputLabel>
            <Input id="email" name="email" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlform="password">{password}</InputLabel>
            <Input id="password" name="password" autoFocus />
          </FormControl>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label={remember}
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            color="primary"
            className={classes.submit}
          >
            {signIn}
          </Button>
        </form>
      </Paper>
    </main>
  );
}

export default withStyles(styles)(Form);
