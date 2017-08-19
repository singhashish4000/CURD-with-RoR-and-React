var NewRecord = React.createClass({

  handleClick(e) {
  e.preventDefault();
   var name = this.refs.name.value;
   var designation = this.refs.designation.value;
   var salary = this.refs.salary.value;
   $.ajax({
     url:'/api/v1/records',
     type:'POST',
     data:{ record: {name:name, designation:designation, salary:salary} },
     success: (record) => {
       //alert();

        $('#myModal').modal('hide');
      this.props.handleSubmit(record);


     }
   });


   //alert('Name'+name+'Desig'+designation+'sal'+salary);
   //console.log('Name'+name+'Desig'+designation+'sal'+salary);
  },

  render() {
    return (
      <div>
      <button type="button" className="btn btn-info btn-md" id="AR" data-toggle="modal" data-target="#myModal">
             <i style={{marginRight:'8px'}} className="fa fa-plus" aria-hidden="true"></i>
               Add New Record
              </button>
                <div id="myModal" className="modal fade" role="dialog">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title text-success">Add New Record</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                      </div>
                      <div className="modal-body">
                       <form  autoComplete="off">
                        <input  className="form-control" ref='name' placeholder='Enter the name '  /><br/>
                        <input  className="form-control" ref='designation' placeholder='Enter the designation' /><br/>
                        <input  className="form-control" ref='salary' placeholder='Enter the salary' /><br/>
                        <button style={{width:'60px'}} className="btn btn-success"  onClick={this.handleClick}>Add</button>
                        </form>
                      </div>

                    </div>

                  </div>
                </div>

      </div>
    )
  }
});
