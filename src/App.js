import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './components/List';
import Pay from './components/Pay';
import Add from './components/Add';
import Button from './components/core/Button';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab : 'add',
      items : [],
    };
    this.onClickTabAdd=this.onClickTabAdd.bind(this);
    this.onClickTabList=this.onClickTabList.bind(this);
    this.onClickTabPay=this.onClickTabPay.bind(this);
  }

  onClickTabAdd(){
    this.setState({
      activeTab: 'add',
    });
  }

  onClickTabList(){
    this.setState({
      activeTab:'list'
    });
  }

  onClickTabPay(){
    this.setState({
      activeTab:'pay'
    });

  }

  renderTabAdd(){
    if(this.state.activeTab === 'add'){
      return(
        <Add
          onadd={this.onAdd}
        />
      );
    }
    return null;
  }

  renderTabList(){
    if(this.state.activeTab === 'list'){
      return(
        <List/>
      );
    }
    return null;
  }

  renderTabPay(){
    if(this.state.activeTab === 'pay'){
      return(
        <Pay/>
      );
    }
    return null;
  }
  
  onAdd(price, input){
    
  }

  render () {
    return(
      <div className='container-fluid'>
        <div className='row'>
          <Button children='Add'
            onClick={this.onClickTabAdd}
          />
          <Button children='List'
            onClick={this.onClickTabList}/>
          <Button children='Pay'
            onClick={this.onClickTabPay}
          />
        </div>
        <div className='row'>
          {this.renderTabAdd()}
          {this.renderTabList()}
          {this.renderTabPay()}
        </div>
      </div>

    );
  }
}
 export default App;

