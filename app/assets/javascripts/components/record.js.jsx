var Record = React.createClass({

  getInitialState() {
       return {editable: false}
   },
   handleEdit() {
       if(this.state.editable) {
           var id = this.props.record.id;
           var name = this.refs.name.value;
           var designation = this.refs.designation.value;
           var salary = this.refs.salary.value;
           var record = {id:id, name:name, designation:designation, salary:salary};
           this.props.handleUpdate(record);
           //location.reload();

       }
       this.setState({ editable: !this.state.editable })
   },

  render() {
    var name = this.state.editable ? <input className="form-control" type='text' ref='name' defaultValue={this.props.record.name} /> : <span>{this.props.record.name}</span>;
    var designation = this.state.editable ? <input  className="form-control" type='text' ref='designation' defaultValue={this.props.record.designation}  />: <p>{this.props.record.designation}</p>;
    var salary = this.state.editable ? <input className="form-control" type='text' ref='salary' defaultValue={this.props.record.salary} /> : <span>{this.props.record.salary}</span>;
    return (
      <div className="">
   <table className="table table-bordered">

   <tbody>
   <tr><td> {name} </td>
   <td> {designation} </td>
  <td> {salary} </td>

    <td>
    <button  className="btn btn-sm btn-primary" id="upd" onClick={this.handleEdit}>
    <i style={{marginRight:'5px'}} className="fa fa-pencil-square-o" aria-hidden="true"></i>{this.state.editable ? 'Submit' : 'Edit' } </button>
    <button  className="btn btn-sm btn-danger" id="del" onClick={this.props.handleDelete} >
    <i style={{marginRight:'5px'}} className="fa fa-trash-o" aria-hidden="true"></i>
    Delete</button>
    </td>
    </tr>
    </tbody>
   </table>
</div>
    )
  }

});
