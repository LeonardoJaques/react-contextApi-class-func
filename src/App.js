import { ThemeProvider } from './contexts/ThemeContext';
import React, { Component } from 'react';
import Form from './Form';
import Navbar from './Navbar';
import PageContent from './PageContent';
import { LanguageProvider } from './contexts/LanguagesContext';

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <LanguageProvider>
          <PageContent>
            <Navbar />
            <Form />
          </PageContent>
        </LanguageProvider>
      </ThemeProvider>
    );
  }
}

export default App;
