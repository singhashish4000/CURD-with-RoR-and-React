var Body = React.createClass({

  getInitialState(){
    return { records: []}
  },

  componentDidMount(){
    $.getJSON('/api/v1/records.json',(response) => {this.setState({records: response}) });
    //console.log('Component Mounted');
  },

  handleSubmit(record) {
    var newState = this.state.records.concat(record);
    this.setState({ records: newState})
 },

 handleDelete(id) {
   var con = confirm('Are you sure to DELETE?');
   if(con)
   {
   $.ajax({
      url:`/api/v1/records/${id}`,
      type:'DELETE',
      success:()=> {
        this.removeRecord(id);
      }
   });
 }
 },

 removeRecord(id) {
   var newRecords = this.state.records.filter((record)=>{
     return record.id !=id;
   });
   this.setState({ records: newRecords });
 },

 handleUpdate(record) {
   $.ajax({
     url: `/api/v1/records/${record.id}`,
     type: 'PUT',
     data: { record: record },
     success: () => {
      // alert('ddd');return;
       this.updateRecords(record);
      }
    }
)},

     updateRecords(record) {
       var records = this.state.records.filter((i) => {
         return i.id != record.id });
         records.un shift(record);
         this.setState({records: records });
},

  render(){
    return(
      <div className="container">
        <NewRecord handleSubmit={this.handleSubmit} />
        <Table />
        <AllRecords  records={this.state.records} handleDelete={this.handleDelete}  onUpdate={this.handleUpdate}/>
      </div>
    )
  }
});
