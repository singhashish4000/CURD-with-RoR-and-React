var AllRecords = React.createClass({

handleDelete(id) {
  this.props.handleDelete(id);
},

onUpdate(record) {
    this.props.onUpdate(record);
},


   render() {
     var records = this.props.records.map((record) => {
       return (
         <div key={record.id}>
         <Record record={record}
                   handleDelete={this.handleDelete.bind(this, record.id)}
                   handleUpdate={this.onUpdate}/>
         </div>
       )
     });
     return(
    <div>
        {records}
    </div>
  )
}

});
