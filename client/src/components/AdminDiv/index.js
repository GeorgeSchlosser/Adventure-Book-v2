import React, { Component } from 'react';
import AdminHeader from "../AdminHeader";
import AdminStatsTable from "../AdminStatsTable";
import AdminStoryGraph from "../AdminStoryGraph";
import AdminRefreshButton from "../AdminRefreshButton";
import AdminSeedButton from "../AdminSeedButton";
import AdminDropZone from "../AdminDropZone";
import AdminSubHeader from "../AdminSubHeader";
import API from "../../utils/API";
import "./style.css";

class AdminDiv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storySize: 0,
      registeredUsers: 0,
      globalWins: 0,
      storyCollectionSize: 0,
      userCollectionSize: 0
    };
  }

  refreshClickHandler() {
    // Store dbStat object in state
    API.getStats().then(res => {
      this.setState(prevState => ({
      storySize: res.data.storySize,
      registeredUsers: res.data.registeredUsers,
      globalWins: res.data.globalWins,
      storyCollectionSize: res.data.storyCollectionSize,
      userCollectionSize: res.data.userCollectionSize }));
    }).catch(err => console.log(err));
  }

	render() {
	  return (
      <div className="AdminDiv">
        
        {/* Ugly hack to counteract inline global styling applied at application level */}
        <style>{'body { background-color: white !important; }'}</style>

        <AdminHeader>Game Master Console</AdminHeader>
        <div className="pure-g">
          <div className="pure-u-1-3">
            <AdminSubHeader>Statistics</AdminSubHeader>
            <AdminStatsTable
              storySize={ this.state.storySize }
              registeredUsers={ this.state.registeredUsers }
              globalWins ={ this.state.globalWins }
              storyCollectionSize={ this.state.storyCollectionSize }
              userCollectionSize={ this.state.userCollectionSize } />
          </div>
          <div className="pure-u-1-3">
            <AdminSubHeader>Data Tools</AdminSubHeader>
            <AdminRefreshButton onClick={ this.refreshClickHandler() }/>
            <AdminSeedButton />
          </div>
          <div className="pure-u-1-3">
            <AdminSubHeader>Upload Data</AdminSubHeader>
            <AdminDropZone />
          </div>
        </div>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <AdminSubHeader>Game Model</AdminSubHeader>
            <AdminStoryGraph id="cy" />
          </div>
        </div>
        
        
      </div>
	  )};
}

export default AdminDiv;