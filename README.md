# OffGrid Components

## OffGrid Components for ReactJS
* Conversational User Interface with Cards
* Sidebar
* App Headerbar

## Demo
``` bash
npm install
npm run storybook
```

## Usage
``` bash
npm install offgrid-components --save
```

``` js
import { OGNAppBar, OGNSideBar, OGNConversationSurface } from 'offgrid-components'

class App extends Component {
  
  render() {
    <Provider store={store}>
        <div className="App">
            <OGNAppBar />
            <OGNSideBar >
            <ul>
                 <li className="ogn-sidebar-item App-sidebar-item"><a href="#">Hello</a></li>
                  <li className="ogn-sidebar-item App-sidebar-item"><a href="#">World</a></li>
             </ul>
            </OGNSideBar>
            <OGNConversationSurface id="chat" />
            </div>
    </Provider>
  }
```

## License

Apache 2.0