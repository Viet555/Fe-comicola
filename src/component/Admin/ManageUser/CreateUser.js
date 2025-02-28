const CreateUser = () => {
    return (
        <>
            <div className="Create-container container my-5">
                <div className="create-main row">
                    <span className="header-title" style={{ fontSize: '30px' }}> Create New User</span>
                    <div className="form-group col-3  my-2">
                        <label>FirstName</label>
                        <input className="form-control " />
                    </div>
                    <div className="form-group col-3 my-2">
                        <label>LastName</label>
                        <input className="form-control " />
                    </div>
                    <div className="form-group col-3 my-2">
                        <label>Email</label>
                        <input className="form-control " />
                    </div>
                    <div className="form-group col-3 my-2">
                        <label>Password</label>
                        <input className="form-control " />
                    </div>
                    <div className="form-group col-3 my-2">
                        <label>gender</label>
                        <input className="form-control " />
                    </div>
                    <div className="form-group col-3 my-2">
                        <label>Address</label>
                        <input className="form-control " />
                    </div>
                    <div className="form-group col-3 my-2">
                        <label>Role</label>
                        <input className="form-control " />
                    </div>
                    <div className="form-group col-3 my-2">
                        <label>Image</label>
                        <input className="form-control " />
                    </div>
                    <div className="btn btn-primary my-3" style={{ width: 'fit-content', margin: '40%', padding: '10px 80px' }} > Create</div>
                </div>
            </div>

        </>
    )
}
export default CreateUser