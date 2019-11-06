import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default class App extends Component {
  state = {
    components: [
      {code: 1, name:"Thông tin DA", bgcolor: "yellow"},
      {code: 2, name:"Nhà mẫu", bgcolor:"pink"},
      {code: 3, name:"Vị trí dự án", bgcolor:"skyblue"},
      {code: 4, name:"Tiện ích", bgcolor:"red"}
    ],
    selectedComponents: [
      //{code: 4, name:"Tiện ích", bgcolor:"red"},
      //{code: 2, name:"Nhà mẫu", bgcolor:"pink"},
    ]
  }

  onDragStart = (ev, id) => {
    console.log('dragstart:',id);
    ev.dataTransfer.setData("id", id);
  }

  onDragOver = (ev) => {    
    ev.preventDefault();
  }

  onDrop = (ev) => {
     let code = ev.dataTransfer.getData("id");
  console.log('onDrop', code, ev.dataTransfer)  

    const component = this.state.components.find(x => x.code == code);
console.log('component', code, component)    
    if (component) {      
      const selectedComponents = this.state.selectedComponents;
      selectedComponents.push(component);
      this.setState(selectedComponents)    
    }
  }

  renderComponent(data) {
    return (
      <div key={data.name} 
        onDragStart = {(e) => this.onDragStart(e, data.code)}
        draggable
        className="draggable"
        style = {{backgroundColor: data.bgcolor}}
        data-action="false"
      >
        {data.name}
      </div>
    );
  }

  renderListComponents = () => {
    return (
      this.state.components.map ((t, i) => (
        this.renderComponent(t)
      ))
    )
  }

  renderSelectedComponents = () => {
    return (
      this.state.selectedComponents.map((s, i) => (
        <section className="editor-section">
          {this.renderComponent(s)}
        </section>
      ))
    )
  }

  exportHtml = () => {
    const html = ReactDOMServer.renderToString();
    console.log('exportHtml', html)
  }

  render() {
    //const components = this.renderListComponents();
//console.log('components', components)   
    
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div onClick={this.exportHtml}>
            export
          </div>
        </header>
        <div id="left-panel">
          {/*<ul className="list-unstyled text-left">
            <li><a href="#">Header</a></li>
            <li><a href="#">Thông tin dự án</a></li>
            <li><a href="#">Vị trí dự án</a></li>
            <li><a href="#">Tiện ích</a></li>
            <li><a href="#">Mặt bằng</a></li>
            <li><a href="#">Nhà mẫu</a></li>
          </ul>*/}
          
          {
            this.renderListComponents()
          }
        </div>
        <div id="editor" 
          onDragOver={(e)=>this.onDragOver(e)}
          onDrop={(e)=>{this.onDrop(e)}}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="editor-wrapper">
                  <section className="editor-section">
                    <h1>Header</h1>
                  </section>
                  <section className="editor-section">
                    <img className="img-fluid" src="/banner.jpg"/>
                  </section>
                  <section className="editor-section">
                    <div className="container">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          Left Content
                        </div>
                        <div className="col-12 col-md-6">
                          <img className="img-fluid" src="/banner.jpg"/>
                        </div>
                      </div>
                    </div>
                  </section>
                  {this.renderSelectedComponents()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };
}

