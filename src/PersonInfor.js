const ShowStudentDetails = () => {
  return (
    <>
      {showDetails && (
        <div className="card">
          <div className="card-header bg-info text-white">
            Student Information
          </div>
          <div className="card-body">
            <h5 className="card-title">
              {student.country} {student.city}
            </h5>
            <p className="card-text">Id: {student.id} </p>
            <p className="card-text">
              Name: {student.firstName} {student.lastName}
            </p>
            <p className="card-text">BirthDate: {student.birthDate} </p>
          </div>
          <div className="card-footer bg-dark">
            <button
              type="button"
              className="btn btn-outline-info"
              onClick={() => {
                setStudent({});
                setShowDetails(false);
              }}
            >
              Hide
            </button>
          </div>
        </div>
      )}
    </>
  );
};

return (
  <>
    <h1> List </h1>
    <table className="table table-striped">
      <TableHeader />
      <TableRow list={studentList} />
    </table>

    <div className="w-50 mx-auto">
      <ShowStudentDetails />
    </div>
  </>
);
