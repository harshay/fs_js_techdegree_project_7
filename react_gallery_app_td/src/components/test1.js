<Route path = '/cats' render={ () =>  (
            <div className="container">
              <SearchForm onSearch={this.performSearch('cats')} /> 
              <Nav />
              <PhotoContainer data={this.state.photos}/>
            </div> 
          )}/>
          <Route path = '/dogs' render={ () =>  (
            <div className="container">
              <SearchForm onSearch={this.performSearch('dogs')} /> 
              <Nav />
              <PhotoContainer data={this.state.photos}/>              
            </div> 
          )}/>
          <Route path = '/cars' render={ () =>  (
            <div className="container">
              <SearchForm onSearch={this.performSearch('cars')} /> 
              <Nav />
              <PhotoContainer data={this.state.photos}/>              
            </div> 
          )}/>
          <Route render={ () =>  (
            <div className="container">
              <SearchForm onSearch={this.performSearch} /> 
              <Nav />
              <NotFound />              
            </div> 
          )}/>