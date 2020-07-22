import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './components/List';
import Pay from './components/Pay';
import Add from './components/Add';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      activeTab : 'add',
      items : []
    };
  }

  onClickTabAdd(){
    this.setState({
      activeTab: Add
    });
  }

  onClickTabList(){
    this.setState({
      activeTab:List
    });
  }

  onClickTabPay(){
    this.setState({
      activeTab:Pay
    });

  }

  render () {
    return(
      <div>
        <Add/>
        <List/>
        <Pay/>
      </div>

    );
  }
}
 export default App;


